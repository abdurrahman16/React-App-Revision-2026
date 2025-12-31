import React, {Component} from 'react';
import './App.css';
import Book from './Components/Book';

class App extends Component {
  render(){
    return (
<div className="App">
  <h1>Book List</h1>
  <Book bookName='1984' writer='Babu' />
   <Book bookName='2021' writer='Nimny' />
    <Book bookName='2025' writer='Akter' />
</div>
    );
  }
}


export default App; 
