let gd = {
  propmpts: {
    chatName: "Before writing the first message, add a name of the chat, seperate the name from the text body with ● like this: How to create a fantasy●To create a fantasy you should.."
  },
  chats: {
    "romeoAndJuliet": {
      data:{

      },
      history:{}
    }

  }
}

let chatName = "RomeoAndJuliet2"
//gd.chats.push({chatName:{data:{},history:{}}})
//gd.chats.chatName.history.push({role: role, content: message})

const menu = document.getElementById("menu")
const ham = document.getElementById("ham")
ham.addEventListener("click", ()=>{menu.style.display == "block"?menu.style.display = "none":menu.style.display = "block"})

function addChat(name){
  let a = document.createElement("a")
  a.innerHTML=name
  a.addEventListener("click", ()=>{gotochat(name)})//go to the chat with name
  menu.appendChild(a)
}
function gotochat(name){}


//https://shithandler.github.io/newui/

//https://htmlpreview.github.io/?https://github.com/twbs/bootstrap/gh-pages/2.3.2/index.html