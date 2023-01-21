import React from "react";

let randInt = undefined;

const Trainer = ({ hiraganaList, katakanaList, symbolType, setPage }) => {
  const inputRef = React.useRef(null);
  const [value, setValue] = React.useState("");
  const [currentSymbol, setCurrentSymbol] = React.useState("");
  const [help, setHelp] = React.useState("");
  const [counter, setCounter] = React.useState(0);

  const handleChangeInput = (e) => {
    setValue(e.target.value);
    if (e.target.value === currentSymbol.transcript) {
      if (help === "") setCounter((prev) => prev + 1);
      randInt = undefined;
      if (symbolType === "hiragana") {
        do randInt = Math.floor(Math.random() * hiraganaList.length);
        while (randInt === currentSymbol.index);
        setCurrentSymbol(hiraganaList[randInt]);
      } 
      if (symbolType === "katakana") {
        do randInt = Math.floor(Math.random() * katakanaList.length);
        while (randInt === currentSymbol.index);
        setCurrentSymbol(katakanaList[randInt]);
      } 
      setValue("");
      setHelp("");
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (key) => {
      if (key.code === "Escape") setPage("table");
      if (key.code === "Backspace") setValue("");
      if (key.code === "Space") {
        key.preventDefault();
        setValue("");
        setHelp(currentSymbol.transcript);
        setCounter((prev) => (prev === 0 ? 0 : prev - 1));
      }
    };
    const handleMouseDown = (mouse) => {
      if (mouse.button === 2) setPage("settings");
    };
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentSymbol.transcript, setPage]);

  React.useEffect(() => {
    inputRef.current.focus();
    if (symbolType === "hiragana") {
      randInt = Math.floor(Math.random() * hiraganaList.length);
      setCurrentSymbol(hiraganaList[randInt]);
    }
    if (symbolType === "katakana") {
      randInt = Math.floor(Math.random() * katakanaList.length);
      setCurrentSymbol(katakanaList[randInt]);
    }
  }, [hiraganaList, katakanaList, symbolType]);

  return (
    <div className="trainer-view">
      <div className="counter">{counter}</div>
      <div className="form">
        <div className="symbol-group">
          <div className="symbol">{currentSymbol.symbol}</div>
          <div className="help">{help}</div>
        </div>
        <div className="input-group">
          <input
            ref={inputRef}
            value={value}
            onChange={handleChangeInput}
            onBlur={() => inputRef.current.focus()}
            type="text"
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Trainer;
