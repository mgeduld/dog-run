/*
If the endpoint ever had an Access-Control-Allow-Origin header, it's 
been removed. It's now impossible to fetch the data, unless you
set the mode to no-cors, which is pointless, because it gives you an 
opaque response.

Perhaps this is a temportary glitch. In the meantime, I have replaced
the endpoint URL with a static file containing the contents of the endpoint's
file, which is accessible in postman, but not in the browser.

Error: Failed to load https://www.nycgovparks.org/bigapps/DPR_DogRuns_001.json: 
No 'Access-Control-Allow-Origin' header is present on the requested resource...  
If an opaque response serves your needs, set the request's mode to 'no-cors' 
to fetch the resource with CORS disabled.
*/

export const endpoint = './data.json' // 'https://www.nycgovparks.org/bigapps/DPR_DogRuns_001.json'
