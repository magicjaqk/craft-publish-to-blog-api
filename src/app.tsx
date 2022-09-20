import * as React from "react";
import * as ReactDOM from "react-dom";

const App: React.FC<{}> = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-tr from-sky-600 to-blue-300">
      <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text">
        CraftSDK Typescript/React with TailwindCSS
      </div>
    </div>
  );
};

export function initApp() {
  ReactDOM.render(<App />, document.getElementById("react-root"));
}
