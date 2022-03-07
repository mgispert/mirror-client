import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuDivider,
  Avatar,
} from "@chakra-ui/react";
import { AddIcon, CalendarIcon } from "@chakra-ui/icons";

export default function Header() {
  const { isLoggedIn, user, logOutUser, isLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Container
      maxW="container.xl"
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={"purple.100"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"} py={"10px"}>
        <Box>
          <NavLink to="/">
            <Image src="/images/pngwing.com.png" maxWidth={"50px"} />
          </NavLink>
        </Box>

        <Flex gap={"20px"} alignItems="center">
          {isLoggedIn && !isLoading && (
            <>
              <Button
                variant={"outline"}
                colorScheme="purple"
                size={"sm"}
                leftIcon={<CalendarIcon />}
                onClick={() => {
                  navigate("/entries");
                }}
              >
                Entries
              </Button>

              <Button
                variant={"solid"}
                colorScheme={"purple"}
                size={"sm"}
                leftIcon={<AddIcon />}
                onClick={() => {
                  navigate("/entries/create");
                }}
              >
                Entry
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant="link"
                  cursor={"pointer"}
                  minW={0}
                  _hover={{ textDecoration: "none" }}
                >
                  <Avatar size={"sm"} name={user?.username} />
                </MenuButton>
                <MenuList>
                  <MenuItem
                    _hover={{ textDecoration: "none" }}
                    as={NavLink}
                    to={`/user/${user?._id}`}
                  >
                    My Mirror
                  </MenuItem>

                  <MenuDivider />
                  <MenuItem justifyContent="start" onClick={logOutUser}>
                    Log Out
                  </MenuItem>
                </MenuList>
              </Menu>
            </>
          )}
          {!isLoggedIn && !isLoading && (
            <>
              <Button variant={"outline"} colorScheme="purple">
                <NavLink to="/login"> Login </NavLink>
              </Button>
              <Button colorScheme="purple">
                <NavLink to="/signup"> Register </NavLink>
              </Button>
            </>
          )}
        </Flex>
      </Flex>
    </Container>
  );
}
