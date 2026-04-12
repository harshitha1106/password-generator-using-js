let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"

let pass1El = document.getElementById("pass1")
let pass2El = document.getElementById("pass2")

function generatePassword() {
    let password1 = ""
    let password2 = ""

    for (let i = 0; i < 12; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        password1 += characters[randomIndex]

        let randomIndex2 = Math.floor(Math.random() * characters.length)
        password2 += characters[randomIndex2]
    }

    pass1El.textContent = password1
    pass2El.textContent = password2
}