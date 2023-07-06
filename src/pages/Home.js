import React from "react";
import DefinitionSearch from "../components/DefinitionSearch";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div
        style={{ margin: "5rem" }}
        className="p-5 bg-dark-subtle rounded-3 text-center animate__animated animate__slideInUp"
      >
        <div className="container-fluid py-5">
          <DefinitionSearch />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
