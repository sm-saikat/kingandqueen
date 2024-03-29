import {
  ProductCard,
  Banner,
  BannerCards,
  ProductSlider,
} from "@/components/ui";
import { useEffect, useState } from "react";


const Home = () => {
  const [latestProducts, setLatestProducts] = useState([]);

  const fetchProducts = async (query = "") => {
    const response = await fetch(import.meta.env.VITE_API_URL + '/admin/products' + query);
    const result = await response.json();

    if (!response.ok) {
      toast.error(result.message);
      return;
    }

    setLatestProducts(result.data)
  }

  useEffect(() => {
    fetchProducts('?limit=5&sort=latest');
  }, []);


  return (
    <>
      <section>
        <BannerCards
          leftLink="/oneRout"
          rightLink="/twoRout"
          leftText="Left"
          leftImage="assets/img/1.webp"
          rightImage="assets/img/2.webp"
          rightText="Right"
        />
      </section>

      <section>
        <Banner
          link={"href/index/"}
          image={"assets/img/3.webp"}
          leftBtnText={"Left"}
          rightBtnText={"Right"}
        />
      </section>

      <section className="py-14">
        <ProductSlider>
          {
            latestProducts.map(product => {
              return <ProductCard key={product._id} link={'/shopping/-' + product._id} id={product._id} title={product.title} price={product.price}  gallery={product.images} sizes={product.sizes} colors={product.colors} compact />
            })
          }
        </ProductSlider>
      </section>
    </>
  )
}


export default Home;