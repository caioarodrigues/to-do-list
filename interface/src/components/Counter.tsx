interface CounterProps {
  initialValue: number;
}

export const Counter = ({ initialValue }: CounterProps) => {
  return (
    <div>
      <p data-testid="count">Count: {initialValue}</p>
      <button onClick={() => {}}>Increment</button>
    </div>
  );
}