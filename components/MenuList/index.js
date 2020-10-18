import classes from "./menu-list.module.scss";

export default function MenuList({ recipesData }) {
  console.log(recipesData);
  return (
  <>
      {
        recipesData.map(({ name, category, summary, side_photo }) => (<div>
            <h2>{name}</h2>
            <h3>{category}</h3>
            <p>{summary}</p>
            <img className={classes.recipeImg} src={side_photo} alt="" />
          </div>
        ))
      }
      </>
  )

}