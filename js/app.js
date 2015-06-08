var React = require('react')

var NavBar = React.createClass({
  render: function() {
    var sections = ['home', 'about', 'more stuff'].map(function(section) {
      return ( <li> {section} </li> )
    })
    return (
      <nav>
        <ul>
          { sections }
        </ul>
      </nav>
    )  
  }
})

var Recipe = React.createClass({
  render: function() {
    return (
      <div>
        <h4> {this.props.name} </h4>
        <p> {this.props.directions} </p>
      </div>
    )
  }
})

var RecipeList = React.createClass({
  render: function() {
    var recipes = this.props.recipes.map(function(recipe) {
      return <Recipe name={recipe.name} directions={recipe.directions} />
    })
    return (
      <section> 
        <h2>My Recipes</h2>
        { recipes } 
      </section>
    )
  }
})

var NewRecipe = React.createClass({
  getInitialState: function() {
    return {
      newName: '',
      newDescription: ''
    }
  },

  propTypes: {
    addRecipe: React.PropTypes.func.isRequired
  },

  updateNewRecipe: function(e) {
    this.setState({
      newName: e.target.value
    }) 
  },

  handleAddNew: function() {
    this.props.addRecipe({name: this.state.newName, description: this.state.newDescription})
  },

  render: function() {
    return (
      <section>
        <h4>Add a new recipe here </h4> 
        <p>what you are typing {this.state.newName}</p>
        <input type='text' value={this.state.newName} onChange={this.updateNewRecipe} />
        <button onClick={this.handleAddNew}> Add Recipe </button>
      </section>
    )
  }
})

var RecipesContainer = React.createClass({
  getInitialState: function() {
    return {
      recipes: [
        { name: 'orange chicken', directions: 'Heat it up!' },
        { name: 'pasta', directions: 'put sauce on it' }
      ]
    }
  },

  addRecipe: function(recipe) {
    this.setState({
      recipes: this.state.recipes.concat([recipe])
    })
  },

  render: function() {
    return (
      <main>
        <h1>My cooking rules</h1>
        <RecipeList recipes={this.state.recipes} />
        <NewRecipe addRecipe={this.addRecipe} />
      </main>
    )
  }
})

var App = React.createClass({
  render: function() {
    return (
      <div>
        <NavBar />
        <RecipesContainer />
      </div>
    )
  }
})

React.render(<App />, document.body)
