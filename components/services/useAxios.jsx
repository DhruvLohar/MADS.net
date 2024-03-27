import axios from "axios";
import { useEffect, useState } from "react";

const useAxios = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loaded, setLoaded] = useState(false);

    const fetchData = async () => {
        try {
            const { data } = await axios.get(url);
            setData(data)
        } catch (e) {
            setError(e.response.data.message) 
        }

        setLoaded(true)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const refetch = () => {
        fetchData()
    }

    return { data, error, loaded, refetch };
}

export default useAxios;