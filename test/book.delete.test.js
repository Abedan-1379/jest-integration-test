const Books = require("../api/BooksRequestClass");

describe("Integration tests for the books API - Delete Requests", () => {
  it("DELETE /api/v1/books/:bookid - failure when book is not found", async () => {
    const { data, status } = await Books.deleteBook("63ac7de96ddcc80f2d3670aa");
    expect(status).toBe(404);

    expect(data).toEqual({
      message: "book not found",
    });
  });

  it("DELETE /api/v1/books/:bookid - Success - Successfully deleted book", async () => {
    const { data, status } = await Books.deleteBook("63ac7de96ddcc80f2d36705a");
    expect(status).toBe(200);

    expect(data).toEqual({
      message: "book delete successfully",
    });
  });
});
