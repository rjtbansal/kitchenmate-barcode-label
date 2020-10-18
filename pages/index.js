import Head from "next/head";
import axios from "axios";
import MenuList from "../components/MenuList";
import useSwr from "swr";

const dataFetcher = async (url) => {
  const fetchedData = await axios.get(url);
  return fetchedData.data; 
}

export default function Home() {

  const { data, error } = useSwr('/api/menus/95/barcodes', dataFetcher);
  if (error) {
    return <div>Failed to fetch recipes</div>
  }
  if (!data) {
    return <div>Loading...Please wait</div>
  }
 
  return (
    <div className="container">
      <Head>
        <title>KitchenMate Label Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MenuList recipesData={data} />
      </main>
    </div>
  );
}
