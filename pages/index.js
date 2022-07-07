import Link from "next/link";

export default function HOME() {
  return (
    <div>
      Read{" "}
      <Link href="/posts/first-post">
        <a>First Post</a>
      </Link>
      <h1>home</h1>
    </div>
  );
}
