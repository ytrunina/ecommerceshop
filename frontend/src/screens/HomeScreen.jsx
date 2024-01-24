import { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'


const HomeScreen = () => {
    const [products, setProducts] = useState([]); // products is the state variable and setProducts is the function that we use to manipulate the state variable
  
    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get('/api/products');
            setProducts(data);
        }
        fetchProducts();
    }, []); //array of dependencies, if empty then it will run only once when the component loads

    return (
    <>
        <h1>Latest Products</h1>
        <Row>
            {products.map((product) => (
                <Col key = {product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product = {product}/>
                </Col>
            ))}
            </Row> 
    </>
  )
}

export default HomeScreen
