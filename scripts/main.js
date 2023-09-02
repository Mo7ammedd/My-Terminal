
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("A new visitor!");
  await delay(700);
  createText("Starting the server...");
  await delay(1500);
  createText("Server started!");
  createText("You can run several commands:");
 
  createCode("about", "Who am i and what do i do.");
  createCode("all", "See all commands.");
  createCode("social", "All my social networks.");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# root";
  span1.textContent = " in";
  span2.textContent = " ~/Mohammed-Mostafa";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "all"){
    trueValue(value);
    
    createCode("projects", "My github page with my projects. Follow me there ;)");
    createCode("about ", "Who am i and what do i do.");
    createCode("social", "All my social networks.");
    createCode("clear", "Clean the terminal.");
    
  }
  else if(value === "projects"){
    trueValue(value);
    createText("<a href='https://github.com/Mo7ammedd' target='_blank'><i class='fab fa-github white'></i> github.com/Mo7ammedd</a>")
  }
  else if(value === "about"){
    trueValue(value);
    createText("Hi, I'm Mohemed Mostafa")
    createText(" I’m currently learning Computer Science <p> I am a Junior at Faculty of Computers & Informatics at Suez Canal University <span class='blue'>Node, React  </span>I am a competitive programmer at Codeforces, Atcoder, Leetcode, Codechef, Google Contests")
  }
  else if(value === "social"){
    trueValue(value);
    createText("<a href='https://github.com/Mo7ammedd' target='_blank'><i class='fab fa-github white'></i> github.com/mo7ammedd</a>");
    createText("<a href='https://www.linkedin.com/in/mohammed-mostafa-316b21254/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/Mohammed-Mostafa</a>");
    createText("<a href='https://twitter.com/notmuhamedd' target='_blank'><i class='fab fa-twitter'></i> twitter.com/notmuhamedd</a>");
    createText("<a href='https://www.facebook.com/profile.php?id=100008513341810' target='_blank'><i class='fab fa-facebook-f white'></i> facebook.com/mohammed.mostafa</a>");
    createText("<a href='https://www.instagram.com/mohammed__mostaffaa/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/mohammed__mostaffaa</a>");
    
  }
  else if(value === "All"){
    trueValue(value);
    createText("Didn't you mean: all")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML =
  text
  ;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();
