import { client } from "@/sanity/client";
import { PageType } from "@/types/pages";
import Link from "next/link";
async function fetchPageByReference(referenceId: string): Promise<PageType | null> {
  const query = `*[_type == "page" && _id == $referenceId][0]`;
  const page = await client.fetch(query, { referenceId });
  return page || null;
}
// Helper function to render content with marks (bold, italics, etc.) and block styles (h1, h2, etc.)
export const renderContentWithMarks = (content: any[], h2Counter: number) => {
  return content.map((block: any, index: number) => {
    if (block._type === "block") {
      // Determine the tag based on the block style (h1, h2, p, etc.)
      const BlockTag =
        block.style === "h1" ? "h1" : block.style === "h2" ? "h2" : "p";

      // Add custom Tailwind class for h1
      const blockClass =
        block.style === "h1"
          ? "text-3xl font-bold text-gray-900 mb-6"
          : block.style === "h2"
          ? "text-2xl font-bold text-gray-900 mb-6"
          : "text-gray-800 mb-4 text-md";

      // Check if h2 has a link in the markDefs for its ID
      let blockId: string | undefined = undefined;
      if (block.style === "h2" && block.markDefs?.length > 0) {
        // Look for the first mark with an href (assuming there can be multiple marks)
        const linkMark = block.markDefs.find((mark: any) => mark.href);
        if (linkMark?.href) {
          blockId = linkMark.href.link;
        }
      }

      return (
        <BlockTag
          key={index}
          className={blockClass}
          id={blockId || `paragraph-${h2Counter}`}
        >
          {block.children.map(async (child: any, childIndex: number) => {
            let text = child.text;

            // Apply marks to the text (bold, italic, etc.)
            if (child.marks?.includes("strong")) {
              text = <strong key={childIndex}>{text}</strong>;
            } else if (child.marks?.includes("em")) {
              text = <em key={childIndex}>{text}</em>;
            }

            // Handle links in markDefs
            if (child.marks?.length > 0) {
              // Find the corresponding markDef for the mark
              const markDef = block.markDefs?.find((def: any) =>
                child.marks.includes(def._key)
              );

              if (markDef?._type === "Link") {
                // Handle internal reference links
                if (markDef.href?.type === "reference") {
                  // Fetch the referenced page using _ref
                  const referencedPage = await fetchPageByReference(markDef.href.page._ref);
                  const referenceSlug = referencedPage?.slug.current;

                  if (referencedPage) {
                    text = (
                      <Link
                        key={childIndex}
                        href={`/page/${referenceSlug}`}
                        className="text-blue-600 hover:underline"
                      >
                        {text}
                      </Link>
                    );
                  } else {
                    text = <span key={childIndex} className="text-red-600">{text}</span>;
                  }
                }
                // Handle external links
                else if (markDef.href?.type === "externalReference") {
                  text = (
                    <a
                      key={childIndex}
                      href={markDef.href.link}
                      target={markDef.href.openTheLinkinANewWindow ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {text}
                    </a>
                  );
                }
                else if (markDef.href?.type === "sectionReference") {
                  text = (
                    <div
                      key={childIndex}
                      rel="noopener noreferrer"
                      className="text-gray-900"
                    >
                      {text}
                    </div>
                  );
                }
              }
            }

            return text;
          })}
        </BlockTag>
      );
    }

    return null;
  });
};

export default function Dashboard({ pages }: any) {
  return (
    <div className="p-6">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pages.map((page: any, index: number) => (
          <li
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Link href={`/page/${page.slug.current}`} target="blank">
              <div className="flex flex-col h-full p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {page.title}
                </h3>
                {/* Render content with the first 2 blocks, starting with h2Counter 1 */}
                <div>
                  {renderContentWithMarks(page.content.slice(0, 1) || [], 1)}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
