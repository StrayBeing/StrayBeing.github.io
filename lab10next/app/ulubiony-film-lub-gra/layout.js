import './ulubiony-film-lub-gra.css'; // Plik CSS z indywidualnymi stylami dla tej strony

export default function UlubionyFilmLayout({ children }) {
  return (
    <div className="ulubiony-film-layout">
      <header>
        <h1>Ulubiony film lub gra</h1>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}