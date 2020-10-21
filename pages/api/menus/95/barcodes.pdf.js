/**APi Endpoint: http://localhost:3000/api/menus/95/barcodes.pdf */
import axios from "axios";

/**Current tunnel address: https://8b17b019b47f.ngrok.io/ */

export default async function handler(_req, res) {

  try {
    const receivePDFForRecipes = await axios.post("https://dev-pdfkm.now.sh", {
      type: "raw",
      urls: ["https://8b17b019b47f.ngrok.io/api/menus/95/barcodes"]
    },
      {
        headers: {
          token: "TFgOm0rIaXSwFdiyy2pcfshWLQ0qXQR6",
        }
      }
    );
    return res.status(200).json({ pdfUrl: receivePDFForRecipes.data[0] });

  }
  catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Unknown error occurred while fetching PDF" });
  }
}