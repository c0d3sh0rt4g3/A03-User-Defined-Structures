class Person{
    constructor(name, age, genre) {
        this.name = name
        this.age = age
        this.genre = genre
    }
    getInfo() {
        alert(`Name: ${this.name}\nAge:${this.age}\nGenre:${this.genre}`)
    }
}

class Student extends Person{
    constructor(name, age, genre, course, group) {
        super(name, age, genre)
        this.course = course
        this.group = group
    }
    enroll(){
        alert(`The student ${this.name} would be enrolled in ${this.course}${this.group}`)
    }
}

class Teacher extends Person{
    constructor(name, age, genre, subject, level) {
        super(name, age, genre)
        this.subject = subject
        this.level = level
    }
    teaches(){
        alert(`${this.name} teaches ${this.subject} for ${this.level}}`)
    }
}
const person = new Person("Paco", 80, "male")
const student = new Student("Joe", 20, "male", "2DAW", "A")
const teacher = new Teacher("Ana", 50, "female", "History", "6th grade")

person.getInfo()
student.getInfo()
student.enroll()
teacher.getInfo()
teacher.teaches()