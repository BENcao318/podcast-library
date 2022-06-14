import React from 'react'

function Books({ books }: any) {
  return (
    <div>
      <h1>These books are from the API</h1>
      {books.map((book: any) => {
        return (
          <div key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.body}</p>
          </ div>
        )
      })}
    </div>
  )
}

export default Books