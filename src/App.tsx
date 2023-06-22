import React from "react";
import "./App.css";

function App() {
  const text: string = "Day Dreamerz";

  const addAnimationToLetter = (e: React.MouseEvent<HTMLInputElement>) => {
    const element = e.target as HTMLElement;
    element.style.animationName = "titleHoverAnimation";
  };
  const removeAnimationFromLetter = (e: React.MouseEvent<HTMLInputElement>) => {
    const element = e.target as HTMLElement;
    setTimeout(() => {
      element.style.animationName = "";
    }, 1000);
  };
  return (
    <div className="App">
      <div className="text-container">
        {text.split("").map((char, key) => (
          <div
            key={key}
            className="text"
            onMouseEnter={addAnimationToLetter}
            onMouseLeave={removeAnimationFromLetter}
          >
            {char}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
