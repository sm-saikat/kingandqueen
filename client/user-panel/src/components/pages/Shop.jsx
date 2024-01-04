import { Accordion, AccordionItem, ProductCard, SmallButton } from "@/components/ui"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react"

const Shop = () => {

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
      {/* Shop Header */}
      <div className="shopHeader flex justify-between py-2 pageContent border-b">
        <div className="breadcrumb text-sm">
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink href='#'>Man</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>

        <div className="title font-bold">Man</div>

        <div className="quantity text-sm">16 Products</div>
      </div>

      {/* Main Section */}
      <div className="flex pageContent">
        <div className="sidebar max-md:hidden w-1/4 py-4 pr-8">
          <Accordion>
            <AccordionItem title={"Sory By"}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam tempore facilis iste eligendi error debitis. Sequi consectetur, nobis eos non sed quidem velit? Doloremque ex aut sit assumenda, numquam adipisci?
            </AccordionItem>
            <AccordionItem title={"Categories"}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam tempore facilis iste eligendi error debitis. Sequi consectetur, nobis eos non sed quidem velit? Doloremque ex aut sit assumenda, numquam adipisci?
            </AccordionItem>
            <AccordionItem title={"Collections"}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam tempore facilis iste eligendi error debitis. Sequi consectetur, nobis eos non sed quidem velit? Doloremque ex aut sit assumenda, numquam adipisci?
            </AccordionItem>
          </Accordion>
        </div>

        <div className="w-3/4 max-md:w-full flex flex-col items-center">
          <div className="products grid grid-cols-3 max-sm:grid-cols-2 max-xsm:grid-cols-1 gap-6">
            {
              products.map(product => {
                return <ProductCard className={""} name={product.name} price={product.price} gallery={product.gallery} compact />
              })
            }
          </div>
          <div className="pagination py-6">
            <SmallButton fill>1</SmallButton>
            <SmallButton>2</SmallButton>
            <SmallButton>3</SmallButton>
            ...
            <SmallButton>10</SmallButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop