import {
  CTAS,
  HEADER_BASIC_FIELDS,
  LOGO,
  NAV_ITEMS,
} from "@/lib/helper/header";

export const HEADER_QUERY = `*[_type == "header"][0] {
  ${HEADER_BASIC_FIELDS},
  ${NAV_ITEMS},
  ${LOGO},
  ${CTAS},
}`;
