import Link from 'next/link';
import styles from './main-header.module.css';

export default function MainHeader() {
    return (
        <header className={styles.header}>
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>
                        <Link href="/meals">Meals</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link href="/community">Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
