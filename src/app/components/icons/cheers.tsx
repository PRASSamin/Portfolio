import React from "react";
import { SVGProps } from "./types";

export const CheersIcon = React.forwardRef<SVGElement, SVGProps>(
  ({ size, className, ...props }, ref) => {
    return (
      <svg
        {...props}
        width={size || 16}
        height={size || 16}
        fill="currentColor"
        className={className}
        viewBox="0 0 24 24"
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit={2}
        clipRule="evenodd"
        id="cheers"
      >
        <path d="M17.098 7.951c-0.115 -0.2 -0.35 -0.346 -0.705 -0.363 -0.5 -0.024 -1.333 0.223 -2.179 0.712 -0.846 0.489 -1.477 1.087 -1.706 1.531 -0.163 0.316 -0.153 0.592 -0.038 0.792l3.204 5.549c0.668 1.157 2.088 1.61 3.286 1.097l1.172 2.031c-0.59 0.401 -1.013 0.859 -1.177 1.221 -0.135 0.299 -0.121 0.563 -0.006 0.761 0.115 0.199 0.337 0.343 0.662 0.375 0.471 0.046 1.241 -0.158 2.013 -0.604s1.334 -1.011 1.529 -1.441c0.135 -0.299 0.121 -0.563 0.006 -0.762 -0.115 -0.199 -0.337 -0.343 -0.662 -0.375 -0.411 -0.041 -1.05 0.11 -1.719 0.445l-1.17 -2.026c1.043 -0.781 1.361 -2.237 0.693 -3.394zm-10.195 0c0.115 -0.2 0.35 -0.346 0.705 -0.363 0.5 -0.024 1.333 0.223 2.179 0.712 0.846 0.489 1.477 1.087 1.706 1.531 0.163 0.316 0.153 0.592 0.038 0.792L8.328 16.172c-0.668 1.157 -2.088 1.61 -3.286 1.097l-1.172 2.031c0.59 0.401 1.013 0.859 1.177 1.221 0.135 0.299 0.121 0.563 0.006 0.761 -0.115 0.199 -0.337 0.343 -0.662 0.375 -0.471 0.046 -1.241 -0.158 -2.013 -0.604 -0.772 -0.446 -1.334 -1.011 -1.529 -1.441 -0.135 -0.299 -0.121 -0.563 -0.006 -0.762 0.115 -0.199 0.337 -0.343 0.662 -0.375 0.411 -0.041 1.05 0.11 1.719 0.445l1.17 -2.026c-1.043 -0.781 -1.361 -2.237 -0.693 -3.394ZM21.154 19.57c0.424 -0.21 0.826 -0.334 1.132 -0.351 0.068 -0.004 0.153 0.009 0.202 0.019 -0.017 0.047 -0.048 0.128 -0.085 0.185 -0.206 0.315 -0.625 0.675 -1.154 0.981 -0.529 0.305 -1.051 0.488 -1.426 0.509 -0.068 0.003 -0.153 -0.01 -0.202 -0.019 0.017 -0.047 0.048 -0.128 0.085 -0.185 0.157 -0.241 0.44 -0.51 0.802 -0.759 0.106 0.173 0.331 0.232 0.508 0.129 0.178 -0.103 0.24 -0.33 0.139 -0.51m-18.306 0c-0.424 -0.21 -0.826 -0.334 -1.132 -0.351 -0.068 -0.004 -0.153 0.009 -0.202 0.019 0.017 0.047 0.048 0.128 0.085 0.185 0.206 0.315 0.625 0.675 1.154 0.981 0.529 0.305 1.051 0.488 1.426 0.509 0.068 0.003 0.153 -0.01 0.202 -0.019 -0.017 -0.047 -0.048 -0.128 -0.085 -0.185 -0.157 -0.241 -0.44 -0.51 -0.802 -0.759a0.375 0.375 0 0 1 -0.508 0.129c-0.178 -0.103 -0.24 -0.33 -0.139 -0.51m16.425 -6.354 0.38 0.659c0.514 0.891 0.209 2.029 -0.682 2.544l-0.104 0.06c-0.891 0.514 -2.03 0.209 -2.544 -0.682l-0.38 -0.659c0.494 -0.071 1.153 -0.306 1.821 -0.691s1.201 -0.839 1.509 -1.231m-14.543 0 -0.38 0.659c-0.514 0.891 -0.209 2.029 0.682 2.544l0.104 0.06c0.891 0.514 2.029 0.209 2.544 -0.682l0.38 -0.659c-0.494 -0.071 -1.153 -0.306 -1.821 -0.691s-1.201 -0.839 -1.509 -1.231m10.839 1.182c0.023 -0.053 0.059 -0.128 0.099 -0.184 0.245 -0.342 0.728 -0.743 1.331 -1.092 0.603 -0.348 1.193 -0.566 1.611 -0.607 0.069 -0.007 0.152 0 0.209 0.007 -0.023 0.053 -0.059 0.128 -0.099 0.184 -0.245 0.342 -0.728 0.743 -1.331 1.092s-1.193 0.566 -1.611 0.607c-0.069 0.007 -0.152 0 -0.209 -0.007m-7.135 0c-0.023 -0.053 -0.059 -0.128 -0.099 -0.184 -0.245 -0.342 -0.728 -0.743 -1.331 -1.092s-1.193 -0.566 -1.611 -0.607c-0.069 -0.007 -0.152 0 -0.209 0.007 0.023 0.053 0.059 0.128 0.099 0.184 0.245 0.342 0.728 0.743 1.331 1.092s1.193 0.566 1.611 0.607c0.069 0.007 0.152 0 0.209 -0.007m8.429 -5.356 1.581 2.739c-0.494 0.071 -1.153 0.306 -1.821 0.691s-1.201 0.839 -1.509 1.231l-1.581 -2.739c0.494 -0.071 1.153 -0.306 1.821 -0.691s1.201 -0.839 1.509 -1.231m-9.724 0 -1.581 2.739c0.494 0.071 1.153 0.306 1.821 0.691s1.201 0.839 1.509 1.231l1.581 -2.739c-0.494 -0.071 -1.153 -0.306 -1.821 -0.691s-1.201 -0.839 -1.509 -1.231m6.02 1.182c0.023 -0.053 0.059 -0.128 0.099 -0.184 0.245 -0.342 0.728 -0.743 1.331 -1.092 0.603 -0.348 1.193 -0.566 1.611 -0.607 0.069 -0.007 0.152 0 0.209 0.007 -0.023 0.053 -0.059 0.128 -0.099 0.184 -0.245 0.342 -0.728 0.743 -1.331 1.092 -0.603 0.348 -1.193 0.566 -1.611 0.607 -0.069 0.007 -0.152 0 -0.209 -0.007m-2.316 0c-0.023 -0.053 -0.059 -0.128 -0.099 -0.184 -0.245 -0.342 -0.728 -0.743 -1.331 -1.092s-1.193 -0.566 -1.611 -0.607c-0.069 -0.007 -0.152 0 -0.209 0.007 0.023 0.053 0.059 0.128 0.099 0.184 0.245 0.342 0.728 0.743 1.331 1.092s1.193 0.566 1.611 0.607c0.069 0.007 0.152 0 0.209 -0.007m1.137 -6.682 0.498 -0.498a1.454 1.454 0 0 1 2.056 2.056l-2.289 2.289a0.375 0.375 0 0 1 -0.53 0l-2.289 -2.289a1.454 1.454 0 0 1 0 -2.056l0 0a1.454 1.454 0 0 1 2.056 0zM17.801 4.875h0.276c0.534 0 0.966 0.433 0.966 0.966v0c0 0.534 -0.433 0.966 -0.966 0.966h-1.893a0.375 0.375 0 0 1 -0.375 -0.375v-1.625a1.115 1.115 0 0 1 1.115 -1.115h0c0.485 0 0.878 0.393 0.878 0.878zM6.258 4.818v-0.309a0.873 0.873 0 0 1 0.873 -0.873h0A1.119 1.119 0 0 1 8.25 4.754V6.375a0.375 0.375 0 0 1 -0.375 0.375h-1.893c-0.534 0 -0.966 -0.433 -0.966 -0.966v0c0 -0.534 0.433 -0.966 0.966 -0.966zm5.722 1.777 2.023 -2.023a0.704 0.704 0 0 0 0 -0.995l0 0a0.704 0.704 0 0 0 -0.995 0L12.245 4.339a0.375 0.375 0 0 1 -0.53 0l-0.763 -0.763a0.704 0.704 0 0 0 -0.995 0l0 0a0.704 0.704 0 0 0 0 0.995zm4.579 -0.537h1.518a0.216 0.216 0 0 0 0.216 -0.216v0a0.216 0.216 0 0 0 -0.216 -0.216h-0.651a0.375 0.375 0 0 1 -0.375 -0.375V4.57a0.128 0.128 0 0 0 -0.128 -0.128h0a0.364 0.364 0 0 0 -0.364 0.364zM7.5 6v-1.246a0.369 0.369 0 0 0 -0.369 -0.369h0a0.123 0.123 0 0 0 -0.123 0.123v0.684a0.375 0.375 0 0 1 -0.375 0.375h-0.651a0.216 0.216 0 0 0 -0.216 0.216v0a0.216 0.216 0 0 0 0.216 0.216z" />
      </svg>
    );
  }
);

CheersIcon.displayName = "CheersIcon";