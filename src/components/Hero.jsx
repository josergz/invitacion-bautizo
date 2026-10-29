import React from 'react'

export function Hero() {
  return (
    <section className="relative w-full py-16 px-4 md:px-8 bg-gradient-to-tr from-[#fcf8ee] via-[#f6e4ab]/30 to-[#fcf8ee] overflow-hidden flex flex-col items-center">
      <div className="absolute -top-10 -left-20 w-96 h-96 bg-[#f1d98f]/40 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#f3dc9c]/40 rounded-full blur-3xl pointer-events-none"></div>

      <div
        data-aos="fade-up"
        className="relative w-full max-w-lg md:max-w-xl border-2 border-[#c9a24b] rounded-t-[300px] pt-32 pb-12 px-6 md:px-12 bg-gradient-to-b from-[#fffdf6] to-[#fbf3dc] shadow-2xl flex flex-col items-center text-center"
      >
        <div className="absolute inset-2 border border-[#f3deA0] rounded-t-[290px] pointer-events-none"></div>

        <svg
          className="absolute top-6 w-32 h-24 text-[#c9a24b]"
          viewBox="0 0 150 110"
          aria-hidden="true"
        >
          <use href="#rays" />
        </svg>

        <svg
          className="absolute top-20 -left-12 md:-left-16 w-28 md:w-36 pointer-events-none"
          viewBox="0 0 220 130"
          aria-hidden="true"
        >
          <use href="#dove" />
        </svg>
        <svg
          className="absolute top-20 -right-12 md:-right-16 w-28 md:w-36 transform scale-x-[-1] pointer-events-none"
          viewBox="0 0 220 130"
          aria-hidden="true"
        >
          <use href="#dove" />
        </svg>

        <div data-aos="fade-down" data-aos-delay="200" className="z-10 mt-4">
          <h1 className="font-['Cinzel'] text-3xl md:text-5xl tracking-widest text-[#8a6420] font-bold">
            BAUTIZO
          </h1>
          <p className="font-['Cormorant_Garamond'] text-xl text-[#9a8460] mt-2 italic">
            de nuestra pequeña hija
          </p>
        </div>

        <div data-aos="zoom-in" data-aos-delay="400" className="z-10 my-4">
          <h2 className="font-['Pinyon_Script'] text-6xl md:text-8xl bg-gradient-to-b from-[#e8cd84] via-[#c49a3c] to-[#86601f] bg-clip-text text-transparent leading-none">
            Fátima Isabel
          </h2>
        </div>

        <svg className="w-56 my-4" viewBox="0 0 240 40" aria-hidden="true">
          <use href="#vine" />
        </svg>

        <p
          data-aos="fade-up"
          data-aos-delay="500"
          className="font-['Cormorant_Garamond'] text-lg md:text-xl text-[#6b5436] max-w-sm mb-8"
        >
          Con la bendición de Dios, te invitamos a celebrar con nosotros este
          día tan especial
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="grid grid-cols-[1fr_100px_1fr] items-center gap-2 w-full mt-2"
        >
          <div className="font-['Cinzel'] text-xs md:text-sm tracking-wider text-[#8a6420] py-2 border-t-2 border-b-2 border-[#c9a24b] relative">
            SÁBADO
          </div>
          <div className="w-[100px] h-[100px] rounded-t-full rounded-b-xl border-2 border-[#c9a24b] bg-[#fffdf7] flex flex-col justify-center items-center shadow-md">
            <span className="text-[9px] tracking-widest text-[#9a8460] font-['Cinzel']">
              NOVIEMBRE
            </span>
            <b className="text-4xl font-['Cinzel'] font-bold text-[#8a6420] leading-none my-1">
              28
            </b>
            <span className="text-[9px] tracking-widest text-[#9a8460] font-['Cinzel']">
              2026
            </span>
          </div>
          <div className="font-['Cinzel'] text-xs md:text-sm tracking-wider text-[#8a6420] py-2 border-t-2 border-b-2 border-[#c9a24b] relative">
            12:30 HRS
          </div>
        </div>

        <div className="mt-8 w-5 h-9 border-2 border-[#c9a24b] rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-[#c9a24b] rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
