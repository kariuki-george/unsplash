import React, { useEffect, useState } from "react";
import {
  Grid,
  GridItem,
  Box,
  Text,
  Image,
  useBreakpointValue,
  PseudoBox,
} from "@chakra-ui/react";
import DeleteModal from "../components/DeleteModal";

export default function GridLayout({ inputlist, handleDelete }) {
  const variant = useBreakpointValue({ base: 6, md: 5, lg: 7 });

  // const [list, setList] = useState(inputlist.slice(0, 6));
  const [remainList, setRemainList] = useState(
    inputlist
    // inputlist.slice(6, inputlist.length - 1)
  );
  const [isVisible, setIsVisible] = useState([false, 0]);

  function over(id) {
    setIsVisible([true, id]);
  }
  function out(e) {
    setIsVisible([false, 0]);
  }
  useEffect(() => {
    setRemainList(inputlist);
  }, [inputlist]);

  // useEffect(() => {
  //   if (variant === 6) {
  //     setList(inputlist.slice(0, 6));
  //     setRemainList(inputlist.slice(6, inputlist.length - 1));
  //   } else if (variant === 5) {
  //     setList(inputlist.slice(0, 5));
  //     setRemainList(inputlist.slice(5, inputlist.length - 1));
  //   } else {
  //     setList(inputlist.slice(0, 7));
  //     setRemainList(inputlist.slice(7, inputlist.length - 1));
  //   }
  // }, [variant, inputlist]);
  return (
    <Box width="100vw" h="100%">
      {/* 
Change grid layout according to changes in window size
      <Box
        h={{
          base: "1000px", // 0-48em
          md: "700px", // 48em-80em,
          lg: "900px",
        }}
        w="100vw"
      >
        <Grid
          mb="1em"
          h={{
            base: "1000px", // 0-48em
            md: "700px", // 48em-80em,
            lg: "900px",
          }}
          w="100vw"
          templateRows={{
            base: "repeat(5, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={4}
          p="2em"
        >
          <GridItem
            borderRadius={10}
            position="relative"
            rowSpan={1}
            colSpan={1}
            bg="tomato"
          >
            <Text position="absolute" zindex="2" top="1em" fontSize="10px">
              {list[0].label}
            </Text>
            <Image
              alt=""
              borderRadius={10}
              src={list[0].url}
              width="100%"
              height="100%"
            />
          </GridItem>
          <GridItem
            borderRadius={10}
            display={{ md: "none", lg: "inline" }}
            position="relative"
            rowSpan={{ base: 1, md: 0, lg: 1 }}
            colSpan={{ base: 1, md: 0, lg: 1 }}
            bg="yellow"
          >
            {" "}
            <Text position="absolute" zindex="2" top="1em" fontSize="10px">
              {list[1].label}
            </Text>
            <Image
              alt=""
              borderRadius={10}
              src={list[1].url}
              width="100%"
              height="100%"
            />
          </GridItem>
          <GridItem
            borderRadius={10}
            minHeight="300px"
            colSpan={2}
            position="relative"
            rowSpan={2}
            bg="papayawhip"
          >
            <Text position="absolute" zindex="2" top="1em" fontSize="10px">
              {list[list.length === 5 ? 1 : 2].label}
            </Text>
            <Image
              alt=""
              borderRadius={10}
              src={list[list.length === 5 ? 1 : 2].url}
              width="100%"
              height="100%"
            />
          </GridItem>
          <GridItem
            borderRadius={10}
            colSpan={1}
            position="relative"
            rowSpan={2}
            bg="tomato"
          >
            <Text position="absolute" zindex="2" top="1em" fontSize="10px">
              {list[list.length === 5 ? 2 : 3].label}
            </Text>
            <Image
              alt=""
              borderRadius={10}
              src={list[list.length === 5 ? 2 : 3].url}
              width="100%"
              height="100%"
            />
          </GridItem>

          {list.length === 7 && (
            <GridItem
              borderRadius={10}
              display={{ base: "none", md: "none", lg: "inline" }}
              colSpan={{ base: 0, md: 0, lg: 1 }}
              position="relative"
              rowSpan={{ base: 0, md: 0, lg: 2 }}
              bg="yellow"
            >
              <Text position="absolute" zindex="2" top="1em" fontSize="10px">
                {list[4].label}
              </Text>
              <Image
                alt=""
                borderRadius={10}
                src={list[4].url}
                width="100%"
                height="100%"
              />
            </GridItem>
          )}

          <GridItem
            borderRadius={10}
            position="relative"
            rowSpan={1}
            colSpan={1}
            bg="papayawhip"
          >
            <Text position="absolute" zindex="2" top="1em" fontSize="10px">
              {list[list.length === 5 ? 3 : list.length === 7 ? 5 : 4].label}
            </Text>
            <Image
              alt=""
              borderRadius={10}
              src={list[list.length === 5 ? 3 : list.length === 7 ? 5 : 4].url}
              width="100%"
              height="100%"
            />
          </GridItem>
          <GridItem
            borderRadius={10}
            position="relative"
            rowSpan={1}
            colSpan={1}
            bg="tomato"
          >
            <Text position="absolute" zindex="2" top="1em" fontSize="10px">
              {list[list.length === 5 ? 3 : list.length === 7 ? 6 : 5].label}
            </Text>
            <Image
              alt=""
              borderRadius={10}
              src={list[list.length === 5 ? 3 : list.length === 7 ? 6 : 5].url}
              boxSize="100%"
              objectFit="cover"
            />
          </GridItem>
        </Grid>
      </Box> */}
      {remainList.length === 0 && <Text color="red">No images to display</Text>}
      <Box h="100%" w="100vw">
        <Grid
          w="100vw"
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={4}
          p="2em"
        >
          {remainList.map((item) => {
            return (
              <GridItem
                key={item._id}
                borderRadius={10}
                position="relative"
                rowSpan={1}
                colSpan={1}
                h={{
                  base: "200px", // 0-48em
                  md: "300px", // 48em-80em,
                  lg: "350px",
                }}
                bg="tomato"
                onMouseOver={() => {
                  over(item._id);
                }}
                onMouseOut={out}
              >
                <DeleteModal
                  id={item._id}
                  handleDelete={handleDelete}
                  display={
                    isVisible[0] && isVisible[1] === item._id ? "flex" : "none"
                  }
                />
                <Text
                  display={
                    isVisible[0] && isVisible[1] === item._id ? "flex" : "none"
                  }
                  bg="white"
                  position="absolute"
                  zindex="2"
                  bottom="10px"
                  left="5px"
                  fontSize="15px"
                  color="black"
                  p="0.3em"
                  borderRadius={10}
                  _groupHover={{ display: "none" }}
                >
                  {item.label}
                </Text>
                <Image
                  alt="image"
                  borderRadius={10}
                  src={item.url}
                  boxSize="100%"
                  objectFit="cover"
                />
              </GridItem>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
}
