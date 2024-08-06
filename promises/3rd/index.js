
function getUserData(id, callback) {
    
    setTimeout(() => {
        
        const user = {
            id: id,
            name: `User ${id}`,
            email: `user${id}@example.com`
        };

      
        callback(user);
    }, 2000); 
}


function displayUser(user) {
   
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
}


const userId = 1;
getUserData(userId, displayUser);
