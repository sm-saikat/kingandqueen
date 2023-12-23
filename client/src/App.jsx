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
        noticeBackground="bg-red-500 p-4 py-3 flex align-middle justify-center"
        noticeIcon="text-white w-4 h-4 mr-2"
        noticeTitle="UP TO 50% OFF ON SELECTED STYLES. CHECK THE "
        noticeTitleStyle="text-[12.5px] font-medium text-black mr-1.5 font-helvetica-neue"
        noticeDescription="HOLIDAY SHIPPING DEADLINES."
        noticeDescriptionStyle="text-[12.5px] font-medium text-black font-helvetica-neue"
        noticeLink="https://chakra-ui.com"
        noticeLinkStyle="underline hover:text-gray-500 hover:no-underline"
      />

      <div className="w-1/4">
        <Button buttonStyle="">Default</Button>
        <Button buttonStyle=" hover:bg-black hover:text-white">
          Add Hover
        </Button>
        <Button buttonStyle=" bg-black text-white hover:bg-white hover:text-black ">
          Customize button one
        </Button>
        <Button buttonStyle=" border-green-500 bg-green-500 text-white hover:bg-white hover:text-green-600 ">
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
