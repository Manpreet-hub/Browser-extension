import { getQuotesData } from "../services/";
import { useState, useEffect } from "react";
import axios from "axios";

export const Quotes = () => {
  const [quotesData, setQuotesData] = useState("");

  useEffect(() => {
    getQuotesData(setQuotesData);
  }, []);

  return <div className="text"> {quotesData}</div>;
};
