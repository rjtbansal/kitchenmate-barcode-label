/**APi Endpoint: http://localhost:3000/api/menus/95/barcodes */
import axios from "axios";

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
        side_photo,
        nutrition: { allergens },
      }) => ({ id, name, category, summary, side_photo, allergens })
    );
    return res.status(200).json(recipesData);
  } catch (err) {
    console.error("Unexpected error ocurred while fetching recipes data", err);
    return res.status(500).json({Error: "Unexpected Error occurred while fetching recipes"});
  }

}