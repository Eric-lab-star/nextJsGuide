import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
  return {
    notFound: true,
  };
}

export default function HOME() {
  console.log(allPostsData);
  return <div>this is Home</div>;
}
