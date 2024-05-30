import { useState } from "react";

const App = () => {
  const [timer, setTimer] = useState({start: null, end: null})
  const duration = timer.end ? timer.end - timer.start : 0

  const onClickStart = () => {
    setTimer({start: performance.now(), end: null})
  };

  const onClickEnd = () => {
    setTimer(prev => ({...prev, end: performance.now()}))
  };

  return (
    <div className="m-2">
      <div className="flex gap-2">
        <button className="border border-black w-20" onClick={onClickStart}>
          start
        </button>
        <button className="border border-black w-20" onClick={onClickEnd}>
          end
        </button>
      </div>
      <p className="mt-2">Duration: {duration.toFixed(2)}ms</p>
    </div>
  );
};

export default App;
