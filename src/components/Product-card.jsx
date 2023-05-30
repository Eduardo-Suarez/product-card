import './css/tarjeta-producto.css'

 export function ProductCard () {

    return (
        <>
            <div className="tarjeta-producto">

                <div className="imagen-producto">
                    <img className='imagen-perfume' src="/images/image-product-desktop.jpg" alt="imagen del producto"  />
                </div>
                <div className="info-producto">
                    <h4>PERFUME</h4>
                    <h2>Gabrielle Essence Eau De Parfum</h2>
                    <p>
                        A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfume-Creator for the house of CHANEL.
                    </p>
                    
                    <div className='precios'>
                        <h2 className="precio">$149.99</h2>
                        <p>$169.99</p>
                    </div>
                    
                    <button>
                        <img className='icono-boton' src="/images/icon-cart.svg" alt="icono-carrito" />
                        Add to Card
                    </button>
                </div>
                
            </div>
        </>
    )
}







