var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

modal.style.display="none"

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}

function closeModal(){
    modal.style.display = "none";
    console.log("close modal")
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        }
    }

        var users=[];

        var usernameArr = [];
        var passwordArr = [];
        var commentArr = [];

        function addUser(username, password, email){
            return{
                username,
                password,
                email
            }
        }
        function getAge(dateString) {
            // age validation
            var today = new Date();
            var birthDate = new Date(dateString);
            var age = today.getFullYear() - birthDate.getFullYear();
            var m = today.getMonth() - birthDate.getMonth();

            if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            return age;
        }


        function myFunction() {
            // validation for login modal
            username = document.getElementById("name").value
            password = document.getElementById("password").value
            email = document.getElementById("email").value

            DoB = document.getElementById("DoB").value

            if (username != "" && password != "" && email != "" && DoB != ""){
                var atPos = email.lastIndexOf("@")
                var dotPos = email.lastIndexOf(".")

                if (atPos<1 || dotPos<atPos+2 || dotPos+2>=email.length) {
                    // email validation
                    alert("Not a valid e-mail address");
                }

                a=getAge(document.getElementById("DoB").value);
                // running the age validation function with the value of the date input
                console.log(a)

                if (getAge(document.getElementById("DoB").value)<15){
                    // age validation
                    alert("You're not old enough!")
                }


                else{
                    modal.style.display = "none"
                    users.push(addUser(username,password,email))
                    console.log(users)

                    commentHeader.style.display = "inline"
                    commentInput.style.display = "inline"
                    commentSubmit.style.display = "inline"
                    // setting
                }

            }
            else{
                // client side validation for fields
                // check if username and password are alphanumeric
                // check if email contains @ and .com
                document.getElementById("modalErrors").innerHTML = "Fields are invalid. Try again."
            }

            document.getElementById("name").value="";
            document.getElementById("password").value="";
            document.getElementById("email").value="";
            //resetting fields

            document.getElementById("myBtn").innerHTML = "Welcome "+users[0].username
            //setting the value of the button to indicate that the user has logged in.

            // console.log("'"+username+"' '"+password+"' '"+"'"+email)
            // test()
        }

        function submitComment(){
            // comment validation function
            console.log("submitting comment")
            if (users != null){
                var commentToSubmit = document.getElementById("commentInput").value;
                // console.log("The commment, "+commentToSubmit+" should have submitted.")

                document.getElementById("comments").innerHTML = '<p>'+commentToSubmit+' by '+'<font color="gray">'+users[0].username+'</font></p>'+document.getElementById('comments').innerHTML;
            }
        }


        function showCommentElements(){
            commentInput.style.display = "block";
            commentHeader.style.display = "block";
            console.log("showing elements")
        }

function test(){
    alert("test function has been called")
}

var btn = document.getElementById("myBtn");

function activateTooltip(toolTipID, objID){
    //function is run on hover
	document.getElementById(toolTipID).style.display = "block";
	//console.log("activateTooltip")
    //console.log(toolTipID)

    toolTipIndex = toolTipID.slice(-1)
    //console.log(toolTipIndex)

    if (toolTipID == "toolTip1"){
        document.getElementById(toolTipID).style.marginLeft = "32%";
    }
    if (toolTipID == "toolTip2"){
        document.getElementById(toolTipID).style.marginLeft = "20%";
    }
    if (toolTipID == "toolTip3"){
        document.getElementById(toolTipID).style.marginLeft = "40%";
    }
}

function hideTooltip(toolTipID){
    // function is run on rollout
	document.getElementById(toolTipID).style.display = "none";
	//console.log("hideTooltip")
}

var el = document.getElementById("banner1");
var el2 = document.getElementById("banner2");
var el3 = document.getElementById("banner3");

function fadeIn() {
//banner animation
  el.style.opacity = 1;
  el2.style.opacity = 0;
  el3.style.opacity = 0;
  var idx=0;

  fadeAmt = 0.005;

  var tick = function() {


		switch(idx){
    case 0:
    	el.style.opacity = +el.style.opacity - 0.005;
      el2.style.opacity = +el2.style.opacity + 0.005;
      if (el2.style.opacity == 1){
      	idx=1
			}
    	break;

    case 1:
    	el2.style.opacity = +el2.style.opacity - 0.005;
      el3.style.opacity = +el3.style.opacity + 0.005;
      if (el3.style.opacity == 1){
      	idx=2
			}
    	break;
    case 2:
    	el3.style.opacity = +el3.style.opacity - 0.005;
      el.style.opacity = +el.style.opacity + 0.005;
      if (el.style.opacity == 1){
      	idx=0
			}
    	break;
    }
    (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 100000)

    /* if (+el2.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
    }
    */

  };

  tick();
}

fadeIn()
