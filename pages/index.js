import Head from "next/head";
import axios from "axios";
import MenuList from "../components/MenuList";
import React, { useState, useEffect } from "react";
import classes from "../styles/utils.module.scss";

export default function Home() {
  let [recipesPdfURL, setRecipesPdfURL] = useState("");
  const [recipesData, setRecipesData] = useState([]);

  const getRecipesData = async () => {
    try {
      const recipesDataReceived = await axios.get("/api/menus/95/barcodes");
      setRecipesData(recipesDataReceived.data);
    } catch (err) {
      return <h2>Unknown Error ocurred while fetching recipes</h2>;
    }
  };

  const generatePDFHandler = async (e) => {
    e.preventDefault();
    try {
      const pdfUrlReceived = await axios.get("/api/menus/95/barcodes.pdf");
      setRecipesPdfURL(pdfUrlReceived.data.pdfUrl);
      alert(`Received URL but haven't been able to complete PDF generation: ${pdfUrlReceived.data.pdfUrl} `)
    } catch (err) {
      return <h2>Unknown Error ocurred while fetching recipes pdf url</h2>;
    }
  };

  useEffect(() => {
    getRecipesData();
  }, [recipesData.length]);

  return (
    <div className="container">
      <Head>
        <title>KitchenMate Label Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={classes.generatePdfButtonDiv}>
          <button className={classes.generatePdfButton} type="button" onClick={(e) => generatePDFHandler(e)}>
              Generate PDF
          </button>
        </div>
        <MenuList recipesData={recipesData} />
      </main>
    </div>
  );
}
