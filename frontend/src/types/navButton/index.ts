{
  /* Button Variant */
}

export type ButtonVariantType = "blue" | "transparent" | "outline";

{
  /* Button */
}

export type NavButtonType = {
  button: {
    _type: "button";
    label?: string;
    link: {
      _type: "link";
      link: string;
    };
    variant?: ButtonVariantType;
  };
};
