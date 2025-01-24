import React, { Fragment, useState } from 'react'
import { useProducts } from '../services/todo.queries'

const Product = () => {

    const [selectProductId, setSelectedProductId] = useState<number | null>(null);

    const productQuery = useProducts();

    return (
        <div>
            {productQuery.data?.pages.map((group, index) => (
                <Fragment key={index}>
                    {group.map((product) => (

                        <Fragment key={product.id}>

                            <button onClick={() => setSelectedProductId(product.id)}>
                                {product.name}
                            </button>
                            <br />

                        </Fragment>

                    ))}
                </Fragment>
            ))}

            <br />

            <div>
<button>
    {
        productQuery.isFetchingNextPage 
        ? "Loading more..." 
        : productQuery.hasNextPage 
        ? "Load More"
        : "Nothing more to load"
    }
</button>
            </div>

        </div>
    )
}

export default Product