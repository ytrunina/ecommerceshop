import { apiSlice } from './apiSlice';
import { ORDER_URL } from '../constants';

export const ordersApiSlice = apiSlice.injectEndpoints({
    endpoint: (builder) => ({
        createOrder: builder.mutation({
            query: (order) => ({
                url: ORDER_URL,
                method: 'POST',
                body: order
            })
        }),
        getMyOrders: builder.query({
            query: () => ({
                url: `${ORDER_URL}/myorders`
            })
        }), 
        getOrderById: builder.query({
            query: (id) => ({
                url: `${ORDER_URL}/${id}`
            })
        })
    }),
    overrideExisting: false
});