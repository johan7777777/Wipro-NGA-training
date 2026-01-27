import BookList from "./Components/Booklist";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-pink-700 text-black p-4 text-center text-2xl font-bold">
        BookVerse 📚
      </header>

      <BookList />
    </div>
  );
};

export default App;