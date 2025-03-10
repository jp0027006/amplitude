import { client } from "@/sanity/client";
import { PageType } from "@/types/pages";

export async function fetchPageByReference(
  referenceId: string
): Promise<PageType | null> {
  const query = `*[_type == "page" && _id == $referenceId][0]`;
  const page = await client.fetch(query, { referenceId });
  return page || null;
}

export async function fetchPageBySlug(slug: string): Promise<PageType | null> {
  const query = `*[_type == "page" && slug.current == $slug][0]`;
  const page = await client.fetch(query, { slug });
  return page || null;
}

export const generateConsistentId = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
};
