import { generateConsistentId } from "@/sanity/utils/helperFunctions";
import { PortableTextReactComponents } from "@portabletext/react";
import React from "react";
import { RichTextExternalLink } from "../RichTextExternalLink";
import { RichTextReferenceLink } from "../RichTextReferenceLink";

export const customRichTextComponents: Partial<PortableTextReactComponents> = {
  block: (() => {
    return {
      h1: ({ children }) => {
        return <h1 className="text-3xl font-bold my-4">{children}</h1>;
      },
      h2: ({ children }) => {
        const id = generateConsistentId(children?.toString() || "");
        return (
          <h2 id={id} className="text-2xl font-bold my-4">
            {children}
          </h2>
        );
      },
      h3: ({ children }) => {
        const id = generateConsistentId(children?.toString() || "");
        return (
          <h3 id={id} className="text-xl font-bold my-4">
            {children}
          </h3>
        );
      },
      h4: ({ children }) => {
        const id = generateConsistentId(children?.toString() || "");
        return (
          <h4 id={id} className="text-lg font-bold my-4">
            {children}
          </h4>
        );
      },
      normal: ({ children }) => <p className="text-base my-2">{children}</p>,
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-gray-400 pl-4 italic my-4 text-gray-600">
          {children}
        </blockquote>
      ),
    };
  })(),
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    Link: async ({
      children,
      value,
    }: {
      children: React.ReactNode;
      value?: { href: any };
    }) => {
      const { href } = value || {};

      switch (href?.type) {
        case "externalReference":
          return <RichTextExternalLink value={value} children={children} />;
        case "reference":
          return <RichTextReferenceLink value={value} children={children} />;
        default:
          return null;
      }
    },
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc ml-5">{children}</ul>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-1">{children}</li>,
  },
};
