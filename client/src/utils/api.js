import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuth0 } from '@auth0/auth0-react';
import dayjs from 'dayjs';

export const api = axios.create({
    baseURL: "https://estate-hub-g6pb.vercel.app/api",
});

export const getAllProperties = async () => {
    try {
        const response = await api.get("/residency/allresd", {
            timeout: 10 * 1000,
        });

        console.log("All Properties Response:", response); // Log response

        if (response.status === 400 || response.status === 500) {
            throw response.data;
        }
        return response.data;
    } catch (error) {
        console.error("Error fetching all properties:", error); // Log error
        toast.error("Something went wrong");
        throw error;
    }
};

export const getProperty = async (id) => {
    try {
        const response = await api.get(`/residency/${id}`, {
            timeout: 10 * 1000,
        });

        if (response.status !== 200) {
            throw new Error(`Error: ${response.status}`);
        }

        return response.data;
    } catch (error) {
        toast.error("Something went wrong");
        throw error;
    }
};

export const createUser = async (email, token) => {
    try {
        await api.post(`/user/register`, { email },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            }
        );
    } catch (error) {
        toast.error("Something went wrong");
        throw error;
    }
};

export const bookVisit = async (date, propertyId, email, token) => {
    try {
        await api.post(
            `/user/bookVisit/${propertyId}`,
            {
                email,
                id: propertyId,
                date: dayjs(date).format("DD/MM/YYYY")
            },
            {
                headers : {
                    Authorization : `Bearer ${token}`,
                }
            }
        )
    } catch (error) {
        toast.error("Something went wrong");
        throw error;
    };
}

export const removeBooking = async(id, email, token) => {
    try {
        await api.post(
            `/user/removeBooking/${id}`,
            {
                email,
            },
            {
                headers : { 
                    Authorization : `Bearer ${token}`,
                },
            }
        );
    } catch (error) {
        toast.error("Something went wrong, Please try again")
    }
}
