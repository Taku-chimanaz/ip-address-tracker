import { apiKey } from "./apiKey";
import axios from "axios";

export const getIPLocationDetails = (ip, domain, setIPDetails, setErrorMessage) => {

    let inputUrl = `https://geo.ipify.org/api/v2/country,city`;
    let inputParams = new URLSearchParams();

    inputParams.append('apiKey', apiKey);
    inputParams.append(ip !== null ? 'ip' : 'domain', ip !== null ? ip : domain);
    const urlWithParams = `${inputUrl}?${inputParams.toString()}`;

    axios.get(urlWithParams)
        .then(res => {

            if (res.status === 200) {
                setIPDetails(res.data)
            } else {
                setErrorMessage && setErrorMessage({ state: true, message: 'Something went wrong,try again.' })
            }
        })
        .catch(err => setErrorMessage && setErrorMessage({ state: true, message: 'Network error,try again' }))
}