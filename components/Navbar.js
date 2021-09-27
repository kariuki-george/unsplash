import React from "react";
import AddModal from "./AddModal";
import {
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Spacer,
} from "@chakra-ui/react";
import Image from "next/image";

function Navbar() {
  return (
    <Flex w="100%" p="1em" align="center">
      <Image src="/my_unsplash_logo.svg" width={150} height={70} />
      <Spacer />
      <InputGroup w={{ base: "35vw", md: "300px" }}>
        <InputLeftElement pointerEvents="none" />
        <Input type="text" placeholder="search by name" />
      </InputGroup>
      <Spacer />
      <AddModal />
    </Flex>
  );
}

export default Navbar;
