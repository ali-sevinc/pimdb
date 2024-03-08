"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(
    function () {
      console.error(error);
    },
    [error]
  );

  return (
    <div className="text-center mt-12 flex flex-col gap-4">
      <h1 className="text-xl">Failed to fetch movie data.</h1>
      <p>Mo.</p>
      <button onClick={() => reset()} className="hover:text-amber-500">
        Try Again
      </button>
    </div>
  );
}
