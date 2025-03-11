import { HEADER_QUERY } from "./header";
import { PAGE_QUERY } from "./page";

export const LAYOUT_QUERY = `
{
  "header": ${HEADER_QUERY},
  "page": ${PAGE_QUERY}
}
`;
