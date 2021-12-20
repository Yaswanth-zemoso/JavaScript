//call me after 1 seconds
function callMeAfter1Seconds(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Please come (after 1second)")
        }, 1000);
    });
}


//call me after 3 seconds
function callMeAfter3Seconds(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Please come (after 1 seconds)")
        }, 3000);
    });
}

//call me after 1 seconds
function callMeAfter2Seconds(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Please come (after 2 seconds)")
        }, 2000);
    });
}

async function callMe(){
    console.log("calling");
    const result1 = await callMeAfter1Seconds();
    console.log(result1);

    const result3 = await callMeAfter3Seconds();
    console.log(result3);

    const result2 = await callMeAfter2Seconds();
    console.log(result2);
}

callMe();