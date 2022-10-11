let users = [
{
    username: `Yusuf`,
    email: `email@gmail.com`,
    password: `test123`,
    subscriptionStatus: `VIP`,
    discordId: `Cheesebugga#7496`,
    lessonsCompleted: [0, 1],
},
{
    username: `Dave`,
    email: `hemail@gmail.com`,
    password: `pass123`,
    subscriptionStatus: `VIP`,
    discordId: `Cheese#7496`,
    lessonsCompleted: [0, 1, 2, 3]
},
{
    username: `Yui`,
    email: `nemail@gmail.com`,
    password: `word123`,
    subscriptionStatus: `VIP`,
    discordId: `BUgga#7496`,
    lessonsCompleted: [0, 1, 2, 3]
}
]

function login(email, password) {
    for (let i = 0; i < users.length; ++i){
        if (users[i].email === email){
            console.log(users[i])
            if (users[i].password === password){
                console.log(`You are logged in`)
            }
            else {
                console.log(`password is wrong nigga`)
            }
        }
    }

}

login(`email@gmail.com`, `test23`)