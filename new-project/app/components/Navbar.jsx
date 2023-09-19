/** @format */
"use client";
import React from "react";
import Link from "next/link";
import Search from "./Search";
import { Flex, Stack } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <nav className=' bg-slate-600 p-2'>
      <Flex
        direction={{
          lg: "row",
          md: "row",
          sm: "column",
          base: "column",
        }}
        paddingX={2}
        justifyContent={{
          lg: "space-between",
          md: "space-between",
          base: "center",
        }}
        alignItems={{ sm: "center", base: "center" }}>
        {" "}
        <h1>
          <Link className=' font-bold text-white text-lg' href='/'>
            WikiRocket!
          </Link>
        </h1>
        <Search />
      </Flex>
    </nav>
  );
};

export default Navbar;
