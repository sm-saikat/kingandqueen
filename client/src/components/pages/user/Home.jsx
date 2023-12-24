import {
  Button,
  SizeButton,
  Notice,
  Accordion,
  AccordionItem,
  ProductCard,
  Banner,
  BannerCards,
} from "@/components/user";


const Home = () => {

  return (
    <>
      <div className="flex">
        <ProductCard
          name= "MONOGRAM LEATHER TRACK PANTS"
          gallery={['./src/assets/img/product_01_01.webp', './src/assets/img/product_01_02.webp']}
          price={1872.86}
          className={'w-1/3'}
        />

        <ProductCard
          name= "MONOGRAM LEATHER TRACK PANTS"
          gallery={['./src/assets/img/product_01_01.webp', './src/assets/img/product_01_02.webp']}
          price={1872.86}
          disscount={30}
          offerPrice={1311}
          className={'w-1/3'}
        />

        <ProductCard
          name= "MONOGRAM LEATHER TRACK PANTS"
          gallery={['./src/assets/img/product_01_01.webp', './src/assets/img/product_01_02.webp']}
          price={1872.86}
          disscount={30}
          offerPrice={1311}
          className={'w-1/3'}
          compact
        />
      </div>

    </>
  );
}

export default Home