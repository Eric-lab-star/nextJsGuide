import NavLink from "../components/NavLink";

export default function Myapp({ Component, pageProps }) {
  return (
    <>
      <NavLink />
      <Component {...pageProps} />
    </>
  );
}
