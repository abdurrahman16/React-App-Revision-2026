import React, {Component} from 'react';
import './App.css';
import Book from './Components/Book';

class App extends Component {
  state={
    books: [
      {bookName:'1984', writer:'Babu' }, 
      {bookName:'2021' ,writer:'Nimny'},
      {bookName:'2025', writer:'Akter'}
    ]
  }
  changeBookstate = newbookName => {
    this.setState({
      books: [
      {bookName: newbookName, writer:'Babu' }, 
      {bookName:'325000' ,writer:'Nimnyyyyyy'},
      {bookName:'20000025', writer:'AAAAAAAkter'}
    ]
    });

  }

  changestatewithInput = event =>{
    this.setState({
      books: [
      {bookName: event.target.value, writer:'Babu' }, 
      {bookName:'325000' ,writer:'Nimnyyyyyy'},
      {bookName:'20000025', writer:'AAAAAAAkter'}
    ]
    });
  }
  render(){
   
   
   const booksState= this.state.books;

   const book = booksState.map(books =>{
          return (
            <Book 
            bookName={books.bookName}
            writer={books.writer}

            />
          );
   });

   
   
   
   return (
<div className="App">
  <h1>Book List</h1>
  <button onClick={this.changeBookstate.bind(this,'Change Done!!')}> Change State</button>
  <input type='text' onChange={this.changestatewithInput}></input>
     {book}
   
   </div>
    );
  }
}


export default App; 
