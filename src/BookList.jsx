import { books } from "./book";
import BookItem from "./BookItem";

function BookList() {
  return (
    <div>
      <p className="text-sm text-slate-500">Showing {books.length} books</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {books.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default BookList;