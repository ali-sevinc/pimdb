"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Search() {
  const [searchQuery, setSearchQuer] = useState<string>("");
  const router = useRouter();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (searchQuery.length < 2) return;
    router.push(`/search/${searchQuery}`);
    setSearchQuer("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-6xl mx-auto p-4 lg:px-0 flex "
    >
      <input
        type="search"
        placeholder="Search movie..."
        className="w-full h-12 border-slate-600 dark:border-slate-300 rounded-l-xl bg-transparent px-8 border focus:outline-none focus:border-b-4"
        value={searchQuery}
        onChange={(e) => setSearchQuer(e.target.value)}
      />
      <button
        disabled={searchQuery.length < 2}
        className="h-12 border dark:disabled:bg-slate-600  disabled:bg-slate-300 border-l-transparent disabled:cursor-not-allowed border-slate-600 dark:border-slate-300 px-8 rounded-r-xl hover:bg-slate-300 duration-300"
      >
        Search
      </button>
    </form>
  );
}
