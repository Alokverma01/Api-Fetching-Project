export const data = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts" , {
        method: "GET",
    });
    return await response.json();
};