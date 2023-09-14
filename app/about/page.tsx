/** @format */

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Section",
};
const page = () => {
  return (
    <div>
      This is a about{" "}
      <section>
        <Link href={"/"}>Go to home page</Link>
      </section>
    </div>
  );
};

export default page;
