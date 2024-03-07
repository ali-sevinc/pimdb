import NavBarItem from "../ui/NavBarItem";

export default function NavBar() {
  return (
    <div className="flex items-center justify-center gap-8 dark:bg-slate-600 bg-amber-100 p-4 lg:text-lg">
      <NavBarItem title="Trending" param="trending" />
      <NavBarItem title="Top Rated" param="topRated" />
    </div>
  );
}
