import React from "react";

const KatakanaTable = (props) => {
  const [page, setPage] = React.useState(1);

  const handleMouseDownonContent = (mouse) => {
    if (mouse.button === 0) props.setPage("trainer");
  };

  React.useEffect(() => {
    const handleKeyDown = (key) => {
      if (key.code === "Enter") props.setPage("trainer");
    };
    const handleWheelScroll = (wheel) => {
      if (wheel.deltaY < 0) setPage((prev) => (prev === 1 ? 1 : prev - 1));
      else setPage((prev) => (prev === 2 ? 2 : prev + 1));
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheelScroll);
    return () => {
      window.removeEventListener("wheel", handleWheelScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [props]);

  return (
    <>
      <div className="table-title">
        <button
          className="change-symbol-type-button"
          onClick={() => props.setSymbolType((prev) => (prev === "hiragana" ? "katakana" : "hiragana"))}
        >
          Katakana
        </button>
      </div>
      <div className="content" onMouseDown={handleMouseDownonContent}>
        {page === 1 && (
          <div className="table-container">
            <div className="table">
              <div className="table-cell">
                <div className="table-cell-symbol">ア</div>
                <div className="table-cell-transcript">a</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">イ</div>
                <div className="table-cell-transcript">i</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ウ</div>
                <div className="table-cell-transcript">u</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">エ</div>
                <div className="table-cell-transcript">e</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">オ</div>
                <div className="table-cell-transcript">o</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">カ</div>
                <div className="table-cell-transcript">ka</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">キ</div>
                <div className="table-cell-transcript">ki</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ク</div>
                <div className="table-cell-transcript">ky</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ケ</div>
                <div className="table-cell-transcript">ke</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">コ</div>
                <div className="table-cell-transcript">ko</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">サ</div>
                <div className="table-cell-transcript">sa</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">シ</div>
                <div className="table-cell-transcript">shi</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ス</div>
                <div className="table-cell-transcript">su</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">セ</div>
                <div className="table-cell-transcript">se</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ソ</div>
                <div className="table-cell-transcript">so</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">タ</div>
                <div className="table-cell-transcript">ta</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">チ</div>
                <div className="table-cell-transcript">chi</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ツ</div>
                <div className="table-cell-transcript">tsu</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">テ</div>
                <div className="table-cell-transcript">te</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ト</div>
                <div className="table-cell-transcript">to</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ナ</div>
                <div className="table-cell-transcript">na</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ニ</div>
                <div className="table-cell-transcript">ni</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ヌ</div>
                <div className="table-cell-transcript">nu</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ネ</div>
                <div className="table-cell-transcript">ne</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ノ</div>
                <div className="table-cell-transcript">no</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ハ</div>
                <div className="table-cell-transcript">ha</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ヒ</div>
                <div className="table-cell-transcript">hi</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">フ</div>
                <div className="table-cell-transcript">fu</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ヘ</div>
                <div className="table-cell-transcript">he</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ホ</div>
                <div className="table-cell-transcript">ho</div>
              </div>
            </div>
            <div className="table">
              <div className="table-cell">
                <div className="table-cell-symbol">マ</div>
                <div className="table-cell-transcript">ma</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ミ</div>
                <div className="table-cell-transcript">mi</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ム</div>
                <div className="table-cell-transcript">mu</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">メ</div>
                <div className="table-cell-transcript">me</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">モ</div>
                <div className="table-cell-transcript">mo</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ヤ</div>
                <div className="table-cell-transcript">ya</div>
              </div>
              <div className="table-cell" />
              <div className="table-cell">
                <div className="table-cell-symbol">ユ</div>
                <div className="table-cell-transcript">yu</div>
              </div>
              <div className="table-cell" />
              <div className="table-cell">
                <div className="table-cell-symbol">ヨ</div>
                <div className="table-cell-transcript">yo</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ラ</div>
                <div className="table-cell-transcript">ra</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">リ</div>
                <div className="table-cell-transcript">ri</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ル</div>
                <div className="table-cell-transcript">ru</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">レ</div>
                <div className="table-cell-transcript">re</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ロ</div>
                <div className="table-cell-transcript">ro</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ワ</div>
                <div className="table-cell-transcript">wa</div>
              </div>
              <div className="table-cell" />
              <div className="table-cell" />
              <div className="table-cell" />
              <div className="table-cell">
                <div className="table-cell-symbol">ヲ</div>
                <div className="table-cell-transcript">wo</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ン</div>
                <div className="table-cell-transcript">n</div>
              </div>
            </div>
          </div>
        )}
        {page === 2 && (
          <div className="table-container">
            <div className="table">
              <div className="table-cell">
                <div className="table-cell-symbol">ガ</div>
                <div className="table-cell-transcript">ga</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ギ</div>
                <div className="table-cell-transcript">gi</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">グ</div>
                <div className="table-cell-transcript">gu</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ゲ</div>
                <div className="table-cell-transcript">ge</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ゴ</div>
                <div className="table-cell-transcript">go</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ザ</div>
                <div className="table-cell-transcript">za</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ジ</div>
                <div className="table-cell-transcript">ji</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ズ</div>
                <div className="table-cell-transcript">zu</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ゼ</div>
                <div className="table-cell-transcript">ze</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ゾ</div>
                <div className="table-cell-transcript">zo</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ダ</div>
                <div className="table-cell-transcript">da</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ヂ</div>
                <div className="table-cell-transcript">ji</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ヅ</div>
                <div className="table-cell-transcript">zu</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">デ</div>
                <div className="table-cell-transcript">de</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ド</div>
                <div className="table-cell-transcript">do</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">バ</div>
                <div className="table-cell-transcript">ba</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ビ</div>
                <div className="table-cell-transcript">bi</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ブ</div>
                <div className="table-cell-transcript">bu</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ベ</div>
                <div className="table-cell-transcript">be</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ボ</div>
                <div className="table-cell-transcript">bo</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">パ</div>
                <div className="table-cell-transcript">pa</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ピ</div>
                <div className="table-cell-transcript">pi</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">プ</div>
                <div className="table-cell-transcript">pu</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ペ</div>
                <div className="table-cell-transcript">pe</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ポ</div>
                <div className="table-cell-transcript">po</div>
              </div>
              <div className="table-cell" />
              <div className="table-cell" />
              <div className="table-cell" />
              <div className="table-cell" />
              <div className="table-cell" />
            </div>
          </div>
        )}
        <div className="pagination">
          <span>{page}</span>
          <span>/</span>
          <span>2</span>
        </div>
      </div>
    </>
  );
};

export default KatakanaTable;
