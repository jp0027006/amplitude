import Dashboard from "@/components/Dashboard";
import Header from "@/components/Header";
import { LAYOUT_QUERY } from "@/lib/query";
import { client } from "@/sanity/client";
import { HeaderType } from "@/types/header/header";
import { PageType } from "@/types/pages";

export default async function Page() {
  const layout = await client.fetch(LAYOUT_QUERY);
  const { header, page } = layout;
  const headeritems: HeaderType = header;
  const pages: PageType = page;

  return (
    <>
      <Header headeritems={headeritems} />
      <Dashboard pages={pages} />
    </>
  );
}
