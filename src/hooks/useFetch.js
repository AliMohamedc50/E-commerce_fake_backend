import { useEffect, useState } from "react";
import { makeRequest } from "../makeRequest";

const useFetch = (url) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [errorr, setErrorr] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await makeRequest.get(url);
                setData(res.data.data);
            } catch (error) {
                setErrorr(true);
            }
            setLoading(false)
};
fetchData();
}, [url]);
return {data, loading, errorr}
}

export default useFetch;