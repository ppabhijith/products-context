import React from 'react'
import { useProduct } from '../context/product-context';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Quantity({ product }) {

    const changeHandler = (id, qty) => {
        dispatch({
            type: 'CHANGE_QUANTITY',
            payload: {
                id, qty
            }
        })
    }
    const { dispatch } = useProduct();

    return (
        <Box sx={{ mt: "2em", display: 'flex', justifyContent: 'center' }} >
            <Button mr={6} variant="outlined" onClick={() => changeHandler(product.id, product.qty + 1)}>+</Button>
            <Typography variant="caption" display="block" gutterBottom>
                {product.qty}
            </Typography>
            <Button variant="outlined" onClick={() => changeHandler(product.id, product.qty - 1)}>-</Button>
        </Box >
    )
}

export default Quantity;