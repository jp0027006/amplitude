import { header } from "@/lib/helper/header";

export const HEADER_QUERY = `*[_type == "header"][0]{
    ${header}
  }`;
