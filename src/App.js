import { useEffect, useState } from "react";
import "./App.css";
import { Input } from "./components/Input.js";
import { Heading } from "./components/Heading.js";
import { Select } from "./components/Select.js";
import { BASE_URL } from "./constants/url.constants.js";

function App() {
  const [USDRate, setUSDRate] = useState(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    fetch(BASE_URL)
      .then((r) => r.json())
      .then((r) => setUSDRate(r.amd.rate));
  }, []);

  const handleValueInput = (e) => {
    const newVal = e.target.value;
    setValue(newVal);
  };

  return !USDRate ? (
    <div id="mainContainer">
      <Heading type="h2" text="Loading..." />
    </div>
  ) : (
    <div id="mainContainer">
      <Heading type="h2" text="USD to AMD Converter" />
      <div className="sectionContainer">
        <Input type="number" value={value} handleChange={handleValueInput} />
        <Select options={["USD"]} />
      </div>
      <div className="sectionContainer">
        <Input type="number" value={value * USDRate} handleChange={() => {}} />
        <Select options={["AMD"]} />
      </div>
    </div>
  );
}

export default App;
