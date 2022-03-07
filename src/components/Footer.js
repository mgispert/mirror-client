import React from "react";
import { Container, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Container
      maxW="container.xl"
      borderTop={1}
      borderStyle={"solid"}
      borderColor={"purple.200"}
      mt={"100px"}
    >
      <Text
        pt={6}
        fontSize={"sm"}
        textAlign={"center"}
        padding={"15px"}
        position={"sticky"}
      >
        © 2022 MGispert. &nbsp; All rights reserved
      </Text>
    </Container>
  );
}
