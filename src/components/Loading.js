import React from "react";

import { Box, Heading, Text, Flex, Spinner } from "@chakra-ui/react";

export default function Loading() {
  return (
    <div>
      <Box textAlign="center" py={10} px={6}>
        <Box display="inline-block">
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            rounded={"50px"}
            w={"55px"}
            h={"55px"}
            textAlign="center"
          >
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="purple.400"
              size="xl"
            />
          </Flex>
        </Box>
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Let's take it easy
        </Heading>
        <Text color={"gray.500"}>
          We are working on getting all your stored memories, brace yourself.
        </Text>
      </Box>
    </div>
  );
}
