import React, { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useGetEntryList } from "../hooks/useGetEntryList";
import {
  Box,
  Heading,
  Text,
  Divider,
  useColorModeValue,
  Container,
  Flex,
  Button,
  Input,
} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import Loading from "./Loading";
import Error from "./Error";
import EntryItem from "./EntryItem";

export default function EntryList() {
  const color = useColorModeValue("gray.500", "gray.600");
  const border = useColorModeValue("purple.400", "purple.300");
  const bg = useColorModeValue("gray.300", "gray.600");
  const { entries, loading, error } = useGetEntryList();
  const [filteredEntries, setFilteredEntries] = useState(entries);
  const [filterByTitle, setFilterByTitle] = useState(undefined);

  useEffect(() => {
    if (filterByTitle) {
      setFilteredEntries(
        entries.filter((entry) => {
          return entry.title
            ?.toLowerCase()
            .includes(filterByTitle?.toLowerCase());
        })
      );
    }
  }, [filterByTitle]);

  const handleFilterByTitle = (e) => {
    const hasValue = !!e.target.value;
    if (hasValue) {
      setFilterByTitle(e.target.value);
    } else {
      setFilterByTitle(undefined);
    }
  };

  const isFilterEnabled = filterByTitle ? filteredEntries : entries;

  return (
    <Box as={Container} maxW={"7xl"} p="12" background={bg}>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : entries.length ? (
        <Fragment>
          <Heading as="h1" textAlign={"center"}>
            Remember what you felt
          </Heading>
          <br />

          <Input
            backgroundColor={"white"}
            placeholder={"Look for your memories' titles here..."}
            display={"flex"}
            margin={"0 auto"}
            onChange={handleFilterByTitle}
            _focus={{
              zIndex: "1",
              borderColor: border,
              borderWidth: "3px",
              boxShadow: `0 0 20px ${border}`,
            }}
            color={color}
          />
          <br />
          <Box
            marginTop={{ base: "1", sm: "5" }}
            display="flex"
            flexDirection={{ base: "column-reverse" }}
            justifyContent="space-between"
            gap="30px"
          >
            {isFilterEnabled.map((entry, index) => {
              return (
                <Fragment key={index}>
                  <EntryItem
                    title={entry.title}
                    date={
                      entry?.date && new Date(entry.date).toLocaleDateString()
                    }
                    emotion={entry.emotion}
                    free={entry.free}
                    id={entry._id}
                    imageURL={entry.imageURL}
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
              <InfoIcon boxSize={"50px"} color={"purple.400"} />
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
    </Box>
  );
}
