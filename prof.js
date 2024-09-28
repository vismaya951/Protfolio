function sendMail() {
    var params = {
        name: document.getElementById("Name").value ,
        email: document.getElementById("Email").value ,
        messege: document.getElementById("Subject").value ,    
    };
const serviceID ="service_nurh2mq";
const templateID = "template_17mo84f";

emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("Name").value="";
        document.getElementById("Email").value="";
        document.getElementById("Subect").value="";
        console.log(res);
        alert("Your messege send successfully");
    }
)
.catch((err) => console.log(err));
}