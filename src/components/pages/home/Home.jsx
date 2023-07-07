import React from "react";
import Main from "./main/Main";
import ApiIntro from "./main/ApiIntro";
import ApiExample from "./main/ApiExample";
import ApiRoutes from "./main/ApiRoutes";

const Home = () => {
  return (
    <div className="font-bodyFont">
      <Main />
      <ApiIntro />
      <ApiExample />
      <ApiRoutes />
    </div>
  );
};

export default Home;
