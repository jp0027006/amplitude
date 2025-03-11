export const HEADER_BASIC_FIELDS = `
  _type,
  title
`;

const SUBMENU_ITEMS = `submenuItems {
  _type,
  ImageTitleDescriptionLink {
    submenuDescription,
    submenuTitle,
    submenuLink {
      _type,
      link {
        _type,
        link
      },
      label
    },
    submenuImage {
      alt,
      caption,
      asset {
        _ref
      }
    },
    _type
  },
  LinkDescriptionIcon[] {
    _type,
    _key,
    linkDescription,
    linkCategory,
    linkIcon{
      caption,
      _type,
      alt,
      asset{
        _ref
      }
    },
    labelLink{
      _type,
      label,
      link{
        _type,
        link,
        type
      }
    }
  }
}`;

export const NAV_ITEMS = `navItems[] {
  _type,
  title,
  link {
    _type,
    link,
    type
  },
  ${SUBMENU_ITEMS},
}`;

export const LOGO = `logo {
  alt,
  caption,
  asset {
    _ref
  }
}`;

export const CTAS = `ctas[] {
  _type,
  cta{
    _type,
    label,
    variant,
    link{
      _type,
      link,
      type
    }
  }
}`;
