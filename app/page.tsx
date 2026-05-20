'use client'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center overflow-hidden relative">

      {/* Fondo glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,100,0.15),transparent_60%)]" />

      {/* Partículas */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: '4px',
              height: '4px',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random(),
            }}
          />
        ))}
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center px-6">

        {/* Card */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-[40px] p-10 max-w-2xl text-center shadow-2xl">

          <p className="uppercase tracking-[0.4em] text-pink-300 text-sm mb-4">
            FOR YOU
          </p>

          <h1 className="text-6xl font-black mb-6">
            Instálame 💌
          </h1>

          <p className="text-zinc-300 text-xl leading-relaxed mb-10">
            Hay algo importante que quiero decirte.
          </p>

          <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300">
            Agregar a pantalla principal
          </button>

        </div>

        {/* Corazón */}
        <div className="mt-20 relative">

          <div className="absolute inset-0 bg-pink-500 blur-3xl opacity-40 rounded-full" />

          <div className="relative text-8xl animate-bounce">
            ❤️
          </div>

        </div>

        {/* Mensaje */}
        <div className="mt-16 backdrop-blur-xl bg-white/5 border border-white/10 rounded-[30px] p-8 text-center max-w-2xl">

          <p className="text-3xl leading-relaxed font-light">
            Gracias por todo.
            <br />
            Perdón por todo.
            <br />
            Acuérdate de pagarme lo de App Inventor 😭❤️
            <br />
            Te quiero.
          </p>

        </div>

      </div>

    </main>
  )
}