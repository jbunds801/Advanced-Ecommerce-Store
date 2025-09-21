import React, { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../query/api";
import type { Product } from '../types/types'
import { Button, Card, Col, Row, Container } from 'react-bootstrap'
import DetailModal from './DetailModal'
import AddToCartButton from './AddToCartButton';
//import '../styles/ProductCard.css'

const ProductCard: React.FC = () => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
    const [showModal, setShowModal] = useState(false)

    const { data, isLoading, error } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts
    })

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading images: {(error as Error).message}</div>;
    if (!data || data.length === 0) return <div>No images available</div>;

    return (
        <>
            <Container>
                <Row xs={1} md={2} lg={3} xl={3} xxl={4}>
                    {data.map((product: Product) => (
                        <Col key={product.id}
                            className='d-flex justify-content-center'>
                            <div>
                                <Card className='m-5 p-4'
                                    style={{
                                        width: '18rem',
                                        height: 520,
                                        overflow: 'hidden'
                                    }}
                                    data-bs-theme="dark">
                                    <div className='d-flex justify-content-center'>
                                        <img style={{ width: '14rem', minHeight: 250, maxHeight: 250, objectFit: 'contain' }}
                                            src={product.image}
                                            alt={`image of ${product.title}`}
                                        />
                                    </div>
                                    <Card.Body>
                                        <div className='mt-4'>
                                            <Card.Title>
                                                {product.title.length > 30
                                                    ? product.title.slice(0, 30) + '...'
                                                    : product.title}
                                            </Card.Title>
                                            <Card.Text>
                                                {product.description.length > 50
                                                    ? product.description.slice(0, 50) + '...'
                                                    : product.description}
                                            </Card.Text>
                                        </div>
                                        <div className='d-flex justify-content-center my-4 gap-3 position-absolute bottom-0'>
                                            <Button variant='outline-info' onClick={() => { setSelectedProduct(product); setShowModal(true); }}>Details</Button>
                                            <AddToCartButton product={product} />
                                            {/* <Button variant='outline-info'>Add To Cart</Button> */}
                                        </div>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
            <DetailModal product={selectedProduct} show={showModal} onHide={() => setShowModal(false)} />
        </>
    );
};

export default ProductCard;