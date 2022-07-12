import { getConnection } from "./../database/database";

const getLanguages= async (request,response)=>{
try {
    const connection = await getConnection();
    const result = await connection.query("SELECT id, name, programmers FROM language");
    console.log(result);
    response.json(result);
} catch (error) {
    response.status(500);
    response.send(error.message);
}


};

const addLanguages= async (request,response)=>{
    try {
        console.log(request.body);

        const connection = await getConnection();

        response.json("addLanguage");

    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
    
    
    };

export const methods = {
    getLanguages,
    addLanguages
};