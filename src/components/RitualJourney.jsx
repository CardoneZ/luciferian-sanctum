import React, { useState, useEffect, useRef } from 'react';
import { audioEngine } from '../utils/audioEngine';
import confetti from 'canvas-confetti';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  Award,
  RotateCcw,
  CheckCircle2,
  BookmarkPlus
} from 'lucide-react';

export default function RitualJourney({
  ritual,
  currentStepIndex,
  onStepChange,
  onSaveToBookOfShadows
}) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [vibrationsDone, setVibrationsDone] = useState(0);
  const [isAutoScroll, setIsAutoScroll] = useState(false);
  const [speechRate, setSpeechRate] = useState(0.85); // solemn slow cadence
  const [isCompleted, setIsCompleted] = useState(false);
  const [journalNote, setJournalNote] = useState('');
  const [noteSaved, setNoteSaved] = useState(false);

  const scrollRef = useRef(null);
  const synthRef = useRef(window.speechSynthesis || null);

  const currentStep = ritual.steps[currentStepIndex];
  const totalSteps = ritual.steps.length;
  const progressPercent = Math.round(((currentStepIndex + 1) / totalSteps) * 100);

  // Reset speech and vibration when step changes
  useEffect(() => {
    if (synthRef.current && synthRef.current.speaking) {
      synthRef.current.cancel();
    }
    setIsSpeaking(false);
    setVibrationsDone(0);
    setIsCompleted(false);
    setNoteSaved(false);

    // Scroll to top of recitation on step change
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [currentStepIndex, ritual.id]);

  // Handle Mantic Vibration Click
  const handleVibrate = () => {
    audioEngine.playManticVibration(65, 2.2);
    setVibrationsDone(prev => prev + 1);
  };

  // Text to Speech Recitation
  const handleToggleSpeech = () => {
    if (!synthRef.current) {
      alert("Speech synthesis is not supported on this browser.");
      return;
    }

    if (isSpeaking) {
      synthRef.current.cancel();
      setIsSpeaking(false);
    } else {
      const textToSpeak = currentStep.recitation || currentStep.instruction;
      if (!textToSpeak) return;

      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.rate = speechRate;
      utterance.pitch = 0.75; // Deeper, more ritualistic resonance
      utterance.lang = 'en-US';

      // Pick a deep voice if available
      const voices = synthRef.current.getVoices();
      const solemnVoice = voices.find(v => v.name.toLowerCase().includes('david') || v.name.toLowerCase().includes('male') || v.name.toLowerCase().includes('george'));
      if (solemnVoice) utterance.voice = solemnVoice;

      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      synthRef.current.speak(utterance);
      setIsSpeaking(true);
    }
  };

  // Next Step or Complete
  const handleNext = () => {
    if (currentStepIndex < totalSteps - 1) {
      onStepChange(currentStepIndex + 1);
      audioEngine.playAthameStrike();
    } else {
      // Completed!
      setIsCompleted(true);
      audioEngine.playBell(440);
      audioEngine.playManticVibration(55, 3.5);
      triggerCelebration();
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      onStepChange(currentStepIndex - 1);
    }
  };

  const triggerCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#c0262b', '#d4af37', '#8a121d', '#fef08a', '#1a0a24']
    });
  };

  const handleSaveSession = () => {
    if (onSaveToBookOfShadows) {
      onSaveToBookOfShadows({
        ritualId: ritual.id,
        ritualTitle: ritual.title,
        timestamp: new Date().toISOString(),
        notes: journalNote,
        totalSteps: totalSteps
      });
      setNoteSaved(true);
    }
  };

  return (
    <div className="ritual-journey-container">
      {/* Top Journey Tracker */}
      <div className="journey-header">
        <div className="journey-title-meta">
          <span className="ritual-category-tag">{ritual.category}</span>
          <h2 className="ritual-main-title">{ritual.title}</h2>
          <p className="ritual-subtitle-text">{ritual.subtitle}</p>
        </div>

        {/* Progress Bar & Step Badges */}
        <div className="journey-progress-wrap">
          <div className="progress-labels">
            <span>Step {currentStepIndex + 1} of {totalSteps}</span>
            <span className="progress-percentage">{progressPercent}%</span>
          </div>
          <div className="progress-track">
            <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }} />
          </div>

          <div className="step-dots-row">
            {ritual.steps.map((s, idx) => (
              <button
                key={idx}
                className={`step-dot-btn ${idx === currentStepIndex ? 'active' : ''} ${idx < currentStepIndex ? 'done' : ''}`}
                onClick={() => onStepChange(idx)}
                title={`Jump to ${s.title}`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Step Display Card */}
      {!isCompleted ? (
        <div className="step-card">
          <div className="step-card-header">
            <div className="step-badge-group">
              <span className="step-index-badge">STEP {currentStep.index || currentStepIndex + 1}</span>
              <span className="step-phase-badge">{currentStep.phase}</span>
            </div>
            <h3 className="step-title">{currentStep.title}</h3>
          </div>

          {/* Action Instruction Box */}
          <div className="step-action-box">
            <div className="action-box-icon"><Sparkles size={18} className="text-amber-400" /></div>
            <div className="action-box-text">
              <strong>Action: </strong> {currentStep.instruction}
            </div>
          </div>

          {/* Recitation Viewer (Teleprompter) */}
          {currentStep.recitation && (
            <div className="recitation-teleprompter-section">
              <div className="teleprompter-controls-bar">
                <span className="recite-banner-title">INVOCATION & RECITATION</span>
                <div className="teleprompter-buttons">
                  <button
                    className={`voice-recite-btn ${isSpeaking ? 'active-speaking' : ''}`}
                    onClick={handleToggleSpeech}
                    title="Audio Recitation Assistant (Voice)"
                  >
                    {isSpeaking ? <VolumeX size={15} /> : <Volume2 size={15} />}
                    {isSpeaking ? 'Pause Voice' : 'Spoken Guidance'}
                  </button>
                </div>
              </div>

              <div className="recitation-scroll-box" ref={scrollRef}>
                <div className="recitation-prose">
                  {currentStep.recitation.split('\n\n').map((paragraph, pIdx) => (
                    <p key={pIdx} className="recitation-paragraph">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Phonetics and Pronunciation Tooltip if present */}
              {currentStep.phonetics && (
                <div className="phonetics-tip-box">
                  <span className="phonetics-badge">Phonetics</span>
                  <span className="phonetics-text">{currentStep.phonetics}</span>
                </div>
              )}
            </div>
          )}

          {/* Mantic Vibration Reps Tracker if step has vibrations */}
          {(currentStep.vibrationsCount || currentStep.actionType === 'vibrate_chant' || currentStep.actionType === 'recite_vibrate') && (
            <div className="vibration-tracker-card">
              <div className="vibration-info">
                <span className="vibration-title">Mantic Vibration Counter</span>
                <span className="vibration-subtitle">
                  Vibrate the sacred utterance from your diaphragm ({vibrationsDone} / {currentStep.vibrationsCount || 9} reps)
                </span>
              </div>
              <button className="vibrate-trigger-btn" onClick={handleVibrate}>
                VIBRATE TONE ✦ ({vibrationsDone})
              </button>
            </div>
          )}

          {/* Esoteric Guidance Footer */}
          {currentStep.guidance && (
            <div className="step-guidance-callout">
              <div className="guidance-dot" />
              <div className="guidance-content">
                <strong>Black Flame Focus:</strong> {currentStep.guidance}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="step-navigation-bar">
            <button
              className="nav-step-btn prev"
              onClick={handlePrev}
              disabled={currentStepIndex === 0}
            >
              <ChevronLeft size={18} /> Previous Step
            </button>

            <button
              className="nav-step-btn next-primary"
              onClick={handleNext}
            >
              {currentStepIndex === totalSteps - 1 ? (
                <>Complete Ritual <CheckCircle2 size={18} /></>
              ) : (
                <>Next Step <ChevronRight size={18} /></>
              )}
            </button>
          </div>
        </div>
      ) : (
        /* Ritual Completed Screen */
        <div className="ritual-completed-card">
          <div className="completion-crown-icon">
            <Award size={48} className="text-amber-400 animate-bounce" />
          </div>
          <h3 className="completion-title">Ritual Accomplished</h3>
          <p className="completion-desc">
            The Gates of the Living Temple are consecrated. Your Will, Desire, and Belief have been impressed upon the astral fabric and the living current of the Adversary.
          </p>

          <div className="completion-summary-pillars">
            <div className="completion-pillar-item">
              <span className="pill-title">LIBERATION</span>
              <span className="pill-sub">Dogma Shattered</span>
            </div>
            <div className="completion-pillar-item">
              <span className="pill-title">ILLUMINATION</span>
              <span className="pill-sub">Black Flame Ignited</span>
            </div>
            <div className="completion-pillar-item">
              <span className="pill-title">APOTHEOSIS</span>
              <span className="pill-sub">Self-Deification</span>
            </div>
          </div>

          {/* Book of Shadows Scribe Note */}
          <div className="book-of-shadows-entry-box">
            <div className="entry-header">
              <BookmarkPlus size={16} className="text-amber-400" />
              <span>Record in Book of Shadows (Magical Journal)</span>
            </div>
            <textarea
              value={journalNote}
              onChange={(e) => setJournalNote(e.target.value)}
              placeholder="Record your sensations, insights, omens, or willed manifestations..."
              rows={3}
              className="journal-textarea"
            />
            <div className="entry-actions-row">
              <button
                className={`save-journal-btn ${noteSaved ? 'saved' : ''}`}
                onClick={handleSaveSession}
              >
                {noteSaved ? 'Entry Sealed in Shadows ✓' : 'Scribe to Magical Record'}
              </button>
              <button
                className="restart-ritual-btn"
                onClick={() => {
                  onStepChange(0);
                  setIsCompleted(false);
                }}
              >
                <RotateCcw size={14} /> Restart Ceremony
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
