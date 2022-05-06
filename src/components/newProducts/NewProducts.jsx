import React, { useEffect, useState } from 'react'
import NewProductsItem from './NewProductsItem'
import axios from 'axios'
import { newProduct } from '../../static/newProduct';

function NewProducts() {
    const [allFiles, setAllFiles] = useState(null);
    useEffect(() => {
        setAllFiles(null);
        axios
            .get(`http://localhost:8000/newProduct/newProduct/all`)
            .then((schoolFiles) => setAllFiles(schoolFiles.data))
            .catch((err) => console.error(err));
    }, []);
    return (
        <div className='newProducts'>
            <div className="newProductsCaption">
                <h3>Yangi mahsulotlar</h3>
            </div>
            <div className="newProductsWrapper">
                {/* {allFiles ?
                    allFiles.map((newProductsItem, index) =>
                        <NewProductsItem key={index} newProductsItem={newProductsItem} />
                    ) : null} */}
                    {/* ----------------------- */}
                    {newProduct ?
                    newProduct.map((newProductsItem, index) =>
                        <NewProductsItem key={index} newProductsItem={newProductsItem} />
                    ) : null}
            </div>
        </div>
    )
}

export default NewProducts