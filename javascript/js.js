// console.log('hello');
let a={
    name: 'hem',
    class: 'a1',
    mobile: 123456789
}
// console.log(a.name);
document.getElementById("head").innerHTML= "Click me"; //changes the content of #head id
// document.getElementsById("head").innerHTML= "hello";  --> this will not work as it has 's' on element

// let user= document.getElementById('head');
// user.addEventListener('onclick',function(){
//     console.log('Hemant is a boy');
// })
let user= document.getElementById('head');
user.addEventListener('mouseover', function(){
    console.log("In");})
user.addEventListener('mouseout', function(){
    console.log("out");})
user.style.border= '2px solid red';
// user.style.display='inline';
