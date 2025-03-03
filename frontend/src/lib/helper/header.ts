export const linkFields = /* groq */ `
  _type,
  link
`;

export const navItemFields = /* groq */ `
  _type,
  title,
  link {
    _type,
    link
  },
`;

export const imageFields = /* groq */ `
  alt,
  _type,
  caption,
  crop {
    _type,
    right,
    top,
    left,
    bottom
  },
  hotspot {
    _type,
    x,
    y,
    height,
    width
  },
  asset->{...}
`;

export const buttonFields = /* groq */ `
  _type,
  label,
  variant,
  link {
    ${linkFields}
  },
`;

export const headerFields = /* groq */ `
  _id,
  _type,
  navItems[] {
    ${navItemFields}
  },
  logo {
    ${imageFields}
  },
  button {
    ${buttonFields}
  }
`;

export const header = /* groq */ `
  header->{
    ${headerFields}
  } 
`;
