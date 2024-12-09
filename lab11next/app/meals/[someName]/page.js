export default function MealDetailPage({ params }) {
    return (
        <div>
            <h1>Meal: {params.someName}</h1>
            <p>Current URL: /meals/{params.someName}</p>
        </div>
    );
}