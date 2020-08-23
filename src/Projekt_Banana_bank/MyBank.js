import React, { Component } from 'react';

class MyBank extends Component {

    state = {
        userInput: 0,
        balance: 0
    }
  
    handleChange = (event) => {
        this.setState({ userInput: event.target.value });
        this.state.userInput= Number(this.state.userInput)
        console.log(this.state.userInput)
    }
  
    handleIn = (event) => {
        this.setState({ balance: Number(this.state.balance) + Number(this.state.userInput) });
        this.setState({ userInput: 0 });
    event.preventDefault();
    }

    handleOut = (event) => {
        this.setState({ balance: Number(this.state.balance) - Number(this.state.userInput) });
        this.setState({ userInput: 0 });
        event.preventDefault();
    }
  
    render() {
      return (
          <form>
              <img id="banana" src="https://image.freepik.com/free-vector/banana-logo_10250-3606.jpg" alt=""/>
              <h1 id="title">Banana Bank</h1>
          <label className="konto" >
                  Dein Girokonto
            <p className="saldo">{this.state.balance}</p>
            <textarea className="geldbetrag" value={this.state.userInput} onChange={this.handleChange} />
            
              </label>
              <div>
              <input className="einzahlen" type="button" value="Einzahlen" onClick={this.handleIn}/>
                  <input className="auszahlen" type="button" value="Auszahlen" onClick={this.handleOut} />
            </div>
        </form>
      );
    }
}
  
export default MyBank;