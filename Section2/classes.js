var stdArray = [];
var lctArray = [];
var degArray = [];
var crsArray = [];
const errMsg = 'Not Found!'

// STUDENT
function Student(id, name, surname, email, dob, degree){
	this.id = id;
	this.name = name;
	this.surname = surname;
	this.email = email;
	this.dob = dob;
	this.degree = degree;
	this.firstname = this.name.replace(/ .*/,'');
	this.fullname = this.name.concat(' ', this.surname);
	stdArray.push(this)
}
Student.prototype.degreeFind = function () {
	for (let i = 0; i < degArray.length; i++) {
		var c = degArray[i]
		var degreeVals = Object.values(c)

		if (this.degree == degreeVals[0]) {
			return c
		} else {
			return errMsg
		}
	}
}

// LECTURER
function Lecturer(id, name, surname, email, dob, degrees){
	this.id = id;
	this.name = name;
	this.surname = surname;
	this.email = email;
	this.dob = dob;
	this.degree = degrees;
	this.firstname = this.name.replace(/ .*/,'');
	this.fullname = this.name.concat(' ', this.surname);
	lctArray.push(this)
}
Lecturer.prototype.degreeFind = function () {
	var degList = []
	for (let x = 0; x < this.degree.length; x++) {
		var lectDegree = this.degree[x]
		for (let i = 0; i < degArray.length; i++) {
			var c = degArray[i]
			var degreeVals = Object.values(c)
			if (lectDegree == degreeVals[0]) {
				degList.push(c)
			}
		}
	}
	return degList
}
Lecturer.prototype.studentFind = function () {
	var degList = []
	for (let x = 0; x < this.degree.length; x++) {
		var lectDegree = this.degree[x]
		for (let i = 0; i < degArray.length; i++) {
			var c = degArray[i]
			var degreeVals = Object.values(c)
			if (lectDegree == degreeVals[0]) {
				degList.push(degreeVals[0])
			}
		}
	}

	var stdList = []
	for (let z = 0; z < stdArray.length; z++) {
		var s = stdArray[z]
		var studentVals = Object.values(s)[5]
		for (let y = 0; y < degList.length; y++) {
			var c = degList[y]
			if (studentVals == c) {
				stdList.push(s)
			}
		}
	}

	return stdList
}

// DEGREE
function Degree(id, name, duration, courses, lectID){
	this.id = id;
	this.name = name;
	this.duration = duration;
	this.course = courses;
	this.lectID = lectID;
	degArray.push(this)
}
Degree.prototype.lecturerFind = function () {
	for (let i = 0; i < lctArray.length; i++) {
		var x = lctArray[i]
		var lecturerVals = Object.values(x)

		if (this.lectID == lecturerVals[0]) {
			return x
		}
	}
}
Degree.prototype.courseFind = function () {
	var crsList = []
	for (let x = 0; x < this.course.length; x++) {
		var degCourse = this.course[x]

		for (let i = 0; i < crsArray.length; i++) {
			var c = crsArray[i]
			var courseVals = Object.values(c)
			if (degCourse == courseVals[0]) {
				crsList.push(c)
			}
		}
	}
	return crsList
}

//COURSE
function Course(id, name, duration, degreeID){
	this.id = id;
	this.name = name;
	this.duration = duration;
	this.degreeID = degreeID;
	crsArray.push(this)
}
Course.prototype.degreeFind = function () {
	var crsDegree = this.degreeID
	for (i = 0; i < degArray.length; i++) {
		var d = degArray[i]
		var degreeVals = Object.values(d)
		if (crsDegree == degreeVals[0]) {
			return d
		}
	}
}
Course.prototype.courseFind = function () {
	var crsDegree = this.degreeID
	for (i = 0; i < degArray.length; i++) {
		var d = degArray[i]
		var degreeVals = Object.values(d)
		if (crsDegree == degreeVals[0]) {
			return degreeVals[3]
		}
	}
}

// POPULATE[
	// STUDENTS
		var student1 = new Student('std001', 'steve james', 'urkel', 'stevie01@mail.com', '2020/02/15', 'deg001');
		var student2 = new Student('std002', 'daniel', 'adams', 'danny02@mail.com', '2020/04/20', 'deg002');
		var student3 = new Student('std003', 'daniel', 'adams', 'danny02@mail.com', '2020/04/20', 'deg002');
		var student4 = new Student('std004', 'daniel', 'adams', 'danny02@mail.com', '2020/04/20', 'deg002');
		var student5 = new Student('std005', 'daniel', 'adams', 'danny02@mail.com', '2020/04/20', 'deg003')

	// LECTURERS
		var lecturer1 = new Lecturer('lct001', 'jenny lee', 'davis', 'jennyd@mail.com', '2001/02/15', ['deg001', 'deg002']);
		var lecturer2 = new Lecturer('lct002', 'adam', 'eves', 'adame@mail.com', '2001/04/20', ['deg003']);

	// DEGREES
		var degree1 = new Degree('deg001', 'degree1', '3 years', ['crs001', 'crs002'], 'lct001');
		var degree2 = new Degree('deg002', 'degree2', '3 years', ['crs003', 'crs004'], 'lct001');
		var degree3 = new Degree('deg003', 'degree3', '3 years', ['crs005', 'crs006'], 'lct002');

	// COURSES
		var course1 = new Course('crs001', 'course1', '6 months', 'deg001');
		var course2 = new Course('crs002', 'course2', '6 months', 'deg001');
		var course3 = new Course('crs003', 'course3', '6 months', 'deg002');
		var course4 = new Course('crs004', 'course4', '6 months', 'deg002');
		var course5 = new Course('crs005', 'course5', '6 months', 'deg003');
		var course6 = new Course('crs006', 'course6', '6 months', 'deg003');
// end POPULATE]
