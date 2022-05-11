import { Todo, Weather, Quotes, Reset } from "../components";

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

  return (
    <>
      <div className="header-section">
        <Weather />
      </div>
      <div className="main-container">
        <h1 className="intro-content">{timeInfo}</h1>
        <h3 className="info-p para-lg">
          Good
          {greetings()},{localStorage.getItem("username")} !
        </h3>
        <p className="info-p para-lg">What's your main focus for today?</p>
        <input type="text" className="intro-input" />
      </div>
      <div className="footer-section">
        <Reset />
        <Quotes />
        <Todo />
      </div>
    </>
  );
};
