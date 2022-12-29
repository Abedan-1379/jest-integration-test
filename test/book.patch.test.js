const Books = require("../api/BooksRequestClass");

describe("Integration tests for the books API - PATCH Requests", () => {
  it("PATCH  /api/v1/books - faliure when book is not found", async () => {
    const { data, status } = await Books.editBook("63ac7ddd6ddcc80f2d3670aa", {
      title: "book#2-updated-title",
    });

    expect(status).toBe(404);

    expect(data).toEqual({ message: "book not found" });
  });

  it("PATCH /api/v1/books - success", async () => {
    const { data, status } = await Books.editBook("63ac7ddd6ddcc80f2d367058", {
      title: "book#2-updated-title",
    });

    expect(status).toBe(200);

    expect(data).toEqual({
      message: "book update successfully",
    });
  });
});
