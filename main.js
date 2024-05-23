let pwLenght = document.getElementById("pw-lenght")
let pwResult = document.getElementById("pw-generator")
let svBtn = document.getElementById("svBtn")

const generatePw = (lenght) => {
    const lowAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeric = "0123456789";
    const symbol = "!@#$%^&*(){}[]';:?/.,`<>"

    const data = lowAlphabet + upperAlphabet + numeric;
    let generator = '';
    for (let index = 0; index < lenght; index++) {
        generator += data[~~(Math.random() * data.length)];
    }
    return generator;
}

const getPw = () => {
    const newPw = generatePw(pwLenght.value);
    pwResult.value = newPw;
    setTimeout(() => {
        alert('pasword has been generated')
    }, 500)
}

const svPw = () => {
    document.title = pwResult.value
    svBtn.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`youre password: ${document.title}`));
    svBtn.setAttribute('download', 'MyPassword.txt')
}