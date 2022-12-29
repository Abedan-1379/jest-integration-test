const Books = require("../api/BooksRequestClass");

describe("Integration tests for the books API - PUT Requests", () => {
  it("PUT /api/v1/books/:bookid - failure when book is not found", async () => {
    const { data, status } = await Books.replaceBook(
      "63ac7de26ddcc80f2d3670aa",
      {
        title: "title#3-replaced",
        author: "author#3-replaced",
      }
    );

    expect(status).toBe(404);

    expect(data).toEqual({ message: "book not found" });
  });

  it("PUT /api/v1/books/:bookid - Success - Successfully replaced book", async () => {
    const { data, status } = await Books.replaceBook(
      "63ac7de26ddcc80f2d367059",
      {
        title: "title#3-replaced",
        author: "author#3-replaced",
      }
    );

    expect(status).toBe(200);

    expect(data).toEqual({
      message: "book replace successfully",
    });
  });
});
