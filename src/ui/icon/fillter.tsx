import { IIconProps } from "./utils";

export const Fillter = ({ size = "11", ...props }: IIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 11 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.82688 2.44444H10.3204L8.32904 0L6.33769 2.44444H7.8312V11H8.82688M0.36364 8.55556H5.34202V9.77778H0.36364M2.35499 1.22222V2.44444H0.36364V1.22222M0.36364 4.88889H3.8485V6.11111H0.36364V4.88889Z"
      fill="white"
    />
  </svg>
);
