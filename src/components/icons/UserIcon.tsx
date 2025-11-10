import * as React from "react";
export default function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden {...props}>
      <path
        d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
