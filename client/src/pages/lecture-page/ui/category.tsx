import React, {FC, useState} from 'react';
import cn from 'classnames'
import {categoriesData} from "../data/categories";
import {TCategory} from "../type/lecture";


type Props = {
    onChoose: (c: TCategory) => void
    chosenCategories: Array<TCategory>,
}

const Category: FC<Props> = (
    {
        chosenCategories,
        onChoose
    }) => {

    const [categories] = useState<Array<TCategory>>(categoriesData)

    return (
        <div className={'lecture-category'}>
            {
                categories.map(c => (
                    <div className={cn(
                        'lecture-category__category',
                        {
                            'lecture-category__category_active': chosenCategories.find(ch => ch.category === c.category)
                        }
                    )}
                         key={c.id}
                         onClick={() => onChoose(c)}
                    >
                        <span>{c.category}</span>
                    </div>
                ))
            }
        </div>
    );
};

export default Category;