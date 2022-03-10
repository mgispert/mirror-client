import React from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  HStack,
  Tag,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";

const shortenString = (str, numChar) => {
  if (str.length > numChar) {
    return str.substring(0, numChar);
  } else {
    return str;
  }
};

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="purple" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

const EntryItem = ({ title, emotion, date, free, id, imageURL }) => {
  return (
    <Flex
      display="flex"
      flex="1"
      alignItems="center"
      gap={"30px"}
      flexDirection={{ base: "column", md: "row" }}
    >
      <Flex position={"relative"}>
        <Link
          to={`/entries/${id}`}
          textDecoration="none"
          _hover={{ textDecoration: "none" }}
          zIndex="2"
          as={NavLink}
          m={"40px"}
        >
          <Image
            borderRadius="lg"
            src={imageURL}
            alt="some good alt text"
            objectFit="contain"
            maxWidth={"300px"}
          />
        </Link>
        <Box zIndex="1" width="100%" position="absolute" height="100%">
          <Box
            bgGradient={useColorModeValue(
              "radial(purple.500 1px, transparent 1px)",
              "radial(purple.200 1px, transparent 1px)"
            )}
            backgroundSize="20px 20px"
            opacity="0.4"
            height="100%"
          />
        </Box>
      </Flex>

      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        justifyContent="center"
        marginTop={{ base: "3", sm: "0" }}
      >
        <Text>{date}</Text>
        <Heading marginTop="1">
          <Link
            as={NavLink}
            to={`/entries/${id}`}
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
          >
            {shortenString(title, 50)}
          </Link>
        </Heading>
        <Text
          as="p"
          my="2"
          color={useColorModeValue("gray.700", "gray.200")}
          fontSize="lg"
        >
          {shortenString(free, 100)}
        </Text>
        <BlogTags tags={emotion} />
      </Box>
    </Flex>
  );
};

export default EntryItem;
