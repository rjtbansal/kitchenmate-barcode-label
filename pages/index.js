import Axios from 'axios'
import Head from 'next/head'
import axios from "axios";

export async function getStaticProps() {

  const recipesDataReceived = await axios.get("https://fridge.kitchenmate.com/api/public/menus/95/recipes");
  const recipesData = recipesDataReceived.data.map(({ name, category, summary, side_photo }) => ({ name, category, summary, side_photo }));
  return {
    props: {
      recipesData: recipesData
    }
  }
}

export default function Home({ recipesData }) {
  console.log(recipesData);
  return (
    <div className="container">
      <Head>
        <title>KitchenMate Label Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        
      </main>
    </div>
  )
}
