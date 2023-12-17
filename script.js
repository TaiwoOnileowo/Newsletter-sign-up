//  Get all required elements
 
 const emailInput = document.getElementById("email-name")
 const errMsg = document.getElementById("error-msg")
 const emailElement=document.getElementById("uremail")

    function validateForm(event){
        // prevent the default form submission behaviour
      event.preventDefault()
      const email = emailInput.value
    
    //  regex pattern for email validation
     var emailRegex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    //  check if the email matches the pattern
     if(!emailRegex.test(email)){
      // display error message
      errMsg.textContent="Valid Email required"
      // cant be submitted
      return false;
     }
    //  if the email is valid, clear the error message
     errMsg.textContent=""
     // redirecting to the success page
     window.location.href="./successpage.html?email="+encodeURIComponent(email)
    //  tells the form to be submitted
     return true
    }


// This script waits for the DOM to be fully loaded (DOMContentLoaded event) 
    // and then retrieves the email parameter from the URL. 
    // It then sets the text content of an HTML element (identified by the ID "uremail") to the retrieved email. 
    // This way, the successpage.html page dynamically displays the user's email.

    document.addEventListener("DOMContentLoaded", function(){
        // function to get the email parameter from the url
        function getEmailParameter(){
            const queryString=window.location.search;
            const urlParams=new URLSearchParams(queryString)
            return urlParams.get('email')
        }

const userEmail=getEmailParameter()
if(userEmail){
emailElement.textContent=userEmail
}

        
    })
    


