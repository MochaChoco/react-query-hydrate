import { NextPageWithLayout } from "@/pages/_app";
import React from "react";

const Main: NextPageWithLayout = (props) => {
  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  );
};

export const getServerSideProps = async ({ ctx }) => {
  return {
    props: {},
  };
};

export default Main;
