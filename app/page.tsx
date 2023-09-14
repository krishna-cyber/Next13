/** @format */

import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href='/about'>Go to about page</Link>
      <br />
      <Link href='/users'>Go to users page</Link>
    </>
  );
}
