import { IIconProps } from "./utils";

export const Heart = ({ size = "30", ...props }: IIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.5 3.25619C14.5802 1.54947 12.0641 0.653213 9.4877 0.758299C6.91126 0.863385 4.47798 1.96151 2.70606 3.81881C0.934134 5.67611 -0.0364334 8.14585 0.00104648 10.7021C0.0385263 13.2583 1.08109 15.699 2.90672 17.5045L14.1682 28.6676C14.7867 29.2806 15.6255 29.625 16.5 29.625C17.3745 29.625 18.2133 29.2806 18.8318 28.6676L30.0933 17.5045C31.9189 15.699 32.9615 13.2583 32.999 10.7021C33.0364 8.14585 32.0659 5.67611 30.2939 3.81881C28.522 1.96151 26.0887 0.863385 23.5123 0.758299C20.9359 0.653213 18.4198 1.54947 16.5 3.25619ZM14.5673 5.94399L15.3341 6.70259C15.6434 7.00909 16.0627 7.18127 16.5 7.18127C16.9373 7.18127 17.3566 7.00909 17.6659 6.70259L18.4327 5.94399C19.0412 5.31939 19.7691 4.82118 20.5738 4.47844C21.3786 4.13571 22.2442 3.9553 23.12 3.94776C23.9959 3.94021 24.8645 4.10568 25.6751 4.4345C26.4858 4.76332 27.2223 5.24891 27.8416 5.86293C28.461 6.47696 28.9507 7.20712 29.2824 8.01082C29.6141 8.81452 29.781 9.67566 29.7734 10.544C29.7658 11.4123 29.5838 12.2705 29.2381 13.0683C28.8924 13.8662 28.3899 14.5878 27.7598 15.1911L16.5 26.3559L5.24015 15.1911C4.03859 13.9577 3.37372 12.3057 3.38875 10.5911C3.40378 8.87638 4.0975 7.23616 5.32051 6.02365C6.54351 4.81115 8.19794 4.12338 9.92746 4.10848C11.657 4.09358 13.3232 4.75274 14.5673 5.94399Z"
      fill="white"
    />
  </svg>
);
