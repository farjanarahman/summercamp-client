export const saveUser=(user)=>{
    //console.log(user);
    const currentUser={
        email:user.email,
        name:user.displayName,
        //img:user?.photoURL
    }
    fetch(`https://sportify-neon.vercel.app//users/${user.email}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(currentUser)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
}