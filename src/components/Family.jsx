import React from 'react'

export function Family() {
  return (
    <section className="relative w-full py-24 px-4 bg-gradient-to-b from-[#fcf8ee] via-[#f4e7c6] to-[#fcf8ee] flex flex-col items-center text-center">
      <div data-aos="fade-up" className="max-w-xl w-full mx-auto">
        <svg
          className="w-56 mx-auto mb-4"
          viewBox="0 0 240 40"
          aria-hidden="true"
        >
          <use href="#vine" />
        </svg>
        <div className="font-['Cinzel'] text-xs tracking-[0.35em] uppercase text-[#9a8460] mb-2">
          Con mucho amor
        </div>
        <h2 className="font-['Cinzel'] text-3xl md:text-4xl font-bold text-[#8a6420] mb-10">
          Sus padres y madrina
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Papás */}
          <div
            data-aos="fade-right"
            className="bg-[#fffdf6] border-[1.5px] border-[#c9a24b] rounded-t-[100px] rounded-b-xl p-8 shadow-md flex flex-col items-center"
          >
            <svg className="w-12 h-12 mb-3 text-[#c9a24b]" viewBox="0 0 64 64">
              <use href="#i-dove" />
            </svg>
            <small className="font-['Cinzel'] text-xs tracking-[0.3em] uppercase text-[#8a6420] block mb-3">
              Papás
            </small>

            {/* whitespace-nowrap asegura que el nombre no se baje a la siguiente línea */}
            <p className="font-['Alex_Brush'] text-3xl sm:text-4xl md:text-4xl text-[#6b5436] tracking-wide whitespace-nowrap leading-tight">
              Swinda Albores
            </p>
            <p className="font-['Alex_Brush'] text-3xl sm:text-4xl md:text-4xl text-[#6b5436] tracking-wide whitespace-nowrap leading-tight mt-1">
              Sebastián Aguilar
            </p>
          </div>

          {/* Madrina */}
          <div
            data-aos="fade-left"
            className="bg-[#fffdf6] border-[1.5px] border-[#c9a24b] rounded-t-[100px] rounded-b-xl p-8 shadow-md flex flex-col items-center"
          >
            <svg className="w-12 h-12 mb-3 text-[#c9a24b]" viewBox="0 0 64 64">
              <use href="#i-shell" />
            </svg>
            <small className="font-['Cinzel'] text-xs tracking-[0.3em] uppercase text-[#8a6420] block mb-3">
              Madrina
            </small>

            {/* whitespace-nowrap asegura que el nombre no se baje a la siguiente línea */}
            <p className="font-['Alex_Brush'] text-3xl sm:text-4xl md:text-4xl text-[#6b5436] tracking-wide whitespace-nowrap leading-tight mt-4">
              Luz María Maya
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
