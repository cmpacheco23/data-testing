import { Book } from "../models/book.js"

import * as apiService from '../services/api-calls.js'

async function index(req, res){
  try {
    const books = await Book.find({})
    res.status(200).json(books)
  } catch (err) {
    console.log(err)
  }
}

async function apiBookSearch(req, res) {
  
  try {
    let massagedBookData = []
    const bookResponse = await fetch(`https://www.googleapis.com/books/v1/volumes?q=dune`)
    const bookData = bookResponse.json()
    bookData.forEach(book => {
      book.subjects = book.subjects.map(obj => obj.name)
      massagedBookData.push(book)
    })
    // massaging goes here
    res.json(bookData)
  } catch (error) {
    
  }
}

export{
  index,
  apiBookSearch
}