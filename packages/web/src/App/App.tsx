import { gql, useQuery } from "@apollo/client";

const App = () => {
  const { data } = useQuery(gql`
    query getRecipes {
      recipes {
        id
        name
      }
    }
  `);

  return (
    <div>
      {data?.recipes?.map((recipe) => (
        <div>{recipe.name}</div>
      ))}
    </div>
  );
};

export default App;
