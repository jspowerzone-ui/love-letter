'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [mostrar, setMostrar] = useState(false)
  const [animando, setAnimando] = useState(false)

  const handleClick = () => {
    setAnimando(true)
    setTimeout(() => setMostrar(true), 300)
  }

  return (
    <main className="min-h-screen bg-[#0a0005] flex items-center justify-center overflow-hidden relative">

      {/* Fondo glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at center, rgba(255,0,80,0.12), transparent 65%)' }}
      />

      {/* Estrellas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="absolute bg-white rounded-full"
            style={{
              width: '2px', height: '2px',
              left: `${(i * 37 + 11) % 100}%`,
              top: `${(i * 53 + 7) % 100}%`,
              opacity: ((i * 0.13) % 0.6) + 0.2,
            }}
          />
        ))}
      </div>

      {/* BOTÓN inicial */}
      {!mostrar && (
        <div className={`relative z-10 flex flex-col items-center transition-all duration-300 ${animando ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}>
          <div className="absolute -inset-8 rounded-full blur-3xl opacity-30"
            style={{ background: '#ff3366' }}
          />
          <button
            onClick={handleClick}
            className="relative group cursor-pointer"
            style={{ background: 'none', border: 'none', padding: 0 }}
          >
            {/* Corazón SVG pulsando */}
            <svg width="120" height="120" viewBox="0 0 120 120" className="animate-pulse drop-shadow-lg">
              <defs>
                <radialGradient id="hg" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ff6699"/>
                  <stop offset="100%" stopColor="#cc0044"/>
                </radialGradient>
              </defs>
              <path
                d="M60 95 C30 75, 10 60, 10 40 C10 22, 24 12, 38 12 C48 12, 56 18, 60 24 C64 18, 72 12, 82 12 C96 12, 110 22, 110 40 C110 60, 90 75, 60 95 Z"
                fill="url(#hg)"
              />
              <path
                d="M38 28 C34 28, 26 32, 26 42"
                stroke="rgba(255,255,255,0.3)" strokeWidth="3" fill="none" strokeLinecap="round"
              />
            </svg>
            <p className="text-pink-300 text-sm mt-3 tracking-widest uppercase group-hover:text-pink-100 transition-colors">
              Tócame ❤️
            </p>
          </button>
        </div>
      )}

      {/* ÁRBOL Y MENSAJE — aparece tras el click */}
      {mostrar && (
        <div className="relative z-10 w-full max-w-2xl mx-auto px-4 py-8 flex flex-col items-center animate-fadeIn">

          <svg width="100%" viewBox="0 0 680 900" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="heartGlow2" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ff3366" stopOpacity="0.4"/>
                <stop offset="100%" stopColor="#ff3366" stopOpacity="0"/>
              </radialGradient>
            </defs>

            {/* Glow de fondo */}
            <circle cx="340" cy="450" r="280" fill="url(#heartGlow2)"/>

            {/* Tronco */}
            <rect x="310" y="680" width="60" height="140" rx="8" fill="#5c3317"/>
            <rect x="318" y="700" width="16" height="120" rx="4" fill="#7a4520"/>

            {/* Ramas principales */}
            <path d="M340 680 Q260 620 210 550" stroke="#4a2a10" strokeWidth="12" fill="none" strokeLinecap="round"/>
            <path d="M340 680 Q380 600 420 540" stroke="#4a2a10" strokeWidth="12" fill="none" strokeLinecap="round"/>
            <path d="M340 660 Q290 580 250 500" stroke="#4a2a10" strokeWidth="10" fill="none" strokeLinecap="round"/>
            <path d="M340 650 Q400 570 440 490" stroke="#4a2a10" strokeWidth="10" fill="none" strokeLinecap="round"/>
            <path d="M340 640 Q340 560 340 480" stroke="#4a2a10" strokeWidth="11" fill="none" strokeLinecap="round"/>

            {/* Ramas secundarias */}
            <path d="M210 550 Q170 510 150 470" stroke="#5c3317" strokeWidth="8" fill="none" strokeLinecap="round"/>
            <path d="M210 550 Q190 490 200 440" stroke="#5c3317" strokeWidth="7" fill="none" strokeLinecap="round"/>
            <path d="M420 540 Q460 500 490 470" stroke="#5c3317" strokeWidth="8" fill="none" strokeLinecap="round"/>
            <path d="M420 540 Q430 480 420 430" stroke="#5c3317" strokeWidth="7" fill="none" strokeLinecap="round"/>
            <path d="M250 500 Q220 450 200 400" stroke="#5c3317" strokeWidth="7" fill="none" strokeLinecap="round"/>
            <path d="M440 490 Q470 440 480 390" stroke="#5c3317" strokeWidth="7" fill="none" strokeLinecap="round"/>

            {/* Copa del árbol — círculos rosas/rojos */}
            {[
              [340,470,55],[250,490,40],[200,430,35],[150,460,30],
              [430,480,42],[490,450,33],[210,380,28],[480,370,27],
              [340,400,38],[280,440,36],[400,435,34],[310,370,30],
              [370,365,32],[260,510,28],[420,505,26],[170,500,28]
            ].map(([cx,cy,r],i) => (
              <circle key={i} cx={cx} cy={cy} r={r}
                fill={i%3===0?'#c0392b':i%3===1?'#ad1457':'#e91e63'}
                opacity={0.75 + (i%4)*0.05}
              />
            ))}

            {/* Palabras en las ramas */}
            {[
              [170,450,'me hace reír'],[200,395,'su voz'],[150,478,'su alma'],
              [485,450,'su mirada'],[478,382,'su sonrisa'],[340,395,'su corazón'],
              [280,445,'su forma de ser'],[408,438,'su valentía'],
              [210,340,'su ternura'],[478,340,'su inteligencia'],
            ].map(([x,y,txt],i) => (
              <text key={i} x={x} y={y} fontFamily="Arial" fontSize="11"
                fill="#ffe0e6" textAnchor="middle" opacity="0.95">{txt as string}</text>
            ))}

            {/* "ella" en el centro */}
            <text x="340" y="475" fontFamily="Arial" fontSize="13" fill="#fff"
              textAnchor="middle" fontWeight="bold">ella</text>

            {/* Corazón arriba */}
            <path d="M340 140 C328 128,310 128,310 148 C310 155,313 162,320 168 L340 188 L360 168 C367 162,370 155,370 148 C370 128,352 128,340 140 Z"
              fill="#ff3366"/>
            <circle cx="340" cy="138" r="30" fill="url(#heartGlow2)"/>

            {/* Mensaje */}
            <text x="340" y="228" fontFamily="Georgia,serif" fontSize="22"
              fill="#ff6699" textAnchor="middle" fontWeight="bold">Gracias por todo.</text>
            <text x="340" y="260" fontFamily="Georgia,serif" fontSize="22"
              fill="#ff6699" textAnchor="middle" fontWeight="bold">Perdón por todo.</text>
            <text x="340" y="296" fontFamily="Arial" fontSize="13"
              fill="#ffb3cc" textAnchor="middle" opacity="0.9">No olvides pagarme lo de App Inventor 😭</text>
            <text x="340" y="328" fontFamily="Georgia,serif" fontSize="20"
              fill="#ff6699" textAnchor="middle" fontWeight="bold">Te quiero. ❤️</text>

            {/* Pie */}
            <text x="340" y="845" fontFamily="Arial" fontSize="12"
              fill="#ff6699" textAnchor="middle" opacity="0.5">para siempre</text>
          </svg>

        </div>
      )}

    </main>
  )
}