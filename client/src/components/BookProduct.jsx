function BookProduct(props){

    

    return(
        <div className="book-product">
            <div className="book-product-image">
                <img></img>
            </div>
            <div className="book-product-name">
                <p className="book-title">{props.title}</p>
                <p className="book-author">{props.auctor}</p>
            </div>
            <button>Comprar!</button>
        </div>
    )
}

export default BookProduct