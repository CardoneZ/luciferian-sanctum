// Luciferian Web Audio Engine - 100% Client-Side Synthesizer
// Provides realistic bell harmonics, dark drone soundscapes, flame crackle, and mantic vibration pulses

class RitualAudioEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.ambientGain = null;
    this.ambientNodes = [];
    this.isAmbientPlaying = false;
    this.ambientType = 'temple'; // 'temple', 'fire', 'abyss', 'silent'
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Authentic Physical Modeling Bell Chime (Rich Overtones + Long Decay)
  playBell(pitch = 587.33) { // D5 or customized pitch
    this.init();
    if (this.isMuted) return;

    const now = this.ctx.currentTime;
    const masterGain = this.ctx.createGain();
    masterGain.gain.setValueAtTime(0.7, now);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 4.5);
    masterGain.connect(this.ctx.destination);

    // Bell harmonic ratios: Hum (0.5), Prime (1.0), Tierce (1.2), Quint (1.5), Nominal (2.0), Supernominal (3.0), High Rim (4.2)
    const harmonicRatios = [0.5, 1.0, 1.19, 1.51, 2.0, 2.74, 3.82, 5.15];
    const harmonicGains = [0.6, 1.0, 0.5, 0.4, 0.7, 0.3, 0.2, 0.1];
    const decayTimes = [4.5, 3.8, 3.2, 2.5, 2.0, 1.5, 1.0, 0.7];

    harmonicRatios.forEach((ratio, i) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = i % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(pitch * ratio, now);

      gain.gain.setValueAtTime(harmonicGains[i], now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + decayTimes[i]);

      osc.connect(gain);
      gain.connect(masterGain);

      osc.start(now);
      osc.stop(now + decayTimes[i]);
    });

    // Metallic strike transient (short noise burst)
    const bufferSize = this.ctx.sampleRate * 0.05;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.15));
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 2400;
    filter.Q.value = 4;
    const strikeGain = this.ctx.createGain();
    strikeGain.gain.setValueAtTime(0.4, now);
    strikeGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    noise.connect(filter);
    filter.connect(strikeGain);
    strikeGain.connect(masterGain);
    noise.start(now);
  }

  // Mantic Chant Sub-Bass Vibration (Resonant vocal harmonic pulse)
  playManticVibration(freq = 65.41, duration = 2.2) { // C2 deep sub-drone
    this.init();
    if (this.isMuted) return;

    const now = this.ctx.currentTime;
    const master = this.ctx.createGain();
    master.gain.setValueAtTime(0.01, now);
    master.gain.linearRampToValueAtTime(0.65, now + 0.4);
    master.gain.setValueAtTime(0.65, now + duration - 0.5);
    master.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    master.connect(this.ctx.destination);

    // Fundamental + 5th + Octave with slight detune chorus
    const freqs = [freq, freq * 1.008, freq * 1.498, freq * 2];
    freqs.forEach((f, idx) => {
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = idx === 0 ? 'sawtooth' : 'sine';
      osc.frequency.setValueAtTime(f, now);

      // Low pass to give that dark chest resonance
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(280, now);
      filter.Q.value = 6;

      g.gain.value = idx === 0 ? 0.35 : 0.4;
      osc.connect(filter);
      filter.connect(g);
      g.connect(master);

      osc.start(now);
      osc.stop(now + duration);
    });
  }

  // Chalice Elixir Drink Sound (Gentle fluid resonance + mystical tone)
  playChaliceDrink() {
    this.init();
    if (this.isMuted) return;

    const now = this.ctx.currentTime;
    const master = this.ctx.createGain();
    master.gain.setValueAtTime(0.4, now);
    master.gain.exponentialRampToValueAtTime(0.001, now + 1.8);
    master.connect(this.ctx.destination);

    // Shimmering harmonic chord (A minor mystic)
    [440, 528, 660, 880].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);
      osc.frequency.exponentialRampToValueAtTime(freq * 0.96, now + 1.5);
      g.gain.setValueAtTime(0.2 / (idx + 1), now);
      g.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);
      osc.connect(g);
      g.connect(master);
      osc.start(now + idx * 0.08);
      osc.stop(now + 1.7);
    });
  }

  // Athame Whoosh / Energy Slice
  playAthameStrike() {
    this.init();
    if (this.isMuted) return;

    const now = this.ctx.currentTime;
    const bufferSize = this.ctx.sampleRate * 0.3;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(800, now);
    filter.frequency.exponentialRampToValueAtTime(3200, now + 0.15);
    filter.frequency.exponentialRampToValueAtTime(400, now + 0.3);
    filter.Q.value = 5;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.5, now + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start(now);
  }

  // Flame Ignite Sound
  playFlameIgnite() {
    this.init();
    if (this.isMuted) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(140, now);
    osc.frequency.exponentialRampToValueAtTime(50, now + 0.4);

    gain.gain.setValueAtTime(0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 0.4);
  }

  // Anointing Crossroads 'X' Resonance
  playAnointGlow() {
    this.init();
    if (this.isMuted) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(640, now + 0.8);
    gain.gain.setValueAtTime(0.01, now);
    gain.gain.linearRampToValueAtTime(0.4, now + 0.4);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start(now);
    osc.stop(now + 1.2);
  }

  // Continuous Dark Ambient Soundscape
  startAmbient(type = 'temple') {
    this.init();
    if (this.isAmbientPlaying) {
      this.stopAmbient();
    }

    this.ambientType = type;
    this.isAmbientPlaying = true;
    const now = this.ctx.currentTime;

    this.ambientGain = this.ctx.createGain();
    this.ambientGain.gain.setValueAtTime(0.01, now);
    this.ambientGain.gain.linearRampToValueAtTime(this.isMuted ? 0 : 0.35, now + 2);
    this.ambientGain.connect(this.ctx.destination);

    // Deep 432Hz harmonic bass drone
    const baseFreq = 54; // Sub-bass A1 (~55Hz / tuned to 432Hz harmonic: 54Hz)
    const droneFreqs = [baseFreq, baseFreq * 1.5, baseFreq * 2, baseFreq * 3];

    droneFreqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const oscGain = this.ctx.createGain();

      osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq + (Math.random() * 0.4 - 0.2), now);

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(220 + idx * 40, now);

      oscGain.gain.value = 0.3 / (idx + 1);

      // Slow pulsating LFO for meditative breathing
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.value = 0.1 + idx * 0.05; // 10-20 sec cycle
      lfoGain.gain.value = 0.15;
      lfo.connect(lfoGain.gain);

      osc.connect(filter);
      filter.connect(oscGain);
      oscGain.connect(this.ambientGain);

      osc.start(now);
      this.ambientNodes.push(osc);
    });

    // Fire crackle noise layer if type is 'fire' or 'temple'
    if (type === 'fire' || type === 'temple') {
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        // sporadic crackle spikes
        if (Math.random() > 0.995) {
          output[i] = (Math.random() * 2 - 1) * 0.8;
        } else {
          output[i] = (Math.random() * 2 - 1) * 0.02;
        }
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const fireFilter = this.ctx.createBiquadFilter();
      fireFilter.type = 'bandpass';
      fireFilter.frequency.value = 1200;
      fireFilter.Q.value = 1.2;

      const fireGain = this.ctx.createGain();
      fireGain.gain.value = 0.08;

      whiteNoise.connect(fireFilter);
      fireFilter.connect(fireGain);
      fireGain.connect(this.ambientGain);

      whiteNoise.start(now);
      this.ambientNodes.push(whiteNoise);
    }
  }

  stopAmbient() {
    if (!this.isAmbientPlaying) return;
    if (this.ambientGain && this.ctx) {
      const now = this.ctx.currentTime;
      this.ambientGain.gain.linearRampToValueAtTime(0.0001, now + 1.5);
    }
    setTimeout(() => {
      this.ambientNodes.forEach(node => {
        try { node.stop(); } catch (e) {}
      });
      this.ambientNodes = [];
      this.isAmbientPlaying = false;
    }, 1600);
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.ambientGain && this.ctx) {
      const now = this.ctx.currentTime;
      this.ambientGain.gain.linearRampToValueAtTime(this.isMuted ? 0 : 0.35, now + 0.3);
    }
    return this.isMuted;
  }
}

export const audioEngine = new RitualAudioEngine();
