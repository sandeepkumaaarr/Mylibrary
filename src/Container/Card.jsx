import React from 'react';
import { books } from './Library';
export default function Card() {
  return (
    <>
 
    {books.map((book)=>{
      return(
           <div className='card'>
           <h2>{book.title}</h2>
           <div className='imgdiv'>
             <img src={book.imglink} alt="card images" />
           </div>
           
           <p><span> Author: </span>{book.author}</p>
           <p><span> Language : </span>{book.language}</p>
           <p><span> Size : </span>{book.size}</p>
           <a href={book.link}>READ</a>
          </div>
      )
    })}
    </>
  )
}
