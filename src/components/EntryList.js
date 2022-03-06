import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useGetEntryList } from "../hooks/useGetEntryList";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  useColorModeValue,
  Container,
  Flex,
  Button,
  Spinner,
} from "@chakra-ui/react";
import { CloseIcon, InfoIcon } from "@chakra-ui/icons";

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

const EntryItem = ({ title, emotion, date, free, id }) => {
  return (
    <Flex display="flex" flex="1" alignItems="center" gap={"30px"}>
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
            src={
              "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
            }
            alt="some good alt text"
            objectFit="contain"
            maxWidth={"300px"}
          />
        </Link>
        <Box zIndex="1" width="100%" position="absolute" height="100%">
          <Box
            bgGradient={useColorModeValue(
              "radial(purple.600 1px, transparent 1px)",
              "radial(purple.300 1px, transparent 1px)"
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
        <BlogTags tags={[emotion]} />
      </Box>
    </Flex>
  );
};

export default function EntryList() {
  const { entries, loading, error } = useGetEntryList();
  return (
    <Container maxW={"7xl"} p="12">
      {loading ? (
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
                color="purple.500"
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
      ) : error ? (
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
            We couldn't get your entries, please take a break and try again
            later.
          </Text>
        </Box>
      ) : entries.length ? (
        <Fragment>
          <Heading as="h1" textAlign={"center"}>
            Remember what you felt
          </Heading>
          <Box
            marginTop={{ base: "1", sm: "5" }}
            display="flex"
            flexDirection={{ base: "column-reverse" }}
            justifyContent="space-between"
            gap="30px"
          >
            {entries.map((entry, index) => {
              return (
                <Fragment key={index}>
                  <EntryItem
                    title={entry.title}
                    date={entry.date}
                    emotion={entry.emotion}
                    free={entry.free}
                    id={entry._id}
                  />
                  <Divider />
                </Fragment>
              );
            })}
          </Box>
        </Fragment>
      ) : (
        <Flex
          textAlign="center"
          py={10}
          px={6}
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
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
              <InfoIcon boxSize={"50px"} color={"purple.500"} />
            </Flex>
          </Box>
          <Heading as="h2" size="xl" mt={6} mb={2}>
            Let's start
          </Heading>
          <Text color={"gray.500"} mb={"20px"} maxW={"350px"}>
            It's time to begin your journey towards a better relationship with
            yourself, give yourself an opportunity to grow.
          </Text>
          <Button
            variant={"solid"}
            size={"lg"}
            colorScheme={"purple"}
            as={NavLink}
            to="/entries/create"
          >
            Start writing &nbsp; ✍🏽
          </Button>
        </Flex>
      )}
    </Container>
  );
}
