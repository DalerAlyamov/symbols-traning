import React from "react";

const HiraganaTable = (props) => {
  const [page, setPage] = React.useState(1);

  const handleMouseDownonContent = (mouse) => {
    if (mouse.button === 0) props.setPage("settings");
  };

  React.useEffect(() => {
    const handleKeyDown = (key) => {
      if (key.code === "Enter") props.setPage("settings");
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
      <div className="table-title">Hiragana</div>
      <div className="content" onMouseDown={handleMouseDownonContent}>
        {page === 1 && (
          <div className="table-container">
            <div className="table">
              <div className="table-cell">
                <div className="table-cell-symbol">あ</div>
                <div className="table-cell-transcript">a</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">い</div>
                <div className="table-cell-transcript">i</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">う</div>
                <div className="table-cell-transcript">u</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">え</div>
                <div className="table-cell-transcript">e</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">お</div>
                <div className="table-cell-transcript">o</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">か</div>
                <div className="table-cell-transcript">ka</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">き</div>
                <div className="table-cell-transcript">ki</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">く</div>
                <div className="table-cell-transcript">ky</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">け</div>
                <div className="table-cell-transcript">ke</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">こ</div>
                <div className="table-cell-transcript">ko</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">さ</div>
                <div className="table-cell-transcript">sa</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">し</div>
                <div className="table-cell-transcript">shi</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">す</div>
                <div className="table-cell-transcript">su</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">せ</div>
                <div className="table-cell-transcript">se</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">そ</div>
                <div className="table-cell-transcript">so</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">た</div>
                <div className="table-cell-transcript">ta</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ち</div>
                <div className="table-cell-transcript">chi</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">つ</div>
                <div className="table-cell-transcript">tsu</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">て</div>
                <div className="table-cell-transcript">te</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">と</div>
                <div className="table-cell-transcript">to</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">な</div>
                <div className="table-cell-transcript">na</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">に</div>
                <div className="table-cell-transcript">ni</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ぬ</div>
                <div className="table-cell-transcript">nu</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ね</div>
                <div className="table-cell-transcript">ne</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">の</div>
                <div className="table-cell-transcript">no</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">は</div>
                <div className="table-cell-transcript">ha</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ひ</div>
                <div className="table-cell-transcript">hi</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ふ</div>
                <div className="table-cell-transcript">fu</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">へ</div>
                <div className="table-cell-transcript">he</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ほ</div>
                <div className="table-cell-transcript">ho</div>
              </div>
            </div>
            <div className="table">
              <div className="table-cell">
                <div className="table-cell-symbol">ま</div>
                <div className="table-cell-transcript">ma</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">み</div>
                <div className="table-cell-transcript">mi</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">む</div>
                <div className="table-cell-transcript">mu</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">め</div>
                <div className="table-cell-transcript">me</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">も</div>
                <div className="table-cell-transcript">mo</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">や</div>
                <div className="table-cell-transcript">ya</div>
              </div>
              <div className="table-cell" />
              <div className="table-cell">
                <div className="table-cell-symbol">ゆ</div>
                <div className="table-cell-transcript">yu</div>
              </div>
              <div className="table-cell" />
              <div className="table-cell">
                <div className="table-cell-symbol">よ</div>
                <div className="table-cell-transcript">yo</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ら</div>
                <div className="table-cell-transcript">ra</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">り</div>
                <div className="table-cell-transcript">ri</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">る</div>
                <div className="table-cell-transcript">ru</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">れ</div>
                <div className="table-cell-transcript">re</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ろ</div>
                <div className="table-cell-transcript">ro</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">わ</div>
                <div className="table-cell-transcript">wa</div>
              </div>
              <div className="table-cell" />
              <div className="table-cell" />
              <div className="table-cell" />
              <div className="table-cell">
                <div className="table-cell-symbol">を</div>
                <div className="table-cell-transcript">wo</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ん</div>
                <div className="table-cell-transcript">n</div>
              </div>
            </div>
          </div>
        )}
        {page === 2 && (
          <div className="table-container">
            <div className="table">
              <div className="table-cell">
                <div className="table-cell-symbol">が</div>
                <div className="table-cell-transcript">ga</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ぎ</div>
                <div className="table-cell-transcript">gi</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ぐ</div>
                <div className="table-cell-transcript">gu</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">げ</div>
                <div className="table-cell-transcript">ge</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ご</div>
                <div className="table-cell-transcript">go</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ざ</div>
                <div className="table-cell-transcript">za</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">じ</div>
                <div className="table-cell-transcript">ji</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ず</div>
                <div className="table-cell-transcript">zu</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ぜ</div>
                <div className="table-cell-transcript">ze</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ぞ</div>
                <div className="table-cell-transcript">zo</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">だ</div>
                <div className="table-cell-transcript">da</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ぢ</div>
                <div className="table-cell-transcript">ji</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">づ</div>
                <div className="table-cell-transcript">zu</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">で</div>
                <div className="table-cell-transcript">de</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ど</div>
                <div className="table-cell-transcript">do</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ば</div>
                <div className="table-cell-transcript">ba</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">び</div>
                <div className="table-cell-transcript">bi</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ぶ</div>
                <div className="table-cell-transcript">bu</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">べ</div>
                <div className="table-cell-transcript">be</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ぼ</div>
                <div className="table-cell-transcript">bo</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ぱ</div>
                <div className="table-cell-transcript">pa</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ぴ</div>
                <div className="table-cell-transcript">pi</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ぷ</div>
                <div className="table-cell-transcript">pu</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ぺ</div>
                <div className="table-cell-transcript">pe</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ぽ</div>
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

export default HiraganaTable;
