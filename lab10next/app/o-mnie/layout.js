import './o-mnie.css'; // Plik CSS z indywidualnymi stylami dla tej strony

export default function OMnieLayout({ children }) {
  return (
    <div className="o-mnie-layout">
      <header>
        <h1>O mnie</h1>
      </header>
      <main>
        {children}
      </main>
    </div>
  );
}