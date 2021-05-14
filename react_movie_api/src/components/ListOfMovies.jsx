import React, { Component } from 'react';

class ListOfMovies extends Component {
    constructor (){
        super()
        this.state = {
            listOfFaves: [],
            input: ''
        }
    }
    handleChange = (event) => {
        event.preventDefault();
      this.setState({ input: event.target.value }) 

    }

    addToFavs = async (event) => {
        event.preventDefault();
        let newListOfFavs = this.state.listOfFaves
        newListOfFavs.push(this.state.input)
        this.setState({
            listOfFaves: newListOfFavs,
            input: " "
        })
        
    
    }
    
    render() {
        return (
            <div>
                  <h3>List of my Current Favorite Movies</h3>
                <form action="" className="form" onSubmit={this.addToFavs}>
                    <label className="label" htmlFor="query"> Fave Movie Name</label>
                    <input type="text" name="query" className="input" onChange={this.handleChange}/>
                    <button type="submit" className="button">Add</button>
                </form>
                <div className="displayTheMovies">
                    {this.state.listOfFaves.map(( itemInTheList, i )=>
                        <text key={i}> Title: {itemInTheList}</text>
                    )}
                    
                </div>
              
            </div>
        );
    }
}

export default ListOfMovies;