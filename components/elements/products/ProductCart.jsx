import React from 'react';
import Link from 'next/link';
import { StrapiProductCartThumbnail } from '~/utilities/product-helper';
const ProductCart = ({ product }) => {
    return (
        <div className="ps-product--cart">
            <div className="ps-product__thumbnail">
                {StrapiProductCartThumbnail(product)}
            </div>
            <div className="ps-product__content">
                <Link href="/product/[pid]" as={`/product/${product.id}`}>
                    <a className="ps-product__title">{product.name}</a>
                </Link>
                <span className="text-secondary d-block">SKU : {product.sku}</span>
            </div>
        </div>
    );
};

export default ProductCart;
