const myEmojis = ["👨‍💻", "🎮", "🍚"]
const emojis = document.getElementById("emojiContainer")
const button = document.getElementById("push-btn")
const input= document.getElementById("emoji-input")
const beginningButton = document.getElementById('unshift-btn')
const popbutton = document.getElementById("pop-btn")
const shiftbutton = document.getElementById("shift-btn")

// for (let index = 0; index < myEmojis.length; index++) {
//     emojis.innerHTML += `<span> ${myEmojis[index]} </span>`
    
// }

function renderEmo(){
    emojis.innerHTML = ""
for (let index = 0; index < myEmojis.length; index++) {
    const emoSpan = document.createElement('span')
    emoSpan.textContent = myEmojis[index]
    // console.log(emoSpan)
    emojis.appendChild(emoSpan)
}}

renderEmo()



button.addEventListener('click',function(){
    if(input.value != ""){
    myEmojis.push(input.value)
    input.value = ""
    renderEmo()}

})


beginningButton.addEventListener('click', function(){
    if(input.value != ""){
        myEmojis.unshift(input.value)
        input.value = ""
        renderEmo()}
    
})

popbutton.addEventListener('click',function(){
    myEmojis.pop()
    renderEmo()
})

shiftbutton.addEventListener('click',function(){
    myEmojis.shift()
    renderEmo()

})