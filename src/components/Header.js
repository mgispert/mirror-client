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
  Icon,
  useBreakpointValue,
  useColorMode,
} from "@chakra-ui/react";

import { GoGraph, GoListUnordered } from "react-icons/go";
import { BsSun, BsMoonFill } from "react-icons/bs";
import { AddIcon } from "@chakra-ui/icons";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isLoggedIn, user, logOutUser, isLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const buttonSize = useBreakpointValue({ base: "xs", sm: "sm", md: "md" });

  return (
    <Container
      maxW="container.xl"
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={"purple.200"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"} py={"10px"}>
        <Box marginRight={"1rem"}>
          <NavLink to="/">
            {colorMode === "light" ? (
              <Image src="/images/mirror.png" maxWidth={"50px"} />
            ) : (
              <Image src="/images/marianlogo.png" maxWidth={"50px"} />
            )}
          </NavLink>
        </Box>

        <Flex
          gap={"20px"}
          alignItems="center"
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          {isLoggedIn && !isLoading && (
            <>
              <Button
                variant={"outline"}
                colorScheme="purple"
                size={buttonSize}
                leftIcon={<Icon as={GoGraph} />}
                onClick={() => {
                  navigate("/stats");
                }}
              >
                Evolution
              </Button>
              <Button
                variant={"outline"}
                colorScheme="purple"
                size={buttonSize}
                leftIcon={<Icon as={GoListUnordered} />}
                onClick={() => {
                  navigate("/entries");
                }}
              >
                Entries
              </Button>

              <Button
                variant={"solid"}
                colorScheme={"purple"}
                size={buttonSize}
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
              <Button
                onClick={toggleColorMode}
                backgroundColor={"transparent"}
                _active={{ backgroundColor: "transparent" }}
                _hover={{ backgroundColor: "transparent" }}
                _focus={{ borderColor: "none" }}
              >
                {colorMode === "light" ? <BsMoonFill /> : <BsSun />}
              </Button>
            </>
          )}
          {!isLoggedIn && !isLoading && (
            <>
              <Button
                variant={"outline"}
                colorScheme="purple"
                size={buttonSize}
              >
                <NavLink to="/login"> Login </NavLink>
              </Button>
              <Button colorScheme="purple" size={buttonSize}>
                <NavLink to="/signup"> Register </NavLink>
              </Button>
            </>
          )}
        </Flex>
      </Flex>
    </Container>
  );
}
