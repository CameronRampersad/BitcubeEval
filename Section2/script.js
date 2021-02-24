const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
var footer = document.querySelector('#footer');
var main = document.querySelector('#loginPage');
var msg = document.querySelector('#login-confirmed');
var logOutBtn = document.querySelector('#logOut');
var btn = document.querySelector('#student-button');
var btn2 = document.querySelector('#degree-button');
var btn3 = document.querySelector('#course-button');
var loggedIn = '';

function StudentFind() {
  var students = loggedIn.studentFind()
  for (var i = 0; i < students.length; i++) {
    var student = students[i]
    var div = document.createElement('pre');
    div.textContent = `Student: ${JSON.stringify(student, undefined, 2)}`;
    div.setAttribute('class', 'student');
    var cards = document.getElementById('studentCards')
    cards.appendChild(div);
  }
}

function DegreeFind() {
  var degrees = loggedIn.degreeFind()
  for (var i = 0; i < degrees.length; i++) {
    var degree = degrees[i]
    var degreeVals = Object.values(degree)
    var degreeID = degreeVals[0]
    var label = document.createElement('h3');
    label.textContent = degreeID
    var div = document.createElement('pre');
    div.textContent = `Degree: ${JSON.stringify(degree, undefined, 2)}`;
    div.setAttribute('class', 'student');
    var cards = document.getElementById('degreeCards')
    cards.appendChild(label);
    cards.appendChild(div);
  }
}

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    var email = loginForm.email.value;
    var password = loginForm.password.value;

    for (var i = 0; i < lctArray.length; i++) {
      var lecturer = lctArray[i]
      lectEmail = lecturer.email

      if (email === lectEmail && password === "bitcubeEval") {
        main.style.backgroundColor = 'rgb(236, 50, 240)';
        main.style.display = 'none';
        footer.style.display = 'none';
        msg.style.display = 'block';
        btn.style.display = 'block';
        btn2.style.display = 'block';
        btn3.style.display = 'block';
        logOutBtn.style.display = 'block';
        msg.innerHTML = "You have logged in as " + lecturer.fullname;
        console.log(lecturer.fullname + " has logged in.");
        loggedIn = lecturer
        StudentFind()
        DegreeFind()
      } else {
        loginErrorMsg.style.opacity = 1;
      }
    }
})

function StudentShow() {
  document.getElementById('studentCards').classList.toggle('active');
}

function DegreeShow() {
  document.getElementById('degreeCards').classList.toggle('active');
}

function AddStudent(id, name, surname, email, dob, degree) {
  new Student(id, name, surname, email, dob, degree)
  StudentShow()
}
