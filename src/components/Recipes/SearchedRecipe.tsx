import RecipeLayout from "./RecipeLayout";

const SearchedRecipe = () => {
  const recipeStorage = JSON.parse(localStorage.getItem("recipe") || "{}");

  const recipe = {
    id: recipeStorage[0].id,
    title: recipeStorage[0].title,
    image: recipeStorage[0].image,
    servings: recipeStorage[0].servings,
    readyInMinutes: recipeStorage[0].readyInMinutes,
    dairyFree: recipeStorage[0].dairyFree,
    glutenFree: recipeStorage[0].glutenFree,
    ketogenic: recipeStorage[0].ketogenic,
    vegan: recipeStorage[0].vegan,
    vegetarian: recipeStorage[0].vegetarian,
    extendedIngredients: recipeStorage[0].extendedIngredients.map(
      (ing: { original: string; id: string }) => ({
        original: ing.original,
        id: ing.id,
      })
    ),
  };

  const recipeInstructionsStorage = JSON.parse(
    localStorage.getItem("recipeInstructions") || "{}"
  );

  const recipeInstructions = {
    steps: recipeInstructionsStorage[0].steps.map(
      (inst: { number: number; step: string }) => ({
        number: inst.number,
        step: inst.step,
      })
    ),
  };

  return (
    <RecipeLayout
      recipeId={recipe.id}
      recipeTitle={recipe.title}
      recipeImage={recipe.image}
      recipeServings={recipe.servings}
      recipeDuration={recipe.readyInMinutes}
      recipeDairyFree={recipe.dairyFree}
      recipeGlutenFree={recipe.glutenFree}
      recipeKetogenic={recipe.ketogenic}
      recipeVegan={recipe.vegan}
      recipeVegetarian={recipe.vegetarian}
      recipeIngredients={recipe.extendedIngredients}
      recipeInstructions={recipeInstructions.steps}
      recipeBookmark={recipe}
    />
  );
};

export default SearchedRecipe;

// interface Bookmark {
//   userId: string | null;
//   status: boolean;
//   id: number;
//   title: string;
//   image: string;
//   servings: number;
//   readyInMinutes: number;
//   dairyFree: boolean;
//   glutenFree: boolean;
//   ketogenic: boolean;
//   vegan: boolean;
//   vegetarian: boolean;
//   extendedIngredients: {
//     original: string;
//     id: string;
//   }[];
//   steps: {
//     number: number;
//     step: string;
//   }[];
// }

// const SearchedRecipe = (): JSX.Element => {
//   // const { bookmarks, toggleBookmark } = useBookmarkContext();

//   const { bookmarks, toggleBookmark, deleteBookmark, isBookmarked } =
//     useMyBookmarkContext();

//   // const [bookmarked, setBookmarked] = useState(false);

//   const navigate = useNavigate();

//   const recipeStorage = JSON.parse(localStorage.getItem("recipe") || "{}");

//   const recipe = {
//     id: recipeStorage[0].id,
//     title: recipeStorage[0].title,
//     image: recipeStorage[0].image,
//     servings: recipeStorage[0].servings,
//     readyInMinutes: recipeStorage[0].readyInMinutes,
//     dairyFree: recipeStorage[0].dairyFree,
//     glutenFree: recipeStorage[0].glutenFree,
//     ketogenic: recipeStorage[0].ketogenic,
//     vegan: recipeStorage[0].vegan,
//     vegetarian: recipeStorage[0].vegetarian,
//     extendedIngredients: recipeStorage[0].extendedIngredients.map(
//       (ing: { original: string; id: string }) => ({
//         original: ing.original,
//         id: ing.id,
//       })
//     ),
//   };

//   const recipeInstructionsStorage = JSON.parse(
//     localStorage.getItem("recipeInstructions") || "{}"
//   );
//   const recipeInstructions = {
//     steps: recipeInstructionsStorage[0].steps.map(
//       (inst: { number: number; step: string }) => ({
//         number: inst.number,
//         step: inst.step,
//       })
//     ),
//   };

