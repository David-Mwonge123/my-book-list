function BookItem({ book }) {
  return (
    <article className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition">
      <div
        className={`${book.color} h-40 flex items-center justify-center text-6xl`}
      ></div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold bg-slate-100 px-2 py-1 rounded-full">
            {book.genre}
          </span>
          <span className="text-sm font-bold text-yellow-500">
            &#9733; {book.rating}
          </span>
        </div>
        <h2 className="font-bold text-lg mt-3 leading-tight">{book.title}</h2>
        <p className="text-sm text-slate-500 mt-1">
          by {book.author} | {book.year}
        </p>
        <p className="text-sm text-slate-600 mt-3">{book.description}</p>
      </div>
    </article>
  );
}

export default BookItem;
