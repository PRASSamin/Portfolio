import React from "react";
import { SVGProps } from "./types";

export const BootstrapIcon = React.forwardRef<SVGElement, SVGProps>(
  ({ size, className, ...props }, ref) => {
    return (
      <svg
        {...props}
        width={size || 16}
        height={size || 16}
        fill="currentColor"
        className={className}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        enableBackground="new 0 0 24 24"
      >
        <path d="M22,0H2C0.896,0,0,0.895,0,2v20c0,1.105,0.896,2,2,2h20c1.104,0,2-0.895,2-2V2C24,0.895,23.104,0,22,0z M17.813,16.853v0.002c-0.2,0.482-0.517,0.907-0.923,1.234c-0.42,0.34-0.952,0.62-1.607,0.82c-0.654,0.203-1.432,0.305-2.333,0.305H6.518v-14h6.802c1.258,0,2.266,0.283,3.02,0.86c0.76,0.58,1.138,1.444,1.138,2.61c0,0.705-0.172,1.31-0.518,1.81c-0.344,0.497-0.84,0.886-1.48,1.156v0.046c0.854,0.18,1.515,0.585,1.95,1.215c0.435,0.63,0.658,1.426,0.658,2.387c0,0.538-0.104,1.05-0.3,1.528L17.813,16.853z"></path>
        <path d="M15.037 13.405c-.41-.375-.986-.558-1.73-.558H8.985v4.368h4.334c.74 0 1.32-.192 1.73-.58.41-.385.62-.934.62-1.64-.007-.69-.21-1.224-.62-1.59H15.037zM14.433 10.582h.004c.396-.336.59-.817.59-1.444 0-.704-.175-1.204-.53-1.49-.352-.285-.86-.433-1.528-.433h-4v3.863h4C13.552 11.078 14.049 10.908 14.433 10.582z"></path>
      </svg>
    );
  }
);

BootstrapIcon.displayName = "BootstrapIcon";