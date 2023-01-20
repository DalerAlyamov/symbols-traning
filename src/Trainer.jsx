import React from "react";
import symbols from "./symbols";

let randInt = undefined;

const Trainer = ({ setPage }) => {
  const inputRef = React.useRef(null);
  const [value, setValue] = React.useState("");
  const [currentSymbol, setCurrentSymbol] = React.useState("");
  const [help, setHelp] = React.useState("");

  const handleChangeInput = (e) => {
    setValue(e.target.value);
    if (e.target.value === currentSymbol.transcript) {
      randInt = undefined;
      do randInt = Math.floor(Math.random() * 46);
      while (randInt === currentSymbol.index);
      setCurrentSymbol(symbols[randInt]);
      setValue("");
      setHelp("");
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (key) => {
      if (key.code === "Escape") setPage("table");
      if (key.code === "Space") {
        key.preventDefault();
        setValue("");
        setHelp(currentSymbol.transcript);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSymbol.transcript, setPage]);

  React.useEffect(() => {
    inputRef.current.focus();
    setCurrentSymbol(symbols[Math.floor(Math.random() * 46)]);
  }, []);

  return (
    <div className="trainer-view">
      <div className="form">
        <div className="symbol">{currentSymbol.symbol}</div>
        <div className="input-group">
          <input
            ref={inputRef}
            value={value}
            onChange={handleChangeInput}
            onBlur={() => inputRef.current.focus()}
            type="text"
            className="input"
            placeholder={help}
          />
        </div>
      </div>
    </div>
  );
};

export default Trainer;
