const routeHello = () => "Hello World!";

const routeAPINames = async () => {
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    let data;
    
    try{
        const res = await fetch(url);
        data = await res.json();
    }catch(error){
        throw error;
    }
    const names = data
        .map((item) => `id: ${item.id}, name: ${item.name}`)
        .join("<br/>");
    
        return names;
}

export {routeHello, routeAPINames};