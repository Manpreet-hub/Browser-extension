import { Todo, Weather, Quotes } from "../components";
import { useState, useEffect, useRef } from "react";

export const UserInfo = () => {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const minutes = minute / 10 < 1 ? `0${minute}` : minute;
  const timeInfo = `${hour}: ${minutes}`;
  const greetings = () => {
    if (hour < 4) return " Night";
    else if (hour < 12) return " Morning";
    else if (hour < 16) return " Afternoon";
    else if (hour < 21) return " Evening";
    else return " Night";
  };

  const [focus, setFocus] = useState("");
  const [showFocus, setShowFocus] = useState(false);
  const [checked, setChecked] = useState(false);

  const focusInput = useRef();

  return (
    <>
      <div className="flex-end">
        <Weather />
      </div>
      <div className="main-container">
        <h1 className="intro-content">{timeInfo}</h1>
        <h3 className="info-p para-lg">
          Good
          {greetings()},{localStorage.getItem("username")} !
        </h3>
        <p className="info-p para-lg">What's your main focus for today?</p>
        {focus !== "" && showFocus ? (
          <div className="focus-wrapper">
            <label className="focus-input">
              <input
                type="checkbox"
                className="p para-md"
                checked={checked}
                onChange={() => setChecked((prevChecked) => !prevChecked)}
              />
              <span
                style={
                  checked
                    ? { textDecoration: "line-through" }
                    : { textDecoration: "none" }
                }
              >
                {focus}
              </span>
              <div
                onClick={() => {
                  setChecked(false);
                  setShowFocus((prevFocus) => !prevFocus);
                }}
                className="edit-icon"
              >
                <i className="fa-solid fa-pen-to-square icon"></i>
              </div>
            </label>
            {checked ? <h4 className="focus-checked">Good Job</h4> : ""}
          </div>
        ) : (
          <input
            type="text"
            className="intro-input"
            ref={focusInput}
            onKeyPress={(e) =>
              e.key == "Enter"
                ? (setShowFocus(true), setFocus(focusInput.current.value))
                : ""
            }
          />
        )}
      </div>
      <div className="footer-section">
        <div className="center-div">
          <Quotes />
        </div>
        <div className="flex-end todo-btn">
          <Todo />
        </div>
      </div>
    </>
  );
};
