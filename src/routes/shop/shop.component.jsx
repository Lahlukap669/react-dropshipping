import { Route, Routes } from 'react-router-dom';
=======
import ProductCard from '../../components/product-card/product-card.component';
import { CategoriesContext } from '../../contexts/categories.context';
import { useContext, Fragment} from 'react';
>>>>>>> 1413eb016a873724f8c74dd542623d33b7bf0614
import './shop.styles.scss';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

const Shop = () => {
<<<<<<< HEAD
    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
=======
    const {categoriesMap} = useContext(CategoriesContext); 
    return (
        <Fragment>
        {Object.keys(categoriesMap).map(title => (
            <Fragment key={title}>
                <h2>{title}</h2>
                <div className='products-container'>
                    {
                        categoriesMap[title].map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    }
                </div>
            </Fragment>
        ))}
        </Fragment>
>>>>>>> 1413eb016a873724f8c74dd542623d33b7bf0614
    );
};

export default Shop;