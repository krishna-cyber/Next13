/** @format */
"use client";
import { Box, Container, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const NavBar = () => {
  return (
    <nav className=' bg-slate-500 p-2'>
      <Container maxWidth={"container.xl"}>
        <Stack
          justifyContent={"space-between"}
          alignItems={"center"}
          direction={{
            sm: "column",
            md: "row",
          }}>
          {" "}
          <Link href={"/"}>
            {" "}
            <Text
              fontWeight={"bold"}
              color={"greenyellow"}
              fontSize={"xl"}
              textAlign={{
                sm: "center",
                md: "left",
              }}>
              Krishna Tiwari
            </Text>
          </Link>
          <Box color={"whiteAlpha.800"} display={"flex"} gap={"4"}>
            <Link
              href={"https://www.facebook.com/profile.php?id=100007319417742"}
              target='_blank'>
              <BsFacebook className='text-2xl' />
            </Link>
            <Link href={"https://twitter.com/krishnA33257870"}>
              <BsTwitter className='text-2xl' />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/krishna-tiwari-7b10211b2/"}
              target='_blank'>
              <BsLinkedin className='text-2xl' />
            </Link>
            <Link href={"https://github.com/krishna-cyber"} target='_blank'>
              <BsGithub className='text-2xl' />
            </Link>
          </Box>
        </Stack>
      </Container>
    </nav>
  );
};

export default NavBar;