//   // const bookmarkUserAccess = () => {
//   //   // setBookmarked((prevState) => !prevState);
//   //   const user = auth.currentUser;
//   // if (user) {
//   //   const bookmark: Bookmark = {
//   //     userId: user.email,
//   //     status: true,
//   //     id: recipe.id,
//   //     title: recipe.title,
//   //     image: recipe.image,
//   //     servings: recipe.servings,
//   //     readyInMinutes: recipe.readyInMinutes,
//   //     dairyFree: recipe.dairyFree,
//   //     glutenFree: recipe.glutenFree,
//   //     ketogenic: recipe.ketogenic,
//   //     vegan: recipe.vegan,
//   //     vegetarian: recipe.vegetarian,
//   //     extendedIngredients: recipe.extendedIngredients.map(
//   //       (ing: { original: string; id: string }) => ({
//   //         original: ing.original,
//   //         id: ing.id,
//   //       })
//   //     ),
//   //     steps: recipeInstructions.steps.map(
//   //       (inst: { number: number; step: string }) => ({
//   //         number: inst.number,
//   //         step: inst.step,
//   //       })
//   //     ),
//   //   };

//   //     const bookmarks = JSON.parse(localStorage.getItem("bookmarked") || "[]");

//   //     // if (bookmarked === true) {
//   //     //   bookmarks.pop();
//   //     // } else {
//   //     //   bookmarks.push(bookmark);
//   //     // }

//   //     localStorage.setItem("bookmarked", JSON.stringify(bookmarks));
//   //   } else {
//   //     navigate("/login");
//   //   }
//   // };

//   const bookmarkUserAccess = () => {
//     const user = auth.currentUser;
//     if (user) {
//       toggleBookmark({
//         userId: user.email,
//         status: true,
//         id: recipe.id,
//         title: recipe.title,
//         image: recipe.image,
//         servings: recipe.servings,
//         readyInMinutes: recipe.readyInMinutes,
//         dairyFree: recipe.dairyFree,
//         glutenFree: recipe.glutenFree,
//         ketogenic: recipe.ketogenic,
//         vegan: recipe.vegan,
//         vegetarian: recipe.vegetarian,
//         extendedIngredients: recipe.extendedIngredients.map(
//           (ing: { original: string; id: string }) => ({
//             original: ing.original,
//             id: ing.id,
//           })
//         ),
//         steps: recipeInstructions.steps.map(
//           (inst: { number: number; step: string }) => ({
//             number: inst.number,
//             step: inst.step,
//           })
//         ),
//       });
//       console.log(bookmarks);
//     } else {
//       navigate("/login");
//     }
//   };

//   return (
//     <main className={styles["recipe-container"]}>
//       <section className={styles.box}>
//         <div className={styles["image-container"]}>
//           <div className={styles["image-wrapper"]}></div>
//           <img
//             src={recipe.image}
//             className={styles["recipe-image"]}
//             alt="Food"
//           />
//         </div>

//         <div className={styles["ingredients-container"]}>
//           <h2 className={styles["ingredients-header"]}>ingredients</h2>
//           <ul className={styles["ingredients-list"]}>
//             {recipe.extendedIngredients.map(
//               (ing: { original: string; id: string }) => (
//                 <li key={ing.id} className={styles["ingredients-list-item"]}>
//                   {ing.original}
//                 </li>
//               )
//             )}
//           </ul>
//         </div>
//         <div className={styles["recipe-data-container"]}>
//           <div className={styles["recipe-header"]}>
//             <h1 className={styles["recipe-name"]}>{recipe.title}</h1>
//             <ul className={styles.extras}>
//               <li className={styles["extras-list-item"]}>
//                 <div className={styles.servings}>
//                   <i className="fa-solid fa-user"></i>
//                 </div>
//                 <p className={styles.text}>{recipe.servings}</p>
//               </li>
//               <li className={styles["extras-list-item"]}>
//                 <div className={styles.duration}>
//                   <i className="fa-solid fa-clock"></i>
//                 </div>
//                 <p className={styles.text}>{recipe.readyInMinutes}mins</p>
//               </li>
//             </ul>
//           </div>

