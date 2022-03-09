import React from "react";
import { Container, Text, useColorModeValue } from "@chakra-ui/react";
import { GiMirrorMirror } from "react-icons/gi";

export default function Footer() {
  const bg = useColorModeValue("gray.300", "gray.600");
  return (
    <Container
      maxWidth={"none"}
      borderTop={1}
      borderStyle={"solid"}
      borderColor={"purple.200"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      paddingTop={"1rem"}
      backgroundColor={bg}
    >
      <GiMirrorMirror />
      <Text fontSize={"sm"} textAlign={"center"} margin={"5px"}>
        2022 MGispert. &nbsp; All rights reserved
      </Text>
    </Container>
  );
}
