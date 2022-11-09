import React from "react";
import "./styles.css";
import { useEffect, useState } from "react";
import { render } from "react-dom";

function App() {
  const [count, setCount] = useState(0);
  const [nname, setName] = useState("Chandrakant");
  const [password, setPassword] = useState("");
  handleChange = (event) => {
    setName(event.target.value);
  };
  handleChange2 = (event) => {
    setPassword(event.target.value);
  };
  useEffect(() => {
    setCount(count + 1);
    const len = password.length;
    if (len === 20) {
      alert(`Password len ${len} \n ${len % 5}`);
      setPassword("");
      const t = document.getElementsByName("fname");
      t.value = "";
    }
  }, [password]);

  return (
    <div className="App">
      <div
        style={{
          color: "green",
          fontSize: "40px",
          textAlign: "center",
          fontWeight: "bold",
          fontFamily: "verdana"
        }}
      >
        Hi,
        <br />
        Name:
        <input
          type="text"
          name="fname"
          placehlder={nname}
          onChange={handleChange}
        />
        <br />
        Password:
        <input
          type="password"
          name="pwd"
          placeholder={password}
          onChange={handleChange2}
        />
      </div>
    </div>
  );
}
export default App;
