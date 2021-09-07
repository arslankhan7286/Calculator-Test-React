import React, {useState} from 'react';
import ShowResult from '../ShowResult/index';
import './Style.css'

const KeyPad = () => {
    const [Result, setResult] = useState("");
    const [displayValue, setdisplayValue] = useState()
    
    const getPercentage = () => {
            setResult( Result /100)
        }
    
    const clickHandler = (button) => {
        if(button === "="){
            calculate()
        }
        else if(button === "AC"){
            reset()
        }
        else {
            setResult(
                Result + button
        )
        }
    };

   const toggleSign = () => {
        const newValue = parseFloat(Result) * -1
        setResult(newValue)
        try { 
            setdisplayValue(
                 (eval(Result)|| "" ) + ""
            )
        } catch (e) {
            setdisplayValue(
                 "error"
            )
        }
      }

    const calculate = () => {
        try { 
            setResult(
                 (eval(Result)|| "" ) + ""
            )
        } catch (e) {
            setResult(
                 "error"
            )
        }
    };

    const reset = () => {
        setResult(
             ""
        )
    };
    return (
        <>
            <ShowResult Result={Result}/>
            <div className="button">
                <button name="AC" onClick={(e) => clickHandler(e.target.name)}>AC</button>
                <button name="+/-" onClick={() => toggleSign()}>+/-</button>
                <button name="%" onClick={() => getPercentage()}>%</button>
                <button className='yellow-button' name="/" onClick={e => clickHandler(e.target.name)}>÷</button><br/>
                <button name="7" onClick={e => clickHandler(e.target.name)}>7</button>
                <button name="8" onClick={e => clickHandler(e.target.name)}>8</button>
                <button name="9" onClick={e => clickHandler(e.target.name)}>9</button>
                <button className='yellow-button' name="*" onClick={e => clickHandler(e.target.name)}>x</button><br/>
                <button name="4" onClick={e => clickHandler(e.target.name)}>4</button>
                <button name="5" onClick={e => clickHandler(e.target.name)}>5</button>
                <button name="6" onClick={e => clickHandler(e.target.name)}>6</button>
                <button className='yellow-button' name="-" onClick={e => clickHandler(e.target.name)}>-</button><br/>
                <button name="1" onClick={e => clickHandler(e.target.name)}>1</button>
                <button name="2" onClick={e => clickHandler(e.target.name)}>2</button>
                <button name="3" onClick={e => clickHandler(e.target.name)}>3</button>
                <button className='yellow-button' name="+" onClick={e => clickHandler(e.target.name)}>+</button><br/>
                <button className='button-zero' name="0" onClick={e => clickHandler(e.target.name)}>0</button>
                <button name="." onClick={e => clickHandler(e.target.name)}>.</button>
                <button className='yellow-button' name="=" onClick={e => clickHandler(e.target.name)}>=</button>
            </div>
        </>
    );
}
export default KeyPad;