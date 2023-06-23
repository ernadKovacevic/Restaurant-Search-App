import {useEffect, useState} from "react";
import yelp from "../api/yelp";

export default () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [results, setResults] = useState([]);

    const searchApi = async (searchTerm) => {
        setErrorMessage('');
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data['businesses']);
        } catch (err) {
            setErrorMessage('Something went wrong');
        }
    }

    useEffect(() => {
        searchApi('pasta');
    }, [])

    return [results, errorMessage, searchApi];
}