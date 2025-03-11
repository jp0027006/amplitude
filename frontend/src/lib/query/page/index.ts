import {
  BASE_PAGE_FIELDS,
  CONTENT_FIELDS,
  PAGELINK_FIELDS,
  SLUG_FIELDS,
} from "@/lib/helper/page";

export const PAGE_QUERY = `*[_type == "page"]{
  ${BASE_PAGE_FIELDS},
  ${CONTENT_FIELDS},
  ${SLUG_FIELDS},
  ${PAGELINK_FIELDS},
}`;
