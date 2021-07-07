async function http(url = '', req = 'GET', data  = {}) {

    const response = await fetch((url), {
        method: req,
        body: JSON.stringify(data) 
    }); 

    return response;
}

export default http; 