import "./App.css";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { useState } from "react";
const Conponent = styled("div")({
  width: 258,
  height: 260,
  borderRadius: 15,
  backgroundColor: "black",
  margin: "20px  auto",
});

const InputConteiner = styled("input")({
  textAlign: "right",
  width: 250,
  height: 50,
  borderRadius: "15px 15px  0  0 ",
});

function App() {
  const [result, setResult] = useState(" ");

  const henderClick = (e) => {
    setResult(result.concat(e.target?.name));
  };

  const calc = () => {
    try {
      setResult(eval(result));
    } catch (error) {
      setResult("error");
    }
  };

  const percent = () => {
    const carr = parseFloat(result);
    setResult((carr / 100).toString());
  };

  const clean = () => {
    setResult("  ");
  };

  const del = () => {
    setResult(result.slice(0, -1));
  };

  return (
    <div>
      <Conponent>
        <InputConteiner value={result} />
        <Button onClick={clean} name="AC" variant="outlined">
          AC
        </Button>
        <Button onClick={del} name="C" variant="outlined">
          {" "}
          C
        </Button>
        <Button onClick={percent} name="%" variant="outlined">
          {" "}
          %
        </Button>
        <Button onClick={henderClick} name="/" variant="outlined">
          {" "}
          /
        </Button>

        <Button onClick={henderClick} name="9" variant="outlined">
          {" "}
          9
        </Button>
        <Button onClick={henderClick} name="8" variant="outlined">
          8
        </Button>
        <Button onClick={henderClick} name="7" variant="outlined">
          {" "}
          7
        </Button>
        <Button onClick={henderClick} name="*" variant="outlined">
          {" "}
          *
        </Button>

        <Button onClick={henderClick} name="6" variant="outlined">
          6
        </Button>
        <Button onClick={henderClick} name="5" variant="outlined">
          {" "}
          5
        </Button>
        <Button onClick={henderClick} name="4" variant="outlined">
          {" "}
          4
        </Button>
        <Button onClick={henderClick} name="+" variant="outlined">
          {" "}
          +
        </Button>

        <Button onClick={henderClick} name="3" variant="outlined">
          3
        </Button>
        <Button onClick={henderClick} name="2" variant="outlined">
          {" "}
          2
        </Button>
        <Button onClick={henderClick} name="1" variant="outlined">
          {" "}
          1
        </Button>
        <Button onClick={henderClick} name="-" variant="outlined">
          {" "}
          -
        </Button>

        <Button onClick={henderClick} name="0" variant="outlined">
          {" "}
          0
        </Button>
        <Button onClick={henderClick} name="." variant="outlined">
          {" "}
          .
        </Button>
        <Button
          onClick={calc}
          name="="
          style={{ width: 130 }}
          variant="contained"
        >
          =
        </Button>
      </Conponent>
    </div>
  );
}

export default App;
