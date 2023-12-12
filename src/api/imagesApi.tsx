export async function getImageApi() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random', { method: 'get' });
    return response;
}