import { customRichTextComponents } from "@/components/CustomRichTextComponents";
import LinkComponent from "@/components/LinkComponent";
import { fetchPageBySlug } from "@/sanity/utils/helperFunctions";
import { PortableText } from "@portabletext/react";

const Page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const pagedetail = await fetchPageBySlug(slug);

  return (
    <div className="p-6">
      <div>
        {pagedetail?.pagelink && pagedetail.pagelink.length > 0 && (
          <div className="mb-5 flex gap-4">
            {pagedetail.pagelink.map((link, index) => (
              <LinkComponent key={index} link={link} index={index} />
            ))}
          </div>
        )}

        <div>
          {pagedetail?.content && (
            <PortableText
              value={pagedetail.content}
              components={customRichTextComponents}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
