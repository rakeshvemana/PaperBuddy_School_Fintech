export function SchoolIllustration() {
  return (
    <svg
      viewBox="0 0 760 520"
      className="h-full w-full"
      role="img"
      aria-label="Animated school finance dashboard illustration"
    >
      <defs>
        <linearGradient id="schoolWall" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#38bdf8" stopOpacity="0.9" />
          <stop offset="1" stopColor="#2dd4bf" stopOpacity="0.75" />
        </linearGradient>
        <linearGradient id="screen" x1="0" x2="1">
          <stop stopColor="#101f36" />
          <stop offset="1" stopColor="#172554" />
        </linearGradient>
      </defs>
      <path
        d="M60 390 C180 335 248 420 370 360 C502 294 570 356 700 302"
        fill="none"
        stroke="#2dd4bf"
        strokeDasharray="12 16"
        strokeWidth="4"
        className="dash-line"
      />
      <g className="floaty" style={{ transformOrigin: "380px 260px" }}>
        <rect x="130" y="160" width="500" height="260" rx="28" fill="#09182c" stroke="#ffffff22" />
        <rect x="174" y="214" width="112" height="150" rx="14" fill="url(#schoolWall)" />
        <rect x="320" y="214" width="112" height="150" rx="14" fill="url(#schoolWall)" opacity="0.82" />
        <rect x="466" y="214" width="112" height="150" rx="14" fill="url(#schoolWall)" opacity="0.72" />
        <path d="M144 174 L380 70 L616 174" fill="#152640" stroke="#ffffff2a" strokeWidth="3" />
        <path d="M322 174 L380 104 L438 174" fill="#34d399" opacity="0.88" />
        <rect x="354" y="310" width="52" height="110" rx="8" fill="#07111f" />
        <circle cx="393" cy="366" r="4" fill="#f8fafc" />
        <rect x="188" y="232" width="28" height="34" rx="5" fill="#07111f" opacity="0.65" />
        <rect x="242" y="232" width="28" height="34" rx="5" fill="#07111f" opacity="0.65" />
        <rect x="334" y="232" width="28" height="34" rx="5" fill="#07111f" opacity="0.65" />
        <rect x="388" y="232" width="28" height="34" rx="5" fill="#07111f" opacity="0.65" />
        <rect x="480" y="232" width="28" height="34" rx="5" fill="#07111f" opacity="0.65" />
        <rect x="534" y="232" width="28" height="34" rx="5" fill="#07111f" opacity="0.65" />
      </g>
      <g className="floaty" style={{ animationDelay: "-2s" }}>
        <rect x="468" y="86" width="178" height="116" rx="22" fill="url(#screen)" stroke="#ffffff2a" />
        <path d="M492 166 L528 134 L563 151 L618 112" fill="none" stroke="#34d399" strokeWidth="6" strokeLinecap="round" />
        <text x="494" y="126" fill="#e0f2fe" fontSize="24" fontWeight="700">
          ₹84.7L
        </text>
        <text x="494" y="153" fill="#93c5fd" fontSize="13">
          Term collection
        </text>
      </g>
      <g className="floaty" style={{ animationDelay: "-3.4s" }}>
        <rect x="84" y="96" width="158" height="96" rx="20" fill="#ffffff18" stroke="#ffffff24" />
        <circle cx="122" cy="144" r="24" fill="#2dd4bf" opacity="0.9" />
        <text x="113" y="153" fill="#07111f" fontSize="25" fontWeight="800">
          ₹
        </text>
        <text x="160" y="136" fill="#f8fafc" fontSize="17" fontWeight="700">
          UPI ready
        </text>
        <text x="160" y="160" fill="#bae6fd" fontSize="12">
          QR receipts
        </text>
      </g>
      <g className="pulse-glow">
        <circle cx="650" cy="348" r="8" fill="#34d399" />
        <circle cx="104" cy="322" r="7" fill="#38bdf8" />
        <circle cx="560" cy="450" r="6" fill="#a78bfa" />
      </g>
    </svg>
  );
}
