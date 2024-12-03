import './moje-zainteresowania.css'; // Plik CSS z indywidualnymi stylami dla tej strony

export default function MojeZainteresowaniaLayout({ children }) {
  return (
    <div className="moje-zainteresowania-layout">
      <header>
        <h1>Moje zainteresowania</h1>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}