import React from 'react'

export function Program() {
  return (
    <section className="relative w-full py-24 px-4 bg-gradient-to-b from-[#fcf8ee] via-[#f4e7c6] to-[#fcf8ee] flex flex-col items-center text-center">
      <div data-aos="fade-up" className="max-w-xl w-full mx-auto">
        <div className="font-['Cinzel'] text-xs tracking-[0.35em] uppercase text-[#9a8460] mb-2">
          Programa
        </div>
        <h2 className="font-['Cinzel'] text-3xl md:text-4xl font-bold text-[#8a6420] mb-8">
          Un día de bendiciones
        </h2>

        <div className="flex justify-center gap-6 flex-wrap mb-12">
          {[
            ['i-drop', 'Agua'],
            ['i-candle', 'Luz'],
            ['i-cup', 'Fe'],
            ['i-shell', 'Gracia'],
          ].map(([id, label]) => (
            <div
              key={label}
              className="w-20 font-['Cinzel'] text-[10px] tracking-widest uppercase text-[#9a8460]"
            >
              <svg
                className="w-14 h-14 mx-auto mb-2 p-3 border border-[#c9a24b] rounded-full bg-[#fffdf7] shadow-sm hover:rotate-12 transition-transform duration-300"
                viewBox="0 0 64 64"
                aria-hidden="true"
              >
                <use href={`#${id}`} />
              </svg>
              {label}
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div
          data-aos="fade-up"
          className="relative text-left pl-12 border-l-2 border-[#c9a24b]/40 space-y-8 ml-4 md:ml-12"
        >
          <div className="relative bg-[#fffdf6] border border-[#f3deA0] rounded-r-3xl rounded-bl-xl p-6 shadow-md">
            <div className="absolute -left-[57px] top-4 w-11 h-11 rounded-full bg-[#fffdf7] border-[1.5px] border-[#c9a24b] p-2 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 64 64">
                <use href="#i-church" />
              </svg>
            </div>
            <small className="font-['Cinzel'] text-xs tracking-widest text-[#8a6420] uppercase block mb-1">
              12:30 hrs · Ceremonia
            </small>
            <h3 className="font-['Cinzel'] text-2xl font-semibold text-[#6b5436] mb-1">
              Parroquia Cristo Rey
            </h3>
            <p className="text-[#9a8460]">Sacramento del bautizo</p>
          </div>

          <div className="relative bg-[#fffdf6] border border-[#f3deA0] rounded-r-3xl rounded-bl-xl p-6 shadow-md">
            <div className="absolute -left-[57px] top-4 w-11 h-11 rounded-full bg-[#fffdf7] border-[1.5px] border-[#c9a24b] p-2 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 64 64">
                <use href="#i-glass" />
              </svg>
            </div>
            <small className="font-['Cinzel'] text-xs tracking-widest text-[#8a6420] uppercase block mb-1">
              3:00 pm · Celebración
            </small>
            <h3 className="font-['Cinzel'] text-2xl font-semibold text-[#6b5436] mb-1">
              Calle Pintores
            </h3>
            <p className="text-[#9a8460]">Colonia Obrera</p>
          </div>
        </div>
      </div>
    </section>
  )
}
