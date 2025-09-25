import React from 'react'
import ProductCard from '../components/ProductCard';
import CategorySelector from '../components/CategorySelector'
import { useQuery } from '@tanstack/react-query';
import { fetchProducts, fetchProductsByCategory } from '../query/api';
import '../styles/Products.css'


const Products: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

    const { data: products, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts
    })

    const { data: productsByCategory } = useQuery({
        queryKey: ['products', selectedCategory],
        queryFn: () => fetchProductsByCategory(selectedCategory as string),
        enabled: !!selectedCategory
    })

    if (isLoading && !products) return <p>Loading...</p>;

    return (
        <>
            <h1 className='text-center px-4 py-4'>Find your new favorites!</h1>
            <CategorySelector onSetSelectedCategory={setSelectedCategory} />
            <ProductCard products={selectedCategory ? productsByCategory : products} />
        </>
    );
};

export default Products;