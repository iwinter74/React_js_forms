import React, { Component } from 'react';

class NewForm extends Component {
    state = {
        url: '',
        name: '',
        popularity: '',
        data: []
    }
    handleChangeUrl = (event) => {
        this.setState({ url: event.target.value });
    }
    handleChangeName = (event) => {
        this.setState({ name: event.target.value });
    }
    handleChangePopularity = (event) => {
        this.setState({ popularity: event.target.value });
    }
    handleSubmit = (event) => {
        const newData = this.state.data.slice()
        newData.push({
            url: this.state.url,
            name: this.state.name,
            popularity: this.state.popularity
        })
        this.setState({ data: newData });
        event.preventDefault();
    }
    render() {
        return (
            <section>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        url:
                </label>
                    <input type="text"
                        value={this.state.url}
                        onChange={this.handleChangeUrl}
                    />
                    <label>
                        Name:
                </label>
                    <input type="text" name="" id=""
                        value={this.state.name}
                        onChange={this.handleChangeName}
                    />
                    <label>
                        popularity:
                </label>
                    <input type="text" name="" id=""
                        value={this.state.popularity}
                        onChange={this.handleChangePopularity}
                    />
                    <input type="submit" value="Submit" />
                </form>
                {this.state.data.map((elt, i) => <figure>
                    <img src={elt.url} alt="" />
                    <ficaption>
                        <h3>{elt.name}</h3>
                        <h4>{elt.popularity}</h4>
                    </ficaption>
                </figure>)}
            </section>
        );
    }
}

export default NewForm;