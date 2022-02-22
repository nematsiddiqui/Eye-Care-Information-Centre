user=() =>{
    const name = window.prompt("Enter Your Name");
    const num = window.prompt("Enter Your Number");
    const user = document.getElementById("name");
    user.innerHTML = name;

    check = () =>{
        window.alert("Your Name Is " + name);
        window.alert("Your Number is "+ num);
        window.alert("Your Appointment is Cornfirmed")
    }
}

 