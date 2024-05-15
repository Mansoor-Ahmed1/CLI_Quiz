
    import inquirer from "inquirer";

    let score: number = 0;
    let right_choice: string = "Congratulations, You got it right"
    let wrong_choice: string = "Unfortunately, It is not the correct answer."

    let domain_choice = await inquirer.prompt(
        [
            {
                "name": "domain",
                "message": "Choose a domain whose questions you would like to answer in the quiz",
                "type": "list",
                "choices": ["Chemistry", "Geography", "Physics"]
            }
        ]
    )
    let instructions: string = "You will earn a point for every correct answer, While no point will be deducted for wrong answer. You can get a maximum of 5 points by answering all 5 question correctly."
    console.log(instructions)

    if (domain_choice.domain === "Chemistry") {
        let q1 = await inquirer.prompt(
            [
                {
                    "name": "question",
                    "message": "What is Chemical symbol for Water?",
                    "type": "list",
                    "choices": ["H2O", "CO2", "NH3", "NaCl"]
                }
            ]
        )
        if (q1.question === "H2O") {
            score += 1
            console.log(right_choice)
        }
        else {
            console.log(wrong_choice)
        }

        let q2 = await inquirer.prompt(
            [
                {
                    "name": "question",
                    "message": "Which of the following is a noble gas?",
                    "type": "list",
                    "choices": ["Helium", "Nitrogen", "Hydrogen", "Carbon"]
                }
            ]
        )
        if (q2.question === "Helium") {
            score += 1
            console.log(right_choice)
        }
        else {
            console.log(wrong_choice)
        }
        let q3 = await inquirer.prompt(
            [
                {
                    "name": "question",
                    "message": "What is the pH level of pure water at room temperature?",
                    "type": "list",
                    "choices": ["1", "7", "10", "14"]
                }
            ]
        )
        if (q3.question === "7") {
            score += 1
            console.log(right_choice)
        }
        else {
            console.log(wrong_choice)
        }

        let q4 = await inquirer.prompt(
            [
                {
                    "name": "question",
                    "message": "What is the atomic number of Carbon?",
                    "type": "list",
                    "choices": ["4", "5", "6", "7"]
                }
            ]
        )
        if (q4.question === "6") {
            score += 1
            console.log(right_choice)
        }
        else {
            console.log(wrong_choice)
        }

        let q5 = await inquirer.prompt(
            [
                {
                    "name": "question",
                    "message": "What is the most abundant gas in the Earth's atmosphere?",
                    "type": "list",
                    "choices": ["Oxygen", "Carbon", "Nitrogen", "Helium"]
                }
            ]
        )
        if (q5.question === "Nitrogen") {
            score += 1
            console.log(right_choice)
        }
        else {
            console.log(wrong_choice)
        }
        console.log(`As you got ${score} right, you got ${score} points out of 5`)
    }



    else if (domain_choice.domain === "Geography") {
        let q1 = await inquirer.prompt(
            [
                {
                    "name": "question",
                    "message": "Which country is known as the Land of the Rising Sun?",
                    "type": "list",
                    "choices": ["S.Korea", "N.Korea", "Thailand", "Japan"]
                }
            ]
        )
        if (q1.question === "Japan") {
            score += 1
            console.log(right_choice)
        }
        else {
            console.log(wrong_choice)
        }

        let q2 = await inquirer.prompt(
            [
                {
                    "name": "question",
                    "message": "What is the largest hot desert in the world??",
                    "type": "list",
                    "choices": ["Sahara Desert", "Gobi Desert", "Thal Desert", "Arabian Desert"]
                }
            ]
        )
        if (q2.question === "Sahara Desert") {
            score += 1
            console.log(right_choice)
        }
        else {
            console.log(wrong_choice)
        }
        let q3 = await inquirer.prompt(
            [
                {
                    "name": "question",
                    "message": "Mount Everest is located at borders of which 2 countries?",
                    "type": "list",
                    "choices": ["Pakistan-China", "Nepal-Bhutan", "China-Nepal", "Bhutan-India"]
                }
            ]
        )
        if (q3.question === "China-Nepal") {
            score += 1
            console.log(right_choice)
        }
        else {
            console.log(wrong_choice)
        }

        let q4 = await inquirer.prompt(
            [
                {
                    "name": "question",
                    "message": "What is the capital of Russia?",
                    "type": "list",
                    "choices": ["Berlin", "Moscow", "Warsaw", "London"]
                }
            ]
        )
        if (q4.question === "Moscow") {
            score += 1
            console.log(right_choice)
        }
        else {
            console.log(wrong_choice)
        }

        let q5 = await inquirer.prompt(
            [
                {
                    "name": "question",
                    "message": "Which of the following country isn't located in Asia",
                    "type": "list",
                    "choices": ["China", "Mongolia", "Nigeria", "Turkmenistan"]
                }
            ]
        )
        if (q5.question === "Nigeria") {
            score += 1
            console.log(right_choice)
        }
        else {
            console.log(wrong_choice)
        }
        console.log(`As you got ${score} right, you got ${score} points out of 5`)

    }


    if (domain_choice.domain === "Physics") {
        let q1 = await inquirer.prompt(
            [
                {
                    "name": "question",
                    "message": "Who invented Bulb?",
                    "type": "list",
                    "choices": ["Newton", "Einstein", "Eddison", "Columb"]
                }
            ]
        )
        if (q1.question === "Eddison") {
            score += 1
            console.log(right_choice)
        }
        else {
            console.log(wrong_choice)
        }

        let q2 = await inquirer.prompt(
            [
                {
                    "name": "question",
                    "message": "What is the force that causes objects to fall to the ground?",
                    "type": "list",
                    "choices": ["Gravity", "Magnetism", "Friction", "None of these"]
                }
            ]
        )
        if (q2.question === "Gravity") {
            score += 1
            console.log(right_choice)
        }
        else {
            console.log(wrong_choice)
        }
        let q3 = await inquirer.prompt(
            [
                {
                    "name": "question",
                    "message": "What is the speed of sound in meters per second (m/s)?",
                    "type": "list",
                    "choices": ["354", "313", "323", "333"]
                }
            ]
        )
        if (q3.question === "333") {
            score += 1
            console.log(right_choice)
        }
        else {
            console.log(wrong_choice)
        }

        let q4 = await inquirer.prompt(
            [
                {
                    "name": "question",
                    "message": "What is measuring unit of Weight?",
                    "type": "list",
                    "choices": ["Kilo-Grams", "Newton", "Ohms", "Ampere"]
                }
            ]
        )
        if (q4.question === "Newton") {
            score += 1
            console.log(right_choice)
        }
        else {
            console.log(wrong_choice)
        }

        let q5 = await inquirer.prompt(
            [
                {
                    "name": "question",
                    "message": "Which law states that for every action, there is an equal and opposite reaction?",
                    "type": "list",
                    "choices": ["Newton's First Law", "Newton's Second Law", "Columb's Law", "Newton's Third Law"]
                }
            ]
        )
        if (q5.question === "Newton's Third Law") {
            score += 1
            console.log(right_choice)
        }
        else {
            console.log(wrong_choice)
        }
        console.log(`As you got ${score} right, you got ${score} points out of 5`)
    }
