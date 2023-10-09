class Worker {
    constructor(id, name, surname, birthDate) {
        if (typeof id !== 'number' || id % 1 !== 0) {
            throw new Error('The id must be an integer');
        }
        if (typeof name !== 'string' || typeof surname !== 'string') {
            throw new Error("Name and surname should be strings")
        }
        if (!(birthDate instanceof Date)) {
            throw new Error("The birth date should be of type date and the format should be YYYY-MM-DD")
        }
        this.id = id

        this.name = name
        this.surname = surname
        this.birthDate = birthDate
    }
    focus(){
        document.write(`${this.name} ${this.surname} is focusing to work harder<br>`)
    }
}
class CEO extends Worker{
    constructor(id, name, surname, birthDate, assignedBosses) {
        super(id, name, surname, birthDate)
        this.assignedBosses = assignedBosses
    }
    travel(travelDestination){
        document.write(`The CEO, ${this.name} ${this.surname} is tavelling to ${travelDestination}<br>`)
    }
    addBoss(id, name, surname, birthDate, dptInCharge, team){
        const newBoss = new Boss(id, name, surname, birthDate, dptInCharge, team)
        document.write(`${newBoss.name} ${newBoss.surname} has been ascended to be the boss in the department 
                        ${dptInCharge} of the team composed by ${team}, congratulations!!!<br>`)
        this.assignedBosses.push(newBoss)
    }

    direct(){
        document.write(`The CEO, ${this.name} ${this.surname} is directing all bosses<br>`)
    }
}
class Boss extends Worker{
    constructor(id, name, surname, birthDate, dptInCharge, team) {
        super(id, name, surname, birthDate)
        this.dptInCharge = dptInCharge
        this.team = team
    }
    meet(){
        document.write(`${this.name} ${this.surname} is having a meeting with his team<br>`)
    }
    addProgrammer(id, name, surname, birthDate, dptInCharge, team, qualification, experience){
        const newProgrammer = new Programmer(id, name, surname, birthDate, qualification, experience)
        document.write(`${newProgrammer.name} ${newProgrammer.surname} has been to the team of the boss ${this.name} 
                        ${this.surname} composed by ${team}, congratulations!!!<br>`)
        this.team.push(newProgrammer)
    }
}
class Programmer extends Worker{
    constructor(id, name, surname, birthDate, qualification, experience) {
        super(id, name, surname, birthDate)
        this.qualification = qualification
        this.experience = experience
    }
    code(){
        document.write(`${this.name} ${this.surname} has started coding an amazing program<br>`)
    }
}
const ceo = new CEO(1, "John", "Smith", new Date("2004-07-28"), [])
const programmer = new Programmer(4, "Johnny", "Williamson", new Date("2004-07-28"),
                    "High School", "2 months")
const boss = new Boss(3, "Willy", "Williamson", new Date("2004-07-28"), 4, [programmer])

ceo.focus()
ceo.travel("Madrid")
ceo.direct()
ceo.addBoss(2, "Frank", "Williamson", new Date("2004-07-28"), 3, [])

boss.meet()
boss.addProgrammer(4, "Billy", "Williamson", new Date("2004-07-28")
                    , "University", "5 years")

programmer.focus()
programmer.code()

