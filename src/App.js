import { Container, Title, Content, Row } from "./styles";
import Input from "./components/Input";
import Button from "./components/Button";

import { useState } from "react";

const App = () => {
    const [currentNumber, setCurrentNumber] = useState('0');
    const [firstNumber, setFirstNumber] = useState('0');
    const [operation, setOperation] = useState('');

    const handleKeyDown = (event) => {

        if (event.target.tagName === 'BUTTON') {
            event.preventDefault();
        }
        
        switch (event.key) {
            case '+':
                handleSumNumbers();
                break;
            case '-':
                handleSubNumbers();
                break;
            case 'x':
                handleMulNumbers();
                break;
            case '/':
                handleDivNumbers();
                break;
            case '.':
                handleAddFloatingPoint();
                break;
            case 'Enter':
                handleEquals();
                break;
            case 'Delete':
                handleOnClear();
                break;
            default:
                if (!isNaN(event.key)) {
                    handleAddNumber(event.key);
                }
                break;
        }
    }

    const handleOnClear = () => {
        setCurrentNumber('0');
        setFirstNumber('0');
        setOperation('');
    }

    const handleAddNumber = (number) => {
        setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
    }

    const handleAddFloatingPoint = () => {
        setCurrentNumber(prev => prev.includes('.') ? `${prev}` : `${prev}.`);
    }

    const handleOperation = (operation) => () => {
        if (firstNumber === '0') {
            setFirstNumber(currentNumber);
            setCurrentNumber('0');
            setOperation(operation);
        } else {
            let result = 0;
            switch (operation) {
                case '+':
                    result = Number(firstNumber) + Number(currentNumber);
                    break;
                case '-':
                    result = Number(firstNumber) - Number(currentNumber);
                    break;
                case 'x':
                    result = Number(firstNumber) * Number(currentNumber);
                    break;
                case '/':
                    result = Number(firstNumber) / Number(currentNumber);
                    break;
                default:
                    break;
            }

            setCurrentNumber(String(result));
            setFirstNumber('0');
            setOperation('');
        }
    }

    const handleSumNumbers = handleOperation('+');
    const handleSubNumbers = handleOperation('-');
    const handleMulNumbers = handleOperation('x');
    const handleDivNumbers = handleOperation('/');

    const handleEquals = () => {
        switch (operation) {
            case '+':
                handleSumNumbers();
                break;
            case '-':
                handleSubNumbers();
                break;
            case 'x':
                handleMulNumbers();
                break;
            case '/':
                handleDivNumbers();
                break;
            default:
                handleOnClear();
        }
    }

    return (
        <Container onKeyDown={handleKeyDown} tabIndex={0}>
            <Title>Calculadora</Title>
            <Content>
                <Input value={currentNumber} />
                <Row>
                    <Button label={"C"} style={{ flexGrow: 3.75 }} onClick={handleOnClear}/>
                    <Button label={"/"} onClick={handleDivNumbers}/>
                </Row> 
                <Row>
                    <Button label={"7"} onClick={() => handleAddNumber("7")}/>
                    <Button label={"8"} onClick={() => handleAddNumber("8")}/>
                    <Button label={"9"} onClick={() => handleAddNumber("9")}/>
                    <Button label={"-"} onClick={handleSubNumbers}/>
                </Row>
                <Row>
                    <Button label={"4"} onClick={() => handleAddNumber("4")}/>
                    <Button label={"5"} onClick={() => handleAddNumber("5")}/>
                    <Button label={"6"} onClick={() => handleAddNumber("6")}/>
                    <Button label={"+"} onClick={handleSumNumbers}/>
                </Row>
                <Row>
                    <Button label={"1"} onClick={() => handleAddNumber("1")}/>
                    <Button label={"2"} onClick={() => handleAddNumber("2")}/>
                    <Button label={"3"} onClick={() => handleAddNumber("3")}/>
                    <Button label={"x"} onClick={handleMulNumbers}/>
                </Row>
                <Row>
                    <Button label={"0"} style={{ flexGrow: 2.35 }} onClick={() => handleAddNumber("0")}/>
                    <Button label={"."} onClick={handleAddFloatingPoint} />
                    <Button label={"="} onClick={handleEquals}/>
                </Row>
            </Content>
        </Container>
    );
};

export default App;