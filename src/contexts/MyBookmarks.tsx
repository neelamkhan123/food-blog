import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

interface MyBookmark {
  userId: string | null;
  status: boolean;
  id: string;
  title: string;
  image: string;
  servings: number;
  readyInMinutes: number;
  dairyFree: boolean;
  glutenFree: boolean;
  ketogenic: boolean;
  vegan: boolean;
  vegetarian: boolean;
  extendedIngredients: {
    original: string;
    id: string;
  }[];
  steps: {
    number: number;
    step: string;
  }[];
}

type MyBookmarkContextType = {
  bookmarks: MyBookmark[];
  toggleBookmark: (bookmark: MyBookmark) => void;
  deleteBookmark: (bookmarkId: string) => void;
  isBookmarked: boolean;
};

export const MyBookmarksContext = createContext<MyBookmarkContextType | null>(
  null
);

type MyBookmarksProviderProps = {
  children: ReactNode;
};

export const MyBookmarksProvider = ({ children }: MyBookmarksProviderProps) => {
  const [bookmarks, setBookmarks] = useState<MyBookmark[]>([]);

  const [isBookmarked, setIsBookmarked] = useState(false);

  // useEffect(() => {
  //   const savedBookmarks = JSON.parse(localStorage.getItem("bookmark") || "[]");
  //   setBookmarks(savedBookmarks);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("bookmark", JSON.stringify(bookmarks));
  // }, [bookmarks]);

  const toggleBookmark = (bookmark: MyBookmark) => {
    setIsBookmarked((prevState) => !prevState);
    isBookmarked
      ? setBookmarks((prevBookmark) => [
          {
            userId: bookmark.userId,
            status: bookmark.status,
            id: bookmark.id,
            title: bookmark.title,
            image: bookmark.image,
            servings: bookmark.servings,
            readyInMinutes: bookmark.readyInMinutes,
            dairyFree: bookmark.dairyFree,
            glutenFree: bookmark.glutenFree,
            ketogenic: bookmark.ketogenic,
            vegan: bookmark.vegan,
            vegetarian: bookmark.vegetarian,
            extendedIngredients: bookmark.extendedIngredients.map(
              (ing: { original: string; id: string }) => ({
                original: ing.original,
                id: ing.id,
              })
            ),
            steps: bookmark.steps.map(
              (inst: { number: number; step: string }) => ({
                number: inst.number,
                step: inst.step,
              })
            ),
          },
          ...prevBookmark,
        ])
      : bookmarks.pop();
  };

  const deleteBookmark = () => {
    console.log("delete bookmark");
  };

  return (
    <MyBookmarksContext.Provider
      value={{ bookmarks, toggleBookmark, deleteBookmark, isBookmarked }}
    >
      {children}
    </MyBookmarksContext.Provider>
  );
};

export const useMyBookmarkContext = () => {
  const context = useContext(MyBookmarksContext);
  if (!context) {
    throw new Error(
      "useBookmarkContext must be used within a BookmarkProvider"
    );
  }
  return context;
};
