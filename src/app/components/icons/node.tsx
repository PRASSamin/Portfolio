import React from "react";
import { SVGProps } from "./types";

export const NodeIcon = React.forwardRef<SVGElement, SVGProps>(
  ({ size, className, ...props }, ref) => {
    return (
      <svg
        {...props}
        width={size || 16}
        height={size || 16}
        className={className}
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M 11.9956 2.25 C 11.7219 2.25 11.4482 2.31715 11.2119 2.45215 L 3.7793 6.74268 C 3.2993 7.02018 3 7.54559 3 8.10059 L 3 15.8848 C 3 16.4473 3.2993 16.9652 3.7793 17.2427 L 5.73047 18.3677 C 6.67547 18.8327 7.01244 18.832 7.43994 18.832 C 8.84244 18.832 9.64453 17.9846 9.64453 16.5146 L 9.64453 8.48291 C 9.64453 8.36291 9.54773 8.26465 9.42773 8.26465 L 8.49023 8.26465 C 8.36273 8.26465 8.27197 8.36291 8.27197 8.48291 L 8.27197 16.5073 C 8.27197 17.1673 7.59029 17.8121 6.48779 17.2646 L 4.44727 16.0869 C 4.37227 16.0494 4.32715 15.9673 4.32715 15.8848 L 4.32715 8.10791 C 4.32715 8.01791 4.37227 7.94197 4.44727 7.89697 L 11.8799 3.60791 C 11.9474 3.56291 12.0378 3.56291 12.1128 3.60791 L 19.5454 7.89697 C 19.6204 7.94197 19.6655 8.01809 19.6655 8.10059 L 19.6655 15.8848 C 19.6655 15.9673 19.6202 16.0494 19.5527 16.0869 L 12.1128 20.3848 C 12.0453 20.4223 11.9474 20.4223 11.8799 20.3848 L 9.9668 19.2524 C 9.9143 19.2149 9.84059 19.2078 9.78809 19.2378 C 9.25559 19.5378 9.15809 19.5751 8.66309 19.7476 C 8.54309 19.7851 8.35547 19.8598 8.73047 20.0698 L 11.2119 21.5405 C 11.4519 21.6755 11.7227 21.75 11.9927 21.75 C 12.2702 21.75 12.5393 21.6755 12.7793 21.5405 L 20.2207 17.2427 C 20.7007 16.9652 21 16.4473 21 15.8848 L 21 8.10791 C 21 7.54541 20.7007 7.0275 20.2207 6.75 L 12.7793 2.45215 C 12.543 2.31715 12.2694 2.25 11.9956 2.25 z M 13.9951 8.25439 C 11.8726 8.25439 10.6055 9.15381 10.6055 10.6538 C 10.6055 12.2813 11.8643 12.7306 13.9043 12.9331 C 16.3418 13.1731 16.5293 13.5342 16.5293 14.0142 C 16.5293 14.8392 15.8629 15.1919 14.2954 15.1919 C 12.3229 15.1919 11.8876 14.6962 11.7451 13.7212 C 11.7301 13.6162 11.6406 13.541 11.5356 13.541 L 10.5674 13.541 C 10.4474 13.541 10.3579 13.6395 10.3579 13.752 C 10.3579 15.0045 11.0404 16.4956 14.2954 16.4956 C 16.6504 16.4956 18 15.5668 18 13.9468 C 18 12.3418 16.9123 11.9135 14.6323 11.606 C 12.3148 11.306 12.082 11.1484 12.082 10.6084 C 12.082 10.1584 12.2851 9.56689 13.9951 9.56689 C 15.5176 9.56689 16.0873 9.89584 16.3198 10.9233 C 16.3423 11.0208 16.4243 11.0962 16.5293 11.0962 L 17.4976 11.0962 C 17.5576 11.0962 17.6093 11.0665 17.6543 11.0215 C 17.6918 10.984 17.7145 10.9235 17.707 10.856 C 17.557 9.08596 16.3801 8.25439 13.9951 8.25439 z" />
      </svg>
    );
  }
);

NodeIcon.displayName = "NodeIcon";
