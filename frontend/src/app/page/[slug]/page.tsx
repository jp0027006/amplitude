import { renderContentWithMarks } from "@/components/Dashboard";
import { client } from "@/sanity/client";
import { PageType } from "@/types/pages";
import { notFound } from "next/navigation";

// Function to fetch page by slug
async function fetchPageBySlug(slug: string): Promise<PageType | null> {
  const query = `*[_type == "page" && slug.current == $slug][0]`;
  const page = await client.fetch(query, { slug });
  return page || null;
}

// Function to fetch page by reference ID (_ref)
async function fetchPageByReference(referenceId: string): Promise<PageType | null> {
  const query = `*[_type == "page" && _id == $referenceId][0]`;
  const page = await client.fetch(query, { referenceId });
  return page || null;
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  // Fetch the current page details
  const pagedetail = await fetchPageBySlug(slug);

  if (!pagedetail) {
    notFound();
  }

  return (
    <div className="p-6">
      <div>
        {/* Render different link types */}
        {pagedetail.pagelink && pagedetail.pagelink.length > 0 && (
          <div className="mb-5 flex gap-4">
            {pagedetail.pagelink.map(async (link, index) => {
              const target = link.link.openTheLinkinANewWindow === true ? "_blank" : "_self";

              switch (link.link.type) {
                case "sectionReference":
                  return (
                    <a
                      key={index}
                      href={`#${link.link.anchor}`}
                      className="bg-blue-600 hover:underline p-4 text-white rounded-full no-underline"
                    >
                      Go to section: {link.label}
                    </a>
                  );
                case "reference":
                  // Fetch the referenced page using _ref
                  const referencedPage = await fetchPageByReference(link.link.page?._ref);
                  const referenceSlug = referencedPage?.slug.current;

                  if (referencedPage) {
                    return (
                      <a
                        key={index}
                        href={`/page/${referenceSlug}`} // Use the slug of the referenced page
                        className="bg-green-600 hover:underline p-4 text-white rounded-full no-underline"
                      >
                        {link.label}
                      </a>
                    );
                  } else {
                    return (
                      <span key={index} className="text-red-600">Referenced page not found</span>
                    );
                  }

                case "externalReference":
                  return (
                    <a
                      key={index}
                      href={link.link.link}
                      target={target}
                      rel="noopener noreferrer"
                      className="bg-red-600 hover:underline p-4 text-white rounded-full no-underline"
                    >
                      {link.label}
                    </a>
                  );
                default:
                  return null;
              }
            })}
          </div>
        )}

        {/* Render Content */}
        <div id="content" className="mt-5">
          {pagedetail.content &&
            pagedetail.content.map((block, index) => {
              return (
                <div
                  key={index}
                  id={block._key}
                  className={`${
                    block.style === "h2" ? "text-xl font-bold" : "text-base"
                  } mb-4`}
                >
                  {/* Render block content with marks */}
                  {renderContentWithMarks([block], 1)}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Page;
