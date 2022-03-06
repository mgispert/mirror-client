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
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";
import { useGetEntry } from "../hooks/useGetEntry";
import { useParams } from "react-router-dom";
import Error from "./Error";
import Loading from "./Loading";

export default function EntryDetails() {
  const { entry, error, loading, deleteEntry } = useGetEntry();
  const { entryId } = useParams();

  return (
    <Container maxW={"7xl"}>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 18, md: 24 }}
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
                w={"100%"}
                h={"auto"}
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
                    aria-label="slider-ex-2"
                    colorScheme="purple"
                    defaultValue={entry.grade}
                    isDisabled={true}
                  >
                    <SliderTrack>
                      <SliderFilledTrack value={entry.grade} />
                    </SliderTrack>
                    <SliderThumb />
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
                    What else can I say about the day?: &nbsp;
                    <strong>{entry.free}</strong>
                  </Text>
                </VStack>
                <Box>
                  <Text
                    fontSize={{ base: "16px", lg: "18px" }}
                    color={"purple.500"}
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
                Edit &nbsp; <EditIcon boxSize={"20px"} color={"purple.500"} />
              </Button>
              <Button
                variant={"solid"}
                size={"lg"}
                colorScheme={"purple"}
                onClick={() => deleteEntry(entry.id)}
              >
                Delete &nbsp; <DeleteIcon boxSize={"20px"} color={"white"} />
              </Button>
            </Stack>
          </SimpleGrid>
        </>
      )}
    </Container>
  );
}

// import { Link } from "react-router-dom";
// import { useGetEntry } from "../hooks/useGetEntry";
// import { useParams } from "react-router-dom";

// export default function EntryDetails() {
//   const { entry, error, loading, deleteEntry } = useGetEntry();
//   const { entryId } = useParams();
//   return (
//     <section>
//       {error ? (
//         <span>Error</span>
//       ) : loading ? (
//         <span>Loading...</span>
//       ) : entry ? (
//         <div>
//           <div>
//             <h3>{entry.date}</h3>
//             <h3>{entry.title}</h3>
//           </div>
//           <div>
//             <p>
//               My grade for the day is: <strong>{entry.grade}</strong>
//             </p>
//             <p>
//               I'm grateful for: <strong>{entry.grateful}</strong>
//             </p>
//             <p>
//               My emotion for the day is: <strong>{entry.emotion}</strong>
//             </p>
//             <p>
//               The person or people who made my day better:
//               <strong>{entry.person}</strong>
//             </p>
//             <p>
//               What can I do in order to improve?:{" "}
//               <strong>{entry.improvement}</strong>
//             </p>
//             <p>
//               What else can I say about the day?: <strong>{entry.free}</strong>
//             </p>
//           </div>
//           <div>
//             <Link to={`/entries/${entryId}/edit`}>
//               <button>Edit entry</button>
//             </Link>
//             <button onClick={() => deleteEntry(entry.id)}>Delete entry</button>
//           </div>
//         </div>
//       ) : null}
//     </section>
//   );
// }
