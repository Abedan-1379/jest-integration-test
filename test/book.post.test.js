const Books = require("../api/BooksRequestClass");

describe("Integration tests for the books API - POST Requests", () => {
  it("POST  /api/v1/books - faliure on invalid post body", async () => {
    const { data, status } = await Books.addBook({
      title: "title#5",
    });

    expect(status).toBe(400);

    expect(data).toEqual({ message: "invalid post body" });
  });

  it("POST /api/v1/books - success", async () => {
    const { data, status } = await Books.addBook({
      title: "title#5",
      author: "author#5",
    });

    expect(status).toBe(201);

    expect(data).toEqual({
      message: "new book saved",
    });
  });
});
