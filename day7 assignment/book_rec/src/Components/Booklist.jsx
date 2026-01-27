import { useState } from "react";
import BookCard from "./BookCard";

const booksData = [
  { id: 1, title: "How will cry when you did", author: "Robin Sharma", price: 350 },
  { id: 2, title: "Power of subconcious mind", author: "Joseph Murphy", price: 150 },
  { id: 3, title: "ordinary stock extrodinary result", author: "Anand srinivasan", price: 400 },
  { id: 4, title: "Alchemy of money", author: "Anand srinivasan", price: 376 },
];

const BookList = () => {
  const [view, setView] = useState("grid");
  const [search, setSearch] = useState("");

  const filteredBooks = booksData.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search books..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

      {/* View Toggle Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setView("grid")}
          className={`px-4 py-2 rounded ${
            view === "grid" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Grid View
        </button>

        <button
          onClick={() => setView("list")}
          className={`px-4 py-2 rounded ${
            view === "list" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          List View
        </button>
      </div>

      {/* Books Display */}
      <div
        className={
          view === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 gap-6"
            : "flex flex-col gap-4"
        }
      >
        {filteredBooks.map((book) => (
          <BookCard
            key={book.id}
            title={book.title}
            author={book.author}
            price={book.price}
            view={view}
          />
        ))}
      </div>
    </div>
  );
};

export default BookList;