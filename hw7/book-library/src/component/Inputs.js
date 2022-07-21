import React, { useState } from 'react'
import { Book } from '../models/book'



export default function Inputs(props) {

    const [bookName, setBookName] = useState('')
    const [bookAuthor, setBookAuthor] = useState('')
    const [bookISBN, setBookISBN] = useState('')

    function onFormSubmit(event){
        event.preventDefault()

        const book = new Book(
            bookName,
            bookAuthor,
            bookISBN
        )

        props.onBookCreated(book)

        setBookName('')
        setBookAuthor('')
        setBookISBN('')
    }

    return (
        <form onSubmit={onFormSubmit}>
             <div classNameName="mb-3">
                 <label classNameName="form-label">Title</label>
                 <input id="title-input" type="text" className="form-control"
                        value={bookName}
                        onChange={(e) => setBookName(e.target.value)}/>
             </div>
            
             <div className="mb-3">
                 <label className="form-label">Author</label>
                 <input id="author-input" type="text" className="form-control"
                        value={bookAuthor}
                        onChange={(e) => setBookAuthor(e.target.value)}/>
             </div>
            
             <div className="mb-3">
                 <label className="form-label">#ISBN</label>
                 <input id="isbn-input" type="text" className="form-control"
                        value={bookISBN}
                        onChange={(e) => setBookISBN(e.target.value)}/>
             </div>
            
             <div className="d-grid gap-2">
               <button className="btn btn-outline-secondary" type="submit">
                 SUBMIT
               </button>
             </div>
        </form>
    )
}
