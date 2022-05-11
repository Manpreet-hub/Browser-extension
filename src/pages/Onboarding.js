import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useRef, useState } from "react";

export const Onboarding = () => {
  const username = useRef();
  const clickHandler = () => {
    localStorage.setItem("username", username.current.value);
  };

  return (
    <>
      <div className="main-container">
        <div className="content">
          <h1 className="intro-content">Hello,what's your name?</h1>
          <input type="text" className="intro-input" ref={username} />

          <Link to="/info">
            <button class="btn-default btn-light" onClick={clickHandler}>
              Continue <i class="fa-solid fa-greater-than"></i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
