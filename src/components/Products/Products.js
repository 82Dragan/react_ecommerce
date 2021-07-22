import React from 'react'
import { Grid, Container } from '@material-ui/core'

import Product from './Product/Product'


const Products = ({ products, onAddToCart }) => {
    return (
    <main>
        <Container>
            <Grid container justify='center' spacing={4}>
                { products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                )) }
            </Grid>
        </Container>
    </main>
    )
}

export default Products;