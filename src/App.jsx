import React from "react";
import HiraganaTable from "./HiraganaTable";
import KatakanaTable from "./KatakanaTable";
import Trainer from "./Trainer";

const App = () => {
  const [page, setPage] = React.useState("trainer");
  const [symbolType, setSymbolType] = React.useState("hiragana");

  React.useEffect(() => {
    window.addEventListener("contextmenu", (e) => e.preventDefault());
  }, []);

  if (page === "trainer") return <Trainer symbolType={symbolType} setPage={setPage} />;
  else if (symbolType === "hiragana")
    return <HiraganaTable setSymbolType={setSymbolType} setPage={setPage} />;
  else if (symbolType === "katakana")
    return <KatakanaTable setSymbolType={setSymbolType} setPage={setPage} />;
};

export default App;
