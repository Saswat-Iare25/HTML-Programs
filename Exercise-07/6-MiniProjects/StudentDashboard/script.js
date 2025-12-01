let students=[
 {name:"A", marks:85},
 {name:"B", marks:92}
];
let t=document.getElementById("t");
students.forEach(s=>{
 let r=t.insertRow();
 r.insertCell().textContent=s.name;
 r.insertCell().textContent=s.marks;
});
