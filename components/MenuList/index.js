import classes from "./menu-list.module.scss";

export default function MenuList({ recipesData }) {
  return (
    <>
      {recipesData.map(({ name, category, summary, side_photo, allergens }) => (
        <div>
          <h2>{name}</h2>
          <h3>{category}</h3>
          <p>{summary}</p>
          <img className={classes.recipeImg} src={side_photo} alt="" />
          <p>
            {" "}
            Allergens:{" "}
            {allergens.map((allergen, index) =>
              index !== allergens.length - 1 ? `${allergen},` : allergen
            )}
          </p>
        </div>
      ))}
    </>
  );
}
