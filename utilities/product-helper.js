/*
 * React template helpers
 * Author: Nouthemes
 * Developed: diaryforlife
 * */

import React from 'react';
import LazyLoad from 'react-lazyload';
import { baseUrl, localBaseUrl } from '~/repositories/Repository';
import Link from 'next/link';

export function formatCurrency(num) {
    if (num !== undefined) {
        return parseFloat(num)
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    } else {
    }
}

export function getColletionBySlug(collections, slug) {
    if (collections.length > 0) {
        const result = collections.find(
            (item) => item.slug === slug.toString()
        );
        if (result !== undefined) {
            return result.products;
        } else {
            return [];
        }
    } else {
        return [];
    }
}

export function getItemBySlug(banners, slug) {
    if (banners.length > 0) {
        const banner = banners.find((item) => item.slug === slug.toString());
        if (banner !== undefined) {
            return banner;
        } else {
            return null;
        }
    } else {
        return null;
    }
}

export function convertSlugsQueryString(payload) {
    let query = '';
    if (payload.length > 0) {
        payload.forEach((item) => {
            if (query === '') {
                query = `slug_in=${item}`;
            } else {
                query = query + `&slug_in=${item}`;
            }
        });
    }
    return query;
}

export function StrapiProductBadge(product) {
    let view;
    if (product.badge && product.badge !== null) {
        view = product.badge.map((badge) => {
            if (badge.type === 'sale') {
                return <div className="ps-product__badge">{badge.value}</div>;
            } else if (badge.type === 'outStock') {
                return (
                    <div className="ps-product__badge out-stock">
                        {badge.value}
                    </div>
                );
            } else {
                return (
                    <div className="ps-product__badge hot">{badge.value}</div>
                );
            }
        });
    }
    return view;
}

export function StrapiProductPrice(product) {
    let view;
    if (product) {
        view = (
            <p className="ps-product__price sale">
                ${formatCurrency(product.sku[0].sell_price)}
                <del className="ml-2">
                    ${formatCurrency(product.sku[0].regular_price)}
                </del>
            </p>
        );
    } else {
        view = (
            <p className="ps-product__price">
                ${formatCurrency(product.price)}
            </p>
        );
    }
    return view;
}

export function StrapiProductPriceExpanded(product) {
    let view;
    if (product) {
        view = (
            <p className="ps-product__price sale">
                ${formatCurrency(product.sku[0].sell_price)}
                <del className="ml-2">
                    ${formatCurrency(product.sku[0].regular_price)}
                </del>
                <small>18% off</small>
            </p>
        );
    } else {
        view = (
            <p className="ps-product__price">
                ${formatCurrency(product.price)}
            </p>
        );
    }
    return view;
}

export function StrapiProductThumbnail(product) {
    let view;

    if (product.product_media) {
        view = (
            <Link href="/product/[pid]" as={`/product/${product.id}`}>
                <a>
                    <LazyLoad>
                        <img
                            src={`${localBaseUrl}/${product.product_media.feature_img}`}
                            alt={product.title}
                        />
                    </LazyLoad>
                </a>
            </Link>
        );
    } else {
        view = (
            <Link href="/product/[pid]" as={`/product/${product.id}`}>
                <a>
                    <LazyLoad>
                        <img src="/static/img/not-found.jpg" alt="martfury" />
                    </LazyLoad>
                </a>
            </Link>
        );
    }

    return view;
}
export function StrapiProductCartThumbnail(product) {
    let view;

    if (product) {
        view = (
            <Link href="/product/[pid]" as={`/product/${product.slug}`}>
                <a>
                    <LazyLoad>
                        <img
                            src={`${localBaseUrl}/${product.thumbnail}`}
                            alt={product.name}
                        />
                    </LazyLoad>
                </a>
            </Link>
        );
    } else {
        view = (
            <Link href="/product/[pid]" as={`/product/${product.id}`}>
                <a>
                    <LazyLoad>
                        <img src="/static/img/not-found.jpg" alt="martfury" />
                    </LazyLoad>
                </a>
            </Link>
        );
    }

    return view;
}
