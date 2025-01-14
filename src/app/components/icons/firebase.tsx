import React from "react";
import { SVGProps } from "./types";

export const FirebaseIcon = React.forwardRef<SVGElement, SVGProps>(
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
        <path d="M20.5 19.364L18.296 5.365c-.044-.259-.261-.453-.524-.453-.146 0-.278.06-.375.158L3.5 19.364l7.69 4.428C11.413 23.923 11.681 24 11.966 24c.284 0 .551-.077.781-.211L20.5 19.364 20.5 19.364zM7.37.286C7.28.116 7.105 0 6.902 0 6.637 0 6.417.199 6.377.461L4.063 15.673 9.86 5.06 7.371.289 7.37.286zM14.251 7.148L12.47 3.666c-.091-.174-.267-.29-.47-.29-.203 0-.379.116-.469.287L11.53 3.666l-7.82 14.318L14.251 7.148z"></path>
      </svg>
    );
  }
);

FirebaseIcon.displayName = "FirebaseIcon";
