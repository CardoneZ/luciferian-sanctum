import React, { useState, useEffect } from 'react';
import { audioEngine } from '../utils/audioEngine';
import { Flame, Bell, Sparkles, Compass, Shield, Wind, PenTool, CheckCircle, RotateCcw } from 'lucide-react';

export default function AltarSimulation({
  currentStepData,
  onToolAction,
  onStepCompleteCheck
}) {
  // Candle lighting states
  const [candles, setCandles] = useState({
    black1: false,
    red: false,
    white: false,
    blue: false,
    blackFlame: false
  });

  // Tool states
  const [isIncenseBurning, setIsIncenseBurning] = useState(false);
  const [bellRingsCount, setBellRingsCount] = useState(0);
  const [athameDirection, setAthameDirection] = useState('Center'); // 'North', 'East', 'South', 'West', 'Center', etc.
  const [chaliceDrunk, setChaliceDrunk] = useState(false);
  const [chaliceLevel, setChaliceLevel] = useState(100);
  const [parchmentText, setParchmentText] = useState('By my own Free Will, I Awaken, Rise and Ascend.');
  const [isParchmentBurning, setIsParchmentBurning] = useState(false);
  const [parchmentBurned, setParchmentBurned] = useState(false);
  const [isAnointModalOpen, setIsAnointModalOpen] = useState(false);
  const [anointDrawn, setAnointDrawn] = useState(false);

  // Toggle candle
  const handleToggleCandle = (candleKey) => {
    audioEngine.playFlameIgnite();
    setCandles(prev => {
      const next = { ...prev, [candleKey]: !prev[candleKey] };
      if (onToolAction) onToolAction('candle_toggle', { key: candleKey, state: next[candleKey] });
      return next;
    });
  };

  // Light all 4 opening candles (Step 1 quick action)
  const handleLightAltarCandles = () => {
    audioEngine.playFlameIgnite();
    setIsIncenseBurning(true);
    setCandles(prev => ({
      ...prev,
      black1: true,
      red: true,
      white: true,
      blue: true
    }));
    if (onToolAction) onToolAction('light_all_opening', {});
  };

  // Transfer fire from white candle to black flame candle (Step 5)
  const handleTransferFlameToBlack = () => {
    if (!candles.white) {
      alert("The White Candle must be lit first to transfer the spark of consciousness!");
      return;
    }
    audioEngine.playFlameIgnite();
    audioEngine.playManticVibration(108, 1.5);
    setCandles(prev => ({ ...prev, blackFlame: true }));
    if (onToolAction) onToolAction('light_black_flame', {});
  };

  // Ring the bell
  const handleRingBell = () => {
    audioEngine.playBell();
    const nextCount = bellRingsCount + 1;
    setBellRingsCount(nextCount);
    if (onToolAction) onToolAction('ring_bell', { count: nextCount });
  };

  // Reset bell count
  const handleResetBell = () => {
    setBellRingsCount(0);
  };

  // Athame point direction
  const handlePointAthame = (dir) => {
    audioEngine.playAthameStrike();
    setAthameDirection(dir);
    if (onToolAction) onToolAction('point_athame', { direction: dir });
  };

  // Drink Chalice
  const handleDrinkChalice = () => {
    if (chaliceDrunk) {
      // refill
      setChaliceDrunk(false);
      setChaliceLevel(100);
      audioEngine.playChaliceDrink();
    } else {
      audioEngine.playChaliceDrink();
      setChaliceLevel(0);
      setChaliceDrunk(true);
      if (onToolAction) onToolAction('drink_chalice', {});
    }
  };

  // Burn Parchment
  const handleBurnParchment = () => {
    if (isParchmentBurning || parchmentBurned) return;
    audioEngine.playFlameIgnite();
    setIsParchmentBurning(true);
    setTimeout(() => {
      setIsParchmentBurning(false);
      setParchmentBurned(true);
      audioEngine.playManticVibration(88, 2);
      if (onToolAction) onToolAction('burn_parchment', { text: parchmentText });
    }, 2500);
  };

  // Reset Parchment
  const handleResetParchment = () => {
    setParchmentBurned(false);
    setIsParchmentBurning(false);
  };

  // Toggle Incense
  const handleToggleIncense = () => {
    audioEngine.playFlameIgnite();
    setIsIncenseBurning(!isIncenseBurning);
  };

  return (
    <div className="altar-simulation-panel">
      {/* Altar Header & Status */}
      <div className="altar-top-bar">
        <div className="altar-title-group">
          <span className="altar-eyebrow">SANCTUM SIMULATION</span>
          <h3 className="altar-title">The Luciferian Altar</h3>
        </div>

        <div className="altar-quick-actions">
          <button
            className="altar-action-btn primary"
            onClick={handleLightAltarCandles}
            title="Light the 4 altar candles and incense"
          >
            <Flame size={15} /> Light Opening Fires
          </button>
          <button
            className="altar-action-btn secondary"
            onClick={() => setCandles({ black1: false, red: false, white: false, blue: false, blackFlame: false, })}
            title="Extinguish all candles"
          >
            Extinguish All
          </button>
        </div>
      </div>

      {/* Main Altar Physical Representation */}
      <div className="altar-table-surface">
        {/* Candle Array */}
        <div className="candles-row">
          {/* Black Candle 1 */}
          <div
            className={`candle-item ${candles.black1 ? 'lit' : 'unlit'}`}
            onClick={() => handleToggleCandle('black1')}
            title="Black Candle (Darkness & Primal Instinct) - Click to toggle"
          >
            <div className="flame-container">
              {candles.black1 && <div className="candle-flame yellow-flame" />}
            </div>
            <div className="candle-wick" />
            <div className="candle-body candle-black">
              <span className="candle-label">Black</span>
            </div>
            <div className="candle-stand" />
          </div>

          {/* Red Candle */}
          <div
            className={`candle-item ${candles.red ? 'lit' : 'unlit'}`}
            onClick={() => handleToggleCandle('red')}
            title="Red Candle (Fiery Passion & Desire) - Click to toggle"
          >
            <div className="flame-container">
              {candles.red && <div className="candle-flame crimson-flame" />}
            </div>
            <div className="candle-wick" />
            <div className="candle-body candle-red">
              <span className="candle-label">Red</span>
            </div>
            <div className="candle-stand" />
          </div>

          {/* Special Black Flame Candle (Center) */}
          <div
            className={`candle-item center-flame-candle ${candles.blackFlame ? 'lit' : 'unlit'}`}
            onClick={handleTransferFlameToBlack}
            title="Black Flame Candle (Ignited in Step 5 from White Candle) - Click to ignite"
          >
            <div className="flame-container">
              {candles.blackFlame && (
                <div className="candle-flame black-violet-flame">
                  <div className="black-flame-core" />
                </div>
              )}
            </div>
            <div className="candle-wick" />
            <div className="candle-body candle-black-flame">
              <span className="candle-label-special">Black Flame</span>
            </div>
            <div className="candle-stand gold-stand" />
          </div>

          {/* White Candle */}
          <div
            className={`candle-item ${candles.white ? 'lit' : 'unlit'}`}
            onClick={() => handleToggleCandle('white')}
            title="White Candle (Higher Conscious Mind & Light) - Click to toggle"
          >
            <div className="flame-container">
              {candles.white && <div className="candle-flame brilliant-white-flame" />}
            </div>
            <div className="candle-wick" />
            <div className="candle-body candle-white">
              <span className="candle-label">White</span>
            </div>
            <div className="candle-stand" />
          </div>

          {/* Blue Candle */}
          <div
            className={`candle-item ${candles.blue ? 'lit' : 'unlit'}`}
            onClick={() => handleToggleCandle('blue')}
            title="Blue Candle (Element of Air & Imagination) - Click to toggle"
          >
            <div className="flame-container">
              {candles.blue && <div className="candle-flame cyan-blue-flame" />}
            </div>
            <div className="candle-wick" />
            <div className="candle-body candle-blue">
              <span className="candle-label">Blue</span>
            </div>
            <div className="candle-stand" />
          </div>
        </div>

        {/* Center Altar Tools Tray */}
        <div className="altar-tools-grid">
          {/* Incense Burner / Censer */}
          <div
            className={`altar-tool-card censer-card ${isIncenseBurning ? 'burning' : ''}`}
            onClick={handleToggleIncense}
            title="Dragon's Blood Incense Burner - Click to fumigate"
          >
            <div className="tool-icon-wrapper">
              <Wind className={isIncenseBurning ? 'text-amber-400 animate-pulse' : 'text-zinc-500'} size={24} />
              {isIncenseBurning && (
                <div className="smoke-particles-box">
                  <span className="smoke-particle s1" />
                  <span className="smoke-particle s2" />
                  <span className="smoke-particle s3" />
                </div>
              )}
            </div>
            <div className="tool-info">
              <span className="tool-name">Dragon's Blood</span>
              <span className="tool-status">{isIncenseBurning ? 'Fumigating (Qutaru)' : 'Extinguished'}</span>
            </div>
          </div>

          {/* Hand Bell (Ghanta) */}
          <div
            className="altar-tool-card bell-card"
            onClick={handleRingBell}
            title="Ritual Hand Bell - Click to strike chime"
          >
            <div className="tool-icon-wrapper">
              <Bell className="text-yellow-400 bell-icon-swing" size={24} />
            </div>
            <div className="tool-info">
              <span className="tool-name">Altar Bell</span>
              <div className="tool-counter-row">
                <span className="ring-count-badge">{bellRingsCount} Rings</span>
                {bellRingsCount > 0 && (
                  <button
                    className="reset-mini-btn"
                    onClick={(e) => { e.stopPropagation(); handleResetBell(); }}
                    title="Reset count"
                  >
                    <RotateCcw size={12} />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Chalice / Goblet of Samael & Lilith */}
          <div
            className="altar-tool-card chalice-card"
            onClick={handleDrinkChalice}
            title="Chalice of Samael & Lilith - Click to drink elixir"
          >
            <div className="tool-icon-wrapper">
              <div className="chalice-liquid-vessel">
                <div
                  className="chalice-fill-level"
                  style={{ height: `${chaliceLevel}%` }}
                />
              </div>
            </div>
            <div className="tool-info">
              <span className="tool-name">Chalice</span>
              <span className="tool-status">
                {chaliceDrunk ? 'Empty (Drunk)' : 'Full with Elixir'}
              </span>
            </div>
          </div>

          {/* Brow Anointing Crossroads 'X' */}
          <div
            className="altar-tool-card anoint-card"
            onClick={() => setIsAnointModalOpen(true)}
            title="Anoint Brow with Cross 'X' (Step 6)"
          >
            <div className="tool-icon-wrapper">
              <Sparkles className={anointDrawn ? 'text-crimson-bright' : 'text-amber-300'} size={24} />
            </div>
            <div className="tool-info">
              <span className="tool-name">Mark of 'X'</span>
              <span className="tool-status">
                {anointDrawn ? 'Marked upon Brow' : 'Click to Anoint'}
              </span>
            </div>
          </div>
        </div>

        {/* Athame Directional Controls */}
        <div className="athame-direction-dock">
          <div className="athame-header">
            <div className="athame-icon-title">
              <Shield size={16} className="text-amber-400" />
              <span>Athame Direction: <strong>{athameDirection}</strong></span>
            </div>
            <span className="athame-hint">Point blade to cast circle & evoke quarters</span>
          </div>

          <div className="direction-buttons-grid">
            <button
              className={`dir-btn ${athameDirection === 'North-West' ? 'active' : ''}`}
              onClick={() => handlePointAthame('North-West')}
            >
              NW (Lilith)
            </button>
            <button
              className={`dir-btn ${athameDirection === 'North' ? 'active' : ''}`}
              onClick={() => handlePointAthame('North')}
            >
              N (Cain / Belial)
            </button>
            <button
              className={`dir-btn ${athameDirection === 'North-East' ? 'active' : ''}`}
              onClick={() => handlePointAthame('North-East')}
            >
              NE (Asmodai)
            </button>

            <button
              className={`dir-btn ${athameDirection === 'West' ? 'active' : ''}`}
              onClick={() => handlePointAthame('West')}
            >
              W (Anubis / Leviathan)
            </button>
            <button
              className={`dir-btn center-dir ${athameDirection === 'Center' ? 'active' : ''}`}
              onClick={() => handlePointAthame('Center')}
            >
              ✦ Center Sigil ✦
            </button>
            <button
              className={`dir-btn ${athameDirection === 'East' ? 'active' : ''}`}
              onClick={() => handlePointAthame('East')}
            >
              E (Lucifer / Set)
            </button>

            <button
              className={`dir-btn ${athameDirection === 'South-West' ? 'active' : ''}`}
              onClick={() => handlePointAthame('South-West')}
            >
              SW (Aggereth)
            </button>
            <button
              className={`dir-btn ${athameDirection === 'South' ? 'active' : ''}`}
              onClick={() => handlePointAthame('South')}
            >
              S (Thoth / Shaitan)
            </button>
            <button
              className={`dir-btn ${athameDirection === 'South-East' ? 'active' : ''}`}
              onClick={() => handlePointAthame('South-East')}
            >
              SE (Abaddon)
            </button>
          </div>
        </div>

        {/* Parchment of Intent Scribe & Burn */}
        <div className="parchment-station">
          <div className="parchment-station-header">
            <span className="station-title"><PenTool size={14} /> Parchment of Intent</span>
            {parchmentBurned && (
              <button className="reset-mini-btn" onClick={handleResetParchment}>
                <RotateCcw size={12} /> New Parchment
              </button>
            )}
          </div>

          {!parchmentBurned ? (
            <div className={`parchment-sheet ${isParchmentBurning ? 'burning-sheet' : ''}`}>
              <textarea
                value={parchmentText}
                onChange={(e) => setParchmentText(e.target.value)}
                placeholder="Inscribe your personal Statement of Intent or Will here..."
                disabled={isParchmentBurning}
                rows={2}
                className="parchment-textarea"
              />
              <button
                className="parchment-burn-btn"
                onClick={handleBurnParchment}
                disabled={isParchmentBurning || !parchmentText.trim()}
              >
                <Flame size={14} /> {isParchmentBurning ? 'Consuming in Black Flame...' : 'Burn in Altar Flame'}
              </button>
            </div>
          ) : (
            <div className="parchment-consumed-badge">
              <CheckCircle size={16} className="text-red-400" />
              <span>Intent Released unto the Astral Realm & Daemon</span>
            </div>
          )}
        </div>
      </div>

      {/* Interactive Anointing Modal (Trace the Crossroads X) */}
      {isAnointModalOpen && (
        <div className="anoint-modal-overlay" onClick={() => setIsAnointModalOpen(false)}>
          <div className="anoint-modal-content" onClick={(e) => e.stopPropagation()}>
            <h4 className="modal-title">The Crossroads Mark of 'X'</h4>
            <p className="modal-desc">
              Dip your left hand into oil or symbolic blood and trace the Crossroads 'X' across your brow, proclaiming self-liberation.
            </p>

            <div
              className={`interactive-brow-canvas ${anointDrawn ? 'drawn' : ''}`}
              onClick={() => {
                audioEngine.playAnointGlow();
                setAnointDrawn(true);
              }}
            >
              <div className="crossroads-x-line line-left" />
              <div className="crossroads-x-line line-right" />
              {!anointDrawn ? (
                <div className="canvas-tap-hint">Tap here to trace the 'X' on your brow</div>
              ) : (
                <div className="canvas-sealed-label">✦ SEAL OF THE CROSSROADS MARKED ✦</div>
              )}
            </div>

            <div className="modal-recite-quote">
              "This mark upon the brow is the symbol of freedom from restrictive belief, a mark of the crossroads of self-illumination."
            </div>

            <button
              className="modal-close-btn"
              onClick={() => {
                setIsAnointModalOpen(false);
                if (onToolAction) onToolAction('anoint_cross', {});
              }}
            >
              Affirm & Complete Anointing
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
