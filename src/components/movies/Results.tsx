type ResultsType = { id: number; title: string; original_title: string };
export default function Results({ results }: { results: ResultsType[] }) {
  return (
    <div>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            <h2>{result.original_title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
