import BookList from "./BookList";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white shadow-sm sticky top-0">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <h1 className="text-xl font-extrabold">
            My<span className="text-yellow-600">Books</span>
          </h1>
          <span className="text-sm text-slate-500">My Favourite Reads</span>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-5 py-8">
        <h1 className="text-3xl font-extrabold">Book Collection</h1>
        <p className="text-slate-500 mt-2">A simple list of books I recommend.</p>
        <BookList />
      </main>

      <footer className="text-center text-sm text-slate-400 py-6">
        copyright 2026 MyBooks | Built with React
      </footer>
    </div>
  );
}

export default App;