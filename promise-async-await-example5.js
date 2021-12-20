async function getUsersOneByone(){
    return await Promise.all([
        fetch('https://reqres.in/api/users?page=1'),
        fetch('https://reqres.in/api/users?page=2'),
        fetch('https://reqres.in/api/users?page=30')
    ])
}

getUsersOneByone().then((values) => console.log(values));