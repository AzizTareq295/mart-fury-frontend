import axios from 'axios';
const localDomain = 'http://ec2-175-41-175-65.ap-southeast-1.compute.amazonaws.com'; // API for products
const baseDomain = 'https://beta.apinouthemes.com'; // API for products
export const basePostUrl = 'https://beta.apinouthemes.com'; // API for post
export const baseStoreURL = 'https://beta.apinouthemes.com'; // API for vendor(store)

export const customHeaders = {
    Accept: 'application/json',
};

export const baseUrl = `${baseDomain}`;

export const localBaseUrl = `${localDomain}`

export default axios.create({
    baseUrl,
    headers: customHeaders,
});

export const localUrl =  axios.create({
    localBaseUrl,
    headers: customHeaders
})

export const serializeQuery = (query) => {
    return Object.keys(query)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');
};
