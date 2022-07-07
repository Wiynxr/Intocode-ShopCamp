


const Commod = (props) => {
    return (
        <div className="Commod">
            <div className="img-container">
                <img src={props.img} alt=""></img>
            </div>
            <div className="prace">
                <p>{props.price}</p>
                <p id="p2">{props.oldPrice}</p>
            </div>
            <div className="Product-Name">
                <p>{props.productName}</p>
            </div>
            <div className="btn">
                <button className="btn-buy">Купить</button>
            </div>
        </div>
    )
}


export default Commod