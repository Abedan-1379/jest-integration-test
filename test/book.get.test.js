const Books = require("../api/BooksRequestClass");

describe("Integration tests for the books API - GET Requests", () => {
  it("GET /api/v1/books - success -  get all the books ", async () => {
    const { data, status } = await Books.getAll();
    expect(status).toBe(200);

    expect(data.bookList).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          title: expect.any(String),
          author: expect.any(String),
        }),
      ])
    );
  });

  it("GET /api/v1/books/bookId - success -  get special book ", async () => {
    const { data, status } = await Books.getBook("63ac7dd06ddcc80f2d367057");
    expect(status).toBe(200);

    expect(data.book).toEqual(
      expect.objectContaining({
        title: expect.any(String),
        author: expect.any(String),
      })
    );
  });

  it("GET /api/v1/books/bookId - failure when book is not found ", async () => {
    const { data, status } = await Books.getBook("63ac7dd06ddcc80f2d3670aa");
    expect(status).toBe(404);

    expect(data).toEqual({
      message: "book not found",
    });
  });
});
