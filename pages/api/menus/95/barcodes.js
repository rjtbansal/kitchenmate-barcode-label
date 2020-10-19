/**APi Endpoint: http://localhost:3000/api/menus/95/barcodes */
import axios from "axios";
import bwipJs from "bwip-js";

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
        /**attempting to generate image */
        bwipJs.toBuffer({
          bcid: "code128",
          text: "km12345",
          includetext: true,
          textxalign: "center",
        }).then(png => console.log(png))
          .catch(err => res.status(500).json(err));
        
        return {
        id,
        name,
        category,
        summary,
        visible_allergens,
        visible_intolerances,
        barcodeURL: "https://generator.barcodetools.com/barcode.png?gen=0&data=1234567&bcolor=FFFFFF&fcolor=000000&tcolor=000000&fh=14&bred=0&w2n=2.5&xdim=2&w=&h=120&debug=1&btype=7&angle=0&quiet=1&balign=1&talign=2&guarg=1&text=1&tdown=0&stst=1&schk=0&cchk=1&ntxt=1&c128=0"
      }}
    );
    return res.status(200).json(recipesData);
  } catch (err) {
    console.error("Unexpected error ocurred while fetching recipes data", err);
    return res.status(500).json({Error: "Unexpected Error occurred while fetching recipes"});
  }

}