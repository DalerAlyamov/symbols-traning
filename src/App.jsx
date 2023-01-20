import React from "react";
import Table from "./Table";
import Trainer from "./Trainer";

const App = () => {
  const [page, setPage] = React.useState("trainer");

  React.useEffect(() => {
    window.addEventListener("contextmenu", (e) => e.preventDefault());
  }, []);

  if (page === "trainer") return <Trainer setPage={setPage} />;
  else return <Table setPage={setPage} />;
};

export default App;
