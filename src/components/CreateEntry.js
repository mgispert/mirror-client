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
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useCreateEntry } from "../../src/hooks/useCreateEntry";

export default function CreateEntry() {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [grade, setGrade] = useState(0);
  const [grateful, setGrateful] = useState("");
  const [emotion, setEmotion] = useState([]);
  const [person, setPerson] = useState("");
  const [improvement, setImprovement] = useState("");
  const [compliment, setCompliment] = useState("");
  const [lookingForward, setLookingForward] = useState("");
  const [inspiration, setInspiration] = useState("");
  const [need, setNeed] = useState("");
  const [free, setFree] = useState("");
  const { error, loading, addNewEntry } = useCreateEntry();
  const toast = useToast();
  const color = useColorModeValue("gray.500", "white");
  const border = useColorModeValue("purple.400", "purple.300");
  const bg = useColorModeValue("gray.300", "gray.600");

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
      compliment,
      lookingForward,
      inspiration,
      need,
      free,
    });
    toast({
      title: "Created entry successfully!",
      status: "success",
      isClosable: true,
    });
  };
  return (
    <Flex align={"center"} justify={"center"} maxW={"9xl"} background={bg}>
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
            Let's go!
          </Heading>
          <Text fontSize={"lg"} color={color}>
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
                _focus={{
                  zIndex: "1",
                  borderColor: border,
                  borderWidth: "3px",
                  boxShadow: `0 0 20px ${border}`,
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
                _focus={{
                  zIndex: "1",
                  borderColor: border,
                  borderWidth: "3px",
                  boxShadow: `0 0 20px ${border}`,
                }}
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
                    bg="purple.400"
                    onChange={(value) => {
                      setGrade(value);
                    }}
                  />
                </SliderTrack>
                <SliderThumb
                  boxSize={6}
                  bg="purple.200"
                  _focus={{ boxShadow: "purple.100" }}
                />
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
                _focus={{
                  zIndex: "1",
                  borderColor: border,
                  borderWidth: "3px",
                  boxShadow: `0 0 20px ${border}`,
                }}
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
                _focus={{
                  zIndex: "1",
                  borderColor: border,
                  borderWidth: "3px",
                  boxShadow: `0 0 20px ${border}`,
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
                _focus={{
                  zIndex: "1",
                  borderColor: border,
                  borderWidth: "3px",
                  boxShadow: `0 0 20px ${border}`,
                }}
              />
            </FormControl>
            <FormControl id="compliment" isRequired>
              <FormLabel>What I like about myself?:</FormLabel>
              <Input
                type="text"
                value={compliment}
                onChange={(e) => {
                  setCompliment(e.target.value);
                }}
                _focus={{
                  zIndex: "1",
                  borderColor: border,
                  borderWidth: "3px",
                  boxShadow: `0 0 20px ${border}`,
                }}
              />
            </FormControl>
            <FormControl id="lookingForward" isRequired>
              <FormLabel>I'm looking forward to...:</FormLabel>
              <Input
                type="text"
                value={lookingForward}
                onChange={(e) => {
                  setLookingForward(e.target.value);
                }}
                _focus={{
                  zIndex: "1",
                  borderColor: border,
                  borderWidth: "3px",
                  boxShadow: `0 0 20px ${border}`,
                }}
              />
            </FormControl>
            <FormControl id="inspiration" isRequired>
              <FormLabel>What inspires me?:</FormLabel>
              <Input
                type="text"
                value={inspiration}
                onChange={(e) => {
                  setInspiration(e.target.value);
                }}
                _focus={{
                  zIndex: "1",
                  borderColor: border,
                  borderWidth: "3px",
                  boxShadow: `0 0 20px ${border}`,
                }}
              />
            </FormControl>
            <FormControl id="need" isRequired>
              <FormLabel>What do I need right now?:</FormLabel>
              <Input
                type="text"
                value={need}
                onChange={(e) => {
                  setNeed(e.target.value);
                }}
                _focus={{
                  zIndex: "1",
                  borderColor: border,
                  borderWidth: "3px",
                  boxShadow: `0 0 20px ${border}`,
                }}
              />
            </FormControl>
            <br />
            <Text>
              Take five minutes for yourself and do whatever it is you need to
              do before continuing.
            </Text>
            <br />
            <FormControl id="free" isRequired>
              <FormLabel>Feel free to express yourself:</FormLabel>
              <Input
                type="text"
                value={free}
                onChange={(e) => {
                  setFree(e.target.value);
                }}
                _focus={{
                  zIndex: "1",
                  borderColor: border,
                  borderWidth: "3px",
                  boxShadow: `0 0 20px ${border}`,
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
