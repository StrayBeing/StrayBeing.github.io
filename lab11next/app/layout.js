import './globals.css';
import Image from 'next/image';
import MainHeader from './components/main-header';
import MainHeaderBackground from './components/main-header-background';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeaderBackground>
          <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <Image
              src="/images/logo.png"
              alt="NextLevel Food Logo"
              width={200}
              height={100}
              priority
            />
          </div>
          <MainHeader />
        </MainHeaderBackground>
        <main>{children}</main>
      </body>
    </html>
  );
}
