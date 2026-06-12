import { useState, useEffect } from 'react';
import './App.css';
import SpotifyPlaylist from './SpotifyPlaylist';

const assetUrls = {
  catAnimated: new URL('./assets/cat-animated.webp', import.meta.url).href,
  phoneAnimated: new URL('./assets/phone-animated.webp', import.meta.url).href,
  pets: new URL('./assets/kucing-kicau.gif', import.meta.url).href,
  books: new URL('./assets/alien-cat.gif', import.meta.url).href,
  ady: new URL('./assets/ady.webp', import.meta.url).href,
  music: new URL('./assets/music.webp', import.meta.url).href,
};

// ─── APP ─────────────────────────────────────────────────────────────────────

function App() {
  const [activePopup, setActivePopup] = useState(null);

  const closePopup = () => setActivePopup(null);

  useEffect(() => {
    const handleOverlayClick = (e) => {
      if (e.target.classList.contains('overlay')) closePopup();
    };
    if (activePopup) window.addEventListener('click', handleOverlayClick);
    return () => window.removeEventListener('click', handleOverlayClick);
  }, [activePopup]);

  return (
    <div id="root">
      <div className="app-container">
        <div
          className="cat-animated"
          onClick={() => setActivePopup('cat_animated')}
          title="Klik Kucing Animasi"
        >
          <img src={assetUrls.catAnimated} alt="Cat Animated" />
        </div>

        <div
          className="phone-animated"
          onClick={() => setActivePopup('phone_animated')}
          title="Klik Phone Animasi"
        >
          <img src={assetUrls.phoneAnimated} alt="Phone Animated" />
        </div>

        <div
          className="music-animated"
          onClick={() => setActivePopup('music_animated')}
          title="Klik Music Animasi"
        >
          <img src={assetUrls.music} alt="Music Animated" />
        </div>

        <div
          className="ady-animated"
          onClick={() => setActivePopup('ady_animated')}
          title="Klik Ady Animasi"
        >
          <img src={assetUrls.ady} alt="Ady Animated" />
        </div>

        
      </div>

      <div className={`overlay ${activePopup ? 'active' : ''}`}>
        {activePopup === 'cat_animated' && (
          <img
            src={assetUrls.pets}
            alt="Pets"
            className="bare-popup-image"
            onClick={closePopup}
            title="Klik untuk menutup"
          />
        )}
        {activePopup === 'phone_animated' && (
          <div className="book-popup">
            <img
              src={assetUrls.books}
              alt="Books"
              className="book-popup-image"
              onClick={closePopup}
              title="Klik untuk menutup"
            />
          </div>
        )}
        {activePopup === 'ady_animated' && (
          <div className="book-popup">
            <img
              src={assetUrls.ady}
              alt="Ady"
              className="book-popup-image"
              onClick={closePopup}
              title="Klik untuk menutup"
            />
          </div>
        )}
        {activePopup === 'music_animated' && (
          <SpotifyPlaylist onClose={closePopup} />
        )}
      </div>
    </div>
  );
}

export default App;
