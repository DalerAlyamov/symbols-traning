import React from "react";
import hiraganaList from "./hiragana-list";
import katakanaList from "./katakana-list";
import HiraganaTable from "./HiraganaTable";
import KatakanaTable from "./KatakanaTable";
import Settings from "./Settings";
import Trainer from "./Trainer";

const App = () => {
  const [settings, setSettings] = React.useState({
    hiraganaMain: false,
    hiraganaDakuon: false,
    hiraganaCombo: false,
    hiraganaSmallTsu: false,
    hiraganaLongVowels: false,
    katakanaMain: false,
    katakanaDakuon: false,
    katakanaCombo: false,
    katakanaSmallTsu: false,
    katakanaLongVowels: false,
  });
  const [filteredHiraganaList, setFilteredHiraganaList] = React.useState([]);
  const [filteredKatakanaList, setFilteredKatakanaList] = React.useState([]);
  const [page, setPage] = React.useState("settings");
  const [symbolType, setSymbolType] = React.useState("hiragana");

  React.useEffect(() => {
    setFilteredHiraganaList(
      hiraganaList.filter(
        (symbol) =>
          (settings.hiraganaMain && symbol.type === "main") ||
          (settings.hiraganaDakuon && symbol.type === "dakuon") ||
          (settings.hiraganaCombo && symbol.type === "combo") ||
          (settings.hiraganaSmallTsu && symbol.type === "small-っ") ||
          (settings.hiraganaLongVowels && symbol.type === "long-vowels")
      )
    );
    setFilteredKatakanaList(
      katakanaList.filter(
        (symbol) =>
          (settings.katakanaMain && symbol.type === "main") ||
          (settings.katakanaDakuon && symbol.type === "dakuon") ||
          (settings.katakanaCombo && symbol.type === "combo") ||
          (settings.katakanaSmallTsu && symbol.type === "small-っ") ||
          (settings.katakanaLongVowels && symbol.type === "long-vowels")
      )
    );
  }, [settings]);

  React.useEffect(() => {
    window.addEventListener("contextmenu", (e) => e.preventDefault());
    return () => window.removeEventListener("contextmenu", (e) => e.preventDefault());
  }, []);

  if (page === "trainer")
    return (
      <Trainer
        hiraganaList={filteredHiraganaList}
        katakanaList={filteredKatakanaList}
        symbolType={symbolType}
        setPage={setPage}
      />
    );
  else if (page === "settings")
    return (
      <Settings
        symbolType={symbolType}
        setSymbolType={setSymbolType}
        settings={settings}
        setSettings={setSettings}
        setPage={setPage}
      />
    );
  else if (symbolType === "hiragana") return <HiraganaTable settings={settings} setPage={setPage} />;
  else if (symbolType === "katakana") return <KatakanaTable settings={settings} setPage={setPage} />;
};

export default App;
