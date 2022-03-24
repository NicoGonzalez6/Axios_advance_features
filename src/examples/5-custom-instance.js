import { useEffect } from 'react';
import axios from 'axios';
import authFecth from '../axios/custom';

const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
    const fetchData = async () => {
        try {
            const resp1 = await authFecth('/react-store-products');
            console.log(resp1);
        } catch (error) {}
    };

    useEffect(() => {
        fetchData();
    }, []);

    return <h2 className="text-center">custom instance</h2>;
};
export default CustomInstance;
