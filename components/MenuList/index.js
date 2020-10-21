import classes from "./menu-list.module.scss";

export default function MenuList({ recipesData }) {
  return (
    <>
      {recipesData.map(
        ({
          id,
          name,
          category,
          summary,
          visible_allergens,
          visible_intolerances,
          barcodeURL,
        }) => (
          <div key={id} className={classes.recipesDiv}>
              <section className={classes.recipesDivSection}>
              <div className={classes.recipesDivInner}>
                  <h3>{name}</h3>
                  <h3>{category}</h3>
              </div>
              <p>{summary}</p>
              <p>
                Contains:
                {visible_allergens.map((allergen, index) =>
                  index !== visible_allergens.length - 1
                    ? `${allergen}, `
                    : allergen
                )}
              </p>
              <p>
                Intolerances:
                {visible_intolerances.map((intolerance, index) =>
                  index !== visible_intolerances.length - 1
                    ? `${intolerance}, `
                    : intolerance
                )}
              </p>
            </section>
            <img className={classes.barcodeImg} src={barcodeURL} alt="" />
          </div>
        )
      )}
    </>
  );
}
