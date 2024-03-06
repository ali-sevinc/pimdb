import Link from "next/link";

type PropsType = { title: string; Icon: React.ElementType; href: string };
export default function MenuItem({ Icon, href, title }: PropsType) {
  return (
    <Link href={href} className="hover:text-amber-500">
      <Icon className="text-2xl sm:hidden inline" />
      <p className="uppercase font-bold hidden sm:inline-block">{title}</p>
    </Link>
  );
}
