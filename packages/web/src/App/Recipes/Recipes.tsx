import { gql, useMutation, useQuery } from "@apollo/client";
import styles from "./Recipes.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

const recipesQuery = gql`
  query recipes {
    recipes {
      id
      name
    }
  }
`;

interface RecipeQuery {
  recipes: Array<{
    name: string;
    id: string;
  }>;
}

const deleteRecipeMutation = gql`
  mutation deleteRecipe($id: ID!) {
    deleteRecipe(id: $id)
  }
`;

const Recipes = () => {
  const { data } = useQuery<RecipeQuery>(recipesQuery);
  const [deleteRecipe] = useMutation(deleteRecipeMutation, {
    refetchQueries: ["recipes"],
  });
  return (
    <div className={cx("container")}>
      {data?.recipes?.map((recipe) => (
        <div key={recipe.id} className={cx("card")}>
          {recipe.name}
          <button
            onClick={() => deleteRecipe({ variables: { id: recipe.id } })}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
