import Results from "@/components/movies/Movies";

const API_KEY = process.env.API_KEY;
export default async function Search({
  params,
}: {
  params: { searchQuery: string };
}) {
  const searchQuery = params.searchQuery;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}&language=en-US&include_adult=false`
  );
  const data = await res.json();
  if (!res.ok) throw new Error("Movie not found.");

  const movies = data.results;

  if (!movies?.length) {
    return (
      <h2 className="text-center py-8 text-2xl font-semibold">
        No movie found.
      </h2>
    );
  }

  return <Results movies={movies} />;
}
