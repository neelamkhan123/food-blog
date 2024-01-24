import photo from "../../images/food-test-image.jpg";

import styles from "./Explore.module.css";

const Explore = (): JSX.Element => {
  return (
    <main className={styles.explore}>
      <section className={styles["search-bar-container"]}>
        <div className={styles["search-bar"]}>
          <input type="text" className={styles.input} />
          <button className={styles["search-button"]}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </section>

      <section className={styles["tags-container"]}>
        <ul className={styles.tags}>
          <li className={styles.tag}>
            <button className={styles["tag-button"]}>vegetarian</button>
          </li>
          <li className={styles.tag}>
            <button className={styles["tag-button"]}>vegan</button>
          </li>
          <li className={styles.tag}>
            <button className={styles["tag-button"]}>dessert</button>
          </li>
          <li className={styles.tag}>
            <button className={styles["tag-button"]}>dairy</button>
          </li>
          <li className={styles.tag}>
            <button className={styles["tag-button"]}>italian</button>
          </li>
          <li className={styles.tag}>
            <button className={styles["tag-button"]}>lunch</button>
          </li>
          <li className={styles.tag}>
            <button className={styles["tag-button"]}>pasta</button>
          </li>
          <li className={styles.tag}>
            <button className={styles["tag-button"]}>ketogenic</button>
          </li>
          <li className={styles.tag}>
            <button className={styles["tag-button"]}>dinner</button>
          </li>
        </ul>
      </section>

      <section className={styles["posts-container"]}>
        <ul className={styles.posts}>
          <li className={styles.post}>
            <div className={styles.wrapper}>
              <h4 className={styles.title}>Title</h4>
            </div>
            <img src={photo} className={styles["post-image"]} alt="Food" />
          </li>
          <li className={styles.post}>
            <div className={styles.wrapper}>
              <h4 className={styles.title}>Title</h4>
            </div>
            <img src={photo} className={styles["post-image"]} alt="Food" />
          </li>
          <li className={styles.post}>
            <div className={styles.wrapper}>
              <h4 className={styles.title}>Title</h4>
            </div>
            <img src={photo} className={styles["post-image"]} alt="Food" />
          </li>
          <li className={styles.post}>
            <div className={styles.wrapper}>
              <h4 className={styles.title}>Title</h4>
            </div>
            <img src={photo} className={styles["post-image"]} alt="Food" />
          </li>
          <li className={styles.post}>
            <div className={styles.wrapper}>
              <h4 className={styles.title}>Title</h4>
            </div>
            <img src={photo} className={styles["post-image"]} alt="Food" />
          </li>
          <li className={styles.post}>
            <div className={styles.wrapper}>
              <h4 className={styles.title}>Title</h4>
            </div>
            <img src={photo} className={styles["post-image"]} alt="Food" />
          </li>
          <li className={styles.post}>
            <div className={styles.wrapper}>
              <h4 className={styles.title}>Title</h4>
            </div>
            <img src={photo} className={styles["post-image"]} alt="Food" />
          </li>
          <li className={styles.post}>
            <div className={styles.wrapper}>
              <h4 className={styles.title}>Title</h4>
            </div>
            <img src={photo} className={styles["post-image"]} alt="Food" />
          </li>
          <li className={styles.post}>
            <div className={styles.wrapper}>
              <h4 className={styles.title}>Title</h4>
            </div>
            <img src={photo} className={styles["post-image"]} alt="Food" />
          </li>
          <li className={styles.post}>
            <div className={styles.wrapper}>
              <h4 className={styles.title}>Title</h4>
            </div>
            <img src={photo} className={styles["post-image"]} alt="Food" />
          </li>
          <li className={styles.post}>
            <div className={styles.wrapper}>
              <h4 className={styles.title}>Title</h4>
            </div>
            <img src={photo} className={styles["post-image"]} alt="Food" />
          </li>
          <li className={styles.post}>
            <div className={styles.wrapper}>
              <h4 className={styles.title}>Title</h4>
            </div>
            <img src={photo} className={styles["post-image"]} alt="Food" />
          </li>
          <li className={styles.post}>
            <div className={styles.wrapper}>
              <h4 className={styles.title}>Title</h4>
            </div>
            <img src={photo} className={styles["post-image"]} alt="Food" />
          </li>
          <li className={styles.post}>
            <div className={styles.wrapper}>
              <h4 className={styles.title}>Title</h4>
            </div>
            <img src={photo} className={styles["post-image"]} alt="Food" />
          </li>
          <li className={styles.post}>
            <div className={styles.wrapper}>
              <h4 className={styles.title}>Title</h4>
            </div>
            <img src={photo} className={styles["post-image"]} alt="Food" />
          </li>
          <li className={styles.post}>
            <div className={styles.wrapper}>
              <h4 className={styles.title}>Title</h4>
            </div>
            <img src={photo} className={styles["post-image"]} alt="Food" />
          </li>
          <li className={styles.post}>
            <div className={styles.wrapper}>
              <h4 className={styles.title}>Title</h4>
            </div>
            <img src={photo} className={styles["post-image"]} alt="Food" />
          </li>
          <li className={styles.post}>
            <div className={styles.wrapper}>
              <h4 className={styles.title}>Title</h4>
            </div>
            <img src={photo} className={styles["post-image"]} alt="Food" />
          </li>
          <li className={styles.post}>
            <div className={styles.wrapper}>
              <h4 className={styles.title}>Title</h4>
            </div>
            <img src={photo} className={styles["post-image"]} alt="Food" />
          </li>
          <li className={styles.post}>
            <div className={styles.wrapper}>
              <h4 className={styles.title}>Title</h4>
            </div>
            <img src={photo} className={styles["post-image"]} alt="Food" />
          </li>
          <li className={styles.post}>
            <div className={styles.wrapper}>
              <h4 className={styles.title}>Title</h4>
            </div>
            <img src={photo} className={styles["post-image"]} alt="Food" />
          </li>
          <li className={styles.post}>
            <div className={styles.wrapper}>
              <h4 className={styles.title}>Title</h4>
            </div>
            <img src={photo} className={styles["post-image"]} alt="Food" />
          </li>
          <li className={styles.post}>
            <div className={styles.wrapper}>
              <h4 className={styles.title}>Title</h4>
            </div>
            <img src={photo} className={styles["post-image"]} alt="Food" />
          </li>
          <li className={styles.post}>
            <div className={styles.wrapper}>
              <h4 className={styles.title}>Title</h4>
            </div>
            <img src={photo} className={styles["post-image"]} alt="Food" />
          </li>
          <li className={styles.post}>
            <div className={styles.wrapper}>
              <h4 className={styles.title}>Title</h4>
            </div>
            <img src={photo} className={styles["post-image"]} alt="Food" />
          </li>
          <li className={styles.post}>
            <div className={styles.wrapper}>
              <h4 className={styles.title}>Title</h4>
            </div>
            <img src={photo} className={styles["post-image"]} alt="Food" />
          </li>
          <li className={styles.post}>
            <div className={styles.wrapper}>
              <h4 className={styles.title}>Title</h4>
            </div>
            <img src={photo} className={styles["post-image"]} alt="Food" />
          </li>
          <li className={styles.post}>
            <div className={styles.wrapper}>
              <h4 className={styles.title}>Title</h4>
            </div>
            <img src={photo} className={styles["post-image"]} alt="Food" />
          </li>
          <li className={styles.post}>
            <div className={styles.wrapper}>
              <h4 className={styles.title}>Title</h4>
            </div>
            <img src={photo} className={styles["post-image"]} alt="Food" />
          </li>
          <li className={styles.post}>
            <div className={styles.wrapper}>
              <h4 className={styles.title}>Title</h4>
            </div>
            <img src={photo} className={styles["post-image"]} alt="Food" />
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Explore;
