import { VStack } from "@chakra-ui/react";
import Head from "next/head";
import GridLayout from "../components/gridLayout";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home({ res }) {
  const [inputlist, setInputlist] = useState(res);

  const submit = async (data) => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/createimage`,
      data
    );

    setInputlist(response.data);
  };

  const handleDelete = async (id) => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/${id}`
    );

    setInputlist(response.data ? response.data : inputlist);
  };

  return (
    <div>
      <Head>
        <title>Unsplash</title>
        <meta name="description" content="Unsplash" />
        <link rel="icon" href="/devchallenges.png" />
      </Head>
      <VStack overflowX="hidden">
        <Navbar submit={submit} />
        <GridLayout inputlist={inputlist} handleDelete={handleDelete} />
        <Footer />
      </VStack>
    </div>
  );
}

export async function getServerSideProps(context) {
  let res;
  const url = process.env.NEXT_PUBLIC_API_URL;

  const response = await axios.get(url);

  if (!response.data) {
    res = [];
  } else {
    res = response.data;
  }

  return {
    props: {
      res,
    },
  };
}
