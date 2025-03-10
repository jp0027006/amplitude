import { RichTextExternalLinkProps } from "@/types/RichTextExternalLinkProps";
import Link from "next/link";

export const RichTextExternalLink = async ({
  value,
  children,
}: RichTextExternalLinkProps) => {
  if (!value?.href) {
    return null;
  }
  const { href } = value;
  return (
    <Link
      href={href?.link}
      target="_blank"
      className="text-blue-600 underline"
    >
      {children}
    </Link>
  );
};
