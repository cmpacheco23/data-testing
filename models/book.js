import mongoose from "mongoose"

const Schema = mongoose.Schema

const bookSchema = new Schema({
  title: String,
  url: String,
  author: String,
  pageNums: Number,
  genre: String,
  cover: String
},{
  timestamps: true
})

const Book = mongoose.model('Book', bookSchema)


export{
  Book
}