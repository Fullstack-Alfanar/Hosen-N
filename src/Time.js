import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    setInterval(() => {
      let d = new Date();
      let newTime = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
      setTime(newTime);
    }, 1000);
  });

  return <h1>{time}</h1>;
}
export default Clock;
