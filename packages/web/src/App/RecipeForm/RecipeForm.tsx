import { gql, useMutation } from "@apollo/client";
import styles from "./RecipeForm.module.scss";
import classnames from "classnames/bind";
import { useState } from "react";

const cx = classnames.bind(styles);

const mutation = gql`
  mutation createRecipe($name: String) {
    createRecipe(name: $name) {
      id
    }
  }
`;

const RecipeForm = () => {
  const [createRecipe] = useMutation(mutation, {
    refetchQueries: ["recipes"],
  });
  const [recipeName, setRecipeName] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(recipeName);
    createRecipe({
      variables: {
        name: recipeName,
      },
    });
    setRecipeName("");
  };

  return (
    <form className={cx("container")} onSubmit={onSubmit}>
      <input
        name="name"
        type="text"
        value={recipeName}
        onChange={(event) => setRecipeName(event.target.value)}
      />
      <input type="submit" />
    </form>
  );
};

export default RecipeForm;
