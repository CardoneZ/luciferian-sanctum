import React, { useState } from 'react';

export default function LuciferSigil({
  type = 'lucifer_ouroboros', // 'lucifer_ouroboros', 'lucifer_ouroboros_svg', 'sigil_lucifer', 'sigil_alb', 'circle_adversary', 'sigil_algol'
  isEmpowered = false,
  flameLevel = 1,
  onSigilClick,
  size = 380
}) {
  const [pulseActive, setPulseActive] = useState(false);
  const [renderMode, setRenderMode] = useState('art'); // 'art' (authentic grimoire woodcut) or 'vector' (pure glowing SVG)

  const handleClick = (e) => {
    setPulseActive(true);
    setTimeout(() => setPulseActive(false), 900);
    if (onSigilClick) onSigilClick(e);
  };

  return (
    <div
      className={`sigil-container ${pulseActive ? 'sigil-pulsing' : ''} ${isEmpowered ? 'sigil-empowered' : ''}`}
      style={{
        width: size,
        height: size,
        position: 'relative',
        cursor: 'pointer',
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onClick={handleClick}
      title="Click to focus your Will & ignite the Black Flame upon the Sigil"
    >
      {/* Outer Atmospheric Aura */}
      <div
        className="sigil-glow-orb"
        style={{
          position: 'absolute',
          inset: -25,
          borderRadius: '50%',
          background: isEmpowered
            ? 'radial-gradient(circle, rgba(192, 38, 43, 0.45) 0%, rgba(138, 18, 29, 0.2) 50%, rgba(212, 175, 55, 0.1) 70%, transparent 80%)'
            : 'radial-gradient(circle, rgba(212, 175, 55, 0.25) 0%, rgba(138, 18, 29, 0.12) 45%, transparent 70%)',
          filter: 'blur(20px)',
          pointerEvents: 'none',
          animation: 'sigilBreathing 6s ease-in-out infinite'
        }}
      />

      {/* RENDER OPTION 1: THE USER'S EXACT AUTHENTIC OUROBOROS LUCIFER CIRCLE ARTWORK */}
      {(type === 'lucifer_ouroboros' || type === 'circle_grand_luciferian') && (
        <div
          className="ouroboros-art-wrapper"
          style={{
            width: '100%',
            height: '100%',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Authentic Woodcut Art with Dark Mode Glow filter */}
          <div
            className="woodcut-glow-frame"
            style={{
              width: '92%',
              height: '92%',
              borderRadius: '50%',
              overflow: 'hidden',
              position: 'relative',
              background: '#07030a',
              boxShadow: isEmpowered
                ? '0 0 35px rgba(220, 38, 38, 0.8), inset 0 0 25px rgba(212, 175, 55, 0.5)'
                : '0 0 20px rgba(212, 175, 55, 0.4), inset 0 0 15px rgba(138, 18, 29, 0.4)',
              border: isEmpowered ? '2px solid #ef4444' : '2px solid #d4af37',
              transition: 'all 0.5s ease'
            }}
          >
            <img
              src="/lucifer_circle.png"
              alt="Grand Luciferian Ouroboros Circle"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                filter: isEmpowered
                  ? 'invert(1) hue-rotate(330deg) drop-shadow(0 0 8px #ef4444) brightness(1.2)'
                  : 'invert(1) hue-rotate(40deg) drop-shadow(0 0 5px #d4af37) brightness(1.05)',
                mixBlendMode: 'screen',
                transition: 'filter 0.5s ease'
              }}
            />
          </div>

          {/* Central Pulsing Eye / Flame Highlight */}
          <div
            className="eye-flame-highlight"
            style={{
              position: 'absolute',
              top: '41%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 32,
              height: 20,
              borderRadius: '50%',
              background: isEmpowered
                ? 'radial-gradient(circle, #fef08a 0%, #c0262b 60%, transparent 100%)'
                : 'radial-gradient(circle, #f7d070 0%, #8a121d 60%, transparent 100%)',
              opacity: isEmpowered ? 0.85 : 0.4,
              filter: 'blur(3px)',
              pointerEvents: 'none',
              animation: 'flamePulse 2s infinite alternate'
            }}
          />
        </div>
      )}

      {/* RENDER OPTION 2: PURE VECTOR SVG RECREATION OF THE OUROBOROS LUCIFER CIRCLE */}
      {type === 'lucifer_ouroboros_svg' && (
        <svg
          viewBox="0 0 400 400"
          width="100%"
          height="100%"
          className="sigil-svg"
          style={{
            filter: isEmpowered
              ? 'drop-shadow(0 0 14px rgba(220, 38, 38, 0.85)) drop-shadow(0 0 25px rgba(212, 175, 55, 0.6))'
              : 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.5))'
          }}
        >
          <defs>
            <linearGradient id="goldLucifer" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="45%" stopColor="#d4af37" />
              <stop offset="100%" stopColor="#8a121d" />
            </linearGradient>

            <radialGradient id="serpentGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#0c0413" />
              <stop offset="70%" stopColor="#1a0a24" />
              <stop offset="95%" stopColor="#8a121d" />
              <stop offset="100%" stopColor="#d4af37" />
            </radialGradient>
          </defs>

          {/* Background circle */}
          <circle cx="200" cy="200" r="185" fill="#07030a" />

          {/* Ouroboros Serpent Body with Scale Pattern */}
          <circle
            cx="200"
            cy="200"
            r="165"
            fill="none"
            stroke="url(#goldLucifer)"
            strokeWidth="32"
            strokeDasharray="6 3"
            opacity="0.9"
          />
          <circle cx="200" cy="200" r="181" fill="none" stroke="#d4af37" strokeWidth="2.5" />
          <circle cx="200" cy="200" r="149" fill="none" stroke="#d4af37" strokeWidth="2" />

          {/* Ouroboros Head at the top (eating tail) */}
          <g transform="translate(200, 32)">
            {/* Dragon Head */}
            <path
              d="M -18 0 C -25 -15, 0 -22, 18 -10 C 22 5, 0 16, -18 0 Z"
              fill="#c0262b"
              stroke="#fef08a"
              strokeWidth="2"
            />
            {/* Horns & Eyes */}
            <circle cx="-6" cy="-6" r="3" fill="#fef08a" />
            <circle cx="6" cy="-6" r="3" fill="#fef08a" />
            {/* Crown flowers / crest */}
            <polygon points="-8,-16 0,-24 8,-16" fill="#d4af37" />
          </g>

          {/* Large Equilateral Upward Triangle */}
          <polygon
            points="200,55 330,305 70,305"
            fill="rgba(138, 18, 29, 0.12)"
            stroke="url(#goldLucifer)"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Inner Circular Glyphs Band */}
          <circle cx="200" cy="215" r="115" fill="none" stroke="#d4af37" strokeWidth="2.5" />
          <circle cx="200" cy="215" r="95" fill="#08030d" stroke="#d4af37" strokeWidth="1.8" />

          {/* Inscribed Hebrew & Esoteric Glyphs in Band */}
          <g fontFamily="Cinzel, serif" fontSize="16" fontWeight="bold" fill="#fef08a" textAnchor="middle">
            <text x="200" y="118">א</text>
            <text x="245" y="130">ל</text>
            <text x="285" y="165">ה</text>
            <text x="295" y="215">י</text>
            <text x="285" y="265">ם</text>
            <text x="245" y="300">ש</text>
            <text x="200" y="318">מ</text>
            <text x="155" y="300">א</text>
            <text x="115" y="265">ל</text>
            <text x="105" y="215">ו</text>
            <text x="115" y="165">ת</text>
            <text x="155" y="130">נ</text>
          </g>

          {/* INVERTED SIGIL OF LUCIFER IN CENTER */}
          <g id="lucifer-inner-sigil" transform="translate(0, 15)">
            {/* Upper Inverted Triangle of Lucifer Sigil */}
            <polygon
              points="140,150 260,150 200,240"
              fill="rgba(192, 38, 43, 0.18)"
              stroke="url(#goldLucifer)"
              strokeWidth="3"
            />

            {/* Radiant Eye of Awakening inside the Triangle */}
            <g transform="translate(200, 168)">
              <path
                d="M -24 -2 Q 0 -16 24 -2 Q 0 14 -24 -2 Z"
                fill="#15061c"
                stroke="#fef08a"
                strokeWidth="1.8"
              />
              <circle cx="0" cy="-2" r="6" fill="#c0262b" />
              <circle cx="0" cy="-2" r="2.5" fill="#fef08a" />
              {/* Eyelashes / Solar Rays */}
              <line x1="0" y1="12" x2="0" y2="20" stroke="#d4af37" strokeWidth="1.5" />
              <line x1="-12" y1="10" x2="-18" y2="17" stroke="#d4af37" strokeWidth="1.5" />
              <line x1="12" y1="10" x2="18" y2="17" stroke="#d4af37" strokeWidth="1.5" />
              <line x1="-6" y1="11" x2="-9" y2="19" stroke="#d4af37" strokeWidth="1.5" />
              <line x1="6" y1="11" x2="9" y2="19" stroke="#d4af37" strokeWidth="1.5" />
            </g>

            {/* Crossing Swords / Diagonal Lines */}
            <line x1="145" y1="150" x2="245" y2="230" stroke="#fef08a" strokeWidth="3" strokeLinecap="round" />
            <line x1="255" y1="150" x2="155" y2="230" stroke="#fef08a" strokeWidth="3" strokeLinecap="round" />

            {/* Vertical Axis (Central Pillar) */}
            <line x1="200" y1="135" x2="200" y2="275" stroke="url(#goldLucifer)" strokeWidth="3.2" />

            {/* Lower Horns / Intertwined Seraphic Curves */}
            <path
              d="M 170 245 C 160 270, 180 290, 200 270 C 220 290, 240 270, 230 245"
              fill="none"
              stroke="#fef08a"
              strokeWidth="3"
            />
            <path
              d="M 170 245 C 150 240, 145 265, 160 272"
              fill="none"
              stroke="#d4af37"
              strokeWidth="2.5"
            />
            <path
              d="M 230 245 C 250 240, 255 265, 240 272"
              fill="none"
              stroke="#d4af37"
              strokeWidth="2.5"
            />
          </g>
        </svg>
      )}

      {/* RENDER OPTION 3: CLASSIC SIGIL OF LUCIFER (GRIMORIUM VERUM) */}
      {type === 'sigil_lucifer' && (
        <svg
          viewBox="0 0 400 400"
          width="100%"
          height="100%"
          className="sigil-svg"
          style={{
            filter: isEmpowered
              ? 'drop-shadow(0 0 14px rgba(220, 38, 38, 0.85)) drop-shadow(0 0 25px rgba(212, 175, 55, 0.6))'
              : 'drop-shadow(0 0 8px rgba(212, 175, 55, 0.45))'
          }}
        >
          <circle cx="200" cy="200" r="185" fill="#08030d" stroke="#d4af37" strokeWidth="2.5" strokeDasharray="4 2" />
          <circle cx="200" cy="200" r="176" fill="#060209" stroke="#8a121d" strokeWidth="1.5" />

          {/* Top Horizon Line */}
          <line x1="80" y1="95" x2="320" y2="95" stroke="#d4af37" strokeWidth="4" strokeLinecap="round" />

          {/* Large Inverted Triangle Chevron */}
          <polygon points="90,100 310,100 200,310" fill="rgba(192, 38, 43, 0.08)" stroke="#d4af37" strokeWidth="3.5" />

          {/* Crossed Diagonal Rays */}
          <line x1="105" y1="100" x2="280" y2="280" stroke="#fef08a" strokeWidth="3.2" strokeLinecap="round" />
          <line x1="295" y1="100" x2="120" y2="280" stroke="#fef08a" strokeWidth="3.2" strokeLinecap="round" />

          {/* Vertical Pillar */}
          <line x1="200" y1="75" x2="200" y2="335" stroke="#d4af37" strokeWidth="3.8" strokeLinecap="round" />

          {/* Lower Horns & Intertwined Curves */}
          <path d="M 145 285 C 130 320, 160 350, 185 330 C 195 320, 200 310, 200 310" fill="none" stroke="#fef08a" strokeWidth="3.5" />
          <path d="M 255 285 C 270 320, 240 350, 215 330 C 205 320, 200 310, 200 310" fill="none" stroke="#fef08a" strokeWidth="3.5" />
          <path d="M 145 285 C 120 280, 115 310, 135 320 C 150 325, 160 305, 145 285" fill="none" stroke="#d4af37" strokeWidth="2.8" />
          <path d="M 255 285 C 280 280, 285 310, 265 320 C 250 325, 240 305, 255 285" fill="none" stroke="#d4af37" strokeWidth="2.8" />

          {/* Crossbars */}
          <line x1="165" y1="260" x2="235" y2="260" stroke="#fef08a" strokeWidth="2.5" />
          <line x1="175" y1="240" x2="225" y2="240" stroke="#d4af37" strokeWidth="2" />

          {/* Central Eye in Triangle */}
          <g transform="translate(200, 160)">
            <path d="M -32 0 Q 0 -18 32 0 Q 0 18 -32 0 Z" fill="#13081a" stroke="#d4af37" strokeWidth="2" />
            <circle cx="0" cy="0" r="8" fill="#c0262b" />
            <circle cx="0" cy="0" r="3.5" fill="#fef08a" />
          </g>
        </svg>
      )}

      {/* RENDER OPTION 4: ALB TALISMAN */}
      {type === 'sigil_alb' && (
        <svg viewBox="0 0 400 400" width="100%" height="100%" className="sigil-svg">
          <circle cx="200" cy="200" r="185" fill="#08040d" stroke="#d4af37" strokeWidth="3" />
          <circle cx="200" cy="200" r="145" fill="none" stroke="#d4af37" strokeWidth="1.8" />
          {/* 8-Rayed Star of Venus */}
          <g transform="translate(200, 200)">
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <g key={i} transform={`rotate(${angle})`}>
                <polygon points="0,-130 18,-65 0,-50 -18,-65" fill="#d4af37" stroke="#8a121d" strokeWidth="1.5" />
              </g>
            ))}
          </g>
          {/* Eye of Horus */}
          <circle cx="200" cy="200" r="50" fill="#13081a" stroke="#d4af37" strokeWidth="2.5" />
          <g transform="translate(200, 200)">
            <path d="M -30 -2 Q 0 -22 30 -2 Q 0 18 -30 -2 Z" fill="#2a0a24" stroke="#c0262b" strokeWidth="2.5" />
            <circle cx="0" cy="-2" r="10" fill="#c0262b" />
            <circle cx="0" cy="-2" r="4" fill="#fef08a" />
            <path d="M 12 12 Q 20 28 8 36 Q -2 40 4 32" fill="none" stroke="#d4af37" strokeWidth="2" />
          </g>
        </svg>
      )}

      {/* RENDER OPTION 5: CIRCLE OF ADVERSARY */}
      {type === 'circle_adversary' && (
        <svg viewBox="0 0 400 400" width="100%" height="100%" className="sigil-svg">
          <circle cx="200" cy="200" r="185" fill="#09050e" stroke="#d4af37" strokeWidth="3" />
          <circle cx="200" cy="200" r="150" fill="none" stroke="#8a121d" strokeWidth="2" />
          <circle cx="200" cy="200" r="115" fill="none" stroke="#d4af37" strokeWidth="1.5" />
          <circle cx="200" cy="200" r="70" fill="#15081c" stroke="#c0262b" strokeWidth="2" />
          <circle cx="200" cy="200" r="45" fill="#050208" stroke="#f7d070" strokeWidth="2.5" />
          <text x="200" y="206" fill="#fef08a" fontSize="14" fontWeight="bold" textAnchor="middle" letterSpacing="3" fontFamily="Cinzel, serif">
            AZOTHOZ
          </text>
        </svg>
      )}

      {/* RENDER OPTION 6: ALGOL CHAOS STAR */}
      {type === 'sigil_algol' && (
        <svg viewBox="0 0 400 400" width="100%" height="100%" className="sigil-svg">
          <circle cx="200" cy="200" r="185" fill="#080208" stroke="#8a121d" strokeWidth="3" />
          <circle cx="200" cy="200" r="120" fill="none" stroke="#d4af37" strokeWidth="2" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <g key={i} transform={`translate(200,200) rotate(${angle})`}>
              <line x1="0" y1="-50" x2="0" y2="-175" stroke="#f7d070" strokeWidth="4.5" />
              <polygon points="0,-185 14,-160 -14,-160" fill="#c0262b" stroke="#f7d070" strokeWidth="2" />
            </g>
          ))}
          <g transform="translate(200, 200)">
            <polygon points="0,65 62,-20 -38,-92 38,-92 -62,-20" fill="rgba(192, 38, 43, 0.3)" stroke="#fef08a" strokeWidth="3.2" />
            <circle cx="0" cy="0" r="22" fill="#0a050d" stroke="#c0262b" strokeWidth="2" />
            <text x="0" y="5" fill="#d4af37" fontSize="10" textAnchor="middle" fontFamily="Cinzel, serif" fontWeight="bold">ALGOL</text>
          </g>
        </svg>
      )}

      {/* Central Black Flame Overlay when Empowered */}
      {isEmpowered && (
        <div
          className="central-black-flame"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 80,
            height: 110,
            pointerEvents: 'none',
            zIndex: 10
          }}
        >
          <div className="flame-aura-core" />
          <div className="flame-tongue-black" />
          <div className="flame-sparkle-gold" />
        </div>
      )}
    </div>
  );
}
