import Link from "next/link";
import Image from "next/image";

import { MovieType } from "./Movies";
import { FiThumbsUp } from "react-icons/fi";

export default function MovieCard({ movie }: { movie: MovieType }) {
  const newDate = new Date(movie.release_date || movie.first_air_date);
  const readableDate = newDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <li className="group rounded-lg hover:shadow-md hover:shadow-slate-600 border border-slate-400 duration-300">
      <Link href={`/movie/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original${
            movie.poster_path || movie.backdrop_path
          }`}
          alt={movie.title || movie.name}
          width={500}
          height={300}
          className="w-full group-hover:opacity-80 duration-300 rounded-t-lg"
        />
        <div className="p-2">
          <h2 className="text-center font-semibold text-lg truncate pb-1">
            {movie.title || movie.name}
          </h2>
          <p className="line-clamp-2">{movie.overview}</p>
          <p className="flex gap-8 items-center pt-2">
            <b>{readableDate}</b>
            <span className="flex items-center gap-1">
              <FiThumbsUp /> {movie.vote_count}
            </span>
          </p>
        </div>
      </Link>
    </li>
  );
}
