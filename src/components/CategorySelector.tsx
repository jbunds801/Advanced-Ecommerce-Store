import React from 'react';
import { fetchCategories } from '../query/api';
import { useQuery } from '@tanstack/react-query';


type CategorySelectorProps = {
    onSetSelectedCategory: (category: string | null) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({ onSetSelectedCategory }) => {

    const { data: categories } = useQuery({
        queryKey: ['categories'],
        queryFn: fetchCategories
    })

    return (
        <>
            <div>
                {categories && (
                    <div className='mt-3 text-center'>
                        <span className='all-categories px-3'
                            onClick={() => onSetSelectedCategory('')}>All Products</span>
                        {categories.map((category: string) => (
                            <span className='categories px-3'
                                key={category}
                                onClick={() => onSetSelectedCategory(category)}
                            >
                                {category}</span>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
};

export default CategorySelector;