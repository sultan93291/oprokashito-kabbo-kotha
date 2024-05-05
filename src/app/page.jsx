"use client";

import Navbar from "./Comopnents/Layout/Navbar/Navbar";
import Poems from "./Comopnents/Poems/Poems";
import axios from "axios";

export default function Home() {
  const obj = {
    name: "sultan",
    age: "25",
    marital_status: "unmarried",
  };
  const drillbtn = async () => {
    try {
      const res = await axios.post(`api/register`, obj);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <main className="">
      <div className=" h-auto max-w-container mx-auto   ">
        <Navbar />
        <Poems />
        <button onClick={drillbtn}>drill </button>
      </div>
    </main>
  );
}
