import { useEffect, useState } from "react";

function Timer({ minutes }) {

  const [time, setTime] = useState(minutes * 60);

  useEffect(() => {
    setTime(minutes * 60);
  }, [minutes]);

  useEffect(() => {

    const interval = setInterval(() => {

      setTime((prev) => {

        if (prev <= 0) {
          clearInterval(interval);
          return 0;
        }

        return prev - 1;

      });

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  const mins = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <h3>
      Time Left : {mins}:{seconds < 10 ? `0${seconds}` : seconds}
    </h3>
  );

}

export default Timer;