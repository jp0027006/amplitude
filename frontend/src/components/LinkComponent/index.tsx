import { fetchPageByReference } from "@/sanity/utils/helperFunctions";
import { LinkComponentProps } from "@/types/LinkComponentProps";
import Link from "next/link";

const LinkComponent: React.FC<LinkComponentProps> = ({ link, index }) => {
  const target = link.link.openTheLinkinANewWindow ? "_blank" : "_self";

  const renderLink = async () => {
    switch (link.link.type) {
      case "sectionReference":
        return (
          <Link
            key={index}
            href={`#${link.link.anchor}`}
            className="bg-blue-600 p-4 text-white rounded-full"
          >
            {link.label}
          </Link>
        );
      case "reference":
        const referencedPage = await fetchPageByReference(
          link.link.page?._ref || ""
        );
        const referenceSlug = referencedPage?.slug.current;

        if (referencedPage) {
          return (
            <Link
              key={index}
              href={`/page/${referenceSlug}`}
              className="bg-green-600 p-4 text-white rounded-full"
            >
              {link.label}
            </Link>
          );
        } else {
          return (
            <span key={index} className="text-red-600">
              Referenced page not found
            </span>
          );
        }

      case "externalReference":
        return (
          <Link
            key={index}
            href={link.link.link}
            target={target}
            className="bg-red-600 p-4 text-white rounded-full"
          >
            {link.label}
          </Link>
        );
      default:
        return null;
    }
  };

  return renderLink();
};

export default LinkComponent;
