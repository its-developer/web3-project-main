import React from "react";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

const UseDefaultLayout = (Component, obj) => {
  return () => {
    return (
      <>
        {obj?.title && <title>{obj.title}</title>}
        <Header />
        <Component />
        <Footer />
      </>
    );
  };
};

export default UseDefaultLayout;
