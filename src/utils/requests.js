import { urlConfig } from "./config";

/*
* GET REQUESTS
*/

export const getFormats = async () => {
    let rqUrl = urlConfig["formatsUrl"];

    return await fetch(
        rqUrl,
        {        
            method: "GET",
            headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
            }
        }
    )
}


/*
* POST REQUESTS
*/

export const loginRq = async (requestType, user, pass) => {
    let rqUrl = requestType === "login" ? urlConfig["loginUrl"] : urlConfig["registerUrl"];
    
    return await fetch(
        rqUrl, 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                username: user,
                password: pass,
            })
        }
    )
}