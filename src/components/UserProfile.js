import React, { useEffect, useState } from "react";
import { AuthContext } from "../context/auth.context";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  Alert,
  AlertIcon,
  useToast,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import axios from "axios";
import Loading from "./Loading";
import Error from "./Error";

export default function EditUserProfile() {
  const { user } = useContext(AuthContext);
  const toast = useToast();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { getToken } = useContext(AuthContext);
  const { userId } = useParams();

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setPassword(user.password);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editProfile({
      username,
      password,
      email,
    });
    toast({
      title: "Edited profile successfully!",
      status: "success",
      isClosable: true,
    });
  };

  const editProfile = (userDetails) => {
    const storedToken = getToken();
    setLoading(true);
    axios
      .put(`${process.env.REACT_APP_URL}/user/${userId}/edit`, userDetails, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => {
        setLoading(false);
        navigate(`/user/${userId}`);
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  };

  return (
    <section>
      {error ? (
        <Error />
      ) : loading ? (
        <Loading />
      ) : user ? (
        <Flex align={"center"} justify={"center"} bg={"#e5d6ce"}>
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
                Welcome, {user?.username}
              </Heading>
              <br />
              <Text fontSize={"lg"} color={"gray.600"}>
                You'll see the updated information once you log in again with
                the new details!
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
              bg={"white"}
              boxShadow={"lg"}
              p={8}
              as={"form"}
            >
              <Stack spacing={4}>
                <FormControl id="username" isRequired>
                  <FormLabel>Username:</FormLabel>
                  <Input
                    defaultValue={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                    type="username"
                    name="username"
                    placeholder="Write the username here"
                  />
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel>Email:</FormLabel>
                  <Input
                    defaultValue={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    name="email"
                    placeholder="Write the email here"
                  />
                </FormControl>

                <FormControl id="password" isRequired>
                  <FormLabel>Password:</FormLabel>
                  <Input
                    defaultValue={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                    name="password"
                    placeholder="Write the password here"
                  />
                </FormControl>

                <Stack spacing={10} pt={2}>
                  <Button
                    variant={"outline"}
                    loadingText="Submitting"
                    isLoading={loading}
                    size="lg"
                    colorScheme={"purple"}
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                  >
                    Edit &nbsp;{" "}
                    <EditIcon boxSize={"20px"} color={"purple.400"} />
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      ) : null}
    </section>
  );
}
