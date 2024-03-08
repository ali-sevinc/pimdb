"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

type PropsType = { title: string; param: string };
export default function NavBarItem({ title, param }: PropsType) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <Suspense>
      <Link
        href={`/?genre=${param}`}
        className={`hover:text-amber-600 font-semibold ${
          genre === param
            ? "underline underline-offset-8 decoration-4 decoration-amber-500 "
            : ""
        }`}
      >
        {title}
      </Link>
    </Suspense>
  );
}
