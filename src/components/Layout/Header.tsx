import Link from "next/link";
import MenuItem from "../ui/MenuItem";
import ThemeToggle from "../ui/ThemeToggle";

import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItem title="Home" href="/" Icon={AiFillHome} />
        <MenuItem title="About" href="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <Link
          href="/"
          className="text-xl sm:text-2xl font-bold bg-amber-500 hover:bg-amber-400 duration-300 px-2 py-1 rounded-xl"
        >
          πMDb
        </Link>
      </div>
    </div>
  );
}
