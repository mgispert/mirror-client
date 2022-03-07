import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  CheckboxGroup,
  Alert,
  AlertIcon,
  Checkbox,
} from "@chakra-ui/react";
import { useState } from "react";
import Error from "../../src/components/Error";
import Loading from "../../src/components/Loading";
import { useCreateEntry } from "../../src/hooks/useCreateEntry";

export default function CreateEntry() {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [grade, setGrade] = useState(0);
  const [grateful, setGrateful] = useState("");
  const [emotion, setEmotion] = useState([]);
  const [person, setPerson] = useState("");
  const [improvement, setImprovement] = useState("");
  const [free, setFree] = useState("");
  const { error, loading, addNewEntry } = useCreateEntry();

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewEntry({
      date,
      title,
      grade,
      grateful,
      emotion,
      person,
      improvement,
      free,
    });
  };
  return (
    <Flex
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      {error ? <Error /> : loading ? <Loading /> : null}
      <Stack
        spacing={8}
        mx={"auto"}
        py={12}
        px={6}
        width="100%"
        maxWidth="800px"
      >
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Let's go
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Creation starts here!
          </Text>
        </Stack>
        {error && (
          <Alert status="error">
            <AlertIcon />
            There was an error processing your request
          </Alert>
        )}
        <Box
          width="100%"
          minWidth={{ sm: "100%", md: "400px" }}
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
          as={"form"}
        >
          <Stack spacing={4}>
            <FormControl id="data" isRequired>
              <FormLabel>Date:</FormLabel>
              <Input
                type="text"
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
              />
            </FormControl>
            <FormControl id="title" isRequired>
              <FormLabel>Title:</FormLabel>
              <Input
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                placeholder="Give a title to your day in 5 words or less"
              />
            </FormControl>
            <FormControl id="grade" isRequired>
              <FormLabel>How would you grade your day from 1-10?:</FormLabel>
              <Slider
                value={grade}
                min={0}
                max={10}
                step={1}
                onChange={(value) => {
                  setGrade(value);
                }}
              >
                <SliderTrack bg="purple.100">
                  <Box position="relative" right={10} />
                  <SliderFilledTrack
                    bg="purple.500"
                    onChange={(value) => {
                      setGrade(value);
                    }}
                  />
                </SliderTrack>
                <SliderThumb boxSize={6} bg="purple.300" />
              </Slider>
            </FormControl>

            <FormControl id="grateful" isRequired>
              <FormLabel>
                Name at least one thing you're grateful for:
              </FormLabel>
              <Input
                type="text"
                value={grateful}
                onChange={(e) => {
                  setGrateful(e.target.value);
                }}
                placeholder="Today I'm grateful for..."
              />
            </FormControl>

            <FormControl id="emotion" isRequired>
              <FormLabel>Which emotion do you identify with today?:</FormLabel>
              <CheckboxGroup
                colorScheme="purple"
                onChange={(value) => {
                  setEmotion(value);
                }}
              >
                <Stack spacing={[1, 5]} direction={["column"]}>
                  <Checkbox value="happiness">Happiness</Checkbox>
                  <Checkbox value="sadness">Sadness</Checkbox>
                  <Checkbox value="apathy">Apathy</Checkbox>
                  <Checkbox value="exhaustion">Exhaustion</Checkbox>
                  <Checkbox value="pride">Pride</Checkbox>
                  <Checkbox value="excitement">Excitement</Checkbox>
                  <Checkbox value="anxiety">Anxiety</Checkbox>
                  <Checkbox value="anger">Anger</Checkbox>
                </Stack>
              </CheckboxGroup>
            </FormControl>

            <FormControl id="person" isRequired>
              <FormLabel>
                Name at least one person who helped make your day better:{" "}
              </FormLabel>
              <Input
                type="text"
                value={person}
                onChange={(e) => {
                  setPerson(e.target.value);
                }}
              />
            </FormControl>

            <FormControl id="improvement" isRequired>
              <FormLabel>
                What can I do to improve or make my day better?:
              </FormLabel>
              <Input
                type="text"
                value={improvement}
                onChange={(e) => {
                  setImprovement(e.target.value);
                }}
              />
            </FormControl>

            <FormControl id="free" isRequired>
              <FormLabel>Feel free to express yourself:</FormLabel>
              <Input
                type="text"
                value={free}
                onChange={(e) => {
                  setFree(e.target.value);
                }}
              />
            </FormControl>

            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                isLoading={loading}
                size="lg"
                colorScheme={"purple"}
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Let it go
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
