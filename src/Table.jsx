import React from "react";

const Table = ({ setPage }) => {
  React.useEffect(() => {
    const handleKeyDown = (key) => {
      if (key.code === "Enter") setPage("trainer");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setPage]);

  return (
    <div className="table-view">
      <div className="table">
        <div className="table-row">
          <div className="table-col">
            <div className="table-col-symbol">あ</div>
            <div className="table-col-transcript">a</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">い</div>
            <div className="table-col-transcript">i</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">う</div>
            <div className="table-col-transcript">y</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">え</div>
            <div className="table-col-transcript">e</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">お</div>
            <div className="table-col-transcript">o</div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-col">
            <div className="table-col-symbol">か</div>
            <div className="table-col-transcript">ka</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">き</div>
            <div className="table-col-transcript">ki</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">く</div>
            <div className="table-col-transcript">ky</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">け</div>
            <div className="table-col-transcript">ke</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">こ</div>
            <div className="table-col-transcript">ko</div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-col">
            <div className="table-col-symbol">さ</div>
            <div className="table-col-transcript">sa</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">し</div>
            <div className="table-col-transcript">shi</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">す</div>
            <div className="table-col-transcript">su</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">せ</div>
            <div className="table-col-transcript">se</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">そ</div>
            <div className="table-col-transcript">so</div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-col">
            <div className="table-col-symbol">た</div>
            <div className="table-col-transcript">ta</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">ち</div>
            <div className="table-col-transcript">chi</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">つ</div>
            <div className="table-col-transcript">tsu</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">て</div>
            <div className="table-col-transcript">te</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">と</div>
            <div className="table-col-transcript">to</div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-col">
            <div className="table-col-symbol">な</div>
            <div className="table-col-transcript">na</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">に</div>
            <div className="table-col-transcript">ni</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">ぬ</div>
            <div className="table-col-transcript">nu</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">ね</div>
            <div className="table-col-transcript">ne</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">の</div>
            <div className="table-col-transcript">no</div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-col">
            <div className="table-col-symbol">は</div>
            <div className="table-col-transcript">ha</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">ひ</div>
            <div className="table-col-transcript">hi</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">ふ</div>
            <div className="table-col-transcript">fu</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">へ</div>
            <div className="table-col-transcript">he</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">ほ</div>
            <div className="table-col-transcript">ho</div>
          </div>
        </div>
      </div>
      <div className="table">
        <div className="table-row">
          <div className="table-col">
            <div className="table-col-symbol">ま</div>
            <div className="table-col-transcript">ma</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">み</div>
            <div className="table-col-transcript">mi</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">む</div>
            <div className="table-col-transcript">mu</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">め</div>
            <div className="table-col-transcript">me</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">も</div>
            <div className="table-col-transcript">mo</div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-col">
            <div className="table-col-symbol">や</div>
            <div className="table-col-transcript">ya</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol"></div>
            <div className="table-col-transcript"></div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">ゆ</div>
            <div className="table-col-transcript">yu</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol"></div>
            <div className="table-col-transcript"></div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">よ</div>
            <div className="table-col-transcript">yo</div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-col">
            <div className="table-col-symbol">ら</div>
            <div className="table-col-transcript">ra</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">り</div>
            <div className="table-col-transcript">ri</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">る</div>
            <div className="table-col-transcript">ru</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">れ</div>
            <div className="table-col-transcript">re</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">ろ</div>
            <div className="table-col-transcript">ro</div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-col">
            <div className="table-col-symbol">わ</div>
            <div className="table-col-transcript">wa</div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol"></div>
            <div className="table-col-transcript"></div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol"></div>
            <div className="table-col-transcript"></div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol"></div>
            <div className="table-col-transcript"></div>
          </div>
          <div className="table-col">
            <div className="table-col-symbol">を</div>
            <div className="table-col-transcript">wo</div>
          </div>
        </div>
        <div className="table-row">
          <div className="table-col">
            <div className="table-col-symbol">ん</div>
            <div className="table-col-transcript">n</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
