import React from "react";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-between px-[100px] my-[40px]">
        <h2 className="text-2xl">Hey there! 👋🏻</h2>
        <div className="inputBox">
          <input type="text" placeholder="Search here...!" />
        </div>
      </div>
    </div>
  );
};

export default Home;
