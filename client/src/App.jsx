import "./App.css";
import {
  Button,
  SizeButton,
  Notice,
  Accordion,
  AccordionItem,
  DescriptionForAccordion,
} from "@/components/ui";

function App() {
  return (
    <div>
      <Notice
        noticeIcon="info"
        className="bg-red-500"
        noticeTitle="UP TO 50% OFF ON SELECTED STYLES. CHECK THE "
        noticeDescription="HOLIDAY SHIPPING DEADLINES."
        noticeLink="https://chakra-ui.com"
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
          <AccordionItem accordionButtonText="button one">
            <DescriptionForAccordion
              detailsOne="WOMEN'S BLACK LEATHER ZIP-UP SHOULDER BAG, EXTENDABLE STRAP WITH GOLD MONOGRAM CHARM AT BOTTOM AND GOLD METAL PALM ANGELS LOGO PLACED ON FRONT. MADE IN ITALY."
              detailsTwo="100% COTTON

              100% LEATHER"
              detailsThree="WIDTH:24CM HEIGHT:13,4CM DEPTH:6CM
              DROP LENGTH:26CM
              WEIGHT:175 GR"
              productId="PWNN028S24LEA0011076"
            />
          </AccordionItem>
          <AccordionItem accordionButtonText="button one">
            <DescriptionForAccordion
              detailsOne="WOMEN'S BLACK LEATHER ZIP-UP SHOULDER BAG, EXTENDABLE STRAP WITH GOLD MONOGRAM CHARM AT BOTTOM AND GOLD METAL PALM ANGELS LOGO PLACED ON FRONT. MADE IN ITALY."
              detailsTwo="100% COTTON

              100% LEATHER"
              detailsThree="WIDTH:24CM HEIGHT:13,4CM DEPTH:6CM
              DROP LENGTH:26CM
              WEIGHT:175 GR"
              productId="PWNN028S24LEA0011076"
            />
          </AccordionItem>
          <AccordionItem accordionButtonText="button one">
            <DescriptionForAccordion
              detailsOne="WOMEN'S BLACK LEATHER ZIP-UP SHOULDER BAG, EXTENDABLE STRAP WITH GOLD MONOGRAM CHARM AT BOTTOM AND GOLD METAL PALM ANGELS LOGO PLACED ON FRONT. MADE IN ITALY."
              detailsTwo="100% COTTON

              100% LEATHER"
              detailsThree="WIDTH:24CM HEIGHT:13,4CM DEPTH:6CM
              DROP LENGTH:26CM
              WEIGHT:175 GR"
              productId="PWNN028S24LEA0011076"
            />
          </AccordionItem>
          <AccordionItem accordionButtonText="button one">
            <DescriptionForAccordion
              detailsOne="WOMEN'S BLACK LEATHER ZIP-UP SHOULDER BAG, EXTENDABLE STRAP WITH GOLD MONOGRAM CHARM AT BOTTOM AND GOLD METAL PALM ANGELS LOGO PLACED ON FRONT. MADE IN ITALY."
              detailsTwo="100% COTTON

              100% LEATHER"
              detailsThree="WIDTH:24CM HEIGHT:13,4CM DEPTH:6CM
              DROP LENGTH:26CM
              WEIGHT:175 GR"
              productId="PWNN028S24LEA0011076"
            />
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default App;
