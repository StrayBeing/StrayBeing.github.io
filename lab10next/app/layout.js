import './globals.css'; // Zakładając, że masz plik z globalnymi stylami
import Header from '@components/Header'; // Importujemy komponent Header
import { ReactNode } from 'react';

export default function Layout({ children }) {
  return (
    <html lang="pl">
      <body>
        {/* Globalny nagłówek */}
        <Header />
        
        {/* Treść strony */}
        <main>
          {children}
        </main>

        {/* Stopka */}
        <footer>
          <p>Sobierajski Maciej 20480</p>
        </footer>
      </body>
    </html>
  );
}