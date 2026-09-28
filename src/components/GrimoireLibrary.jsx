import React, { useState } from 'react';
import { POINTS_OF_POWER, FOUR_PILLARS, TRIAD_MORNING_STAR, GLOSSARY_TERMS } from '../data/ritualsData';
import { BookOpen, Key, Compass, Layers, Search, Trash2, Download, ShieldCheck } from 'lucide-react';

export default function GrimoireLibrary({ bookOfShadowsEntries, onDeleteEntry, onClearAllEntries }) {
  const [activeTab, setActiveTab] = useState('points'); // 'points', 'pillars', 'glossary', 'journal'
  const [searchTerm, setSearchTerm] = useState('');

  // Filter glossary
  const filteredGlossary = GLOSSARY_TERMS.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Export Book of Shadows
  const handleExportJournal = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(bookOfShadowsEntries, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `book_of_shadows_export_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="grimoire-library-panel">
      {/* Sub-Navigation Tabs */}
      <div className="grimoire-tabs-bar">
        <button
          className={`grimoire-tab-btn ${activeTab === 'points' ? 'active' : ''}`}
          onClick={() => setActiveTab('points')}
        >
          <Key size={16} /> 11 Points of Power
        </button>
        <button
          className={`grimoire-tab-btn ${activeTab === 'pillars' ? 'active' : ''}`}
          onClick={() => setActiveTab('pillars')}
        >
          <Compass size={16} /> Pillars & Triad
        </button>
        <button
          className={`grimoire-tab-btn ${activeTab === 'glossary' ? 'active' : ''}`}
          onClick={() => setActiveTab('glossary')}
        >
          <BookOpen size={16} /> Occult Glossary
        </button>
        <button
          className={`grimoire-tab-btn ${activeTab === 'journal' ? 'active' : ''}`}
          onClick={() => setActiveTab('journal')}
        >
          <Layers size={16} /> Book of Shadows ({bookOfShadowsEntries.length})
        </button>
      </div>

      <div className="grimoire-tab-content">
        {/* TAB 1: 11 POINTS OF POWER */}
        {activeTab === 'points' && (
          <div className="points-of-power-grid">
            <div className="grimoire-section-intro">
              <h3>The 11 Luciferian Points of Power</h3>
              <p>
                The rational and metaphysical bedrock of Luciferianism. These principles challenge restrictive dogmatic beliefs and guide the Black Adept towards self-excellence, discipline, and Apotheosis.
              </p>
            </div>

            <div className="points-cards-list">
              {POINTS_OF_POWER.map((point) => (
                <div key={point.number} className="point-card">
                  <div className="point-card-header">
                    <span className="point-badge">POINT {point.number}</span>
                    <h4 className="point-title">{point.title}</h4>
                  </div>
                  <blockquote className="point-axiom">
                    "{point.axiom}"
                  </blockquote>
                  <p className="point-commentary">
                    {point.commentary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: FOUR PILLARS & TRIAD */}
        {activeTab === 'pillars' && (
          <div className="pillars-triad-view">
            <div className="grimoire-section-intro">
              <h3>The Four Pillars of Luciferianism</h3>
              <p>The foundations upon which the living temple of Mind, Body, and Spirit is constructed.</p>
            </div>

            <div className="four-pillars-grid">
              {FOUR_PILLARS.map((pillar) => (
                <div key={pillar.id} className="pillar-card">
                  <div className="pillar-icon-box">
                    <ShieldCheck size={28} className="text-amber-400" />
                  </div>
                  <h4 className="pillar-name">{pillar.title}</h4>
                  <span className="pillar-sub">{pillar.subtitle}</span>
                  <p className="pillar-desc">{pillar.description}</p>
                </div>
              ))}
            </div>

            <div className="grimoire-section-intro mt-8">
              <h3>The Triad of the Morning Star</h3>
              <p>The cyclic wheel of initiation: Liberation, Illumination, and Apotheosis.</p>
            </div>

            <div className="triad-cards-row">
              {TRIAD_MORNING_STAR.map((stage) => (
                <div key={stage.id} className="triad-card">
                  <span className="triad-symbol-label">{stage.symbol}</span>
                  <h4 className="triad-stage-name">{stage.title}</h4>
                  <p className="triad-desc">{stage.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: GLOSSARY */}
        {activeTab === 'glossary' && (
          <div className="glossary-view">
            <div className="glossary-header-row">
              <div>
                <h3>Occult & Luciferian Glossary</h3>
                <p>Authentic terminology from ancient Near Eastern, Greek, and grimoire traditions.</p>
              </div>

              <div className="glossary-search-box">
                <Search size={16} className="search-icon" />
                <input
                  type="text"
                  placeholder="Search terms or definitions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="glossary-search-input"
                />
              </div>
            </div>

            <div className="glossary-terms-list">
              {filteredGlossary.map((item, idx) => (
                <div key={idx} className="glossary-term-item">
                  <h5 className="term-word">{item.term}</h5>
                  <p className="term-def">{item.definition}</p>
                </div>
              ))}
              {filteredGlossary.length === 0 && (
                <div className="empty-search-state">No matching terms found.</div>
              )}
            </div>
          </div>
        )}

        {/* TAB 4: BOOK OF SHADOWS / JOURNAL */}
        {activeTab === 'journal' && (
          <div className="journal-view">
            <div className="journal-header-row">
              <div>
                <h3>Magical Record & Book of Shadows</h3>
                <p>Track your ritual history, willed outcomes, dates, and meditative gnosis.</p>
              </div>

              {bookOfShadowsEntries.length > 0 && (
                <div className="journal-actions-group">
                  <button className="export-journal-btn" onClick={handleExportJournal}>
                    <Download size={15} /> Export JSON
                  </button>
                  <button className="clear-journal-btn" onClick={onClearAllEntries}>
                    <Trash2 size={15} /> Clear All
                  </button>
                </div>
              )}
            </div>

            {bookOfShadowsEntries.length === 0 ? (
              <div className="empty-journal-box">
                <p>Your Book of Shadows is currently pristine.</p>
                <span>Complete a ceremony in the Ritual Journey tab to record your first entry.</span>
              </div>
            ) : (
              <div className="journal-entries-feed">
                {bookOfShadowsEntries.map((entry, idx) => (
                  <div key={idx} className="journal-entry-card">
                    <div className="entry-meta-bar">
                      <span className="entry-ritual-title">{entry.ritualTitle}</span>
                      <span className="entry-timestamp">
                        {new Date(entry.timestamp).toLocaleString()}
                      </span>
                      <button
                        className="delete-entry-btn"
                        onClick={() => onDeleteEntry(idx)}
                        title="Delete entry"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                    {entry.notes ? (
                      <p className="entry-notes-body">{entry.notes}</p>
                    ) : (
                      <p className="entry-notes-body italic text-zinc-500">
                        Ceremony successfully performed and sealed with the Triple Keys.
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
