import React from 'react';
import Layout from '../../components/Layout';

import ProductsGrid from './ProductsGrid';

export default class Store extends React.Component {
    
    // componentDidMount() {
    //     fetch("http://127.0.0.1:8080/clientApi/info?appid=1")
    //         .then((response) => response.json())
    //         .then((json) => {
    //             this.setState({ products: json });
    //             console.log(json);
    //         });
    // }

    render() {
        return ( 
            <Layout title="Store" description="This is the Store page" >
                <div >
                    <div className="text-center mt-5">
                        <h1>Farmácia Armando</h1>
                        <p>Rua do Cabeço | 8-19h</p>
                    </div>
                    <ProductsGrid/>
                </div>
            </Layout>
        );
    }
}
 
