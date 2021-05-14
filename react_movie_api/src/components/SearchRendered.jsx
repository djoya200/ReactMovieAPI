import React, { Component } from 'react';

class SearchRendered extends Component {
    constructor (){
        super()
        this.state = {
            title: "",
            releaseDate: "",
            plot: " "
        }
    }
    componentDidMount(){
        console.log("I JUST MOUNTEDDDDDDDDDDD")
        this.setState({
            title: this.props.title,
            releaseDate: this.props.releaseDate,
            plot: this.props.plot
        })
    }
    render() {
        return (
            <div className="mountedMovie">
                <text>Title: {this.state.title}</text>
                <text>Release Date: {this.state.releaseDate} </text>
                <text>Plot: {this.state.plot}</text>
            </div>
        );
    }
}

export default SearchRendered;