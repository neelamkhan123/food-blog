import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

// Define the data types for the bookmark
type Bookmark = {
  id: number;
  isBookmarked: boolean;
};

type BookmarkContextType = {
  bookmarks: Bookmark[];
  toggleBookmark: (bookmarkId: number) => void;
};

// Create a context with an initial state
export const BookmarkContext = createContext<BookmarkContextType | null>(null);

type BookmarkProviderProps = {
  children: ReactNode;
};

// Define the context provider component
export const BookmarkProvider = ({ children }: BookmarkProviderProps) => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  // Load bookmarks from local storage on initial render
  useEffect(() => {
    const storedBookmarks = JSON.parse(
      localStorage.getItem("bookmarked") || "[]"
    );
    setBookmarks(storedBookmarks);
  }, []);

  // Save bookmarks to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("bookmarked", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (bookmarkId: number) => {
    setBookmarks((prevBookmarks) =>
      prevBookmarks.map((bookmark) =>
        bookmark.id === bookmarkId
          ? { ...bookmark, isBookmarked: !bookmark.isBookmarked }
          : bookmark
      )
    );
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, toggleBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};

// Create a custom hook for using the context
export const useBookmarkContext = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error(
      "useBookmarkContext must be used within a BookmarkProvider"
    );
  }
  return context;
};
