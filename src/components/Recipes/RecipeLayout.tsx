import { useMyBookmarkContext } from "../../contexts/MyBookmarks";
import { auth } from "../../firebase";

import styles from "./Recipe.module.css";

type RecipeLayoutProps = {
  recipeId: string;
  recipeTitle: string;
  recipeImage: string;
  recipeServings: number;
  recipeDuration: number;
  recipeDairyFree: boolean;
  recipeGlutenFree: boolean;
  recipeKetogenic: boolean;
  recipeVegan: boolean;
  recipeVegetarian: boolean;
  recipeIngredients: [];
  recipeInstructions: [];
  recipeBookmark: any;
};

const RecipeLayout = ({
  recipeId,
  recipeTitle,
  recipeImage,
  recipeServings,
  recipeDuration,
  recipeDairyFree,
  recipeGlutenFree,
  recipeKetogenic,
  recipeVegan,
  recipeVegetarian,
  recipeIngredients,
  recipeInstructions,
  recipeBookmark,
}: RecipeLayoutProps): JSX.Element => {
  const user = auth?.currentUser;

  const { bookmarks, toggleBookmark, isBookmarked } = useMyBookmarkContext();
  console.log(bookmarks);

  return (
    <main className={styles["recipe-container"]}>
      <section className={styles.box}>
        <div className={styles["image-container"]}>
          <div className={styles["image-wrapper"]}></div>
          <img
            src={recipeImage}
            className={styles["recipe-image"]}
            alt="Food"
          />
        </div>

        <div className={styles["ingredients-container"]}>
          <h2 className={styles["ingredients-header"]}>ingredients</h2>
          <ul className={styles["ingredients-list"]}>
            {recipeIngredients.map((ing: { original: string; id: string }) => (
              <li key={ing.id} className={styles["ingredients-list-item"]}>
                {ing.original}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["recipe-data-container"]}>
          <div className={styles["recipe-header"]}>
            <h1 className={styles["recipe-name"]}>{recipeTitle}</h1>
            <ul className={styles.extras}>
              <li className={styles["extras-list-item"]}>
                <div className={styles.servings}>
                  <i className="fa-solid fa-user"></i>
                </div>
                <p className={styles.text}>{recipeServings}</p>
              </li>
              <li className={styles["extras-list-item"]}>
                <div className={styles.duration}>
                  <i className="fa-solid fa-clock"></i>
                </div>
                <p className={styles.text}>{recipeDuration}mins</p>
              </li>
            </ul>
          </div>

          <button
            className={styles["bookmarks-container"]}
            onClick={() => toggleBookmark(recipeBookmark)}
          >
            {isBookmarked ? (
              <i className="fa-solid fa-bookmark"></i>
            ) : (
              <i className="fa-regular fa-bookmark"></i>
            )}
            {/* <i className="fa-regular fa-bookmark"></i> */}
          </button>

          <div className={styles["steps-container"]}>
            <ul className={styles["steps-list"]}>
              {recipeInstructions.map(
                (instr: { number: number; step: string }) => (
                  <li key={instr.number} className={styles["steps-list-item"]}>
                    <h2 className={styles["step-heading"]}>
                      Step <span className={styles.count}>{instr.number}</span>
                    </h2>
                    <p className={styles.instruction}>{instr.step}</p>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className={styles["source-contents-container"]}>
          <ul className={styles["source-contents-list"]}>
            <li className={styles["source-contents-list-item"]}>
              <div className={styles.check}>
                {recipeDairyFree ? (
                  <div className={styles.checkmark}>
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                ) : (
                  <div className={styles.xmark}>
                    <i className="fa-solid fa-circle-xmark"></i>
                  </div>
                )}
              </div>
              <p className={styles.text}>dairy free</p>
            </li>
            <li className={styles["source-contents-list-item"]}>
              <div className={styles.check}>
                {recipeGlutenFree ? (
                  <div className={styles.checkmark}>
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                ) : (
                  <div className={styles.xmark}>
                    <i className="fa-solid fa-circle-xmark"></i>
                  </div>
                )}
              </div>
              <p className={styles.text}>gluten free</p>
            </li>
            <li className={styles["source-contents-list-item"]}>
              <div className={styles.check}>
                {recipeKetogenic ? (
                  <div className={styles.checkmark}>
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                ) : (
                  <div className={styles.xmark}>
                    <i className="fa-solid fa-circle-xmark"></i>
                  </div>
                )}
              </div>
              <p className={styles.text}>ketogenic</p>
            </li>
            <li className={styles["source-contents-list-item"]}>
              <div className={styles.check}>
                {recipeVegan ? (
                  <div className={styles.checkmark}>
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                ) : (
                  <div className={styles.xmark}>
                    <i className="fa-solid fa-circle-xmark"></i>
                  </div>
                )}
              </div>
              <p className={styles.text}>vegan</p>
            </li>
            <li className={styles["source-contents-list-item"]}>
              <div className={styles.check}>
                {recipeVegetarian ? (
                  <div className={styles.checkmark}>
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                ) : (
                  <div className={styles.xmark}>
                    <i className="fa-solid fa-circle-xmark"></i>
                  </div>
                )}
              </div>
              <p className={styles.text}>vegetarian</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default RecipeLayout;
