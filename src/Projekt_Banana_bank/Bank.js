import React, { Component } from 'react';

class Bank extends Component {
    state = {
        balance: 0,
        input: 0
    }
    handleChange = (e) => {
        this.setState({ input: e.target.value });
    }
    addition = () => {
        console.log('addition')
        this.setState({ balance: Number(this.state.balance) + Number(this.state.input) });
    }
    substraction = () => {
        console.log('substraction')
        this.setState({ balance: Number(this.state.balance) - Number(this.state.input) });
    }
    render() {
        return (
            <section>
                <div id="logoImg"><img src="" alt="" /></div>
                <div>
                    <h2>Banana Bank</h2>
                </div>
                <div>
                    <article className="konto">
                        <h3>Dein Girokonto</h3>
                        <div>
                            <h1 className="saldo">{this.state.balance}</h1>
                        </div>
                        <input className="geldbetrag" type="number" /*value={this.state.userInput}*/ onChange={this.handleChange} name="" id="" placeholder="Gebe den Betrag ein" />
                    </article>
                    <div>
                        <input className="auszahlen" type="button" onClick={this.addition} value="Einzahlen" />
                        <input className="einzahlen" type="button" onClick={this.substraction} value="Auszahlen" />
                    </div>
                </div>
            </section>
        );
    }
}

export default Bank;