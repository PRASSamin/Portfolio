import React from "react";
import { SVGProps } from "./types";

export const DjangoIcon = React.forwardRef<SVGElement, SVGProps>(
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
      >
        <path d="M7.533 12.249c-.011 1.985 1.445 3.168 3.768 2.63V9.618c-2.352-.716-3.758.733-3.768 2.631m3.839-10.238h3.199v15.143c-3.066.501-6.004.819-8.104-.355-2.705-1.513-2.923-6.319-.782-8.46 1.085-1.085 3.271-1.85 5.616-1.351V2.225c-.006-.101-.012-.202.071-.214m8.389 3.342h-3.199V2.011h3.199v3.342z"></path>
        <path d="M19.761 7.044c-.003 2.356-.003 4.048-.003 6.911-.136 2.813-.104 5.052-1.135 6.398-.203.266-.634.652-.995.924-.303.228-.881.691-1.208.711-.331.021-1.18-.459-1.564-.64-.505-.237-.971-.553-1.493-.71 1.218-.754 2.372-1.32 2.844-2.844.41-1.326.355-3.247.355-5.119 0-1.849.009-3.998.009-5.63l3.19-.001z"></path>
      </svg>
    );
  }
);

DjangoIcon.displayName = "DjangoIcon";
