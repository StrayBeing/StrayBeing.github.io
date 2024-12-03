import './kontakt.css'; // Plik CSS z indywidualnymi stylami dla tej strony

export default function KontaktLayout({ children }) {
  return (
    <div className="kontakt-layout">
      <header>
        <h1>Kontakt</h1>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}