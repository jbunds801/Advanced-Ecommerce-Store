import React from 'react'
import ProductCard from '../components/ProductCard';
import { useQuery } from '@tanstack/react-query';
import { fetchCategories, fetchProducts, fetchProductsByCategory } from '../query/api';
import '../styles/Products.css'


const Products: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

    const { data: products, isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts
    })

    const { data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: fetchCategories
    })

    const { data: productsByCategory } = useQuery({
        queryKey: ['products', selectedCategory],
        queryFn: () => fetchProductsByCategory(selectedCategory as string),
        enabled: !!selectedCategory
    })

    if (isLoading && !products) return <p>Loading...</p>;

    return (
        <>
            <h1>hello again</h1>
            {categories && (
                <div className='mt-3 text-center'>
                    <span className='all-categories px-3'
                        onClick={() => setSelectedCategory('')}>All Products</span>
                    {categories.map((category: string) => (
                        <span className='categories px-3'
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}</span>
                    ))}
                </div>
            )}
            <ProductCard products={selectedCategory ? productsByCategory : products} />
        </>
    );
};

export default Products;