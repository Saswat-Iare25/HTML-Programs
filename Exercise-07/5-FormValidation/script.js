document.getElementById('f').onsubmit=e=>{
e.preventDefault();
let n=name.value.trim();
let m=email.value.trim();
let a=+age.value;

if(!n){
 msg.textContent="Name cannot be empty";
 return;
}
if(!m.includes("@")){
 msg.textContent="Invalid email";
 return;
}
if(a<18||a>60){
 msg.textContent="Age must be 18–60";
 return;
}
msg.textContent="Valid form!";
};