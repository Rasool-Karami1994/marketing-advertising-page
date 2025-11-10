import * as React from "react";
export default function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden {...props}>
      <circle
        cx="11"
        cy="11"
        r="7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M20 20 16.5 16.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
