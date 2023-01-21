import React from "react";
import "./settings.css";

const Settings = ({ symbolType, setSymbolType, settings, setSettings, setPage }) => {
  const handleChangeSymbolsType = (e) => {
    if (e.button === 2) return;
    e.stopPropagation();
    setSymbolType(symbolType === "hiragana" ? "katakana" : "hiragana");
  };

  const handleviewClick = (mouse) => {
    if (mouse.button === 2) setPage("table");
    if (
      (symbolType === "hiragana" &&
        !settings.hiraganaMain &&
        !settings.hiraganaDakuon &&
        !settings.hiraganaCombo &&
        !settings.hiraganaSmallTsu &&
        !settings.hiraganaLongVowels) ||
      (symbolType === "katakana" &&
        !settings.katakanaMain &&
        !settings.katakanaDakuon &&
        !settings.katakanaCombo &&
        !settings.katakanaSmallTsu &&
        !settings.katakanaLongVowels)
    )
      return;
    if (mouse.button === 0) setPage("trainer");
  };

  return (
    <div className="settings-view" onMouseDown={handleviewClick}>
      <div className="settings-title" onMouseDown={handleChangeSymbolsType}>
        {symbolType === "hiragana" ? "Hiragana" : "Katakana"}
      </div>
      <div className="settings-list">
        <div
          className="settings-option"
          onWheel={(wheel) =>
            setSettings(
              symbolType === "hiragana"
                ? {
                    ...settings,
                    hiraganaMain: wheel.deltaY > 0,
                  }
                : {
                    ...settings,
                    katakanaMain: wheel.deltaY > 0,
                  }
            )
          }
        >
          <div className="toggle-box">
            <div
              className={
                (symbolType === "hiragana" ? settings.hiraganaMain : settings.katakanaMain)
                  ? "toggle-thumb active"
                  : "toggle-thumb"
              }
            />
          </div>
          Main Symbols
        </div>
        <div
          className="settings-option"
          onWheel={(wheel) =>
            setSettings(
              symbolType === "hiragana"
                ? {
                    ...settings,
                    hiraganaDakuon: wheel.deltaY > 0,
                  }
                : {
                    ...settings,
                    katakanaDakuon: wheel.deltaY > 0,
                  }
            )
          }
        >
          <div className="toggle-box">
            <div
              className={
                (symbolType === "hiragana" ? settings.hiraganaDakuon : settings.katakanaDakuon)
                  ? "toggle-thumb active"
                  : "toggle-thumb"
              }
            />
          </div>
          Dakuon
        </div>
        <div
          className="settings-option"
          onWheel={(wheel) =>
            setSettings(
              symbolType === "hiragana"
                ? {
                    ...settings,
                    hiraganaCombo: wheel.deltaY > 0,
                  }
                : {
                    ...settings,
                    katakanaCombo: wheel.deltaY > 0,
                  }
            )
          }
        >
          <div className="toggle-box">
            <div
              className={
                (symbolType === "hiragana" ? settings.hiraganaCombo : settings.katakanaCombo)
                  ? "toggle-thumb active"
                  : "toggle-thumb"
              }
            />
          </div>
          Combo
        </div>
        <div
          className="settings-option"
          onWheel={(wheel) =>
            setSettings(
              symbolType === "hiragana"
                ? {
                    ...settings,
                    hiraganaSmallTsu: wheel.deltaY > 0,
                  }
                : {
                    ...settings,
                    katakanaSmallTsu: wheel.deltaY > 0,
                  }
            )
          }
        >
          <div className="toggle-box">
            <div
              className={
                (symbolType === "hiragana" ? settings.hiraganaSmallTsu : settings.katakanaSmallTsu)
                  ? "toggle-thumb active"
                  : "toggle-thumb"
              }
            />
          </div>
          Small っ
        </div>
        <div
          className="settings-option"
          onWheel={(wheel) =>
            setSettings(
              symbolType === "hiragana"
                ? {
                    ...settings,
                    hiraganaLongVowels: wheel.deltaY > 0,
                  }
                : {
                    ...settings,
                    katakanaLongVowels: wheel.deltaY > 0,
                  }
            )
          }
        >
          <div className="toggle-box">
            <div
              className={
                (symbolType === "hiragana" ? settings.hiraganaLongVowels : settings.katakanaLongVowels)
                  ? "toggle-thumb active"
                  : "toggle-thumb"
              }
            />
          </div>
          Long Vowels
        </div>
      </div>
    </div>
  );
};

export default Settings;
