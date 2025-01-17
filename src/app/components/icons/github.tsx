import React from "react";
import { SVGProps } from "./types";

export const Github = React.forwardRef<SVGElement, SVGProps>(
  ({ size, className, ...props }, ref) => {
    return (
      <svg
        {...props}
        width={size || 16}
        height={size || 16}
        fill="currentColor"
        className={className}
        viewBox="0 0 24 24"
      >
        <path d="M 12 0 C 5.37 0 0 5.37 0 12 c 0 5.31 3.435 9.795 8.205 11.385 0.6 0.105 0.825 -0.255 0.825 -0.57 0 -0.285 -0.015 -1.23 -0.015 -2.235 -3.015 0.555 -3.795 -0.735 -4.035 -1.41 -0.135 -0.345 -0.72 -1.41 -1.23 -1.695 -0.42 -0.225 -1.02 -0.78 -0.015 -0.795 0.945 -0.015 1.62 0.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495 0.99 0.105 -0.78 0.42 -1.305 0.765 -1.605 -2.67 -0.3 -5.46 -1.335 -5.46 -5.8725 0 -1.305 0.465 -2.385 1.23 -3.225 -0.12 -0.3 -0.54 -1.53 0.12 -3.18 0 0 1.005 -0.315 3.3 1.23 0.96 -0.27 1.98 -0.405 3 -0.405 s 2.04 0.135 3 0.405 c 2.295 -1.56 3.3 -1.23 3.3 -1.23 0.66 1.65 0.24 2.88 0.12 3.18 0.765 0.84 1.23 1.905 1.23 3.225 0 4.605 -2.805 5.625 -5.475 5.925 0.435 0.375 0.81 1.095 0.81 2.22 0 1.605 -0.015 2.895 -0.015 3.3 0 0.315 0.225 0.69 0.825 0.57 A 12.015 12.015 0 0 0 24 12 c 0 -6.63 -5.37 -12 -12 -12" />
      </svg>
    );
  }
);

Github.displayName = "GithubIcon";
