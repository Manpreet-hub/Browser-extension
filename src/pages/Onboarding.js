import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useRef, useState } from "react";

export const Onboarding = () => {
  const name = useRef();
  const navigate = useNavigate();
  const [username, setUserName] = useState("");

  const changeHandler = () => {
    setUserName(name.current.value);
    localStorage.setItem("username", name.current.value);
  };

  return (
    <div className="main-container min-height">
      <div className="content">
        <h1 className="intro-content">Hello,what's your name?</h1>
        <input
          type="text"
          className="intro-input"
          ref={name}
          onChange={changeHandler}
        />

        {username !== "" && (
          <button
            class="btn-default btn-light"
            onClick={() => navigate("/info")}
          >
            Continue <i class="fa-solid fa-greater-than"></i>
          </button>
        )}
      </div>
    </div>
  );
};
