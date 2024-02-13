const products = async () => {
    try{
        let response = await fetch('https://dummyapi.online/api/products');
        let data = await response.json();
        return data;
        // console.log(data);
    }
    catch(error){
        console.error("Error is " , error);
    }
}

export default products