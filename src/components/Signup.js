import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useSignup } from "../hooks/useSignup";
import { NavLink } from "react-router-dom";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { error, loading, signup } = useSignup();

  const bg = useColorModeValue("gray.300", "gray.600");
  const color = useColorModeValue("gray.600", "white");
  const icon = useColorModeValue("gray.600", "gray.600");

  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const userDetails = { username, password, email };
    signup(userDetails);
  };

  return (
    <Flex align={"center"} justify={"center"} bg={bg} height={"100%"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Register
          </Heading>
          <Text fontSize={"lg"} color={color}>
            Are you ready to get to know you? 📜
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
            <FormControl id="fullName" isRequired>
              <FormLabel>Username</FormLabel>
              <Input type="text" value={username} onChange={handleUsername} />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={handleEmail} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePassword}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? (
                      <ViewIcon color={icon} />
                    ) : (
                      <ViewOffIcon color={icon} />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                isLoading={loading}
                size="lg"
                colorScheme={"purple"}
                onClick={handleSignupSubmit}
              >
                Register
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link colorScheme={"purple"} as={NavLink} to="/login">
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
