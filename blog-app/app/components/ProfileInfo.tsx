/** @format */

"use client";
import { Avatar, Container, Text } from "@chakra-ui/react";
const ProfileInfo = () => {
  return (
    <Container
      maxW={"container.xl"}
      color={"white"}
      padding={"4"}
      display={"flex"}
      flexDirection={"column"}
      gap={4}
      justifyContent={"center"}
      alignItems={"center"}>
      <Avatar size={"2xl"} src='\profile.jpg'></Avatar>
      <Text textAlign={"center"} fontSize={"2xl"}>
        Hello and welcome , I am Krishna 👋 from Nepal 🚩
      </Text>
    </Container>
  );
};

export default ProfileInfo;
