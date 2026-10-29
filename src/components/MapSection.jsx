import React from 'react'

const MAPS = 'https://maps.app.goo.gl/WbpjsPag2SUCebtQ8'

export function MapSection() {
  return (
    <section className="relative w-full py-24 px-4 bg-[#fcf8ee] flex flex-col items-center text-center">
      <div data-aos="fade-up" className="max-w-xl w-full mx-auto">
        <div className="font-['Cinzel'] text-xs tracking-[0.35em] uppercase text-[#9a8460] mb-2">
          Ubicación de la ceremonia
        </div>
        <h2 className="font-['Cinzel'] text-3xl md:text-4xl font-bold text-[#8a6420] mb-8">
          Parroquia Cristo Rey
        </h2>

        <div className="relative w-full h-64 rounded-t-[120px] rounded-b-xl overflow-hidden border-2 border-[#c9a24b] shadow-xl my-6">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 400 250"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <rect width="400" height="250" fill="#f7ecce" />
            <path
              d="M-10 190C80 160 140 210 230 170S340 110 420 130"
              stroke="#fffaf0"
              strokeWidth="22"
              fill="none"
            />
            <path
              d="M130 -10C150 70 120 130 160 260"
              stroke="#fffaf0"
              strokeWidth="16"
              fill="none"
            />
            <path
              d="M300 -10C280 60 320 130 290 260"
              stroke="#fffaf0"
              strokeWidth="12"
              fill="none"
            />
            <path
              d="M-10 70C100 90 200 40 420 70"
              stroke="#fffaf0"
              strokeWidth="9"
              fill="none"
            />
            <rect
              x="20"
              y="100"
              width="70"
              height="46"
              rx="10"
              fill="#efdca8"
            />
            <rect
              x="330"
              y="160"
              width="60"
              height="50"
              rx="10"
              fill="#ecd59a"
            />
            <circle cx="70" cy="40" r="26" fill="#e9d69c" />
          </svg>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#c9a24b]/70 rounded-full animate-ping"></div>
          <svg
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full w-12 animate-bounce"
            viewBox="0 0 64 80"
          >
            <path
              d="M32 78C14 52 8 42 8 30a24 24 0 0 1 48 0c0 12-6 22-24 48z"
              fill="url(#gd)"
            />
            <circle cx="32" cy="30" r="10" fill="#fffdf6" />
          </svg>
        </div>

        <a
          data-aos="zoom-in"
          href={MAPS}
          target="_blank"
          rel="noopener"
          className="inline-block mt-4 px-8 py-3.5 rounded-full border-[1.5px] border-[#c9a24b] font-['Cinzel'] text-xs tracking-widest font-bold uppercase text-[#8a6420] hover:bg-[#c9a24b] hover:text-white transition-all duration-300 shadow-md"
        >
          Abrir en Google Maps
        </a>
      </div>
    </section>
  )
}
