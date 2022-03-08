import React from "react";
import { Container, Text } from "@chakra-ui/react";
import { GiMirrorMirror } from "react-icons/gi";

export default function Footer() {
  return (
    <Container
      maxW="container.xl"
      borderTop={1}
      borderStyle={"solid"}
      borderColor={"purple.200"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      position={"relative"}
      left={"0"}
      bottom={"0"}
      right={"0"}
      marginTop={"1rem"}
    >
      <GiMirrorMirror />
      <Text
        fontSize={"sm"}
        textAlign={"center"}
        position={"sticky"}
        margin={"5px"}
      >
        2022 MGispert. &nbsp; All rights reserved
      </Text>
    </Container>
  );
}
