import Link from "next/link";
export default function NavLink() {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>about</a>
      </Link>
      <style jsx>{`
        a {
          color: red;
          text-decoration: none;
          margin: 3px;
        }
      `}</style>
    </nav>
  );
}
