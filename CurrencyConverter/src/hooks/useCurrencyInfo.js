import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const API_KEY = "e5303ef6b4cceaa74997575f";
  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currency}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((res) => {
        if (res.conversion_rates) {
          setData(res.conversion_rates); // Update state with conversion rates
        } else {
          throw new Error("Invalid API response structure");
        }
      })
      .catch((err) => {
        console.error("Error fetching currency data:", err);
        setError(err.message); // Update error state
      });
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
