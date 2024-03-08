import Image from "next/image";
import { generateReadableDate } from "./MovieCard";

type MovieType = {
  backdrop_path: string;
  poster_path: string;
  title: string;
  original_title: string;
  overview: string;
  release_date: string;
  first_air_date: string;
  budget: number;
  genres: { id: number; name: string }[];
  runtime: number;
  vote_average: number;
  vote_count: number;
};
export default function Movie({ movie }: { movie: MovieType }) {
  const readableDate = generateReadableDate(
    movie.release_date || movie.first_air_date
  );
  return (
    <div className="w-full max-w-6xl mx-auto mt-12 px-4 pb-8">
      <div className="flex gap-8 flex-col lg:flex-row items-center lg:items-start ">
        <Image
          src={`https://image.tmdb.org/t/p/original${
            movie.poster_path || movie.backdrop_path
          }`}
          alt={movie.title || movie.original_title}
          width={500}
          height={300}
        />
        <div className="flex flex-col gap-2 ">
          <h2 className="text-2xl font-semibold mb-4">
            {movie.title || movie.original_title}
          </h2>
          <p className="text-lg mb-3">{movie.overview}</p>

          <time>
            Date: <b>{readableDate}</b>
          </time>
          <p>
            Budged: <b>${movie.budget}</b>
          </p>

          <div className="flex gap-4">
            <p>Genres:</p>
            <ul className="flex gap-1">
              {movie.genres.map((g, i) => (
                <li key={g.id}>
                  <b>
                    {g.name}
                    {i < movie.genres.length - 1 ? "," : "."}
                  </b>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-8 items-center">
            <p>
              ⏱ <b>{movie.runtime}min</b>
            </p>
            <p>
              👍 <b>{movie.vote_count}</b>
            </p>
            <p>
              ⭐ <b>{movie.vote_average}</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
