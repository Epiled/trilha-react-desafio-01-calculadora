import { useState } from "react"
import { ButtonsContainers, CalculatorShape, Container, DisplayAcc, DisplayStyled } from "./styles";
import { Button, ButtonReset } from "../components/Button";

const Calculator = () => {
  const [num1, setNum1] = useState<string>("0");
  const [num2, setNum2] = useState<string>("");
  const [showValue, setShowValue] = useState<string>("0");
  const [operator, setOperator] = useState<string>("");

  const handleCurrValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget?.value; // Verificação extra para evitar erro

    if (value == null) return; // Verifica se 'value' é nulo ou indefinido

    if (!operator) {
      setNum1(prev => (prev === "0" ? value : prev + value));
      setShowValue(prev => (prev === "0" ? value : prev + value));
    } else {
      setNum2(prev => (prev === "" ? value : prev + value));
      setShowValue(prev => prev + value);
    }
  };

  const handleOperator = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget?.value; // Verificação extra para evitar erro

    if (value == null) return; // Verifica se 'value' é nulo ou indefinido

    if (num2) {
      handleResult(); // Calcula automaticamente o resultado se uma operação já estiver em andamento
    }
    setOperator(value);
    setShowValue(prev => prev + value);
  };

  const handleResult = () => {
    if (!num2) return;

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let result = 0;

    switch (operator) {
      case '+':
        result = n1 + n2;
        break;
      case '-':
        result = n1 - n2;
        break;
      case 'X':
        result = n1 * n2;
        break;
      case '/':
        result = n2 !== 0 ? n1 / n2 : 0;
        break;
      default:
        return;
    }

    setNum1(result.toString());
    setNum2("");
    setShowValue(result.toString());
    setOperator('');
  };

  const handleClear = () => {
    setNum1("0");
    setNum2("");
    setShowValue("0");
    setOperator("");
  };

    return (
      <Container>
        <CalculatorShape>
          <DisplayStyled>
            <DisplayAcc>{showValue}</DisplayAcc>
          </DisplayStyled>
          <ButtonsContainers>
            <Button value={7} onClick={handleCurrValue}>7</Button>
            <Button value={8} onClick={handleCurrValue}>8</Button>
            <Button value={9} onClick={handleCurrValue}>9</Button>
            <Button value="/" onClick={handleOperator}>/</Button>
            <Button value={4} onClick={handleCurrValue}>4</Button>
            <Button value={5} onClick={handleCurrValue}>5</Button>
            <Button value={6} onClick={handleCurrValue}>6</Button>
            <Button value="X" onClick={handleOperator}>X</Button>
            <Button value={1} onClick={handleCurrValue}>1</Button>
            <Button value={2} onClick={handleCurrValue}>2</Button>
            <Button value={3} onClick={handleCurrValue}>3</Button>
            <Button value="-" onClick={handleOperator}>-</Button>
            <Button value={0} onClick={handleCurrValue}>0</Button>
            <Button value="." onClick={handleCurrValue}>.</Button>
            <Button onClick={handleResult}>=</Button>
            <Button value="+" onClick={handleOperator}>+</Button>
          </ButtonsContainers>
          <ButtonReset onClick={handleClear}>Resetar Calculo</ButtonReset>
        </CalculatorShape>
      </Container>
    )
  }

  export default Calculator