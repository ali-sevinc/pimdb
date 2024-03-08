export default function About() {
  return (
    <div className="max-w-6xl mx-auto p-4 space-y-5">
      <h1 className="text-2xl font-medium ">About</h1>
      <h2>Welcome to πMDb, a movie database website.</h2>
      <p>
        Data taken with courteys of{" "}
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          className="hover:underline"
        >
          TMDB
        </a>
        .
      </p>
    </div>
  );
}
