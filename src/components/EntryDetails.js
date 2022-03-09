import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  Tag,
  List,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { useGetEntry } from "../hooks/useGetEntry";
import { useParams } from "react-router-dom";
import Error from "./Error";
import Loading from "./Loading";
import Alert from "./Alert";

export default function EntryDetails() {
  const { entry, error, loading } = useGetEntry();
  const { entryId } = useParams();

  return (
    <Container height={"100%"}>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 10 }}
            alignItems={"center"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
          >
            <Stack spacing={{ base: 6, md: 10 }}>
              <Box as={"header"}>
                <Heading
                  lineHeight={1.1}
                  fontWeight={600}
                  fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
                >
                  {entry.title}
                </Heading>
                <Text
                  color={("gray.900", "gray.400")}
                  fontWeight={300}
                  fontSize={"2xl"}
                  mt={"20px"}
                >
                  {entry.date}
                </Text>
              </Box>

              <Image
                rounded={"md"}
                alt={"product image"}
                src={entry.imageURL}
                fit={"cover"}
                align={"center"}
                width={"35rem"}
                mh={"auto"}
              />

              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={"column"}
                divider={
                  <StackDivider borderColor={("gray.200", "gray.600")} />
                }
              >
                <VStack spacing={{ base: 4, sm: 6 }}>
                  <Text fontSize={"lg"} alignSelf={"baseline"}>
                    My grade for the day:
                  </Text>
                  <Slider
                    value={entry.grade}
                    min={0}
                    max={10}
                    step={1}
                    isDisabled
                  >
                    <SliderTrack bg="purple.100">
                      <Box position="relative" right={10} />
                      <SliderFilledTrack bg="purple.400" />
                    </SliderTrack>
                    <SliderThumb boxSize={6} bg="purple.100" />
                  </Slider>
                  <Text fontSize={"lg"} alignSelf={"baseline"}>
                    I'm grateful for: &nbsp; <strong>{entry.grateful}</strong>
                  </Text>
                  <Text fontSize={"lg"} alignSelf={"baseline"}>
                    The person or people who made my day better: &nbsp;
                    <strong>{entry.person}</strong>
                  </Text>
                  <Text fontSize={"lg"} alignSelf={"baseline"}>
                    What can I do in order to improve?: &nbsp;
                    <strong>{entry.improvement}</strong>
                  </Text>
                  <Text fontSize={"lg"} alignSelf={"baseline"}>
                    What I like about myself?: &nbsp;
                    <strong>{entry.compliment}</strong>
                  </Text>
                  <Text fontSize={"lg"} alignSelf={"baseline"}>
                    I'm looking forward to...: &nbsp;
                    <strong>{entry.lookingForward}</strong>
                  </Text>
                  <Text fontSize={"lg"} alignSelf={"baseline"}>
                    What inspires me?: &nbsp;
                    <strong>{entry.inspiration}</strong>
                  </Text>
                  <Text fontSize={"lg"} alignSelf={"baseline"}>
                    What do I need right now?: &nbsp;
                    <strong>{entry.need}</strong>
                  </Text>
                  <Text fontSize={"lg"} alignSelf={"baseline"}>
                    What else can I say about the day?: &nbsp;
                    <strong>{entry.free}</strong>
                  </Text>
                </VStack>{" "}
                <hr borderColor={"purple.100"} borderWidth={"1px"} />
                <Box>
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    color={"purple.400"}
                    fontWeight={"500"}
                    textTransform={"uppercase"}
                    mb={"4"}
                  >
                    My emotions for the day:
                  </Text>

                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    <List
                      style={{
                        display: "flex",
                        gap: "20px",
                        alignItems: "center",
                      }}
                    >
                      {entry.emotion?.map((emotion, index) => {
                        return (
                          <Tag
                            size={"md"}
                            variant="outline"
                            colorScheme="purple"
                            key={index}
                          >
                            {emotion}
                          </Tag>
                        );
                      })}
                    </List>
                  </SimpleGrid>
                </Box>
              </Stack>

              <Button
                variant={"outline"}
                size={"lg"}
                colorScheme={"purple"}
                as={NavLink}
                to={`/entries/${entryId}/edit`}
              >
                Edit &nbsp; <EditIcon boxSize={"20px"} color={"purple.400"} />
              </Button>
              <Alert />
            </Stack>
          </SimpleGrid>
        </>
      )}
    </Container>
  );
}
