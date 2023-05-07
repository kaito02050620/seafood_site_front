import React from "react";
import Dinner from "../components/home/Dinner";
import MonthTheme from "../components/home/MonthTheme";
import Ranking from "../components/home/Ranking";

function Home() {
  return (
    <>
      <section className="md:flex justify-between md:mb-10 sm:mb-4 mb-2">
        <Dinner />
        <MonthTheme />
      </section>
      <Ranking />
    </>
  );
}

export default Home;
