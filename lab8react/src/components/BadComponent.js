let counter = 0;

function BadComponent() {
  counter += 1;

  return (
    <div>
      <h2>Current count: {counter}</h2>
      <button onClick={() => (counter += 1)}>Increment</button>
    </div>
  );
}

export default BadComponent;
