import { useState } from "react";
import "./index.css";

function App() {
  const [state, setState] = useState(0);

  const textContent = {
    0: {
      text: "Choose title content",
      btn_1: {
        text: "Submit title",
      },
    },
    1: {
      text: "Choose description content",
      btn_1: {
        text: "Back",
      },
      btn_2: {
        text: "Submit description",
      },
    },
    2: {
      text: "Are you happy now?",
      btn_1: {
        text: "No, go back",
      },
      btn_2: {
        text: "Yes, go ahead",
      },
    },
    3: {
      text: "Ok, We are done. Thanks for sending us your data!",
    },
  };

  const btnHandler = (state, id) => {
    switch (state) {
      case 0:
        {
          setState(1);
        }
        break;
      case 1:
        {
          id === 0 ? setState(0) : setState(2);
        }
        break;
      case 2: {
        id === 0 ? setState(1) : setState(3);
      }
    }
  };

  return (
    <div className="container h-screen bg-purple-700 flex items-center justify-center">
      <div className="bg-white w-max flex  justify-center gap-10 h-max px-14 py-6 rounded">
        <ul>
          <li className="flex gap-3 pb-3 font-medium">
            <span className="w-6 h-6 flex justify-center items-center bg-blue-600 rounded-full text-white">
              1
            </span>{" "}
            <button onClick={() => setState(0)}>Choose title</button>
          </li>
          <li className="flex gap-3 pb-3 font-medium">
            <span
              className={`w-6 h-6 flex justify-center items-center rounded-full 
              ${
                state > 0
                  ? "text-white bg-blue-600"
                  : "text-zinc-600 bg-zinc-300"
              }`}
            >
              2
            </span>{" "}
            <button
              onClick={() => setState(1)}
              className={`${state > 0 ? "" : "text-zinc-600"}`}
            >
              Choose description
            </button>
          </li>
          <li className="flex gap-3 pb-3 font-medium">
            <span
              className={`w-6 h-6 flex justify-center items-center rounded-full 
              ${
                state > 1
                  ? "text-white bg-blue-600"
                  : "text-zinc-600 bg-zinc-300"
              }`}
            >
              3
            </span>{" "}
            <button
              onClick={() => {state === 1 && setState(2)}}
              className={`${state > 1 ? "" : "text-zinc-600"}`}
            >
              Confirm data
            </button>
          </li>
        </ul>

        <div className="">
          <p className="text-2xl font-medium">{textContent[state].text}</p>
          <div className="flex pt-5 gap-5">
            {state < 3 && (
              <button
                onClick={() => btnHandler(state, 0)}
                className="py-2 px-4 bg-slate-200 rounded-sm font-medium text-lg"
              >
                {textContent[state].btn_1.text}
              </button>
            )}

            {state > 0 && state < 3 && (
              <button
                onClick={() => btnHandler(state, 1)}
                className="py-2 px-4 bg-slate-200 rounded-sm font-medium text-lg"
              >
                {textContent[state].btn_2.text}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
