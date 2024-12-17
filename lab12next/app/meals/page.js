import MealsHeader from '../components/meals-header';
import styles from './page.module.css';
import MealsGrid from './meal-grid';
export default function MealsPage() {
  return (
    <>
      <MealsHeader />
      <main className={styles.main}>
        <MealsGrid meals ={[]}/>
      </main>
    </>
  );
}