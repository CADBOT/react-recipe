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


var RecipieList = React.createClass({
  render: function() {
    var recipies = this.props.recipies.map(function(recipie) {
      return <p> { recipie.name } </p>
    })
    return (
      <section> 
        <h2>My recipies</h2>
        { recipies } 
      </section>
    )
  }
})

var RecipiesContainer = React.createClass({
  getInitialState: function() {
    return {
      recipies: [
        { name: 'orange chicken', directions: 'Heat it up!' },
        { name: 'pasta', directions: 'put sauce on it' }
      ]
    }
  },

  render: function() {
    return (
      <main>
        <h1>My cooking rules</h1>
        <RecipieList recipies={this.state.recipies} />
      </main>
    )
  }
})

var App = React.createClass({
  render: function() {
    return (
      <div>
        <NavBar />
        <RecipiesContainer />
      </div>
    )
  }
})

React.render(<App />, document.body)