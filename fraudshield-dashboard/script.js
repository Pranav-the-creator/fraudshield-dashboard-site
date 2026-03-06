let total=0
let fraud=0
let blocked=0
let safe=0

const fraudChart=new Chart(
document.getElementById("fraudChart"),
{
type:"line",
data:{
labels:[],
datasets:[
{
label:"Fraud",
borderColor:"red",
data:[]
},
{
label:"Blocked",
borderColor:"orange",
data:[]
},
{
label:"Low Risk",
borderColor:"green",
data:[]
}
]
}
})

const riskChart=new Chart(
document.getElementById("riskChart"),
{
type:"bar",
data:{
labels:["Low","Medium","High"],
datasets:[{
data:[10,4,2],
backgroundColor:["green","orange","red"]
}]
}
})


function analyze(){

let risk=Math.floor(Math.random()*100)

total++

if(risk>80){
fraud++
alertFraud(risk)
}
else if(risk>50){
blocked++
}
else{
safe++
}

document.getElementById("total").innerText=total
document.getElementById("fraud").innerText=fraud
document.getElementById("blocked").innerText=blocked
document.getElementById("safe").innerText=safe

fraudChart.data.labels.push(total)

fraudChart.data.datasets[0].data.push(risk>80?risk:0)
fraudChart.data.datasets[1].data.push(risk>50 && risk<=80?risk:0)
fraudChart.data.datasets[2].data.push(risk<=50?risk:0)

fraudChart.update()

document.getElementById("result").innerText="Risk Score: "+risk+"%"
}

function alertFraud(risk){

let li=document.createElement("li")

li.innerText="🚨 Fraud detected "+risk+"%"

document.getElementById("alerts").appendChild(li)

}

function toggleChat(){

let box=document.getElementById("chatbox")

box.style.display=box.style.display==="block"?"none":"block"

}

function chat(e){

if(e.key==="Enter"){

let q=document.getElementById("chatInput").value.toLowerCase()

let res="FraudShield AI monitoring system."

if(q.includes("fraud")) res="Fraud is suspicious financial activity."

if(q.includes("risk")) res="Risk score predicts fraud probability."

document.getElementById("chatResponse").innerText=res

}

}


/* Heatmap */

let heat=document.getElementById("heatmap")

for(let i=0;i<100;i++){

let c=document.createElement("div")

let r=Math.random()

if(r>0.8)c.style.background="red"
else if(r>0.5)c.style.background="orange"
else c.style.background="green"

heat.appendChild(c)

}