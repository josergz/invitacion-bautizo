import React, { useState } from 'react'

// URL de tu Google Apps Script conectado a Google Sheets
const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxlrV5iNPEueXYMc4J6N4kcF23KZuLEaSO-WwAFJCsljz1_x4Scvj3ufh-x928nHQfkXA/exec'

export function RsvpForm() {
  const [att, setAtt] = useState('si')
  const [done, setDone] = useState(null)
  const [busy, setBusy] = useState(false)

  async function submit(ev) {
    ev.preventDefault()
    const f = ev.target
    const si = att === 'si'

    const data = {
      name: f.nombre.value.trim(),
      attending: si,
      guests: si ? +f.n.value : 0,
      ceremony: si && f.c1.checked,
      party: si && f.c2.checked,
      note: f.note.value.trim(),
    }

    setBusy(true)

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      setDone(si)
    } catch (error) {
      console.error('Error al enviar:', error)
      alert(
        'Hubo un error al enviar tu confirmación. Por favor intenta de nuevo.'
      )
    } finally {
      setBusy(false)
    }
  }

  return (
    <section
      id="confirmar"
      className="relative w-full py-24 px-4 bg-gradient-to-tr from-[#f4e7c6] via-[#f6e4ab]/40 to-[#f4e7c6] flex flex-col items-center text-center"
    >
      <div data-aos="fade-up" className="max-w-lg w-full mx-auto">
        <div className="font-['Cinzel'] text-xs tracking-[0.35em] uppercase text-[#9a8460] mb-2">
          RSVP
        </div>
        <h2 className="font-['Cinzel'] text-3xl md:text-4xl font-bold text-[#8a6420] mb-2">
          Confirma tu asistencia
        </h2>
        <p className="text-[#9a8460] mb-8">
          Tu presencia hará este día aún más especial.
        </p>

        {done !== null ? (
          <div className="bg-[#fffdf6] border border-[#c9a24b] rounded-t-xl rounded-b-[34px] p-10 shadow-xl">
            <h3 className="font-['Pinyon_Script'] text-6xl text-[#8a6420] mb-3">
              ¡Gracias!
            </h3>
            <p className="text-lg text-[#6b5436]">
              {done
                ? 'Tu confirmación fue enviada con éxito. ¡Te esperamos con mucho cariño!'
                : 'Gracias por avisarnos. Lamentamos que no nos acompañes, te llevamos en el corazón.'}
            </p>
          </div>
        ) : (
          <form
            onSubmit={submit}
            className="bg-[#fffdf6] border border-[#c9a24b] rounded-t-xl rounded-b-[34px] p-6 md:p-8 flex flex-col gap-5 text-left shadow-xl"
          >
            <label className="font-['Cinzel'] font-semibold text-[11px] tracking-widest text-[#8a6420] uppercase flex flex-col gap-2">
              Tu nombre completo
              <input
                name="nombre"
                required
                maxLength="80"
                autoComplete="name"
                className="font-['Cormorant_Garamond'] text-lg font-normal text-[#6b5436] bg-white border-[1.5px] border-[#ecdcae] rounded-xl p-3 focus:outline-none focus:border-[#c9a24b]"
              />
            </label>

            <label className="font-['Cinzel'] font-semibold text-[11px] tracking-widest text-[#8a6420] uppercase flex flex-col gap-2">
              ¿Asistirás?
              <select
                value={att}
                onChange={(e) => setAtt(e.target.value)}
                className="font-['Cormorant_Garamond'] text-lg font-normal text-[#6b5436] bg-white border-[1.5px] border-[#ecdcae] rounded-xl p-3 focus:outline-none focus:border-[#c9a24b]"
              >
                <option value="si">¡Sí, ahí estaré!</option>
                <option value="no">Lamentablemente no podré</option>
              </select>
            </label>

            {att === 'si' && (
              <div className="flex flex-col gap-4">
                <label className="font-['Cinzel'] font-semibold text-[11px] tracking-widest text-[#8a6420] uppercase flex flex-col gap-2">
                  Personas (contándote a ti)
                  <select
                    name="n"
                    className="font-['Cormorant_Garamond'] text-lg font-normal text-[#6b5436] bg-white border-[1.5px] border-[#ecdcae] rounded-xl p-3"
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n}>{n}</option>
                    ))}
                  </select>
                </label>
                <div className="flex gap-3 flex-wrap">
                  <label className="flex items-center gap-2 flex-1 min-w-[130px] bg-white border-[1.5px] border-[#ecdcae] rounded-xl p-3 text-base font-['Cormorant_Garamond'] font-semibold text-[#6b5436] lowercase tracking-normal">
                    <input
                      type="checkbox"
                      name="c1"
                      defaultChecked
                      className="accent-[#c9a24b]"
                    />{' '}
                    Ceremonia
                  </label>
                  <label className="flex items-center gap-2 flex-1 min-w-[130px] bg-white border-[1.5px] border-[#ecdcae] rounded-xl p-3 text-base font-['Cormorant_Garamond'] font-semibold text-[#6b5436] lowercase tracking-normal">
                    <input
                      type="checkbox"
                      name="c2"
                      defaultChecked
                      className="accent-[#c9a24b]"
                    />{' '}
                    Celebración
                  </label>
                </div>
              </div>
            )}

            <label className="font-['Cinzel'] font-semibold text-[11px] tracking-widest text-[#8a6420] uppercase flex flex-col gap-2">
              Mensaje para la familia (opcional)
              <textarea
                name="note"
                rows="3"
                maxLength="300"
                className="font-['Cormorant_Garamond'] text-lg font-normal text-[#6b5436] bg-white border-[1.5px] border-[#ecdcae] rounded-xl p-3 focus:outline-none focus:border-[#c9a24b]"
              ></textarea>
            </label>

            <button
              className="w-full mt-2 py-4 rounded-full font-['Cinzel'] text-xs tracking-widest font-bold uppercase text-[#3f2d14] bg-gradient-to-r from-[#f6e3a1] via-[#c9a24b] to-[#e8cd84] shadow-lg hover:scale-[1.02] transition-transform cursor-pointer"
              type="submit"
              disabled={busy}
            >
              {busy ? 'Enviando…' : 'Enviar confirmación'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
