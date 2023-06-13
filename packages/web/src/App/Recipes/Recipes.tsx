import { gql, useQuery } from "@apollo/client";
import styles from "./Recipes.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

const query = gql`
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

const Recipes = () => {
  const { data } = useQuery<RecipeQuery>(query);
  return (
    <div className={cx("container")}>
      {data?.recipes?.map((recipe) => (
        <div key={recipe.id} className={cx("card")}>
          {recipe.name}
        </div>
      ))}
    </div>
  );
};

export default Recipes;
