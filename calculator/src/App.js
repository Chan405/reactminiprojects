import React, {useState, useEffect} from 'react'

function App() {
  const [inputNum, setInputnum] = useState(0);
  const [calculatedNum, setCalculatednum] = useState(0);

  const [isdecimal, setIsdecimal] = useState(false);
  const [decimalcount, setDecimalcount] = useState(1);
  const [operator, setOperator] = useState("");
  const [monitor, setMonitor] = useState("");

  useEffect(() => {
    setMonitor(inputNum);
  }, [inputNum]);

  useEffect( () => {
    setMonitor(calculatedNum);
  }, [calculatedNum])

  const Takeinputnum = (num) => {
    if( isdecimal ){
      num = num/Math.pow(10, decimalcount);
      setDecimalcount(decimalcount + 1);
      setInputnum(parseFloat( (inputNum+num).toFixed(decimalcount) ))
    }
    else setInputnum(inputNum*10 + num);
  }

  const Takeoperator = (operator) => {
    setOperator(operator);
    Calculate();
    setInputnum(0);
  }

  const Calculate = () => {
    setIsdecimal(false);
    setDecimalcount(1);

    if(operator === '/' && inputNum===0){
      setCalculatednum(NaN);
      setInputnum(0);
      return;
    }

    if(calculatedNum === 0 && inputNum===0){
      return;
    }
    switch(operator){
      case '+':
        setCalculatednum(calculatedNum+inputNum);
        break;

      case '-':
        setCalculatednum(calculatedNum-inputNum);
        break;

      case '*':
        setCalculatednum(calculatedNum*inputNum);
        break;

      case '/':
        setCalculatednum(calculatedNum/inputNum);
        break;

    }

    if(operator === ''){
      setCalculatednum(inputNum)
    } else {
      setInputnum(0);
    }
    return;
  }


  const Getequal = () =>{
    Calculate();
    setOperator('');
  }

  const Clearall = () => {
    setInputnum(0);
    setCalculatednum(0);
    setMonitor('');
    setOperator('');
  }
  return (
    <div className="calculator">
      <section className="monitor">
        <p className="output"> {monitor}</p>
      </section>
      <section className="keyboard">
        <div className="keyboard-row">
          <button onClick={ () => Clearall() } className="one-block"> AC </button>
          <button className="one-block"> -/+ </button>
          <button className="one-block"> % </button>
          <button onClick={() => {Takeoperator('/')}} className="one-block red"> / </button>
        </div>

        <div className="keyboard-row">
          <button onClick={ () => {Takeinputnum(7)}} className="one-block"> 7 </button>
          <button onClick={ () => {Takeinputnum(8)}} className="one-block"> 8 </button>
          <button onClick={ () => {Takeinputnum(9)}} className="one-block"> 9 </button>
          <button onClick={() => {Takeoperator('*')}} className="one-block red"> * </button>
        </div>

        <div className="keyboard-row">
          <button onClick={ () => {Takeinputnum(4)}} className="one-block"> 4 </button>
          <button onClick={ () => {Takeinputnum(5)}} className="one-block"> 5 </button>
          <button onClick={ () => {Takeinputnum(6)}} className="one-block"> 6 </button>
          <button onClick={() => {Takeoperator('-')}} className="one-block red"> - </button>
        </div>

        <div className="keyboard-row">
          <button onClick={ () => {Takeinputnum(1)}} className="one-block"> 1 </button>
          <button onClick={ () => {Takeinputnum(2)}} className="one-block"> 2 </button>
          <button onClick={ () => {Takeinputnum(3)}} className="one-block"> 3 </button>
          <button onClick={() => {Takeoperator('+')}} className="one-block red"> + </button>
        </div>

        <div className="keyboard-row">
          <button onClick={ () => {Takeinputnum(0)}} className="two-block"> 0 </button>
          <button onClick={ () => setIsdecimal(true)} className="one-block"> . </button>
          <button onClick={ () => Getequal()} className="one-block red"> = </button>
        </div>


      </section>
    </div>
  )
}

export default App
