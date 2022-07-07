import Commod from "./Commod"

const Products = () => {
    return (
        <div className="Products">
            <Commod productName="Macbook" price="97000 P" oldPrice="100000 P" img="http://intocode.ru/d/react-project-1/images/1.jpg"/>
            <Commod productName="Galaxy" price="35000 P" img="http://intocode.ru/d/react-project-1/images/2.jpg"/>
            <Commod productName="Скутер" price="58950 P" oldPrice="68000 P" img="http://intocode.ru/d/react-project-1/images/3.jpg"/>
            <Commod productName="Монитор Samsung" price="12000 P" img="http://intocode.ru/d/react-project-1/images/4.jpg"/>
            <Commod productName="Маска" price="500 P" img="http://intocode.ru/d/react-project-1/images/5.jpg"/>
            <Commod productName="Стиральная машина" price="75000 P" oldPrice="100000 P" img="http://intocode.ru/d/react-project-1/images/6.jpg"/>
        </div>
    )
}

export default Products