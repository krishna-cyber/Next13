/** @format */

import Link from "next/link";

export default function NotFound() {
  return (
    <div className=' mt-5 flex justify-center items-center text-white flex-col gap-4 text-lg'>
      <h2 className=' font-bold'>Not Found⚠️</h2>
      <p>Could not find requested resource</p>
      <Link className=' underline' href='/'>
        Return Home
      </Link>
    </div>
  );
}
