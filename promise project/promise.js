const resolvebtn=document.getElementById("btn1")
const rejectbtn=document.getElementById("btn2")
new Promise(function(resolve,reject){
    resolvebtn.addEventListener("click", function(){
        resolve("resolved");
    })
    rejectbtn.addEventListener("click", function(){
        reject("there are some error")
    })
    // console.log("resolved")
    // resolve("resolve")
    // reject("some reason")
}).then(function(){
    console.log("resoloved")
}).catch(function(err){
    console.log(err);
})

