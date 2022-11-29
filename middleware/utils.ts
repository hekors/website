
const baseURL = "https://hekors-strapi.herokuapp.com";

function mediaURL(fileName: string) {
    return `${baseURL}/uploads/${fileName}`;
}

export {
    baseURL,
    mediaURL
}