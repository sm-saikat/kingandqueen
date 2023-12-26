import Slider from "react-slick"
import {ChevronLeft, ChevronRight} from "react-bootstrap-icons"

const RightArror = ()=> '>';

const ProductSlider = ({ children }) => {
    const sliderSettings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        dots: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <Slider className="productSlider" prevArrow={<ChevronLeft color="red" size={30} fontSize={30} />} {...sliderSettings} nextArrow={<ChevronRight color="red"/>} accessibility={true} arrows={true}>
            {children}
        </Slider>
    )
}

export default ProductSlider