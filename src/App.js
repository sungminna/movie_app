import React from 'react';

class App extends React.Component{

  state = {
    isLoading: true, 
    movies: []
  };
  componentDidMount(){
    setTimeout(()=>{
      this.setState({isLoading: false});
    }, 2000);
  };
  render(){
    const {isLoading} = this.state;
    return(
      <div>
        {isLoading ? "Loading..." : "We ard ready!"}
      </div>
    );
  }
}

export default App;
