/**APi Endpoint: http://localhost:3000/api/menus/95/barcodes */
import axios from "axios";
import bwipJs from "bwip-js";
import fs from "fs";

export default async function handler(_req, res) {
  try {
    const recipesDataReceived = await axios.get(
      "https://fridge.kitchenmate.com/api/public/menus/95/recipes"
    );
    const recipesData = recipesDataReceived.data.map(
      ({
        id,
        name,
        category,
        summary,
        nutrition: { visible_allergens, visible_intolerances },
      }) => {
        bwipJs
          .toBuffer({
            bcid: `code128`,
            text: `km12${id}`,
            includetext: true,
            textxalign: "center",
          })
          .then((png, err) => {
            if (err) {
              console.error("Unable to save image file", err);
            } else {
              fs.writeFile(`./public/id-${id}.png`, png, (err) => {
                if (err) {
                  return console.error("Error while writing file. ", err);
                }
                console.log("Image file saved successfully");
              });
            }
          })
          .catch((err) =>
            console.error(
              "Unknown error occurred while generating barcode",
              err
            )
          );
        return {
          id,
          name: name.split(" ").map(word => word.charAt(0).toUpperCase()+word.substring(1)).join(" "),
          category: category[0].toUpperCase()+category.substring(1),
          summary,
          visible_allergens,
          visible_intolerances,
          barcodeURL: `./id-${id}.png`,
        };
      }
    );
    return res.status(200).json(recipesData);
  } catch (err) {
    console.error("Unexpected error ocurred while fetching recipes data", err);
    return res
      .status(500)
      .json({ Error: "Unexpected Error occurred while fetching recipes" });
  }
}
