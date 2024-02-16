import { apiSlice } from './apiSlice';
import { ORDERS_URL, PAYPAL_URL } from '../constants';

export const ordersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (order) => ({
                url: ORDERS_URL,
                method: 'POST',
                body: order
            })
        }),
        getorderDetails: builder.query({
            query: (id) => ({
                url: `${ORDERS_URL}/${id}`
            }),
            keepUnusedDataFor: 5,
        }),
        payOrder: builder.mutation({
            query: ({orderId, details}) => ({
                url: `${ORDERS_URL}/${orderId}/pay`,
                method: 'PUT',
                body: {...details},
            }),
        }),

        getMyOrders: builder.query({
            query: () => ({
                url: `${ORDERS_URL}/myorders`
            })
        }), 
        getOrderById: builder.query({
            query: (id) => ({
                url: `${ORDERS_URL}/${id}`
            })
        }),

        getPaypalClientId: builder.query({
            query: () => PAYPAL_URL
        }),
        keepUnusedDataFor: 5,

    }),
    overrideExisting: false
});

export const { useCreateOrderMutation, useGetorderDetailsQuery, 
    useGetMyOrdersQuery, useGetOrderByIdQuery, usePayOrderMutation,
    useGetPaypalClientIdQuery } = ordersApiSlice;