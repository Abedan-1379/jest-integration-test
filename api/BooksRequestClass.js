const axios = require("axios");

class Books {
  static async getAll() {
    return await axios
      .get("http://localhost:3333/api/v1/books")
      .then()
      .catch((err) => err.response);
  }

  static async getBook(bookId) {
    return await axios
      .get(`http://localhost:3333/api/v1/books/${bookId}`)
      .then()
      .catch((err) => err.response);
  }

  static async addBook(book) {
    return await axios
      .post("http://localhost:3333/api/v1/books", book)
      .then()
      .catch((err) => err.response);
  }

  static async editBook(bookId, update) {
    return await axios
      .patch(`http://localhost:3333/api/v1/books/${bookId}`, update)
      .then()
      .catch((err) => err.response);
  }

  static async replaceBook(bookId, newBook) {
    return await axios
      .put(`http://localhost:3333/api/v1/books/${bookId}`, newBook)
      .then()
      .catch((err) => err.response);
  }

  static async deleteBook(bookId) {
    return await axios
      .delete(`http://localhost:3333/api/v1/books/${bookId}`)
      .then()
      .catch((err) => err.response);
  }
}

module.exports = Books;
