import React, { useState } from 'react'
import Inputs from './component/Inputs'
import BookTable from './component/BookTable'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function App() {

  const [books, setBooks] = useState([])

  function onBookCreated(book){
      setBooks(books.push(book))
  }

  
  function onBookDeleted(book){
      const newBooks = books.filter((b) => {return b.isbn !== book.isbn})
      setBooks(newBooks)
  }


  return (
    <div class='container mt-4'>
      <h1>Add Book:</h1>
      <Inputs onBookCreated={onBookCreated}></Inputs>
      <BookTable 
          books={books}
          onBookDeleted={onBookDeleted}>
      </BookTable>
    </div>
      
  )
}
