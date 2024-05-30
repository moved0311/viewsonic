import { useRef, useState } from "react";

const App = () => {
  const ref = useRef(null);
  const [isEditable, setIsEditable] = useState(false);
  const [isResize, setIsResize] = useState(false);

  const onClickEdit = () => {
    setIsEditable((v) => !v);
    setTimeout(() => {
      ref.current.focus();
    });
  };

  const onClickResize = () => {
    setIsResize((v) => !v);
  };

  const textAreaWidth = isResize ? "w-[800px]" : "w-[400px]";

  return (
    <div className={`gap-2 flex h-[400px] border border-red-600 p-2 ${textAreaWidth}`}>
      <p ref={ref} className="border border-black flex-1 h-fit min-h-[26px] break-all" contentEditable={isEditable} />
      <div className="flex flex-col gap-2">
        <button className="border border-black w-20" onClick={onClickEdit}>
          edit
        </button>
        <button className="border border-black w-20" onClick={onClickResize}>
          resize
        </button>
      </div>
    </div>
  );
};

export default App;
