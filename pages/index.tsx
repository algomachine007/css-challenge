import Bottom from "@components/sections/bottom";
import Top from "@components/sections/top";
import type { NextPage } from "next";
import data from "@/data/top.json";
import info from "@/data/banner.json";

const Home: NextPage = () => {
  return (
    <>
      <Top {...data} />
      <Bottom info={info} />
    </>
  );
};

export default Home;
