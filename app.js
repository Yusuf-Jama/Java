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
    username: `Yui`,
    email: `yuhboi@gmail.com`,
    password: `qwerty123`,
    subscriptionStatus: `VIP`,
    discordId: `bugga#7496`,
    lessonsCompleted: [0,],
},
{
    username: `Zaah`,
    email: `nadda@gmail.com`,
    password: `passcode`,
    subscriptionStatus: `VIP`,
    discordId: `Cheese#7496`,
    lessonsCompleted: [0, 1],
},
{
    username: `Puff`,
    email: `here@gmail.com`,
    password: `passy123`,
    subscriptionStatus: `VIP`,
    discordId: `Cheesebugga#7496`,
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
            return
        }
    }

}

login(`email@gmail.com`, `test23`)

function register(name, email, password, 
subscriptionStatus, discordId, lessonsCompleted){
    let user = {
        username: name, 
        email: email,
        password: password,
        subscriptionStatus: subscriptionStatus,
        discordId: discordId,
        lessonsCompleted: lessonsCompleted,
    }
    users.push(user)
}

register (`Yusuf`, `email@gmail.com`, `test123`, `VIP`, `#Cheesebugga#7496`
[0, 1])

console.log(users)
