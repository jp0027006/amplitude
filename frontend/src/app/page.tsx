import Dashboard from "@/components/Dashboard";
import Header from "@/components/Header";
import { client } from "@/sanity/client";
import { HEADER_QUERY, PAGE_QUERY } from "@/sanity/lib/query";
import { HeaderType } from "@/types/header/header";
import { PageType } from "@/types/pages";

export default async function Page() {
  const headeritems: HeaderType = await client.fetch(HEADER_QUERY);
  const pages: PageType = await client.fetch(PAGE_QUERY);
  return (
    <>
      <Header headeritems={headeritems} />
      <Dashboard pages={pages} />
    </>
  );
}
