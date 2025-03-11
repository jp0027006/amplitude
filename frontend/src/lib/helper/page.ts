export const CONTENT_FIELDS = `
  content[] {
    _type,
    _key,
    style,
    markDefs[]{
      _type,
      href {
        _type,
        type,
        page {
          _ref
        }
      }
    },
    children[] {
      ...
    }
  }
`;

export const SLUG_FIELDS = `
  slug {
    current,
    _type
  }
`;

export const PAGELINK_FIELDS = `
  pagelink[] {
    _type,
    label,
    link {
      type,
      openTheLinkinANewWindow,
      anchor
    }
  }
`;

export const BASE_PAGE_FIELDS = `
  _type,
  title
`;
