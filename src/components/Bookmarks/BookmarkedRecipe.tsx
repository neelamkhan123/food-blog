import { useState } from "react";

import styles from "./BookmarkedRecipe.module.css";

const BookmarkedRecipe = (): JSX.Element => {
  const [bookmarked, setBookmarked] = useState(true);

  const bookmarkedRecipeStorage = JSON.parse(
    localStorage.getItem("bookmarkDetails") || "{}"
  );

  const bookmarkedRecipe = {
    id: bookmarkedRecipeStorage.id,
    title: bookmarkedRecipeStorage.title,
    image: bookmarkedRecipeStorage.image,
    servings: bookmarkedRecipeStorage.servings,
    readyInMinutes: bookmarkedRecipeStorage.readyInMinutes,
    dairyFree: bookmarkedRecipeStorage.dairyFree,
    glutenFree: bookmarkedRecipeStorage.glutenFree,
    ketogenic: bookmarkedRecipeStorage.ketogenic,
    vegan: bookmarkedRecipeStorage.vegan,
    vegetarian: bookmarkedRecipeStorage.vegetarian,
    extendedIngredients: bookmarkedRecipeStorage.extendedIngredients.map(
      (ing: { original: string; id: string }) => ({
        original: ing.original,
        id: ing.id,
      })
    ),
    steps: bookmarkedRecipeStorage.steps.map(
      (inst: { number: number; step: string }) => ({
        number: inst.number,
        step: inst.step,
      })
    ),
  };

  const bookmarkUserAccess = () => {
    setBookmarked((prevState) => !prevState);
  };

  return (
    <main className={styles["recipe-container"]}>
      <section className={styles.box}>
        <div className={styles["image-container"]}>
          <div className={styles["image-wrapper"]}></div>
          <img
            src={bookmarkedRecipe.image}
            className={styles["recipe-image"]}
            alt="Food"
          />
        </div>

        <div className={styles["ingredients-container"]}>
          <h2 className={styles["ingredients-header"]}>ingredients</h2>
          <ul className={styles["ingredients-list"]}>
            {bookmarkedRecipe.extendedIngredients.map(
              (ing: { original: string; id: string }) => (
                <li key={ing.id} className={styles["ingredients-list-item"]}>
                  {ing.original}
                </li>
              )
            )}
          </ul>
        </div>
        <div className={styles["recipe-data-container"]}>
          <div className={styles["recipe-header"]}>
            <h1 className={styles["recipe-name"]}>{bookmarkedRecipe.title}</h1>
            <ul className={styles.extras}>
              <li className={styles["extras-list-item"]}>
                <div className={styles.servings}>
                  <i className="fa-solid fa-user"></i>
                </div>
                <p className={styles.text}>{bookmarkedRecipe.servings}</p>
              </li>
              <li className={styles["extras-list-item"]}>
                <div className={styles.duration}>
                  <i className="fa-solid fa-clock"></i>
                </div>
                <p className={styles.text}>
                  {bookmarkedRecipe.readyInMinutes}mins
                </p>
              </li>
            </ul>
          </div>

          <div
            className={styles["bookmarks-container"]}
            onClick={bookmarkUserAccess}
          >
            {bookmarked ? (
              <i className="fa-solid fa-bookmark"></i>
            ) : (
              <i className="fa-regular fa-bookmark"></i>
            )}
          </div>

          <div className={styles["steps-container"]}>
            <ul className={styles["steps-list"]}>
              {bookmarkedRecipe.steps.map(
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
                {bookmarkedRecipe.dairyFree ? (
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
                {bookmarkedRecipe.glutenFree ? (
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
                {bookmarkedRecipe.ketogenic ? (
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
                {bookmarkedRecipe.vegan ? (
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
                {bookmarkedRecipe.vegetarian ? (
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

export default BookmarkedRecipe;
