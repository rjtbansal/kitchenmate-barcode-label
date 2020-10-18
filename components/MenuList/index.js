import classes from "./menu-list.module.scss";

export default function MenuList({ recipesData }) {
  return (
    <>
      {recipesData.map(({id, name, category, summary, side_photo, allergens, barcodeURL }) => (
        <div key={id}>
          <h2>{name}</h2>
          <h3>{category}</h3>
          <p>{summary}</p>
          <p>
            {" "}
            Allergens:{" "}
            {allergens.map((allergen, index) =>
              index !== allergens.length - 1 ? `${allergen}, ` : allergen
            )}
          </p>
          <img src={barcodeURL} alt="" />
        </div>
      ))}
    </>
  );
}
