/** @format */
"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { BsRocketTakeoff } from "react-icons/bs";
import { HStack, IconButton, Input } from "@chakra-ui/react";
const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <HStack>
        <Input
          color={"white"}
          placeholder='search'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />{" "}
        <IconButton
          bgColor={"seagreen"}
          aria-label='Call Sage'
          fontSize='20px'
          icon={<BsRocketTakeoff />}
        />
      </HStack>
    </form>
  );
};

export default Search;
