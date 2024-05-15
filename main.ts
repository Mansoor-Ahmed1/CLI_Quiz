
import inquirer from "inquirer";

let score:number = 0;
let right_choice:string = "Congratulations, You got it right"
let wrong_choice:string = "Unfortunately, It is not the correct answer."
let domain_choice = await inquirer.prompt(
    [
        {
            "name":"domain",
            "message":"Choose a domain whom's question you would like to answer in he quiz",
            "type":"list",
            "choices":["Chemistry", "Physics", "Pakistan Studies", "Geography"]
        }
    ]    
    )
    let instructions:string ="You will earn a point for every correct answer, While no point will be deducted for wrong answer. You can get a maximum of 5 points by answering all 5 question correctly."
console.log(instructions)

if(domain_choice.domain === "Chemistry"){
        let q1 = await inquirer.prompt(
            [
                {
                    "name":"question",
                    "message":"What is Chemical symbol for Water?",
                    "type":"list",
                    "choices":["H2O", "CO2", "NH3", "NaCl"]
                }
            ]
            )
            if(q1.question==="H2O"){
                score += 1
                console.log(right_choice)
            }
            else{
                console.log(wrong_choice)
            }
    let q2 = await inquirer.prompt(
        [
            {
                "name":"question",
                "message":"Which of the following is a noble gas?",
                "type":"list",
                "choices":["Helium", "Nitrogen", "Hydrogen", "Carbon"]
            }
        ]
    )
    let q3 = await inquirer.prompt(
        [
            {
                "name":"question",
                "message":"What is the pH level of pure water?",
                "type":"list",
                "choices":["1", "7", "10", "14"]
            }
        ]
    )
    let q4 = await inquirer.prompt(
        [
            {
                "name":"question",
                "message":"What is the atomic number of Carbon?",
                "type":"list",
                "choices":["4", "5", "6", "7"]
            }
        ]
    )
    let q5 = await inquirer.prompt(
        [
            {
                "name":"question",
                "message":"What is the most abundant gas in the Earth's atmosphere?",
                "type":"list",
                "choices":["Oxygen", "Carbon Di-Oxide", "Nitrogen", "Helium"]
            }
        ]
    )

}
