import { apiUrl } from "./constants.js";

function getProducts() {
    const response = fetch(apiUrl).then(res => res.json()).then((data) => data);
    return response;
}

function createProduct(data) {
    const response = fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })

    return response.then(res => res.json()).then((data) => data);;
}

function updateProduct(taskId, data) {
    console.log(taskId);
    console.log(apiUrl);
    const response = fetch(`https://api.restful-api.dev/objects/${taskId}`, {
        method: "PATCH",
        // mode:'no-cors',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    //     .then(res => res.json()).then(data => data);;
    // return response;
}

function deleteProduct(taskId) { 
    const response = fetch(`https://api.restful-api.dev/objects/${taskId}`, {
        method: "DELETE",
        headers: {
            "Content-Type":"application/json"
        }
    }) 
}

export { getProducts, createProduct, updateProduct, deleteProduct };
