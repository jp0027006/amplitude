{
  /* CTA Variant */
}

export type CTAVariantType = "blue" | "transparent" | "outline";

{
  /* CTA */
}

export type CTAType = {
  cta: {
    _type: "button";
    label?: string;
    link: {
      _type: "link";
      link: string;
    };
    variant?: CTAVariantType;
  };
};
