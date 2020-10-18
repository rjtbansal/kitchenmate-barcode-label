import classes from "./menu-list.module.scss";

export default function MenuList({ recipesData }) {
  return (
    <>
      {recipesData.map(({id, name, category, summary, visible_allergens, visible_intolerances, barcodeURL }) => (
        <div key={id}>
          <h2>{name}</h2>
          <h3>{category}</h3>
          <p>{summary}</p>
          <p>
            Contains:
            {visible_allergens.map((allergen, index) =>
              index !== visible_allergens.length - 1 ? `${allergen}, ` : allergen
            )}
          </p>
           <p>
            Intolerances:
            {visible_intolerances.map((intolerance, index) =>
              index !== visible_intolerances.length - 1 ? `${intolerance}, ` : intolerance
            )}
          </p>
          <img src={barcodeURL} alt="" />
        </div>
      ))}
    </>
  );
}
