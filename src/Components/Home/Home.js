import React from "react";
import Ads from "./Ads/Ads";
import Second from "./Second/Second";
import Card from "./Card/Card";
import CardData from "./Card/CardData";
import Title from "./Title/Title";
import Third from "./Third/Third";
import Fourth from "./Fourth/Fourth";
import Sixth from "./Sixth/Sixth";
import Card1 from "./Card1/Card1";
import CardData1 from "./Card1/CardData1";
import Last from "./Last/Last";

const Home = () => {
  return (
    <>
      <Ads />
      <Second />
      <Third />
      <Fourth />
      <Title Titlename="Popular Fruits" />
      <Card value={CardData} />
      <Title Titlename="Why Fresh Bites" />
      <Sixth />
      <Title Titlename="Hot Pizza" />
      <Card1 value={CardData1} />
      <Last />
    </>
  );
};

export default Home;
