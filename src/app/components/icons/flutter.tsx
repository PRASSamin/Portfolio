import React from "react";
import { SVGProps } from "./types";

export const FlutterIcon = React.forwardRef<SVGElement, SVGProps>(
  ({ size, className, ...props }, ref) => {
    return (
      <svg
        {...props}
        width={size || 16}
        height={size || 16}
        fill="currentColor"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
        viewBox="0 0 24 24"
        id="flutter"
      >
        <polygon points="14.329 11.072 14.328 11.073 7.857 17.53 14.327 24 21.7 24 15.24 17.531 21.7 11.072"></polygon>
        <polygon points="6 15.7 21.684 .012 14.327 .012 14.314 0 2.3 12"></polygon>
      </svg>
    );
  }
);

FlutterIcon.displayName = "FlutterIcon";
