import { urlConfig } from "./config";

export const loginRq = (requestType, user, pass) => {
    let rqUrl = requestType === "login" ? urlConfig["loginUrl"] : urlConfig["registerUrl"];
    
    fetch(
        rqUrl, 
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: user,
                password: pass,
            })
        }
    )
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network Response Error: ", response.status);
        }

        return response.json();
    })
    .catch((error) => {
        console.error("Login Error: ", error);
    });
}