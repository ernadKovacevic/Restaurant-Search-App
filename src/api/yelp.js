import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Pp8Tt_9d_LeDq19pQgx9Rye6SKWnEoKZN8B1mVw3ZNWDycYwkYhA_YzSHpeI-_fZF1sBqlauv46AWLMiA3o_CQEdT65bgRLP-oZDWuqk5wG0iiZwEk4IGTDHfQKTZHYx',
        "Content-Type": 'application/json',
    }
})