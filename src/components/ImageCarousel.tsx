import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Carousel } from "react-bootstrap";
import { fetchProducts } from "../query/api";
import type { Product } from '../types/types'

const ImageCarousel: React.FC = () => {

    const { data, isLoading, error } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts
    })

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading images: {(error as Error).message}</div>;
    if (!data || data.length === 0) return <div>No images available</div>;

    return (
        <>
            <Carousel className="mt-5" fade data-bs-theme="dark" controls={false} indicators={false}>
                {data.map((product: Product) => (
                    <Carousel.Item key={product.id} interval={2500}>
                        <img className='d-block mx-auto'
                            src={product.image}
                            alt={`slide image of ${product.title}`}
                        />
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
};

export default ImageCarousel;