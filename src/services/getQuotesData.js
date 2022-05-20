import axios from "axios";
export const getQuotesData = async (setQuotesData) => {
  const quotesAPI =
    "https://api.quotable.io/random?tags=education|technology|wisdom|love|inspirational|success|&maxLength=100";

  try {
    await axios.get(quotesAPI).then((res) => setQuotesData(res.data.content));
  } catch (error) {
    console.log(error);
  }
};
