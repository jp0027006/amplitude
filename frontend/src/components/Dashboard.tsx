import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { customRichTextComponents } from "./CustomRichTextComponents";

export default function Dashboard({ pages }: any) {
  return (
    <div className="p-6">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pages.map((page: any, index: number) => (
          <li
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Link href={`/page/${page.slug.current}`} target="_self">
              <div className="flex flex-col h-full p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {page.title}
                </h3>
                <div>
                  <PortableText
                    value={page.content.slice(0, 1)}
                    components={customRichTextComponents}
                  />
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
