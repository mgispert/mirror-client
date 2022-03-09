import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import Loading from "./Loading";
import Error from "./Error";
import { useGetEntryList } from "../hooks/useGetEntryList";

export default function Testimonials() {
  const { loading, error } = useGetEntryList();
  const bg = useColorModeValue("gray.300", "gray.600");

  return (
    <Center
      py={6}
      display={"flex"}
      gap={"30px"}
      flexWrap={"wrap"}
      paddingBottom={"3rem"}
      backgroundColor={bg}
    >
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <Fragment>
          <Box
            w={"15rem"}
            bg={"purple.200"}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
            height={"450px"}
          >
            <Image
              h={"120px"}
              w={"full"}
              src={
                "https://emodnet.ec.europa.eu/sites/emodnet.ec.europa.eu/files/public/Credits%20matt%20Hardy.jpg"
              }
              objectFit={"cover"}
            />
            <Flex justify={"center"} mt={-12}>
              <Avatar
                size={"xl"}
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/6/65/RothwellMaryShelley.jpg"
                }
                alt={"Author"}
                css={{
                  border: "2px solid white",
                }}
              />
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={"center"} mb={5}>
                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                  Mary Shelley
                </Heading>
                <br />
                <Text color={"gray.500"}>
                  Mirror helped me through a really bad period of my life, I
                  could keep track of my moods, my days,and people who helped me
                  or chased me for being different.
                </Text>
              </Stack>
            </Box>
          </Box>
          <Box
            w={"15rem"}
            bg={"purple.200"}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
            height={"450px"}
          >
            <Image
              h={"120px"}
              w={"full"}
              src={
                "https://emodnet.ec.europa.eu/sites/emodnet.ec.europa.eu/files/public/Credits%20matt%20Hardy.jpg"
              }
              objectFit={"cover"}
            />
            <Flex justify={"center"} mt={-12}>
              <Avatar
                size={"xl"}
                src={
                  "https://www.biografiasyvidas.com/biografia/j/fotos/joyce_1926.jpg"
                }
                alt={"Author"}
                css={{
                  border: "2px solid white",
                }}
              />
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={"center"} mb={5}>
                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                  James Joyce
                </Heading>
                <br />
                <Text color={"gray.500"}>
                  Mirror helped me realise that there is always more than one
                  version of the story. It was during the time I lived in Dublin
                  and I was really pressured to deliver my work in a deadline.
                </Text>
              </Stack>
            </Box>
          </Box>
          <Box
            w={"15rem"}
            bg={"purple.200"}
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
            height={"450px"}
          >
            <Image
              h={"120px"}
              w={"full"}
              src={
                "https://emodnet.ec.europa.eu/sites/emodnet.ec.europa.eu/files/public/Credits%20matt%20Hardy.jpg"
              }
              objectFit={"cover"}
            />
            <Flex justify={"center"} mt={-12}>
              <Avatar
                size={"xl"}
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Oscar_Wilde_portrait.jpg/1200px-Oscar_Wilde_portrait.jpg"
                }
                alt={"Author"}
                css={{
                  border: "2px solid white",
                }}
              />
            </Flex>

            <Box p={6}>
              <Stack spacing={0} align={"center"} mb={5}>
                <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
                  Oscar Wilde
                </Heading>
                <br />
                <Text color={"gray.500"}>
                  Mirror helped me discover other parts of me that I had hidden
                  without even wanting to. I recommend this app for everyone who
                  wants to get to know themselves.
                </Text>
              </Stack>
            </Box>
          </Box>
        </Fragment>
      )}
    </Center>
  );
}
