//call me after 2 seconds
function callMeAfter2Seconds(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Please come")
        }, 2000);
    });
}

async function callMe(){
    console.log("calling");
    const result = await callMeAfter2Seconds();
    console.log(result);
}

callMe();