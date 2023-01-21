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
      else setPage((prev) => (prev === 5 ? 5 : prev + 1));
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
          <div className="table-container col-2">
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
        {page === 3 && (
          <div className="table-container col-2">
            <div className="table">
              <div className="table-cell">
                <div className="table-cell-symbol">きゃ</div>
                <div className="table-cell-transcript">kya</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">きゅ</div>
                <div className="table-cell-transcript">kyu</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">きょ</div>
                <div className="table-cell-transcript">kyo</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ぎゃ</div>
                <div className="table-cell-transcript">gya</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ぎゅ</div>
                <div className="table-cell-transcript">gyu</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ぎょ</div>
                <div className="table-cell-transcript">gyo</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">しゃ</div>
                <div className="table-cell-transcript">sha</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">しゅ</div>
                <div className="table-cell-transcript">shu</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">しょ</div>
                <div className="table-cell-transcript">sho</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">じゃ</div>
                <div className="table-cell-transcript">ja</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">じゅ</div>
                <div className="table-cell-transcript">ju</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">じょ</div>
                <div className="table-cell-transcript">jo</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ちゃ</div>
                <div className="table-cell-transcript">cha</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ちゅ</div>
                <div className="table-cell-transcript">chu</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ちょ</div>
                <div className="table-cell-transcript">cho</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">にゃ</div>
                <div className="table-cell-transcript">nya</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">にゅ</div>
                <div className="table-cell-transcript">nyu</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">にょ</div>
                <div className="table-cell-transcript">nyo</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ひゃ</div>
                <div className="table-cell-transcript">hya</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ひゅ</div>
                <div className="table-cell-transcript">hyu</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ひょ</div>
                <div className="table-cell-transcript">hyo</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">びゃ</div>
                <div className="table-cell-transcript">bya</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">びゅ</div>
                <div className="table-cell-transcript">byu</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">びょ</div>
                <div className="table-cell-transcript">byo</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ぴゃ</div>
                <div className="table-cell-transcript">pya</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ぴゅ</div>
                <div className="table-cell-transcript">pyu</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ぴょ</div>
                <div className="table-cell-transcript">pyo</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">みゃ</div>
                <div className="table-cell-transcript">mya</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">みゅ</div>
                <div className="table-cell-transcript">myu</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">みょ</div>
                <div className="table-cell-transcript">myo</div>
              </div>
            </div>
            <div className="table">
              <div className="table-cell">
                <div className="table-cell-symbol">りゃ</div>
                <div className="table-cell-transcript">rya</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">りゅ</div>
                <div className="table-cell-transcript">ryu</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">りょ</div>
                <div className="table-cell-transcript">ryo</div>
              </div>
            </div>
          </div>
        )}
        {page === 4 && (
          <div className="table-container">
            <div className="table col-4">
              <div className="table-cell">
                <div className="table-cell-symbol">っ+k</div>
                <div className="table-cell-transcript">kk</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">っ+s</div>
                <div className="table-cell-transcript">ss</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">っ+t</div>
                <div className="table-cell-transcript">tt</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">っ+p</div>
                <div className="table-cell-transcript">pp</div>
              </div>
            </div>
          </div>
        )}
        {page === 5 && (
          <div className="table-container">
            <div className="table">
              <div className="table-cell">
                <div className="table-cell-symbol">ああ</div>
                <div className="table-cell-transcript">aa</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">いい</div>
                <div className="table-cell-transcript">ii</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">うう</div>
                <div className="table-cell-transcript">uu</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">ええ</div>
                <div className="table-cell-transcript">ee</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">おお</div>
                <div className="table-cell-transcript">oo</div>
              </div>
              <div className="table-cell" />
              <div className="table-cell" />
              <div className="table-cell" />
              <div className="table-cell">
                <div className="table-cell-symbol">えい</div>
                <div className="table-cell-transcript">ei</div>
              </div>
              <div className="table-cell">
                <div className="table-cell-symbol">おう</div>
                <div className="table-cell-transcript">ou</div>
              </div>
            </div>
          </div>
        )}
        <div className="footer">
          <div className="pagination">
            <span>{page}</span>
            <span>/</span>
            <span>5</span>
          </div>
          <div className="page-description">
            {page === 1 && "Main"}
            {page === 2 && "Daukon"}
            {page === 3 && "Combo"}
            {page === 4 && "Small っ"}
            {page === 5 && "Long Vowels"}
          </div>
        </div>
      </div>
    </>
  );
};

export default HiraganaTable;
