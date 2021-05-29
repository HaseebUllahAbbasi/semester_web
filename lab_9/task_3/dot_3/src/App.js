
import './App.css';
import EightBall from './EightBall';


function App() {

  const reset_data = ()=>
  {
    // soon will be added 
  }
  const data_1 = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ]
  return (
    <div className="App">
      <div className="container">
        <div className="text-center">
          <EightBall  obj={data_1[Math.floor(Math.random()*data_1.length) ]} />
        </div>
        <button onClick={reset_data}></button>
      </div>
    </div>
  );
  


  /*
  return (
    <div className="App">
      <div className="container">
        <div className="text-center">

          <EightBall answers={data_1} />
          
        </div>
      </div>
    </div>
  );
    */
  
}

export default App;
