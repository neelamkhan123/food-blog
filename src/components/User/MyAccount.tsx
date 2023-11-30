// import { useNavigate } from "react-router";

import styles from "./MyAccount.module.css";

const MyAccount = (): JSX.Element => {
  // const navigate = useNavigate();

  const posts = JSON.parse(localStorage.getItem("postData") || "{}");

  const deleteHandler = (title: string) => {
    const index = posts.findIndex(
      (post: { title: string }) => post.title === title
    );

    posts.splice(index, 1);
    posts.filter((post: { title: string }) => post.title !== title);

    window.location.reload();

    localStorage.setItem("postData", JSON.stringify(posts));
  };

  return (
    <ul style={{ marginTop: "5rem" }}>
      {posts.map((post: { title: string }) => (
        <li key={post.title}>
          {post.title}
          <button onClick={() => deleteHandler(post.title)}>-</button>
        </li>
      ))}
    </ul>
  );
};

export default MyAccount;
