import {
  ProductCard,
  Banner,
  BannerCards,
  ProductSlider,
} from "@/components/user";
import { useEffect } from "react";


const Home = () => {
  const products = [
    {
      id: 1,
      name: 'PA CITY LAMINATED BIKER',
      price: '2263',
      gallery: ['./src/assets/img/product_01_01.webp', './src/assets/img/product_01_02.webp']
    },
    {
      id: 1,
      name: 'PA CITY LAMINATED BIKER',
      price: '2263',
      gallery: ['./src/assets/img/product_01_01.webp', './src/assets/img/product_01_02.webp']
    },
    {
      id: 1,
      name: 'PA CITY LAMINATED BIKER',
      price: '2263',
      gallery: ['./src/assets/img/product_01_01.webp', './src/assets/img/product_01_02.webp']
    },
    {
      id: 1,
      name: 'PA CITY LAMINATED BIKER',
      price: '2263',
      gallery: ['./src/assets/img/product_01_01.webp', './src/assets/img/product_01_02.webp']
    },
    {
      id: 1,
      name: 'PA CITY LAMINATED BIKER',
      price: '2263',
      gallery: ['./src/assets/img/product_01_01.webp', './src/assets/img/product_01_02.webp']
    },
    {
      id: 1,
      name: 'PA CITY LAMINATED BIKER',
      price: '2263',
      gallery: ['./src/assets/img/product_01_01.webp', './src/assets/img/product_01_02.webp']
    }
  ]


  return (
    <>
      <section>
        <BannerCards
          leftLink="/oneRout"
          rightLink="/twoRout"
          leftText="Left"
          leftImage="./src/assets/img/1.webp"
          rightImage="./src/assets/img/2.webp"
          rightText="Right"
        />
      </section>

      <section>
        <Banner
          link={"href/index/"}
          image={"./src/assets/img/3.webp"}
          leftBtnText={"Left"}
          rightBtnText={"Right"}
        />
      </section>

      <section className="py-14">
        <ProductSlider>
          {
            products.map(product => {
              return <ProductCard className={'px-2 m-auto'} compact key={product.id} name={product.name} price={product.price} gallery={product.gallery} />
            })
          }
        </ProductSlider>
      </section>
    </>
  )
}


export default Home;