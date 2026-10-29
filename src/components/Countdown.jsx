import React, { useState, useEffect } from 'react'

const TARGET = new Date('2026-11-28T12:30:00-06:00').getTime()
const pad = (x) => String(x).padStart(2, '0')

export function CountdownSection() {
  const [now, setNow] = useState(Date.now())

  useEffect(() => {
    const i = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(i)
  }, [])

  const diff = Math.max(0, TARGET - now)
  const v = [
    ['Días', Math.floor(diff / 864e5)],
    ['Horas', pad(Math.floor(diff / 36e5) % 24)],
    ['Min', pad(Math.floor(diff / 6e4) % 60)],
    ['Seg', pad(Math.floor(diff / 1e3) % 60)],
  ]

  return (
    <section className="relative w-full py-24 px-4 bg-gradient-to-br from-[#4a3519] via-[#7d5e2a] to-[#3f2d14] text-[#f7ebc8] overflow-hidden flex flex-col items-center text-center">
      <div data-aos="fade-up" className="relative z-10 max-w-md mx-auto">
        <svg
          className="w-14 h-14 mx-auto mb-3 text-[#e5cf93]"
          viewBox="0 0 64 64"
          aria-hidden="true"
        >
          <use href="#i-dove" />
        </svg>
        <div className="font-['Cinzel'] text-xs tracking-[0.35em] uppercase text-[#e5cf93] mb-2">
          Falta muy poco
        </div>
        <h2 className="font-['Cinzel'] text-3xl md:text-4xl text-[#fff0bd] font-bold mb-4">
          Cuenta regresiva
        </h2>
        <p className="italic text-lg text-[#f7ebc8]/90 mb-8">
          Cada segundo nos acerca al día en que Fátima recibirá la gracia del
          bautismo.
        </p>

        <div className="grid grid-cols-4 gap-3 mb-8">
          {v.map(([l, n]) => (
            <div
              key={l}
              className="border border-[#f3deA0]/50 rounded-t-2xl rounded-b-md p-4 bg-white/5 backdrop-blur-sm shadow-lg"
            >
              <b className="block font-['Cinzel'] text-2xl md:text-4xl font-bold bg-gradient-to-b from-[#fff0bd] to-[#e0b455] bg-clip-text text-transparent">
                {n}
              </b>
              <span className="font-['Cinzel'] text-[9px] tracking-widest text-[#e5cf93] uppercase mt-1 block">
                {l}
              </span>
            </div>
          ))}
        </div>

        <a
          data-aos="zoom-in"
          href="#confirmar"
          className="inline-block px-8 py-4 rounded-full font-['Cinzel'] text-xs tracking-widest font-bold uppercase text-[#3f2d14] bg-gradient-to-r from-[#f6e3a1] via-[#c9a24b] to-[#e8cd84] shadow-xl hover:scale-105 transition-transform duration-300"
        >
          Confirmar asistencia
        </a>
      </div>
    </section>
  )
}
