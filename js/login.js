
function validate()
    {
      var form = document.getElementById("myForm");
    alert(form["inputEmail"].value)
        if(form["inputEmail"].value =="sample" && form["inputPassword"].value =="password")
            {
              
                
                window.location.replace("home.html");
                return true;
              
            }
        else
            {
                alert("Incorrect Username or Password" );
                return false;
            }

    }
