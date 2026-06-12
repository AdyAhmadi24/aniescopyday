export default function SpotifyPlaylist({ onClose }) {
  return (
    <div className="spotify-playlist-popup">
      <button
        className="spotify-playlist-close"
        onClick={onClose}
        title="Tutup"
      >
        ✕
      </button>

      <div className="spotify-playlist-container">
        <iframe
          style={{
            borderRadius: '12px',
            width: '100%',
            height: '100%',
            minHeight: '600px',
          }}
          src="https://open.spotify.com/embed/playlist/2lra9mgHzE8IgHPluxauw7?utm_source=generator&si=79e60e9493ab4497"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          title="Spotify Playlist"
        ></iframe>
      </div>
    </div>
  );
}
