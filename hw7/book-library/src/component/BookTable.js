import React from 'react'

export default function BookTable(props) {

    console.log(props.books)

    function onBookDeleted(book){
        props.onBookDeleted(book)
    }

    return (
      <table class="table mt-5">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>#ISBN</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {
              props.books.map((book) =>
                <tr key={book.isbn}>
                  <td>{book.name}</td>
                  <td>{book.author}</td>
                  <td>
                      <button
                        onClick={(e) => onBookDeleted(book)}
                        className='btn btn-primary btn-sm ms-3'>
                        <i className="bi bi-trash"></i>
                      </button>
                  </td>
                </tr>
              )
          } 
        </tbody>
      </table>
    )
}
