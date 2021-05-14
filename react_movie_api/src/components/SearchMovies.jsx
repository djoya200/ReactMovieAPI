import React, { Component } from 'react';
import SearchRendered from './SearchRendered';

class SearchMovies extends Component {
    constructor() {
        super()
        this.state = {
            title: " ",
            releaseDate: " ",
            plot: " ",
            input: '',
            searchDone: false
        }
    }
    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            input: event.target.value,
            searchDone: false
        })

    }

    searchMovies = async (event) => {
        event.preventDefault();
        console.log("in the search movie function")
        const query = this.state.input
        const url = `http://www.omdbapi.com/?i=tt3896198&apikey=4a842c7d&t=${query}`

        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            this.setState({
                title: data.Title,
                releaseDate: data.Released,
                plot: data.Plot,
                searchDone: true
            })
        }
        catch (err) {
            console.log("There was an error")
        }
    }

    render() {
        return (
            <div>
                <h2>search movies</h2>
                <form action="" className="form" onSubmit={this.searchMovies}>
                    <label className="label" htmlFor="query">Movie Name</label>
                    <input type="text" name="query" className="input" onChange={this.handleChange} />
                    <button type="submit" className="button">Search</button>
                </form>
                {this.state.searchDone
                    ?
                    <SearchRendered title={this.state.title} plot={this.state.plot} releaseDate={this.state.releaseDate} />
                    : null
                }

            </div>
        );
    }
}

export default SearchMovies;