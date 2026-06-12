import { useState } from 'react';

export default function TvPopup({ images = [], onClose }) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div className="tv-popup">
      <button className="tv-popup-close" onClick={onClose} title="Tutup">✕</button>

      <div className="tv-popup-content">
        <button
          className="tv-arrow tv-arrow-left"
          onClick={prev}
          title="Sebelumnya"
        >
          ‹
        </button>

        <div className="tv-image-wrap">
          <img src={images[index]} alt={`game-${index + 1}`} className="tv-popup-image" />
        </div>

        <button
          className="tv-arrow tv-arrow-right"
          onClick={next}
          title="Berikutnya"
        >
          ›
        </button>
      </div>

      <div className="tv-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`tv-dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
            title={`Lihat ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
