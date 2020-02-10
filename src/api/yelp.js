import axios from 'axios';



export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer 1sqMq2jpQjYyDteO0bNeWDJSTRWkZSSVjUNdMR0OhU5-6_oRtteH8qr3UzZhwa8ybTb2XOBvaTTIrRK2FMCMPK-MvNgrPGkmx4XkPQdkOpFyB5hSM5AUuIQ6_tk9XnYx"
    }
});