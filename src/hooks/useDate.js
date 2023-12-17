import { useState, useEffect } from "react";

function useDate() {
  const [yearState, setYearState] = useState(0);

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    setYearState(year);
  }, []);

  return yearState;
}

export default useDate;
