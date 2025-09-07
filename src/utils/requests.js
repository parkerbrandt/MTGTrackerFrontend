import { urlConfig } from "./config";

export async function loginRq (requestType, user, pass) {
    let rqUrl = requestType === "login" ? urlConfig["loginUrl"] : urlConfig["registerUrl"];
    
    await fetch(
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