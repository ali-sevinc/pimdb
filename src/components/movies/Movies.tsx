import MovieCard from "./MovieCard";

export type MovieType = {
  id: number;
  title: string;
  name: string;
  original_title: string;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
  first_air_date: string;
  vote_count: number;
};
export default function Results({ movies }: { movies: MovieType[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-4 lg:mx-auto py-4 ">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

/*
{
    adult: false,
    backdrop_path: '/n9NMlYd4TrSPErkRctNJaeTkGCM.jpg',
    id: 461130,
    title: 'Code 8',
    original_language: 'en',
    original_title: 'Code 8',
    overview: 'In Lincoln City, some inhabitants have extraordinary abilities. Most live below the poverty line, under the close surveillance of a heavily militarized police force. Connor, a construction worker with powers, 
involves with a criminal gang to help his ailing mother. (Based on the short film “Code 8,” 2016.)',
    poster_path: '/izGX7npHEopDQvngYcxMJEfcFbj.jpg',
    media_type: 'movie',
    genre_ids: [ 878, 28, 80 ],
    popularity: 243.494,
    release_date: '2019-12-06',
    video: false,
    vote_average: 6.219,
    vote_count: 1732
  }

*/
