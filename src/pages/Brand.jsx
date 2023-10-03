import React, { memo, useEffect } from 'react';
import { BrandItem, BrandItemContainer } from '../styled/BrandStyles';
import useBrandStore from '../store/brand-store';

const Brand = memo(() => {
    const { brandData } = useBrandStore(state => state);
    const { fetchData } = useBrandStore(state => state);
    useEffect(() => {
        fetchData()
    }, []);
    return (
        <BrandItemContainer>
            <div className="inner">
                <h3>BRAND</h3>
                <BrandItem>
                    {
                        brandData.map((item) => {
                            const { id, title, magazine, year, month, imageUrl, link } = item
                            return (
                                <li key={id}>
                                    <a href={link}>
                                        <div className='imgBox'>
                                            <img src={imageUrl} alt="" />
                                        </div>
                                        <h4>{title}</h4>
                                        <span>{magazine}.{month}.{year}</span>
                                    </a>
                                </li>
                            )
                        })
                    }
                </BrandItem>
            </div>
        </BrandItemContainer>
    );
});

export default Brand;