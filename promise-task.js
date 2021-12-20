async function getData(uId) {
    try {

        await new Promise(resolve => {
            setTimeout(resolve, 500)
          })
      
          await axios.fetch(uId).then((res) => {
            return res;
          })

    } catch(e) {
      console.log(e.toString())
    }
  }

  
console.log("start");
var email = getData("skc").then(data => {return data.email});
console.log("Email id of the user id is: " + email);
console.log("end");

