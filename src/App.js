import React, {useState} from 'react';
import { Button,Card, Badge, Table, Toast} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Mynavbar from './components/Navbar';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';



function App(){
    const [cart,setCart] = useState([]);
    const [page,setPage] = useState(PAGE_PRODUCTS);
    const [products] = useState([
        {
            nombre: "Polera",
            foto: "https://andeslandchile.cl/wp-content/uploads/2019/12/MC-011-rojo-hombre-frente.jpg",
            precio: "$15.990",
            desc: "Polera marca Generic's color rojo hombre."
        },
        {
            nombre: "Pantalón",
            foto: "https://www.texora.cl/775-large_default/pantalon-cargo-classic-executive-hombre-65-poly-35-alg-gris-t-58.jpg",
            precio: "$13.000",
            desc: "Pantalón cargo classic Executive hombre."
        },
        {
            nombre: "Zapatillas",
            foto: "https://belsport.cl/medias/BELSPORT-NIAT4663001-VIEW1.jpg?context=bWFzdGVyfGltYWdlc3wyMjk5NDN8aW1hZ2UvanBlZ3xoMmEvaDgwLzg4Mjc1Mzg1NzEyOTQvQkVMU1BPUlRfTklBVDQ2NjMwMDFfVklFVzEuanBnfDRiYjBmYWEwMmQ5ODc5YWExYzIxYTc2OGM2OThmM2MxNjY5OTYyYjlhNWZjYjA3NmMwMzk2M2FhNjY2NzE2N2M",
            precio: "$79.990",
            desc: "Zapatillas Nike Flex Runner Black/White."
        },
        {
            nombre: "Chaqueta",
            foto: "https://www.doite.cl/267019-large_default/chaqueta-hombre-izar-verde-doite.jpg",
            precio: "$49.990",
            desc: "Chaqueta hombre Izar Lima Doite."
        },
        {
            nombre: "Gorro",
            foto: "https://vanscl.vteximg.com.br/arquivos/ids/537280-1000-1000/VN000QPU_9RJ_1.jpg?v=637259877549530000",
            precio: "$12.990",
            desc: "Gorro full patch Snapback Vans."
        },
        {
            nombre: "Gorro",
            foto: "https://i.ebayimg.com/images/g/e7QAAOSwZqlcPjXg/s-l300.png",
            precio: "$19.990",
            desc: "Gorro George Stevenson Vans."
        },
        {
            nombre: "Pantalón",
            foto: "https://vanscl.vteximg.com.br/arquivos/ids/541010-1000-1000/VN0A4MVKWHT_BOH_1.jpg?v=637259893523030000",
            precio: "$59.990",
            desc: "Pantalón Thread It cargo White Vans."
        },
        {
            nombre: "Pantalón",
            foto: "https://i5.walmartimages.com/asr/6b6eecbc-8dac-4a54-b2e1-38bd484726c7_1.009958a8c1f3ae15251f71c2c2ad68f5.jpeg",
            precio: "$19.990",
            desc: "Pantalón Wrangler fit cargo pant."
        }
    
    ])
    const [show,setShow] = useState(false);

    const addToCart = (product) =>{
        setCart([...cart, {...product}]);
        setShow(true);
    }

    const removeFromCart = (productToRemove) => {
        setCart(cart.filter(product =>product !== productToRemove));
    }

    const navigateTo = (newPage) => {
        setPage(newPage);
    }

    const renderProducts = () =>(
        <>
            <h2>Productos</h2>
            <Toast style={{margin:'10px auto 10px auto'}} onClose={() => setShow(false)} show={show} delay={3000} autohide>
                <Toast.Header>
                    <img
                    src="https://www.freeiconspng.com/thumbs/success-icon/success-icon-10.png"
                    alt=""
                    style={{width:'15px'}}
                    />
                    <strong className="mr-auto">  Producto agregado</strong>
                </Toast.Header>
            </Toast>

            <div className="products">
                {products.map((product,index) => (
                    <div className="un-prod" key={index}>
                        <Card style={{ width: '13rem' }}>
                        <Card.Img variant="top" src={product.foto} />
                        <Card.Body>
                            <Card.Title>{product.nombre} <Badge variant="secondary">New</Badge> </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{product.precio}</Card.Subtitle>
                            <Card.Text>{product.desc}</Card.Text>
                            <Button variant="outline-primary" onClick={() => addToCart(product)}>Añadir</Button>
                        </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
            <button className="btn-cart" onClick={() => navigateTo(PAGE_CART)}>
                <i className="material-icons">shopping_cart</i>  <Badge variant="primary" className="items-cart">{cart.length}</Badge> 
            </button>
        </>
    );

    const renderCart = () => (
        <>
            <h2>Carrito <Button variant="primary" size="sm" onClick={() => navigateTo(PAGE_PRODUCTS)}>Ir a Tienda</Button></h2>
            
            <Table>
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Item</th>
                        <th>Precio</th>
                        <th>Descripción</th>
                        <th>btn</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product,index) => (
                        <tr className="un-prod-table" key={index}>
                            <td><img className="img-item" src={product.foto}></img></td>
                            <td>{product.nombre}</td>
                            <td>{product.precio}</td>
                            <td>{product.desc}</td>
                            <td>  <Button variant="outline-danger" onClick={() => removeFromCart(product)}>Quitar</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );

    return(
        
        <div className="App">
            <Mynavbar/>
            {page === PAGE_PRODUCTS && renderProducts()}
            {page === PAGE_CART && renderCart()}
            
        </div>
    );
}

export default App;