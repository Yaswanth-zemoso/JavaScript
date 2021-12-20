async function getUsersWithErrors(){
    try {
        let response = await fetch('https://reqes.in/api/usrs?page=2');
        let user = await response.json();
        console.log(user);
    } catch (err){
        alert(err);
    }
}

getUsersWithErrors();