//           <div
//             className={styles["bookmarks-container"]}
//             onClick={bookmarkUserAccess}
//           >
//             {/* {bookmarked ? (
//               <i className="fa-solid fa-bookmark"></i>
//             ) : (
//               <i className="fa-regular fa-bookmark"></i>
//             )} */}
//             <i className="fa-regular fa-bookmark"></i>
//           </div>

//           <div className={styles["steps-container"]}>
//             <ul className={styles["steps-list"]}>
//               {recipeInstructions.steps.map(
//                 (instr: { number: number; step: string }) => (
//                   <li key={instr.number} className={styles["steps-list-item"]}>
//                     <h2 className={styles["step-heading"]}>
//                       Step <span className={styles.count}>{instr.number}</span>
//                     </h2>
//                     <p className={styles.instruction}>{instr.step}</p>
//                   </li>
//                 )
//               )}
//             </ul>
//           </div>
//         </div>
//         <div className={styles["source-contents-container"]}>
//           <ul className={styles["source-contents-list"]}>
//             <li className={styles["source-contents-list-item"]}>
//               <div className={styles.check}>
//                 {recipe.dairyFree ? (
//                   <div className={styles.checkmark}>
//                     <i className="fa-solid fa-circle-check"></i>
//                   </div>
//                 ) : (
//                   <div className={styles.xmark}>
//                     <i className="fa-solid fa-circle-xmark"></i>
//                   </div>
//                 )}
//               </div>
//               <p className={styles.text}>dairy free</p>
//             </li>
//             <li className={styles["source-contents-list-item"]}>
//               <div className={styles.check}>
//                 {recipe.glutenFree ? (
//                   <div className={styles.checkmark}>
//                     <i className="fa-solid fa-circle-check"></i>
//                   </div>
//                 ) : (
//                   <div className={styles.xmark}>
//                     <i className="fa-solid fa-circle-xmark"></i>
//                   </div>
//                 )}
//               </div>
//               <p className={styles.text}>gluten free</p>
//             </li>
//             <li className={styles["source-contents-list-item"]}>
//               <div className={styles.check}>
//                 {recipe.ketogenic ? (
//                   <div className={styles.checkmark}>
//                     <i className="fa-solid fa-circle-check"></i>
//                   </div>
//                 ) : (
//                   <div className={styles.xmark}>
//                     <i className="fa-solid fa-circle-xmark"></i>
//                   </div>
//                 )}
//               </div>
//               <p className={styles.text}>ketogenic</p>
//             </li>
//             <li className={styles["source-contents-list-item"]}>
//               <div className={styles.check}>
//                 {recipe.vegan ? (
//                   <div className={styles.checkmark}>
//                     <i className="fa-solid fa-circle-check"></i>
//                   </div>
//                 ) : (
//                   <div className={styles.xmark}>
//                     <i className="fa-solid fa-circle-xmark"></i>
//                   </div>
//                 )}
//               </div>
//               <p className={styles.text}>vegan</p>
//             </li>
//             <li className={styles["source-contents-list-item"]}>
//               <div className={styles.check}>
//                 {recipe.vegetarian ? (
//                   <div className={styles.checkmark}>
//                     <i className="fa-solid fa-circle-check"></i>
//                   </div>
//                 ) : (
//                   <div className={styles.xmark}>
//                     <i className="fa-solid fa-circle-xmark"></i>
//                   </div>
//                 )}
//               </div>
//               <p className={styles.text}>vegetarian</p>
//             </li>
//           </ul>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default SearchedRecipe;
