import { useEffect, useRef, useState } from "react";


const ProductDetail = () => {
    const [stickyClass, setStickyClass] = useState('');
    const [elementLastWidth, setElementLastWidth] = useState(null);
    const stickyRef = useRef();

    useEffect(()=>{
        window.addEventListener('scroll', scrollStickyHandler)

        return ()=>{
            window.removeEventListener('scroll', scrollStickyHandler)
        }
    }, [elementLastWidth])

    const scrollStickyHandler = ()=>{
        const stickyRect = stickyRef.current.getBoundingClientRect();

        if(parseInt(stickyRect.bottom) <= window.innerHeight){
            if(elementLastWidth == null) setElementLastWidth(stickyRef.current.offsetWidth);
            setStickyClass('fixed');
            stickyRef.current.style.width = elementLastWidth;
            console.log(elementLastWidth)
        }

    }

    return (
        <div className="flex">
            <div className="w-1/3">
                <img src="./src/assets/img/product_01_01.webp" alt="" />
                <img src="./src/assets/img/product_01_01.webp" alt="" />
                <img src="./src/assets/img/product_01_01.webp" alt="" />
                <img src="./src/assets/img/product_01_01.webp" alt="" />
                <img src="./src/assets/img/product_01_01.webp" alt="" />
            </div>
            <div className="w-2/3 py-6 px-20 relative">
                <div className={`${stickyClass} bottom-0 right-0`} ref={stickyRef}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus laboriosam rem mollitia blanditiis reprehenderit. Nisi dolorem, adipisci hic ad facilis accusamus sint architecto veritatis cupiditate placeat nesciunt soluta necessitatibus voluptatibus?

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit adipisci consequuntur natus assumenda facilis vitae asperiores vel aspernatur, optio possimus exercitationem minima? Maxime delectus eveniet, et error voluptas sunt perspiciatis.

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas facilis eveniet doloremque natus esse labore exercitationem atque sint tempora, qui velit accusamus, dignissimos perspiciatis adipisci laborum impedit harum delectus inventore!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quas unde similique incidunt porro ut neque hic in, sit beatae excepturi at id? Esse ducimus ex fuga quidem dolor nam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, minus! Quam deserunt alias repellat doloremque sapiente voluptatem quibusdam adipisci ullam odio voluptates, aut aspernatur, corrupti natus neque quod modi ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iure nisi, sit enim aut esse, porro officia similique distinctio earum ex rem illum tempora beatae ipsa aperiam? Similique, molestiae. Alias!

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, obcaecati. Quos est nobis in commodi alias. Veniam officiis accusantium ipsum! Quibusdam suscipit consequatur architecto sequi? Aliquid similique amet ad soluta. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum alias, nisi nemo dignissimos quibusdam assumenda modi laudantium perferendis, voluptate obcaecati nulla reiciendis fugit corporis? Molestias dolor autem est quis illum.

                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt quam minima esse sed, et magni quo, sunt commodi sint laudantium! Debitis aliquam voluptate exercitationem eaque ad velit eligendi alias.

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam natus ducimus, corporis est dolorem eius suscipit sint sunt dolore libero doloremque totam ut saepe adipisci, eaque iusto aspernatur odio expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugiat qui nobis magnam nostrum nemo nam dolores dolore? Sed deleniti optio cum doloribus quod velit distinctio recusandae iste porro dignissimos!

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus laboriosam rem mollitia blanditiis reprehenderit. Nisi dolorem, adipisci hic ad facilis accusamus sint architecto veritatis cupiditate placeat nesciunt soluta necessitatibus voluptatibus?

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit adipisci consequuntur natus assumenda facilis vitae asperiores vel aspernatur, optio possimus exercitationem minima? Maxime delectus eveniet, et error voluptas sunt perspiciatis.

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas facilis eveniet doloremque natus esse labore exercitationem atque sint tempora, qui velit accusamus, dignissimos perspiciatis adipisci laborum impedit harum delectus inventore!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quas unde similique incidunt porro ut neque hic in, sit beatae excepturi at id? Esse ducimus ex fuga quidem dolor nam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, minus! Quam deserunt alias repellat doloremque sapiente voluptatem quibusdam adipisci ullam odio voluptates, aut aspernatur, corrupti natus neque quod modi ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iure nisi, sit enim aut esse, porro officia similique distinctio earum ex rem illum tempora beatae ipsa aperiam? Similique, molestiae. Alias!

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, obcaecati. Quos est nobis in commodi alias. Veniam officiis accusantium ipsum! Quibusdam suscipit consequatur architecto sequi? Aliquid similique amet ad soluta. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum alias, nisi nemo dignissimos quibusdam assumenda modi laudantium perferendis, voluptate obcaecati nulla reiciendis fugit corporis? Molestias dolor autem est quis illum.

                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi nesciunt quam minima esse sed, et magni quo, sunt commodi sint laudantium! Debitis aliquam voluptate exercitationem eaque ad velit eligendi alias.

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam natus ducimus, corporis est dolorem eius suscipit sint sunt dolore libero doloremque totam ut saepe adipisci, eaque iusto aspernatur odio expedita. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure fugiat qui nobis magnam nostrum nemo nam dolores dolore? Sed deleniti optio cum doloribus quod velit distinctio recusandae iste porro dignissimos!
                </div>
            </div>
        </div>
    )
}


export default ProductDetail;