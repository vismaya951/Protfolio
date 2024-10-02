function submit(){

    let params= {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("submit").value,
        message:document.getElementById("message").value,
    };

    const serviceid= "service_zxgjujl";
    const templateid= "template_n3mhig8";

    emailjs.send(serviceid,templateid,params).then((res)=>{
        document.getElementById("name").value= "";
        document.getElementById("email").value= "";
        document.getElementById("subject").value= "";
        document.getElementById("message").value="";
        console.log(res);

        alert("Successfully Submited");
    })
.catch((err)=>console.log(err)
);
} 