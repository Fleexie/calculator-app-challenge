let calcString = [];

const screen = document.querySelector(".screen")

//Keys and eventlisteners
const keys = document.querySelectorAll(".key");
for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', ()=>{
        handler(keys[i])
    })
}

function handler (key){
    if (calcString == 0) calcString = ""
    if (key.dataset.key === "int"){
        calcString = calcString + key.innerHTML;
    }
    if (key.dataset.key === 'operator') {
        if (calcString === "-") calcString = "-"
        else if (calcString === "" && key.dataset.operator === "-") calcString = "-"
        else if (calcString === "") calcString = "0"
        else calcString = calcString + key.dataset.operator;
    }
    if (key.dataset.key === 'calc') {
        calcString = calc(calcString)
        console.log(calcString)
    }
    if (key.dataset.key === 'reset') {
        calcString = "0"
    }
    if (key.dataset.key === 'del') {
        calcString = calcString.slice(0, -1)
    }
    if (key.dataset.key === 'comma') {
        calcString = calcString + "."
    }
    updateScreen()
    console.log(calcString)
}

function calc(val){
    return new Function('return ' + val)()
}

function updateScreen(){
    return screen.innerHTML = calcString.toString().replace(".", ",");
}


//Theming
const themes = ['dark', 'light', 'contrast']
let currentIndex = 0;
let currentTheme = themes[currentIndex];
const themeContainer = document.querySelector(".theme-wrapper")
const toggler = document.querySelector(".toggle")
toggler.addEventListener("click", () => {
    if (currentIndex < themes.length - 1){
        currentIndex++
    }
    else {
        currentIndex = 0
    }
    togglePosition()
    setTimeout(setAttributes, 250)
})

function setAttributes(){
    const root = document.documentElement;
    root.style.setProperty('--main-background', themesVariations[themes[currentIndex]]['--main-background'])
    root.style.setProperty('--toggle-background', themesVariations[themes[currentIndex]]['--toggle-background'])
    root.style.setProperty('--screen-background', themesVariations[themes[currentIndex]]['--screen-background'])
    root.style.setProperty('--key-del-reset-bg', themesVariations[themes[currentIndex]]['--key-del-reset-bg'])
    root.style.setProperty('--key-del-reset-shadow', themesVariations[themes[currentIndex]]['--key-del-reset-shadow'])
    root.style.setProperty('--key-enter-bg', themesVariations[themes[currentIndex]]['--key-enter-bg'])
    root.style.setProperty('--key-enter-shadow', themesVariations[themes[currentIndex]]['--key-enter-shadow'])
    root.style.setProperty('--key-main-bg', themesVariations[themes[currentIndex]]['--key-main-bg'])
    root.style.setProperty('--key-main-shadow', themesVariations[themes[currentIndex]]['--key-main-shadow'])
    root.style.setProperty('--txt-keys-main', themesVariations[themes[currentIndex]]['--txt-keys-main'])
    root.style.setProperty('--txt-dark', themesVariations[themes[currentIndex]]['--txt-dark'])
    root.style.setProperty('--txt-light', themesVariations[themes[currentIndex]]['--txt-light'])
    root.style.setProperty('--txt-del-reset', themesVariations[themes[currentIndex]]['--txt-del-reset'])
    root.style.setProperty('--txt-equal', themesVariations[themes[currentIndex]]['--txt-equal'])
    root.style.setProperty('--txt-screen', themesVariations[themes[currentIndex]]['--txt-screen'])
    // console.log(themesVariations[themes[currentIndex]]['--main-background'])

}

const positions = document.querySelectorAll(".toggle-gfx")
let currentToggle = 0
function togglePosition(){
    let lastPosition = currentToggle;
    if (currentToggle < positions.length -1) {
        currentToggle++}
    else {
        currentToggle = 0
    }
    positions[lastPosition].classList.toggle("active")
    positions[currentToggle].classList.toggle("active")
}

//Themes color schemes
let themesVariations = {
    'dark': {
        //Backgrounds
        '--main-background': 'hsl(222, 26%, 31%)',
        '--toggle-background': 'hsl(223, 31%, 20%)',
        '--screen-background': 'hsl(224, 36%, 15%)',

        //Keys
        '--key-del-reset-bg': 'hsl(225, 21%, 49%)',
        '--key-del-reset-shadow': 'hsl(224, 28%, 35%)',

        '--key-enter-bg': 'hsl(6, 63%, 50%)',
        '--key-enter-shadow': 'hsl(6, 70%, 34%)',

        '--key-main-bg': 'hsl(30, 25%, 89%)',
        '--key-main-shadow': 'hsl(28, 16%, 65%)',

        //txt-colors
        '--txt-keys-main':'hsl(221, 14%, 31%)',
        '--txt-dark':'hsl(221, 14%, 31%)',
        '--txt-light':'hsl(0, 0%, 100%)',
        '--txt-del-reset':'hsl(0, 0%, 100%)',
        '--txt-equal':'hsl(0, 0%, 100%)',
        '--txt-screen':'hsl(0, 0%, 100%)'
    },
    'contrast':{
        '--main-background': 'hsl(268, 75%, 9%)',
        '--toggle-background': 'hsl(268, 71%, 12%)',
        '--screen-background': 'hsl(268, 71%, 12%)',

        //Keys
        '--key-del-reset-bg': 'hsl(281, 89%, 26%)',
        '--key-del-reset-shadow': 'hsl(285, 91%, 52%)',

        '--key-enter-bg': 'hsl(176, 100%, 44%)',
        '--key-enter-shadow': 'hsl(177, 92%, 70%)',

        '--key-main-bg': 'hsl(268, 47%, 21%)',
        '--key-main-shadow': 'hsl(290, 70%, 36%)',

        //txt-colors
        '--txt-keys-main':'hsl(52, 100%, 62%)',
        '--txt-dark':'hsl(221, 14%, 31%)',
        '--txt-light':'hsl(0, 0%, 100%)',
        '--txt-del-reset':'hsl(0, 0%, 100%)',
        '--txt-equal':'hsl(198, 20%, 13%)',
        '--txt-screen':'hsl(52, 100%, 62%)'

    },
    'light':{
        '--main-background': 'hsl(0, 0%, 90%)',
        '--toggle-background': 'hsl(0, 5%, 81%)',
        '--screen-background': 'hsl(0, 0%, 93%)',

        //Keys
        '--key-del-reset-bg': 'hsl(185, 42%, 37%)',
        '--key-del-reset-shadow': 'hsl(185, 58%, 25%)',

        '--key-enter-bg': 'hsl(25, 98%, 40%)',
        '--key-enter-shadow': 'hsl(25, 99%, 27%)',

        '--key-main-bg': 'hsl(45, 7%, 89%)',
        '--key-main-shadow': 'hsl(35, 11%, 61%)',

        //txt-colors
        '--txt-keys-main':'hsl(60, 10%, 19%)',
        '--txt-dark':'hsl(60, 10%, 19%)',
        '--txt-light':'hsl(0, 0%, 100%)',
        '--txt-del-reset':'hsl(0, 0%, 100%)',
        '--txt-equal':'hsl(0, 0%, 100%)',
        '--txt-screen':'hsl(60, 10%, 19%)'
    }
}