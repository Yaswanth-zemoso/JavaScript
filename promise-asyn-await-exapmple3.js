async function getUsers(){
    try {
        let response = await fetch('https://reqres.in/api/users?page=2');
        let user = await response.json();
        console.log(user);
    } catch (err){
        alert(err);
    }
}

getUsers();