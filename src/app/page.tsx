import Results from "@/components/movies/Movies";

const API_KEY = process.env.API_KEY;

export default async function Home({
  searchParams,
}: {
  searchParams: { genre: string };
}) {
  const genre = searchParams.genre || "trending";
  const params =
    genre === "topRated" ? "/movie/top_rated" : "/trending/all/week";

  const res = await fetch(
    `https://api.themoviedb.org/3${params}?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 36000 } }
  );
  const resData = await res.json();
  if (!res.ok) throw new Error("An error occure. Failed to fetch movie data");
  const data = resData.results;

  return <Results movies={data} />;
}
