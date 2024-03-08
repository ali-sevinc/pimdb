import Movie from "@/components/movies/Movie";

const API_KEY = process.env.API_KEY;
export default async function MoviePage({
  params,
}: {
  params: { movieID: string };
}) {
  const movieID = params.movieID;

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieID}?api_key=${API_KEY}`
  );

  const movie = await res.json();
  if (!res.ok) throw new Error("Failed to fetch movie data.");

  return <Movie movie={movie} />;
}
