import React, { useState, useEffect } from 'react';
import { RITUALS } from './data/ritualsData';
import { audioEngine } from './utils/audioEngine';
import LuciferSigil from './components/LuciferSigil';
import AltarSimulation from './components/AltarSimulation';
import InteractiveRitualArena from './components/InteractiveRitualArena';
import RitualJourney from './components/RitualJourney';
import GrimoireLibrary from './components/GrimoireLibrary';
import {
  Flame,
  Volume2,
  VolumeX,
  BookOpen,
  Sparkles,
  Layers,
  Compass,
  FileText,
  Copy,
  Check,
  Maximize2,
  Minimize2,
  Eye,
  Activity
} from 'lucide-react';

export default function App() {
  const [selectedRitualId, setSelectedRitualId] = useState('self_illumination_9_steps');
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [currentSigilType, setCurrentSigilType] = useState('lucifer_ouroboros');
  const [activeMainView, setActiveMainView] = useState('temple'); // 'temple', 'altar_only', 'grimoire', 'prompt_export'
  const [templeMode, setTempleMode] = useState('arena'); // 'arena' (animated circle) or 'classic'
  const [isAmbientOn, setIsAmbientOn] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isSigilEmpowered, setIsSigilEmpowered] = useState(false);
  const [useSanctumBackdrop, setUseSanctumBackdrop] = useState(true);
  const [bookOfShadows, setBookOfShadows] = useState(() => {
    try {
      const saved = localStorage.getItem('luciferian_book_of_shadows');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });
  const [copiedPrompt, setCopiedPrompt] = useState(false);

  const activeRitual = RITUALS.find(r => r.id === selectedRitualId) || RITUALS[0];

  // Save Book of Shadows to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('luciferian_book_of_shadows', JSON.stringify(bookOfShadows));
    } catch (e) {}
  }, [bookOfShadows]);

  // When selected ritual changes, update default sigil and reset step
  const handleSelectRitual = (ritualId) => {
    setSelectedRitualId(ritualId);
    setCurrentStepIndex(0);
    const rit = RITUALS.find(r => r.id === ritualId);
    if (rit && rit.defaultSigil) {
      setCurrentSigilType(rit.defaultSigil);
    }
  };

  // Toggle ambient dark drone
  const handleToggleAmbient = () => {
    if (isAmbientOn) {
      audioEngine.stopAmbient();
      setIsAmbientOn(false);
    } else {
      audioEngine.startAmbient('temple');
      setIsAmbientOn(true);
    }
  };

  // Toggle master mute
  const handleToggleMute = () => {
    const muted = audioEngine.toggleMute();
    setIsMuted(muted);
  };

  // Central Sigil Click
  const handleSigilClick = () => {
    audioEngine.playManticVibration(108, 1.8);
    setIsSigilEmpowered(prev => !prev);
  };

  // Record entry into Book of Shadows
  const handleSaveToBookOfShadows = (entry) => {
    setBookOfShadows(prev => [entry, ...prev]);
  };

  const handleDeleteJournalEntry = (index) => {
    setBookOfShadows(prev => prev.filter((_, i) => i !== index));
  };

  const handleClearAllJournal = () => {
    if (window.confirm("Are you sure you wish to clear all entries in your Book of Shadows?")) {
      setBookOfShadows([]);
    }
  };

  // Handle Altar Tool Actions
  const handleToolAction = (action, payload) => {
    if (action === 'light_black_flame' || action === 'anoint_cross') {
      setIsSigilEmpowered(true);
    }
  };

  // Copy full prompt / markdown extraction
  const handleCopyPromptText = () => {
    const fullText = JSON.stringify(RITUALS, null, 2);
    navigator.clipboard.writeText(fullText);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2500);
  };

  return (
    <div className="luciferian-app-root">
      {/* Background Starfield & Ethereal Mist */}
      <div className="cosmic-bg-overlay" />
      <div className="abyssal-vignette" />

      {/* Top Main Navigation Bar */}
      <header className="app-top-header">
        <div className="header-brand-group">
          <div className="brand-logo-icon">
            <Flame size={20} className="text-amber-400" />
          </div>
          <div className="brand-titles">
            <h1 className="brand-main">LUCIFERIAN SANCTUM</h1>
            <span className="brand-sub">The Temple of Self-Deification</span>
          </div>
        </div>

        {/* Ritual Switcher Dropdown */}
        <div className="ritual-quick-selector">
          <label htmlFor="ritual-select" className="selector-label">RITUAL:</label>
          <select
            id="ritual-select"
            value={selectedRitualId}
            onChange={(e) => handleSelectRitual(e.target.value)}
            className="ritual-dropdown-select"
          >
            {RITUALS.map(r => (
              <option key={r.id} value={r.id}>
                {r.title}
              </option>
            ))}
          </select>
        </div>

        {/* Navigation Tabs */}
        <nav className="header-view-nav">
          <button
            className={`nav-tab-item ${activeMainView === 'temple' ? 'active' : ''}`}
            onClick={() => setActiveMainView('temple')}
          >
            <Sparkles size={16} /> Temple & Journey
          </button>
          <button
            className={`nav-tab-item ${activeMainView === 'altar_only' ? 'active' : ''}`}
            onClick={() => setActiveMainView('altar_only')}
          >
            <Compass size={16} /> Altar Chamber
          </button>
          <button
            className={`nav-tab-item ${activeMainView === 'grimoire' ? 'active' : ''}`}
            onClick={() => setActiveMainView('grimoire')}
          >
            <BookOpen size={16} /> Grimoire & Record
          </button>
          <button
            className={`nav-tab-item ${activeMainView === 'prompt_export' ? 'active' : ''}`}
            onClick={() => setActiveMainView('prompt_export')}
          >
            <FileText size={16} /> Data & Prompts
          </button>
        </nav>

        {/* Audio Engine Controls */}
        <div className="audio-controls-group">
          <button
            className={`ambient-sound-btn ${isAmbientOn ? 'playing' : ''}`}
            onClick={handleToggleAmbient}
            title={isAmbientOn ? "Stop 432Hz Temple Drone" : "Start 432Hz Meditative Drone"}
          >
            <Sparkles size={14} className={isAmbientOn ? 'animate-spin' : ''} />
            <span>{isAmbientOn ? 'Temple Drone (432Hz)' : 'Enable Drone'}</span>
          </button>

          <button
            className={`mute-btn ${isMuted ? 'muted' : ''}`}
            onClick={handleToggleMute}
            title={isMuted ? "Unmute Audio" : "Mute Audio"}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </div>
      </header>

      {/* MAIN VIEWPORT */}
      <main className="app-main-viewport">
        {/* VIEW 1: TEMPLE & JOURNEY (SPLIT SCREEN SIMULATION + TELEPROMPTER) */}
        {activeMainView === 'temple' && (
          <div className="temple-journey-split-layout">
            {/* Left/Center Column: The Living Ritual Arena & Central Lucifer Circle */}
            <section className="temple-simulation-column">
              {/* Display Mode & Sigil Bar */}
              <div className="temple-view-mode-bar">
                <div className="mode-toggle-group">
                  <button
                    className={`mode-btn ${templeMode === 'arena' ? 'active' : ''}`}
                    onClick={() => setTempleMode('arena')}
                  >
                    <Activity size={14} /> Circle Arena (Live Animations)
                  </button>
                  <button
                    className={`mode-btn ${templeMode === 'classic' ? 'active' : ''}`}
                    onClick={() => setTempleMode('classic')}
                  >
                    <Compass size={14} /> Altar Tools Table
                  </button>
                </div>

                <div className="sigil-pill-buttons">
                  <button
                    className={`sigil-pill ${currentSigilType === 'lucifer_ouroboros' ? 'active' : ''}`}
                    onClick={() => setCurrentSigilType('lucifer_ouroboros')}
                  >
                    Circle (Woodcut)
                  </button>
                  <button
                    className={`sigil-pill ${currentSigilType === 'lucifer_ouroboros_svg' ? 'active' : ''}`}
                    onClick={() => setCurrentSigilType('lucifer_ouroboros_svg')}
                  >
                    Circle (SVG)
                  </button>
                  <button
                    className={`sigil-pill ${currentSigilType === 'sigil_lucifer' ? 'active' : ''}`}
                    onClick={() => setCurrentSigilType('sigil_lucifer')}
                  >
                    Sigil of Lucifer
                  </button>
                  <button
                    className={`sigil-pill ${currentSigilType === 'sigil_alb' ? 'active' : ''}`}
                    onClick={() => setCurrentSigilType('sigil_alb')}
                  >
                    ALB
                  </button>
                  <button
                    className={`sigil-pill ${currentSigilType === 'circle_adversary' ? 'active' : ''}`}
                    onClick={() => setCurrentSigilType('circle_adversary')}
                  >
                    8 Kings
                  </button>
                  <button
                    className={`sigil-pill ${currentSigilType === 'sigil_algol' ? 'active' : ''}`}
                    onClick={() => setCurrentSigilType('sigil_algol')}
                  >
                    Algol
                  </button>
                </div>
              </div>

              {/* VIEW: LIVE INTERACTIVE RITUAL ARENA */}
              {templeMode === 'arena' ? (
                <div className="arena-wrapper-dock">
                  <InteractiveRitualArena
                    sigilType={currentSigilType}
                    isEmpowered={isSigilEmpowered}
                    currentStepData={activeRitual.steps[currentStepIndex]}
                    onArenaAction={handleToolAction}
                  />
                  {/* Parchment of Intent Station */}
                  <div className="mt-4">
                    <AltarSimulation
                      currentStepData={activeRitual.steps[currentStepIndex]}
                      onToolAction={handleToolAction}
                    />
                  </div>
                </div>
              ) : (
                /* VIEW: CLASSIC ALTAR TABLE & SIGIL */
                <>
                  <div className="central-sigil-altar-focus">
                    <LuciferSigil
                      type={currentSigilType}
                      isEmpowered={isSigilEmpowered}
                      onSigilClick={handleSigilClick}
                      size={360}
                    />
                    <div className="sigil-caption-sub">
                      <span>✦ THE SACRED NEXUS • CLICK TO FOCUS THE BLACK FLAME ✦</span>
                    </div>
                  </div>

                  <AltarSimulation
                    currentStepData={activeRitual.steps[currentStepIndex]}
                    onToolAction={handleToolAction}
                  />
                </>
              )}
            </section>

            {/* Right Column: Step-by-Step Guided Teleprompter */}
            <section className="journey-teleprompter-column">
              <RitualJourney
                ritual={activeRitual}
                currentStepIndex={currentStepIndex}
                onStepChange={setCurrentStepIndex}
                onSaveToBookOfShadows={handleSaveToBookOfShadows}
              />
            </section>
          </div>
        )}

        {/* VIEW 2: FULL ALTAR & CIRCLE CHAMBER */}
        {activeMainView === 'altar_only' && (
          <div className="altar-fullscreen-view">
            <div className="altar-focus-banner">
              <h2>Sanctum Focus & Evocation Arena</h2>
              <p>Direct the Athame, ignite the Black Flame, ring the Bell of Paimon, and drink the Elixir of Samael & Lilith directly on the circle.</p>
            </div>

            <div className="altar-large-canvas-wrapper">
              <div className="sigil-selector-bar centered">
                {[
                  { id: 'lucifer_ouroboros', label: 'Lucifer Circle (Grimoire)' },
                  { id: 'lucifer_ouroboros_svg', label: 'Lucifer Circle (SVG)' },
                  { id: 'sigil_lucifer', label: 'Sigil of Lucifer' },
                  { id: 'sigil_alb', label: 'ALB Talisman' },
                  { id: 'circle_adversary', label: 'Adversary Circle' },
                  { id: 'sigil_algol', label: 'Algol Chaos Star' }
                ].map(item => (
                  <button
                    key={item.id}
                    className={`sigil-pill ${currentSigilType === item.id ? 'active' : ''}`}
                    onClick={() => setCurrentSigilType(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <InteractiveRitualArena
                sigilType={currentSigilType}
                isEmpowered={isSigilEmpowered}
                currentStepData={activeRitual.steps[currentStepIndex]}
                onArenaAction={handleToolAction}
              />

              <div className="mt-6">
                <AltarSimulation
                  currentStepData={activeRitual.steps[currentStepIndex]}
                  onToolAction={handleToolAction}
                />
              </div>
            </div>
          </div>
        )}

        {/* VIEW 3: GRIMOIRE & BOOK OF SHADOWS */}
        {activeMainView === 'grimoire' && (
          <GrimoireLibrary
            bookOfShadowsEntries={bookOfShadows}
            onDeleteEntry={handleDeleteJournalEntry}
            onClearAllEntries={handleClearAllJournal}
          />
        )}

        {/* VIEW 4: PROMPTS & RAW EXTRACTION EXPORT */}
        {activeMainView === 'prompt_export' && (
          <div className="prompt-export-panel">
            <div className="export-header-row">
              <div>
                <h2>Extracted Rituals & Data Architecture</h2>
                <p>Ready to copy into AI prompts or integrate with external grimoire stores and apps.</p>
              </div>
              <button
                className="copy-prompt-btn"
                onClick={handleCopyPromptText}
              >
                {copiedPrompt ? <Check size={16} /> : <Copy size={16} />}
                {copiedPrompt ? 'Copied Full JSON!' : 'Copy Complete JSON Data'}
              </button>
            </div>

            <div className="export-text-area-box">
              <pre className="json-pre-viewer">
                {JSON.stringify(RITUALS, null, 2)}
              </pre>
            </div>
          </div>
        )}
      </main>

      {/* Footer / Status Bar */}
      <footer className="app-footer-bar">
        <div className="footer-left">
          <span>Current Ritual: <strong>{activeRitual.title}</strong></span>
          <span className="footer-divider">•</span>
          <span>Step {currentStepIndex + 1} of {activeRitual.steps.length}</span>
        </div>

        <div className="footer-center">
          <span>Triad of the Morning Star: Liberation • Illumination • Apotheosis</span>
        </div>

        <div className="footer-right">
          <span>Black Flame: <strong className={isSigilEmpowered ? 'text-red-400' : 'text-zinc-400'}>{isSigilEmpowered ? 'Ignited' : 'Dormant'}</strong></span>
        </div>
      </footer>
    </div>
  );
}
