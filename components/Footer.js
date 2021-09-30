import React from "react";
import { Center, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Center
      w="100vw"
      h="40px"
      position="fixed"
      bg="white"
      color="gray"
      bottom="1px"
    >
      <Text>
        Challenge done by{" "}
        <a
          href="https://devchallenges.io/portfolio/smiley-geek"
          target="_blank"
          rel="noreferrer"
        >
          Kariuki George
        </a>{" "}
        -devChallenges.io
      </Text>
    </Center>
  );
}

export default Footer;
