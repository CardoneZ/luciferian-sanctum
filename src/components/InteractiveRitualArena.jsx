import React, { useState, useEffect, useRef } from 'react';
import { audioEngine } from '../utils/audioEngine';
import LuciferSigil from './LuciferSigil';
import confetti from 'canvas-confetti';
import {
  Flame,
  Bell,
  Compass,
  Sparkles,
  Shield,
  Eye,
  RotateCcw,
  Zap,
  Play
} from 'lucide-react';

export default function InteractiveRitualArena({
  sigilType = 'lucifer_ouroboros',
  isEmpowered = false,
  currentStepData,
  onArenaAction
}) {
  // Candle states: placed & lit
  const [candles, setCandles] = useState({
    black1: { placed: true, lit: false, x: 120, y: 310, label: 'Black (Darkness)', color: 'black' },
    red: { placed: true, lit: false, x: 190, y: 440, label: 'Red (Passion)', color: 'red' },
    white: { placed: true, lit: false, x: 510, y: 440, label: 'White (Intellect)', color: 'white' },
    blue: { placed: true, lit: false, x: 580, y: 310, label: 'Blue (Air/Mind)', color: 'blue' },
    blackFlame: { placed: true, lit: false, x: 350, y: 110, label: 'Black Flame (Awakened)', color: 'blackFlame' }
  });

  // Flame transfer state for Step 5 (White -> Black Flame)
  const [hasWhiteFlameLoaded, setHasWhiteFlameLoaded] = useState(false);

  // Athame state: angle in degrees, pointing target, animating
  const [athameAngle, setAthameAngle] = useState(0); // 0 = straight up (North)
  const [athameThrust, setAthameThrust] = useState(false);
  const [athameTarget, setAthameTarget] = useState('Center');
  const [bladeEnergyBeam, setBladeEnergyBeam] = useState(null); // { x1, y1, x2, y2 }

  // Bell animation state
  const [isBellRinging, setIsBellRinging] = useState(false);
  const [bellRingsCount, setBellRingsCount] = useState(0);
  const [soundRipples, setSoundRipples] = useState([]);

  // Chalice animation state
  const [isChaliceDrinking, setIsChaliceDrinking] = useState(false);
  const [chaliceDrunk, setChaliceDrunk] = useState(false);

  // Incense state
  const [isIncenseLit, setIsIncenseLit] = useState(false);

  // Anointing 'X' gesture state
  const [browXOpacity, setBrowXOpacity] = useState(0);

  // Quarter compass points for athame aiming
  const quarters = [
    { id: 'North', label: 'North (Cain/Amaymon)', angle: 0, x: 350, y: 55 },
    { id: 'North-East', label: 'NE (Asmodai)', angle: 45, x: 560, y: 140 },
    { id: 'East', label: 'East (Lucifer/Air)', angle: 90, x: 645, y: 350 },
    { id: 'South-East', label: 'SE (Abaddon)', angle: 135, x: 560, y: 560 },
    { id: 'South', label: 'South (Thoth/Shaitan)', angle: 180, x: 350, y: 645 },
    { id: 'South-West', label: 'SW (Aggereth)', angle: 225, x: 140, y: 560 },
    { id: 'West', label: 'West (Leviathan/Anubis)', angle: 270, x: 55, y: 350 },
    { id: 'North-West', label: 'NW (Lilith)', angle: 315, x: 140, y: 140 },
    { id: 'Center', label: 'Center (Sigil of Lucifer)', angle: 0, x: 350, y: 350, isCenter: true }
  ];

  // Watch for step changes to suggest or prepare actions
  useEffect(() => {
    if (!currentStepData) return;
    const stepIdx = currentStepData.index;

    if (stepIdx === 1) {
      // Step 1: Light Opening Candles
      // highlighted beacons on 4 candles
    } else if (stepIdx === 2) {
      // Step 2: Ring Bell
    } else if (stepIdx === 5) {
      // Step 5: Transfer flame from white to black candle
    } else if (stepIdx === 6) {
      // Step 6: Mark X
      setBrowXOpacity(0.9);
    } else if (stepIdx === 7) {
      // Step 7: Chalice
    } else if (stepIdx === 8) {
      // Step 8: Point Athame at Sigil
      pointAthameTo('Center');
    }
  }, [currentStepData]);

  // Click on candle
  const handleCandleClick = (candleKey) => {
    const candle = candles[candleKey];

    // Special logic for Step 5: Light black flame from white candle
    if (candleKey === 'blackFlame') {
      if (hasWhiteFlameLoaded) {
        // Transfer flame!
        audioEngine.playFlameIgnite();
        audioEngine.playManticVibration(108, 2.5);
        setCandles(prev => ({
          ...prev,
          blackFlame: { ...prev.blackFlame, lit: true }
        }));
        setHasWhiteFlameLoaded(false);
        spawnEmberBurst(350, 110);
        if (onArenaAction) onArenaAction('black_flame_ignited');
        return;
      } else if (!candle.lit) {
        // Prompt user
        if (candles.white.lit) {
          setHasWhiteFlameLoaded(true);
          audioEngine.playFlameIgnite();
          alert("Spark taken from the White Candle! Now click the Black Flame Candle to transfer the fire.");
        } else {
          // just toggle
          audioEngine.playFlameIgnite();
          setCandles(prev => ({
            ...prev,
            blackFlame: { ...prev.blackFlame, lit: true }
          }));
        }
        return;
      }
    }

    // If clicking white candle when step 5 is active
    if (candleKey === 'white' && candle.lit && currentStepData?.index === 5) {
      setHasWhiteFlameLoaded(true);
      audioEngine.playFlameIgnite();
      return;
    }

    // Regular toggle
    audioEngine.playFlameIgnite();
    setCandles(prev => ({
      ...prev,
      [candleKey]: { ...prev[candleKey], lit: !prev[candleKey].lit }
    }));
    if (onArenaAction) onArenaAction('candle_toggled', { key: candleKey });
  };

  // Light all 4 opening candles automatically
  const handleLightAllOpening = () => {
    audioEngine.playFlameIgnite();
    setIsIncenseLit(true);
    setCandles(prev => ({
      ...prev,
      black1: { ...prev.black1, lit: true },
      red: { ...prev.red, lit: true },
      white: { ...prev.white, lit: true },
      blue: { ...prev.blue, lit: true }
    }));
    spawnEmberBurst(350, 350);
    if (onArenaAction) onArenaAction('opening_candles_lit');
  };

  // Athame Aim & Slash Action
  const pointAthameTo = (quarterId) => {
    const q = quarters.find(item => item.id === quarterId);
    if (!q) return;

    audioEngine.playAthameStrike();
    setAthameTarget(q.id);

    // Compute angle from center (350, 350)
    let angle = q.angle;
    if (q.id === 'Center') {
      angle = 0;
    }
    setAthameAngle(angle);

    // Trigger thrust animation
    setAthameThrust(true);
    setTimeout(() => setAthameThrust(false), 600);

    // Beam of energy from blade tip to target
    setBladeEnergyBeam({
      x1: 350,
      y1: 350,
      x2: q.x,
      y2: q.y
    });
    setTimeout(() => setBladeEnergyBeam(null), 800);

    if (q.id === 'Center') {
      audioEngine.playManticVibration(130, 1.2);
    }
    if (onArenaAction) onArenaAction('athame_pointed', { target: q.id });
  };

  // Ring the Bell
  const ringBell = () => {
    audioEngine.playBell();
    setIsBellRinging(true);
    setTimeout(() => setIsBellRinging(false), 900);

    const nextCount = bellRingsCount + 1;
    setBellRingsCount(nextCount);

    // Spawn sound wave ripple
    const newRippleId = Date.now();
    setSoundRipples(prev => [...prev, newRippleId]);
    setTimeout(() => {
      setSoundRipples(prev => prev.filter(id => id !== newRippleId));
    }, 2000);

    if (onArenaAction) onArenaAction('bell_rung', { count: nextCount });
  };

  // Drink Chalice
  const drinkChalice = () => {
    if (isChaliceDrinking) return;
    audioEngine.playChaliceDrink();
    setIsChaliceDrinking(true);

    setTimeout(() => {
      setChaliceDrunk(true);
      setIsChaliceDrinking(false);
      spawnEmberBurst(480, 240);
      if (onArenaAction) onArenaAction('chalice_consumed');
    }, 1800);
  };

  // Reset chalice
  const refillChalice = () => {
    audioEngine.playChaliceDrink();
    setChaliceDrunk(false);
  };

  // Toggle Incense
  const toggleIncense = () => {
    audioEngine.playFlameIgnite();
    setIsIncenseLit(!isIncenseLit);
  };

  // Trace Crossroads X
  const triggerAnointX = () => {
    audioEngine.playAnointGlow();
    setBrowXOpacity(1);
    setTimeout(() => setBrowXOpacity(0.6), 2500);
    if (onArenaAction) onArenaAction('brow_anointed');
  };

  // Confetti / Ember Burst
  const spawnEmberBurst = (originX, originY) => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { x: originX / 700, y: originY / 700 },
      colors: ['#c0262b', '#d4af37', '#fef08a', '#8a121d']
    });
  };

  // Auto simulate current step action
  const handleAutoSimulateCurrentStep = () => {
    if (!currentStepData) return;
    const stepIdx = currentStepData.index;

    if (stepIdx === 1) {
      handleLightAllOpening();
    } else if (stepIdx === 2) {
      // Ring 3 times for each quarter
      ringBell();
      setTimeout(ringBell, 400);
      setTimeout(ringBell, 800);
    } else if (stepIdx === 5) {
      // Transfer flame
      setCandles(prev => ({
        ...prev,
        white: { ...prev.white, lit: true },
        blackFlame: { ...prev.blackFlame, lit: true }
      }));
      audioEngine.playFlameIgnite();
      audioEngine.playManticVibration(108, 2.5);
      spawnEmberBurst(350, 110);
    } else if (stepIdx === 6) {
      triggerAnointX();
    } else if (stepIdx === 7) {
      drinkChalice();
    } else if (stepIdx === 8) {
      pointAthameTo('Center');
    } else if (stepIdx === 9) {
      ringBell();
      setTimeout(() => {
        setCandles(prev => ({
          black1: { ...prev.black1, lit: false },
          red: { ...prev.red, lit: false },
          white: { ...prev.white, lit: false },
          blue: { ...prev.blue, lit: false },
          blackFlame: { ...prev.blackFlame, lit: false }
        }));
        setIsIncenseLit(false);
      }, 1200);
    }
  };

  return (
    <div className="ritual-arena-component">
      {/* Arena Control Header */}
      <div className="arena-header-controls">
        <div className="arena-title-meta">
          <span className="arena-tag">INTERACTIVE TEMPLE & CIRCLE</span>
          <h3 className="arena-main-title">Altar Arena & Living Geometry</h3>
        </div>

        <div className="arena-action-buttons">
          <button
            className="arena-quick-btn primary"
            onClick={handleAutoSimulateCurrentStep}
            title="Automatically animate this ritual step's physical action"
          >
            <Play size={14} /> Simulate Step Action
          </button>
          <button
            className="arena-quick-btn"
            onClick={handleLightAllOpening}
            title="Light the 4 altar candles and incense"
          >
            <Flame size={14} /> Light Fires
          </button>
        </div>
      </div>

      {/* SVG & HTML RITUAL ARENA CANVAS */}
      <div className="arena-canvas-stage">
        {/* SVG Compass & Geometry Layer */}
        <svg
          viewBox="0 0 700 700"
          className="arena-svg-overlay"
        >
          <defs>
            {/* Glow filters */}
            <filter id="goldBeamGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>

            <linearGradient id="bladeBeamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#ef4444" />
              <stop offset="100%" stopColor="#8a121d" />
            </linearGradient>

            <radialGradient id="arenaFloor" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#14061e" />
              <stop offset="60%" stopColor="#0a0310" />
              <stop offset="100%" stopColor="#040106" />
            </radialGradient>
          </defs>

          {/* Temple Floor Circle */}
          <circle cx="350" cy="350" r="340" fill="url(#arenaFloor)" stroke="rgba(212, 175, 55, 0.3)" strokeWidth="2" />
          <circle cx="350" cy="350" r="325" fill="none" stroke="rgba(192, 38, 43, 0.25)" strokeWidth="1.5" strokeDasharray="6 4" />
          <circle cx="350" cy="350" r="280" fill="none" stroke="rgba(212, 175, 55, 0.18)" strokeWidth="1" />

          {/* Radiating Cardinal Axis Cross (Crossroads of the Self) */}
          <line x1="350" y1="20" x2="350" y2="680" stroke="rgba(212, 175, 55, 0.15)" strokeWidth="1" />
          <line x1="20" y1="350" x2="680" y2="350" stroke="rgba(212, 175, 55, 0.15)" strokeWidth="1" />
          <line x1="117" y1="117" x2="583" y2="583" stroke="rgba(192, 38, 43, 0.12)" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="117" y1="583" x2="583" y2="117" stroke="rgba(192, 38, 43, 0.12)" strokeWidth="1" strokeDasharray="3 3" />

          {/* Expanding Bell Sound Ripples */}
          {soundRipples.map(id => (
            <circle
              key={id}
              cx="220"
              cy="240"
              r="20"
              fill="none"
              stroke="#fef08a"
              strokeWidth="2.5"
              className="sound-wave-ripple"
            />
          ))}

          {/* Athame Energy Beam / Slash line */}
          {bladeEnergyBeam && (
            <line
              x1={bladeEnergyBeam.x1}
              y1={bladeEnergyBeam.y1}
              x2={bladeEnergyBeam.x2}
              y2={bladeEnergyBeam.y2}
              stroke="url(#bladeBeamGrad)"
              strokeWidth="5"
              strokeLinecap="round"
              filter="url(#goldBeamGlow)"
              className="energy-beam-pulse"
            />
          )}

          {/* Interactive Quarter Anchor Points */}
          {quarters.map(q => !q.isCenter && (
            <g
              key={q.id}
              className={`quarter-node ${athameTarget === q.id ? 'active-quarter' : ''}`}
              onClick={() => pointAthameTo(q.id)}
              style={{ cursor: 'pointer' }}
            >
              <circle
                cx={q.x}
                cy={q.y}
                r="16"
                fill={athameTarget === q.id ? '#c0262b' : 'rgba(26, 10, 36, 0.9)'}
                stroke={athameTarget === q.id ? '#fef08a' : '#d4af37'}
                strokeWidth="2"
              />
              <circle
                cx={q.x}
                cy={q.y}
                r="6"
                fill={athameTarget === q.id ? '#fef08a' : '#8a121d'}
              />
              <text
                x={q.x}
                y={q.y + (q.y > 350 ? 28 : -20)}
                fill="#f7d070"
                fontSize="11"
                fontFamily="Cinzel, serif"
                fontWeight="bold"
                textAnchor="middle"
              >
                {q.id}
              </text>
            </g>
          ))}
        </svg>

        {/* CENTER LUCIFER SIGIL (Focal Point of the Temple) */}
        <div
          className="arena-center-sigil-node"
          onClick={() => pointAthameTo('Center')}
          title="Click to aim Athame and focus Black Flame into the Center Sigil"
        >
          <LuciferSigil
            type={sigilType}
            isEmpowered={isEmpowered || candles.blackFlame.lit}
            onSigilClick={() => pointAthameTo('Center')}
            size={300}
          />
        </div>

        {/* CANDLES PLACED ON THE SANCTUM FLOOR */}
        {Object.entries(candles).map(([key, c]) => (
          <div
            key={key}
            className={`arena-candle-node ${key} ${c.lit ? 'lit' : 'unlit'}`}
            style={{
              left: `${(c.x / 700) * 100}%`,
              top: `${(c.y / 700) * 100}%`
            }}
            onClick={() => handleCandleClick(key)}
            title={`${c.label} - Click to light / extinguish`}
          >
            {/* Candle Flame */}
            <div className="candle-flame-holder">
              {c.lit && (
                <div className={`arena-flame flame-${c.color}`}>
                  {key === 'blackFlame' && <div className="inner-dark-core" />}
                </div>
              )}
            </div>
            {/* Wick */}
            <div className="arena-wick" />
            {/* Wax Body */}
            <div className={`arena-wax-body wax-${c.color}`}>
              <span className="wax-label">{key === 'blackFlame' ? 'Flame' : key}</span>
            </div>
            {/* Pedestal */}
            <div className="arena-candle-base" />
          </div>
        ))}

        {/* RITUAL HAND BELL (Top-Left of Altar) */}
        <div
          className={`arena-tool-node bell-tool ${isBellRinging ? 'ringing' : ''}`}
          style={{ left: '26%', top: '27%' }}
          onClick={ringBell}
          title="Ritual Hand Bell - Click to ring for Quarters (North, East, South, West)"
        >
          <div className="bell-brass-body">
            <Bell size={32} className="text-amber-300 bell-swing-svg" />
            <div className="clapper-strike-dot" />
          </div>
          <span className="tool-floating-tag">BELL ({bellRingsCount})</span>
        </div>

        {/* CHALICE OF SAMAEL & LILITH (Top-Right of Altar) */}
        <div
          className={`arena-tool-node chalice-tool ${isChaliceDrinking ? 'drinking-active' : ''}`}
          style={{ left: '72%', top: '27%' }}
          onClick={chaliceDrunk ? refillChalice : drinkChalice}
          title="Chalice of Samael & Lilith - Click to raise & drink"
        >
          <div className="chalice-cup-model">
            <div className="chalice-rim" />
            <div className="chalice-bowl">
              <div
                className="chalice-wine-level"
                style={{ height: chaliceDrunk ? '0%' : '80%' }}
              />
            </div>
            <div className="chalice-stem" />
            <div className="chalice-foot" />
          </div>
          <span className="tool-floating-tag">
            {chaliceDrunk ? 'CHALICE (REFILL)' : 'CHALICE (DRINK)'}
          </span>
        </div>

        {/* DRAGON'S BLOOD INCENSE CENSER (Bottom-Left) */}
        <div
          className={`arena-tool-node censer-tool ${isIncenseLit ? 'fumigating' : ''}`}
          style={{ left: '26%', top: '71%' }}
          onClick={toggleIncense}
          title="Dragon's Blood Incense - Click to ignite fumigation (Qutaru)"
        >
          <div className="censer-bowl-model">
            <div className="censer-charcoal" />
            {isIncenseLit && (
              <div className="censer-smoke-fumes">
                <span className="smoke-fume f1" />
                <span className="smoke-fume f2" />
                <span className="smoke-fume f3" />
              </div>
            )}
          </div>
          <span className="tool-floating-tag">INCENSE {isIncenseLit ? '(ON)' : '(OFF)'}</span>
        </div>

        {/* THE CROSSROADS 'X' ANOINTING SEAL (Forehead Glyph) */}
        <div
          className="arena-tool-node anoint-glyph-tool"
          style={{
            left: '72%',
            top: '71%',
            opacity: browXOpacity > 0 ? browXOpacity : 0.4
          }}
          onClick={triggerAnointX}
          title="The Mark of the Crossroads 'X' - Click to trace on brow"
        >
          <div className="anoint-x-cross">
            <div className="x-slash slash-1" />
            <div className="x-slash slash-2" />
          </div>
          <span className="tool-floating-tag">MARK 'X'</span>
        </div>

        {/* INTERACTIVE ROTATING ATHAME / RITUAL BLADE (Center-Bottom) */}
        <div
          className={`arena-athame-rig ${athameThrust ? 'thrusting' : ''}`}
          style={{
            transform: `translate(-50%, -50%) rotate(${athameAngle}deg)`
          }}
          onClick={() => pointAthameTo(athameTarget === 'Center' ? 'North' : 'Center')}
          title="The Athame - Points to Quarters and the Central Sigil. Click to strike."
        >
          {/* Glowing Astral Aura around the blade */}
          <div className="blade-aura-glow" />

          {/* Steel Blade */}
          <div className="athame-blade-tip" />
          <div className="athame-blade-core">
            <div className="blade-fuller-groove" />
          </div>
          {/* Crossguard */}
          <div className="athame-guard">
            <span className="guard-gem" />
          </div>
          {/* Hilt & Pommel */}
          <div className="athame-hilt" />
          <div className="athame-pommel" />
        </div>
      </div>

      {/* Direct Athame Compass Selector Bar */}
      <div className="arena-compass-dock">
        <div className="compass-dock-left">
          <Compass size={16} className="text-amber-400" />
          <span>Point Athame: <strong>{athameTarget}</strong></span>
        </div>

        <div className="compass-target-buttons">
          {quarters.map(q => (
            <button
              key={q.id}
              className={`target-btn ${athameTarget === q.id ? 'active' : ''} ${q.isCenter ? 'center-btn' : ''}`}
              onClick={() => pointAthameTo(q.id)}
            >
              {q.id}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
