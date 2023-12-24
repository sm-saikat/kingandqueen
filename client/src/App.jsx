import { Link } from "@chakra-ui/react";
import "./App.css";
import {
  Button,
  SizeButton,
  Notice,
  Accordion,
  AccordionItem,
  ProductCard,
  Banner,
  BannerCards,
} from "@/components/ui";

function App() {

  const accordionData = [
    {
      title: 'Accordion title one',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae id accusantium, nam minus quaerat iure neque dignissimos cupiditate nemo animi qui a fugit consequatur! Fuga distinctio reprehenderit labore quam molestiae?'
    },

    {
      title: 'Accordion title two',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae id accusantium, nam minus quaerat iure neque dignissimos cupiditate nemo animi qui a fugit consequatur! Fuga distinctio reprehenderit labore quam molestiae?'
    }
  ]

  return (
    <div className="mb-8">
      <Notice
        status="info"
        noticeBodyClass={'bg-red-500'}
        noticeTextClass={'text-white'}
        noticeTitle={"UP TO 50% OFF ON SELECTED STYLES. CHECK THE"}
        noticeLinkText="HOLIDAY SHIPPING DEADLINES."
        link="https://chakra-ui.com"
      />

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
            accordionData.map(item => {
              return <AccordionItem title={item.title}>{item.description}</AccordionItem>
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
 
      <div>
        <ProductCard
          className=""
          link="exampla.com"
          src="./src/assets/img/4.webp"
          hoverSrc="./src/assets/img/4.1.webp"
          title="Title"
        />
        <ProductCard
          className=""
          link="exampla.com"
          src="./src/assets/img/4.webp"
          hoverSrc="./src/assets/img/4.1.webp"
          title="Title"
        />
        <ProductCard
          className=""
          link="exampla.com"
          src="./src/assets/img/4.webp"
          hoverSrc="./src/assets/img/4.1.webp"
          title="Title"
        />
      </div>
    </div>
  );
}

export default App;
