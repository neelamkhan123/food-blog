import { useRef, useState } from "react";
import uniqid from "uniqid";

import styles from "./PostForm.module.css";

type Instruction = {
  readonly id: string;
  index: number;
  content: string;
};

type Ingredient = {
  readonly id: string;
  name: string;
};

type Post = {
  title: string;
  image: string;
  servings: number;
  duration: number;
  dairyFree: string | undefined;
  glutenFree: string | undefined;
  ketogenic: string | undefined;
  vegan: string | undefined;
  vegetarian: string | undefined;
  ingredients: Ingredient[];
  instructions: Instruction[];
};

const PostForm = (): JSX.Element => {
  const titleRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const servingsRef = useRef<HTMLInputElement>(null);
  const durationRef = useRef<HTMLInputElement>(null);
  const ingredientRef = useRef<HTMLInputElement>(null);
  const instructionRef = useRef<HTMLTextAreaElement>(null);

  const [posts, setPosts] = useState<Post[]>([]);
  const [ingredientList, setIngredientList] = useState<Ingredient[]>([]);
  const [instructionsList, setInstructionsList] = useState<Instruction[]>([]);
  const [dairyFreeCheck, setDairyFreeCheck] = useState("");
  const [glutenFreeCheck, setGlutenFreeCheck] = useState("");
  const [ketogenicCheck, setKetogenicCheck] = useState("");
  const [veganCheck, setVeganCheck] = useState("");
  const [vegetarianCheck, setVegetarianCheck] = useState("");

  // Add Instruction
  const handleAddInstruction = (e: React.FormEvent) => {
    e.preventDefault();
    const instructionListObj = {
      id: uniqid(),
      index: instructionsList?.length + 1,
      content: instructionRef.current!.value,
    };

    // Check for error and set data
    if (instructionListObj.content.trim().length === 0) {
      alert("Please add a real instruction");
    } else {
      const allInstructions = [...instructionsList, instructionListObj];
      setInstructionsList(allInstructions);

      instructionRef.current!.value = "";
    }
  };

  // Delete Instruction
  const handleDeletedIngredients = (selectedId: string) => {
    const filteredIngredients = ingredientList.filter(
      (ing) => ing.id !== selectedId
    );
    setIngredientList(filteredIngredients);
  };

  // Add Ingredient
  const handleAddIngredient = (e: React.FormEvent) => {
    e.preventDefault();
    const ingredientsListObj = {
      id: uniqid(),
      name: ingredientRef.current!.value,
    };

    // Check for error and set data
    if (ingredientsListObj.name.trim().length === 0) {
      alert("Please add a real ingredient");
    } else {
      const ingredientListArr = [...ingredientList, ingredientsListObj];
      setIngredientList(ingredientListArr);

      ingredientRef.current!.value = "";
    }
  };

  const handleDairyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDairyFreeCheck(e.target.value);
  };

  const handleGlutenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGlutenFreeCheck(e.target.value);
  };

  const handleKetogenicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKetogenicCheck(e.target.value);
  };

  const handleVeganChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVeganCheck(e.target.value);
  };

  const handleVegetarianChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVegetarianCheck(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const postInputData: Post = {
      title: titleRef.current!.value,
      image: imageRef.current!.value,
      servings: Number(servingsRef.current!.value),
      duration: Number(durationRef.current!.value),
      dairyFree: dairyFreeCheck,
      glutenFree: glutenFreeCheck,
      ketogenic: ketogenicCheck,
      vegan: veganCheck,
      vegetarian: vegetarianCheck,
      ingredients: ingredientList,
      instructions: instructionsList,
    };

    const postData = JSON.parse(localStorage.getItem("postData") || "{}");
    setPosts(postData);

    const allPosts = [...posts, postInputData];
    setPosts(allPosts);

    // ❗❗❗❗ Error Checks ❗❗❗❗
    if (
      titleRef.current!.value === "" ||
      imageRef.current!.value === "" ||
      servingsRef.current!.value === "" ||
      durationRef.current!.value === "" ||
      dairyFreeCheck === "" ||
      glutenFreeCheck === "" ||
      ketogenicCheck === "" ||
      veganCheck === "" ||
      vegetarianCheck === "" ||
      ingredientList.length === 0 ||
      instructionsList.length === 0
    ) {
      alert("Please fill in ALL forms");
    } else {
      console.log("POST");
      // Save Input Data
      localStorage.setItem("postData", JSON.stringify(allPosts));
      // Clear Inputs
      titleRef.current!.value = "";
      imageRef.current!.value = "";
      servingsRef.current!.value = "";
      durationRef.current!.value = "";
      setDairyFreeCheck("");
      setGlutenFreeCheck("");
      setKetogenicCheck("");
      setVeganCheck("");
      setVegetarianCheck("");
      setIngredientList([]);
      setInstructionsList([]);
    }

    // Section 1 & 2 Errors
    const sectionOneAndTwoErrors = (
      idSelector: string,
      ref: React.RefObject<HTMLInputElement>
    ) => {
      const selector = document.getElementById(idSelector);
      if (ref.current!.value === " ") {
        selector!.style.border = "3px solid red";
      } else {
        selector!.style.border = "2px solid black";
      }
    };
    sectionOneAndTwoErrors("title", titleRef);
    sectionOneAndTwoErrors("image", imageRef);
    sectionOneAndTwoErrors("servings", servingsRef);
    sectionOneAndTwoErrors("duration", durationRef);

    // Section 3 Errors
    const sectionThreeErrors = (
      idSelector: string,
      state: React.SetStateAction<string>
    ) => {
      const selector = document.getElementById(idSelector);
      if (state === "") {
        selector!.style.backgroundColor = "red";
      } else {
        selector!.style.backgroundColor = "black";
      }
    };
    sectionThreeErrors("dairy-free", dairyFreeCheck);
    sectionThreeErrors("gluten-free", glutenFreeCheck);
    sectionThreeErrors("ketogenic", ketogenicCheck);
    sectionThreeErrors("vegan", veganCheck);
    sectionThreeErrors("vegetarian", vegetarianCheck);

    // Section 4 & 5 Errors
    const sectionFourAndFiveErrors = (
      idSelector: string,
      arr: React.SetStateAction<Ingredient[] | Instruction[]>
    ) => {
      const selector = document.getElementById(idSelector);
      if (arr.length === 0) {
        selector!.style.border = "5px solid red";
      } else {
        selector!.style.border = "5px solid black";
      }
    };
    sectionFourAndFiveErrors("ingredients", ingredientList);
    sectionFourAndFiveErrors("instructions", instructionsList);
  };

  return (
    <form className={styles.post}>
      <div className={styles["post-container"]}>
        <h1 className={styles.heading}>share your secrets😋</h1>
        <div className={styles.fields}>
          {/* Section 1 */}
          <section className={`${styles.section1} ${styles.section}`}>
            <div className={`${styles.field} ${styles.align}`}>
              <label className={styles.label} htmlFor="title">
                title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                className={styles.input}
                placeholder="enter recipe name"
                ref={titleRef}
              />
            </div>
            <div className={`${styles.field} ${styles.align}`}>
              <label className={styles.label} htmlFor="image">
                image
              </label>
              <input
                id="image"
                name="image"
                type="text"
                className={styles.input}
                placeholder="enter image link"
                ref={imageRef}
              />
            </div>
          </section>

          {/* Section 2 */}
          <section className={`${styles.section2} ${styles.section}`}>
            <div className={`${styles.field} ${styles.align}`}>
              <label className={styles.label} htmlFor="servings">
                servings
              </label>
              <input
                id="servings"
                name="servings"
                type="number"
                min={1}
                className={styles.input}
                placeholder="how many people will this serve?"
                ref={servingsRef}
              />
            </div>
            <div className={`${styles.field} ${styles.align}`}>
              <label className={styles.label} htmlFor="duration">
                duration<span className={styles.light}>(mins)</span>
              </label>
              <input
                id="duration"
                name="duration"
                type="number"
                min={1}
                className={styles.input}
                placeholder="how long will it take?"
                ref={durationRef}
              />
            </div>
          </section>

          {/* Section 3 */}
          <section className={`${styles.section3} ${styles.section}`}>
            <div className={styles.field}>
              <legend className={styles.label} id="dairy-free">
                is it dairy free?
              </legend>
              <div className={styles.options}>
                <div className={styles.yes}>
                  <input
                    id="dairy-free-yes"
                    name="dairy-free-yes"
                    type="radio"
                    value="yes"
                    className={styles.radio}
                    checked={dairyFreeCheck === "yes"}
                    onChange={handleDairyChange}
                  />
                  <label htmlFor="dairy-free-yes">yes</label>
                </div>
                <div className={styles.no}>
                  <input
                    id="dairy-free-no"
                    name="dairy-free-no"
                    type="radio"
                    className={styles.radio}
                    value="no"
                    checked={dairyFreeCheck === "no"}
                    onChange={handleDairyChange}
                  />
                  <label htmlFor="dairy-free-no">no</label>
                </div>
              </div>
            </div>
            <div className={styles.field}>
              <legend className={styles.label} id="gluten-free">
                is it gluten free?
              </legend>
              <div className={styles.options}>
                <div className={styles.yes}>
                  <input
                    id="gluten-free-yes"
                    name="gluten-free-yes"
                    type="radio"
                    className={styles.radio}
                    value="yes"
                    checked={glutenFreeCheck === "yes"}
                    onChange={handleGlutenChange}
                  />
                  <label htmlFor="gluten-free-yes">yes</label>
                </div>
                <div className={styles.no}>
                  <input
                    id="gluten-free-no"
                    name="gluten-free-no"
                    type="radio"
                    className={styles.radio}
                    value="no"
                    checked={glutenFreeCheck === "no"}
                    onChange={handleGlutenChange}
                  />
                  <label htmlFor="gluten-free-no">no</label>
                </div>
              </div>
            </div>
            <div className={styles.field}>
              <legend className={styles.label} id="ketogenic">
                is it ketogenic?
              </legend>
              <div className={styles.options}>
                <div className={styles.yes}>
                  <input
                    id="ketogenic-yes"
                    name="ketogenic-yes"
                    type="radio"
                    className={styles.radio}
                    value="yes"
                    checked={ketogenicCheck === "yes"}
                    onChange={handleKetogenicChange}
                  />
                  <label htmlFor="ketogenic-yes">yes</label>
                </div>
                <div className={styles.no}>
                  <input
                    id="ketogenic-no"
                    name="ketogenic-no"
                    type="radio"
                    className={styles.radio}
                    value="no"
                    checked={ketogenicCheck === "no"}
                    onChange={handleKetogenicChange}
                  />
                  <label htmlFor="ketogenic-no">no</label>
                </div>
              </div>
            </div>
            <div className={styles.field}>
              <legend className={styles.label} id="vegan">
                is it vegan?
              </legend>
              <div className={styles.options}>
                <div className={styles.yes}>
                  <input
                    id="vegan-yes"
                    name="vegan-yes"
                    type="radio"
                    className={styles.radio}
                    value="yes"
                    checked={veganCheck === "yes"}
                    onChange={handleVeganChange}
                  />
                  <label htmlFor="vegan-yes">yes</label>
                </div>
                <div className={styles.no}>
                  <input
                    id="vegan-no"
                    name="vegan-no"
                    type="radio"
                    className={styles.radio}
                    value="no"
                    checked={veganCheck === "no"}
                    onChange={handleVeganChange}
                  />
                  <label htmlFor="vegan-no">no</label>
                </div>
              </div>
            </div>
            <div className={styles.field}>
              <legend className={styles.label} id="vegetarian">
                is it vegetarian?
              </legend>
              <div className={styles.options}>
                <div className={styles.yes}>
                  <input
                    id="vegetarian-yes"
                    name="vegetarian-yes"
                    type="radio"
                    className={styles.radio}
                    value="yes"
                    checked={vegetarianCheck === "yes"}
                    onChange={handleVegetarianChange}
                  />
                  <label htmlFor="vegetarian-yes">yes</label>
                </div>
                <div className={styles.no}>
                  <input
                    id="vegetarian-no"
                    name="vegetarian-no"
                    type="radio"
                    className={styles.radio}
                    value="no"
                    checked={vegetarianCheck === "no"}
                    onChange={handleVegetarianChange}
                  />
                  <label htmlFor="vegetarian-no">no</label>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className={`${styles.section4} ${styles.section}`}>
            <div className={styles.field}>
              <div className={styles["input-field"]}>
                <label className={styles.label} htmlFor="ingredients">
                  ingredients
                </label>
                <div className={styles["input-wrapper"]}>
                  <input
                    type="text"
                    id="ingredients"
                    name="ingredients"
                    className={styles.input}
                    ref={ingredientRef}
                    placeholder="add your ingredients with measurements"
                  />
                  <button
                    onClick={handleAddIngredient}
                    className={styles.submit}
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              <ul className={styles["ingredient-list"]}>
                {ingredientList.map(
                  (ingredient: { id: string; name: string }) => (
                    <li
                      key={ingredient.id}
                      className={styles["ingredient-list-item"]}
                    >
                      <p className={styles.text}>{ingredient.name}</p>
                      <button
                        type="button"
                        onClick={() => handleDeletedIngredients(ingredient.id)}
                        className={styles.delete}
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section className={`${styles.section5} ${styles.section}`}>
            <div className={styles.field}>
              <div className={styles["input-field"]}>
                <h1 className={styles.label}>instructions</h1>
                <textarea
                  name="instructions"
                  id="instructions"
                  className={styles.textarea}
                  ref={instructionRef}
                  rows={8}
                  placeholder="add a step"
                ></textarea>
                <button
                  onClick={handleAddInstruction}
                  className={styles.submit}
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>

              <ul className={styles["instructions-list"]}>
                {instructionsList.map(
                  (instruction: {
                    id: string;
                    index: number;
                    content: string;
                  }) => (
                    <li
                      key={instruction.id}
                      className={styles["instructions-list-item"]}
                    >
                      <p className={styles.index}>step {instruction.index}</p>
                      <p className={styles.content}>{instruction.content}</p>
                    </li>
                  )
                )}
              </ul>
            </div>
          </section>

          {/* Section 6 */}
          <section className={`${styles.section6} ${styles.section}`}>
            <div className={styles.field}>
              <button onClick={handleSubmit} className={styles["post-button"]}>
                POST
              </button>
            </div>
          </section>
        </div>
      </div>
    </form>
  );
};

export default PostForm;
