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
    <h1>Homepage</h1>
  )
}

      <div className="mb-8">


        <div className="w-1/4">
          <Button className="">Default</Button>
          <Button className=" hover:bg-black hover:text-white">Add Hover</Button>
          <Button className=" bg-black text-white hover:bg-white hover:text-black ">
            Customize button one
          </Button>
          <Button className=" border-green-500 bg-green-500 text-white hover:bg-white hover:text-green-600 ">
            Customize button two
          </Button>
        </div>
        <div className="w-1/4">
          <SizeButton>S</SizeButton>
          <SizeButton>M</SizeButton>
          <SizeButton>XL</SizeButton>
          <SizeButton>XXL</SizeButton>
          <SizeButton>XXXL</SizeButton>
        </div>
        <div className="w-1/4">
          <Accordion>
            {
              accordionData.map((item, index) => {
                return <AccordionItem key={index} title={item.title}>{item.description}</AccordionItem>
              })
            }
          </Accordion>
        </div>
        <BannerCards
          leftLink="/oneRout"
          rightLink="/twoRout"
          leftText="Left"
          leftImage="./src/assets/img/1.webp"
          rightImage="./src/assets/img/2.webp"
          rightText="Right"
        />

        <Banner
          link={"href/index/"}
          image={"./src/assets/img/3.webp"}
          leftBtnText={"Left"}
          rightBtnText={"Right"}
        />

        <div className="flex">
          <ProductCard
            name="MONOGRAM LEATHER TRACK PANTS"
            gallery={['./src/assets/img/product_01_01.webp', './src/assets/img/product_01_02.webp']}
            price={1872.86}
            className={'w-1/3'}
          />

          <ProductCard
            name="MONOGRAM LEATHER TRACK PANTS"
            gallery={['./src/assets/img/product_01_01.webp', './src/assets/img/product_01_02.webp']}
            price={1872.86}
            disscount={30}
            offerPrice={1311}
            className={'w-1/3'}
          />

          <ProductCard
            name="MONOGRAM LEATHER TRACK PANTS"
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