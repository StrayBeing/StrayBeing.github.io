import styles from './page.module.css';
import { getMealsSlug } from '../../../lib/meals-slug';  // Importowanie funkcji getMealsSlug

// Funkcja generująca ścieżki dla dynamicznych tras
export async function generateStaticParams() {
  const meals = await getMealsSlug();

  return meals.map(meal => ({
    someName: meal.slug,  // Zmiana z 'slug' na 'someName'
  }));
}

export default async function MealDetailPage({ params }) {
  const meals = await getMealsSlug();
  const meal = meals.find(meal => meal.slug === params.someName);  // Zmiana z 'params.slug' na 'params.someName'

  if (!meal) {
    console.log('Slug z URL:', params.someName);
    console.log('Slug z bazy:', meals.map(meal => meal.slug));
    return <h1>Posiłek nie został znaleziony.</h1>;
  }

  console.log('Slug w URL:', params.someName);

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.image}>
          <img src={meal.image} alt={meal.title} />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={styles.creator}>
            Created by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </div>
      <div className={styles.instructions}>
        <h2>Instructions</h2>
        <p>{meal.instructions}</p>
      </div>
    </div>
  );
}
