import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [meaning, setMeaning] = useState("");
  const emojiData = {
    "😃": "smiley face",
    "😌":
      " Intended to depict nerves or discomfort but commonly used to express a close call, as if saying Whew! and wiping sweat from the forehead. ",
    "😇": "angelic behavior",
    " 😍": "love",
    "😋": "delicious",
    "😒": "unamused face",
    "😐": "expression less",
    "😈": " mischief, naughtiness",
    "": "",
    "": ""
  };
  var emojiWeKnow = Object.keys(emojiData);
  function userInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiData[userInput];
    setMeaning(meaning);
  }
  function onClickHandler(item) {
    var meaning = emojiData[item];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>know your emoji</h1>
      <input onChange={userInputHandler} />
      <h3>{meaning}</h3>
      <h3>Emojis we know </h3>
      <div class="parent">
        {emojiWeKnow.map(function (item) {
          return (
            <span
              onClick={() => onClickHandler(item)}
              key={item}
              class="emojis child"
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
