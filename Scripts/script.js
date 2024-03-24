// Concatenate Some Strings
document.getElementById("con").onclick = function(){
 let x = "Hello";
 let y = " Everyone";
 let z = x + y
    document.getElementById("statement").innerHTML = ("x = Hello" + " ," + " y = Everyone")
    document.getElementById("output").innerHTML = z
    alert(z)
}
// User Name
document.getElementById("username").onclick = function(){
 let firstName = prompt("Enter Your Good Name!")
 let age = prompt("Enter Your age")
 let fullName = firstName + " , " + age
    document.getElementById("statement").innerHTML = "Name = " + firstName   + " ," + " Age = " + age;
    document.getElementById("output").innerHTML = "The Name &amp; Age of the Person is " + fullName + " respectively."  
}
// Comparison Operator
document.getElementById("comp").onclick = function(){
 let num1 = prompt("Type Your First Number.")
 let num2 = prompt("Type Your Second Number.")
 if(num1 === num2){
    document.getElementById("statement").innerHTML = "Your First number is equal to second number"
    document.getElementById("output").innerHTML = "<span class='text-success'>Congrates you put same numbers. &#128525</span>"
}
 else{
    document.getElementById("statement").innerHTML = "You don't write different numbers."
    document.getElementById("output").innerHTML = "<span class='text-danger'>Sorry, please write same numebrs. &#128519 </span>"
 }
}
//if else statement
document.getElementById("if else").onclick = function(){
    let mark = prompt("Enter your Marks.")
    if(mark>=90){
        document.getElementById("statement").innerHTML = "Congrates You are pass!"
        document.getElementById("output").innerHTML = "<span class='text-success'>You got A+.&#128526</span>"
    }
    else if(mark>=80){
        document.getElementById("statement").innerHTML = "You are pass."
        document.getElementById("output").innerHTML = "<span class='text-dark'>You got A.&#128579</span>"
    }
    else if (mark>=70){
        document.getElementById("statement").innerHTML = "You are pass."
        document.getElementById("output").innerHTML = "<span class= 'text-info'>You got B.&#129303</span>"
    }
    else if(mark>=60){
        document.getElementById("statement").innerHTML = "Your marks are average."
        document.getElementById("output").innerHTML = "<span class= 'text-warming bg-light'>You got C.&#128530</span>"
    }
    else if(mark>=50){
        document.getElementById("statement").innerHTML = "Passing Criteria is 60."
        document.getElementById("output").innerHTML = "<span class= 'text-danger bg-light'>You are fail &#129296.</span>"
    }
    else if(mark>=0){
        document.getElementById("statement").innerHTML = "Passing Criteria is 60."
        document.getElementById("output").innerHTML = "<span class= 'text-danger bg-light'>You are fail &#129296.</span>"
    }
}
//testing condition
document.getElementById("testing").onclick = function(){
    let num1 = prompt("Type your Matric Numbers.") 
    let num2 = prompt("Type your Inter Numbers.")
    if(num1 >= num2){
        document.getElementById("statement").innerHTML = "Your Matric num is higher than Inter."
        document.getElementById("output").innerHTML = "<span class='text-success'>Congrates You got good marks in Matric.&#128526</span>"
    } 
    else{
        document.getElementById("statement").innerHTML = "Your Matric num is lesser than Inter"
        document.getElementById("output").innerHTML = "<span class='text-danger'>Unfortunately you got less marks in Matric.&#128531</span>"
    }
}
//Nested statement
document.getElementById("nest stat").onclick = function(){
    let userName = prompt("Hint = Smit.pk")
    if(userName === "smit.pk"){
        let password = prompt("Hint = 123")
          if(password === "123"){
            document.getElementById("output").innerHTML= "You are successfully logged in"
          }
         else{
            document.getElementById("output").innerHTML="<span class='text-danger'>Wrong Password</span>"
         }
    }
   else{
        document.getElementById("output").innerHTML="Wrong userName <br> Correct user name is smit.pk"
    }
}
//Login Page
document.getElementById("login").onclick = function(){
    document.write("<h1 style='text-align: center; text-decoration: underline; color:#0b6d60;'><span>You have successfully Logged in. Please <em>Refresh</em> the site.</span></h1>")
}
//check
document.getElementById("check").onclick = function(){
    document.getElementById("statement").innerHTML = "Please Clear the statement by pressing or clicking the button in given below.&#128071"
    document.getElementById("output").innerHTML = "This page is Authenticated."
    confirm("Do you want to Check the page?")
}
// clear statement
document.getElementById("clearStatement").onclick = function(){
    document.getElementById("statement").innerHTML = ""
}
// Output Statement
document.getElementById("clearoutput").onclick = function(){
    document.getElementById("output").innerHTML = ""
}