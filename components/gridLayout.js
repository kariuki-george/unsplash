import React, { useEffect, useState } from "react";
import {
  Grid,
  GridItem,
  Box,
  Text,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import DeleteModal from "../components/DeleteModal";

export default function GridLayout() {
  const variant = useBreakpointValue({ base: 6, md: 5, lg: 7 });
  const inputlist = [
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
    {
      label: "someting",
      url: "https://res.cloudinary.com/smiley-geek/image/upload/v1632652016/sy0wuvwfccsl9covkcph.jpg",
    },
  ];

  const recurse = (length) => {
    let recurseList = [];
    let outputList = [];
    inputlist.map((item) => {
      if (recurseList.length < length) {
        recurseList.push(item);
      } else {
        outputList.push(recurseList);
        recurseList = [];
      }
    });
    return outputList;
    outputList = [];
  };

  const [list, setList] = useState(() => {
    return [...recurse(7)];
  });

  useEffect(() => {
    if (variant === 6) {
      setList(recurse(6));
    } else if (variant === 5) {
      setList(recurse(5));
    } else {
      setList(recurse(7));
    }
  }, [variant]);
  return (
    <Box width="100vw" h="100%">
      {list.length === 0 && <Text color="red">No images to display</Text>}
      {list.map((item) => {
        return (
          <Grid
            key={item.length}
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
                {item[0].label}
              </Text>
              <Image
                alt=""
                borderRadius={10}
                src={item[0].url}
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
                {item[1].label}
              </Text>
              <Image
                alt=""
                borderRadius={10}
                src={item[1].url}
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
                {item[item.length === 7 ? 3 : 2].label}
              </Text>
              <Image
                alt=""
                borderRadius={10}
                src={item[item.length === 7 ? 3 : 2].url}
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
                {item[0].label}
              </Text>
              <Image
                alt=""
                borderRadius={10}
                src={item[0].url}
                width="100%"
                height="100%"
              />
            </GridItem>
            {item.length === 7 && (
              <GridItem
                borderRadius={10}
                display={{ base: "none", md: "none", lg: "inline" }}
                colSpan={{ base: 0, md: 0, lg: 1 }}
                position="relative"
                rowSpan={{ base: 0, md: 0, lg: 2 }}
                bg="yellow"
              >
                <Text position="absolute" zindex="2" top="1em" fontSize="10px">
                  {item[5].label}
                </Text>
                <Image
                  alt=""
                  borderRadius={10}
                  src={item[5].url}
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
                {item[item.length - 2].label}
              </Text>
              <Image
                alt=""
                borderRadius={10}
                src={item[item.length - 2].url}
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
                {item[item.length - 1].label}
              </Text>
              <Image
                alt=""
                borderRadius={10}
                src={item[item.length - 1].url}
                boxSize="100%"
                objectFit="cover"
              />
            </GridItem>
          </Grid>
        );
      })}
    </Box>
  );
}
