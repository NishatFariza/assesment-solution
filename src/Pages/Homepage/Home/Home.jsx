import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import ProjectReport from "../Projects/ProjectReport/ProjectReport";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <ProjectReport></ProjectReport>
      <Footer></Footer>
    </div>
  );
};

export default Home;
