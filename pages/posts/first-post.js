import Link from "next/link";

export default function FirstPost() {
  console.log(Link);
  return (
    <h1>
      <div>First Posts</div>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </h1>
  );
}
