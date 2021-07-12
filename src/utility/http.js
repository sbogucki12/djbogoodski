async function http(url = '', req = 'GET', data  = {}) {
    try{
        const response = await fetch((url), {
            method: req,
            body: JSON.stringify(data) 
        }); 
    
        return response;
    } catch(error) {
        return(error)
    }  
}

export default http; 