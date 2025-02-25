import Header from "@/components/Header";
import { client } from "@/sanity/client";
import { HEADER_QUERY } from "@/sanity/lib/query";
import { HeaderType } from "@/types/header/header";

export default async function Page() {
  const headeritems: HeaderType = await client.fetch(HEADER_QUERY);
  return <Header headeritems={headeritems} />;
}
