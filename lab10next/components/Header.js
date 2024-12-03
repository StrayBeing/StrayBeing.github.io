import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <h1>Moja aplikacja</h1>
      <nav>
        <ul>
          <li><Link href="/o-mnie">O mnie</Link></li>
          <li><Link href="/moje-zainteresowania">Moje zainteresowania</Link></li>
          <li><Link href="/ulubiony-film-lub-gra">Ulubiony film lub gra</Link></li>
          <li><Link href="/kontakt">Kontakt</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;