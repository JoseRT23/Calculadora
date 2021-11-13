import React, {useState} from 'react'


import './NumberInput.css';


const NumberInput = () => {
   
    const [result, setResult] = useState("");

    const handleClick = (e) => {
        setResult(result + (e.target.value));
    };

    const getResult = () => {
        try {
            setResult(eval(result));
        } catch (error) {
            setResult("Error");
        }                 
    }

    const clear = () => {
        try {
            setResult(result.slice(0, result.length -1));      
        } catch (error) {
            return error
        }
    }

    const clearAll = () => {
        setResult("");
    }

    return (
        <><div className="App">
            <div className="calculator-grid">
                <div className="output">
                    {/* <div className="previous-operand">{result}</div> */}
                    <div className="current-operand">{result}</div>
                </div>
                <button onClick={clearAll} className="span-two">AC</button>
                <button className="simb" onClick={clear}>DEL</button>
                <button className="simb" ></button>
                <button className="simb" value="/" onClick={handleClick}>/</button>
                <button className="numeric" value="7" onClick={handleClick}>7</button>
                <button className="numeric" value="8" onClick={handleClick}>8</button>
                <button className="numeric" value="9" onClick={handleClick}>9</button>
                <button className="simb" value="*" onClick={handleClick}>x</button>
                <button className="numeric" value="4" onClick={handleClick}>4</button>
                <button className="numeric" value="5" onClick={handleClick}>5</button>
                <button className="numeric" value="6" onClick={handleClick}>6</button>
                <button className="simb" value="+" onClick={handleClick}>+</button>
                <button className="numeric" value="1" onClick={handleClick}>1</button>
                <button className="numeric" value="2" onClick={handleClick}>2</button>
                <button className="numeric" value="3" onClick={handleClick}>3</button>
                <button className="simb" value="-" onClick={handleClick}>-</button>
                <button className="simb" value="." onClick={handleClick}>.</button>
                <button className="numeric" value="0" onClick={handleClick}>0</button>
                <button className="simb" > </button>
                <button onClick={getResult} className="span-two">=</button>

            </div>
            </div>
        </>
    )
}

export default NumberInput
