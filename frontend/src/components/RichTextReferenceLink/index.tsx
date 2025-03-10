import { fetchPageByReference } from "@/sanity/utils/helperFunctions";
import { RichTextReferenceLinkProps } from "@/types/RichTextReferenceLinkProps";
import Link from "next/link";

export const RichTextReferenceLink = async ({
  value,
  children,
}: RichTextReferenceLinkProps) => {
  if (!value?.href) {
    return null;
  }
  const { href } = value;
  const referencedPage = await fetchPageByReference(href?.page?._ref);
  const referenceSlug = referencedPage?.slug.current;

  return (
    <Link
      href={`/page/${referenceSlug}`}
      target="_self"
      className="text-blue-600 underline"
    >
      {children}
    </Link>
  );
};
