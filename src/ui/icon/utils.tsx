import React from "react";

export interface IIconProps<T = "24"> {
  size?: T | "24" | "30" | "33";
  className?: string;
  onClick?:
    | (() => void)
    | ((e: React.MouseEvent<SVGSVGElement, MouseEvent>) => void);
}
