import Head from "next/head";
import axios from "axios";
import MenuList from "../components/MenuList";

export async function getStaticProps() {
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
    return {
      props: {
        recipesData: recipesData,
      },
    };
  } catch (err) {
    console.error("Unexpected error ocurred while fetching recipes data", err);
  }
}

export default function Home({ recipesData }) {
  return (
    <div className="container">
      <Head>
        <title>KitchenMate Label Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MenuList recipesData={recipesData} />
      </main>
    </div>
  );
}
