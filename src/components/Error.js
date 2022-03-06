import React from "react";
import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export default function Error() {
  return (
    <div>
      <Box textAlign="center" py={10} px={6}>
        <Box display="inline-block">
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            bg={"red.500"}
            rounded={"50px"}
            w={"55px"}
            h={"55px"}
            textAlign="center"
          >
            <CloseIcon boxSize={"20px"} color={"white"} />
          </Flex>
        </Box>
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Let's breathe
        </Heading>
        <Text color={"gray.500"}>
          We couldn't get your memories, please take a break and try again
          later.
        </Text>
      </Box>
    </div>
  );
}
