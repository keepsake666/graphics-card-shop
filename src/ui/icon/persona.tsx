import { IIconProps } from "./utils";

export const Persona = ({ size = "30", ...props }: IIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="15" cy="10" r="5" stroke="#444444" strokeWidth="2" />
    <path
      d="M7.5 26C7.61364 23.6667 9.27273 19 15 19C20.7273 19 22.3864 23.6667 22.5 26"
      stroke="#444444"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
