export function SvgDefs() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: 'absolute' }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gd" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ecd28a" />
          <stop offset=".5" stopColor="#c49a3c" />
          <stop offset="1" stopColor="#86601f" />
        </linearGradient>

        <symbol id="dove" viewBox="0 0 220 130">
          <g
            fill="#fffdf6"
            stroke="url(#gd)"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          >
            <path d="M92 62C84 36 62 14 28 8c18 12 24 26 30 44C44 38 28 30 8 30c22 10 36 26 44 46-12-10-26-14-42-14 26 8 50 22 66 36z" />
            <path
              d="M30 12c14 8 22 20 26 36M12 32c16 4 30 14 38 30M12 62c16 2 30 8 40 18"
              fill="none"
              strokeWidth="1.2"
            />
            <path d="M62 92C44 100 20 104 6 124c20-8 42-10 62-16M54 100C40 108 28 120 20 128" />
            <path d="M70 70C90 58 112 50 130 52c10 2 16 8 16 18 0 12-12 20-26 22-18 3-34 8-50 16z" />
            <path
              d="M92 84c10-6 22-8 34-8M100 92c8-4 16-6 26-6"
              fill="none"
              strokeWidth="1.2"
            />
            <circle cx="146" cy="56" r="14" />
            <circle cx="150" cy="53" r="2" fill="#86601f" stroke="none" />
            <path d="M158 58l16 3-16 4z" />
            <path d="M172 62c14-6 28-6 44-2" fill="none" />
            <path d="M186 58c4-10 10-14 18-14-2 8-8 14-18 14zM196 62c4 8 10 12 18 12-2-8-8-12-18-12zM206 52c4-8 8-10 14-10" />
          </g>
        </symbol>

        <symbol id="vine" viewBox="0 0 240 40">
          <g
            fill="none"
            stroke="url(#gd)"
            strokeWidth="1.6"
            strokeLinecap="round"
          >
            <path d="M4 20C40 6 70 34 118 20M236 20C200 6 170 34 122 20" />
            <path d="M30 14c-4-8 2-12 8-10 0 8-4 12-8 10zM60 26c0 8 6 10 10 6-2-6-6-8-10-6zM210 14c4-8-2-12-8-10 0 8 4 12 8 10zM180 26c0 8-6 10-10 6 2-6 6-8 10-6z" />
            <circle cx="120" cy="20" r="5" />
            <circle cx="120" cy="20" r="1.5" fill="#c49a3c" />
            <path d="M112 14c-6-8-2-12 4-10M128 14c6-8 2-12-4-10M112 26c-6 8-2 12 4 10M128 26c6 8 2 12-4 10" />
          </g>
        </symbol>

        <symbol id="rays" viewBox="0 0 150 110">
          <g stroke="url(#gd)" strokeWidth="1.6" strokeLinecap="round">
            <path d="M75 6v18M45 14l7 16M105 14l-7 16M20 34l14 10M130 34l-14 10M6 60l18 4M144 60l-18 4" />
          </g>
          <rect x="70" y="30" width="10" height="64" rx="2" fill="url(#gd)" />
          <rect x="52" y="46" width="46" height="9" rx="2" fill="url(#gd)" />
        </symbol>

        <symbol id="i-church" viewBox="0 0 64 64">
          <g
            fill="none"
            stroke="url(#gd)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M32 4v10M27 8h10M32 14L16 28v28h32V28zM26 56V44a6 6 0 0 1 12 0v12M8 56h48" />
          </g>
        </symbol>

        <symbol id="i-cup" viewBox="0 0 64 64">
          <g
            fill="none"
            stroke="url(#gd)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 10h28c0 16-5 24-14 26-9-2-14-10-14-26zM32 36v12M24 54h16M27 48h10M32 18v10M27 23h10" />
          </g>
        </symbol>

        <symbol id="i-shell" viewBox="0 0 64 64">
          <g
            fill="none"
            stroke="url(#gd)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M32 56C12 52 6 32 20 19c8-7 20-7 26 0 14 13 8 33-14 37zM32 56V20M32 56L17 24M32 56l15-32M32 56L11 38M32 56l21-18" />
          </g>
        </symbol>

        <symbol id="i-drop" viewBox="0 0 64 64">
          <g
            fill="none"
            stroke="url(#gd)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M32 6C22 22 14 31 14 41a18 18 0 0 0 36 0C50 31 42 22 32 6zM24 42c0 5 4 8 8 8" />
          </g>
        </symbol>

        <symbol id="i-candle" viewBox="0 0 64 64">
          <g
            fill="none"
            stroke="url(#gd)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M25 26h14v30H25zM32 8c-6 6-6 11 0 14 6-3 6-8 0-14zM20 56h24" />
          </g>
        </symbol>

        <symbol id="i-glass" viewBox="0 0 64 64">
          <g
            fill="none"
            stroke="url(#gd)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 10h18c0 12-4 20-9 22-5-2-9-10-9-22zM21 32v18M13 54h16M34 14h18c0 12-4 20-9 22-5-2-9-10-9-22zM43 36v14M35 54h16" />
          </g>
        </symbol>

        <symbol id="i-dove" viewBox="0 0 64 64">
          <use href="#dove" width="64" height="38" y="12" />
        </symbol>
      </defs>
    </svg>
  )
}
