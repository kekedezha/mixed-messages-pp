//Mixed Messages Program. 
//This program will generate a new, randomized output every time a user runs it. 

//randNumGen(num) Function
//Generate a random number between 1 and num
const randNumGen = (num) => {
    return Math.floor(Math.random() * num);
}

//Stoic message object that stores all the information the program will retrieve to display a random message. 
const stoicMessage =  {
    part: ['Part I: The Discipline of Perception', 'Part II: The Discipline of Action', 'Part III: The Discipline of Will'],
    partOneMonths: ['January: Clarity', 'February: Passions and Emotions', 'March: Awareness', 'April: Unbiased Thought'],
    partTwoMonths: ['May: Right Action','June: Problem Solving', 'July: Duty', 'August: Pragmatism'],
    partThreeMonths: ['September: Fortitude and Resilience', 'October: Virtue and Kindness',
    'November: Acceptance / Amor Fati', 'December: Meditation On Morality'],
    jan: ["Be ruthless to the things that don't matter.", "Cut the strings that pull your mind.", "Keep it simple.",
    "You don't have to stay on top of everything.", "Pay attention to the wise, what they run away from and what they seek out."],
    feb: ["Steady your impulses.", "You don't have to have an opinion.", "Anger is bad fuel.", "Pleasure can become punishment.",
    "You can't always (be) get(ting) what you want."],
    mar: ["Don't tell yourself stories.", "The present is all we possess.", "Why do you need to impress these people again?",
    "You're a product of your training.", "Self-deception is our enemy."],
    apr: ["Be wary of what you let in.", "Trust, but verify.", "Judgments cause disturbance.", "If you want to learn, be humble.",
    "Less is more."],
    may: ["Show, not tell, what you do.", "Guilt is worse than jail.", "Kindness is always the right response.", "Count your blessings",
    "How you do anything is how you do everything."],
    jun: ["Solve problems early.", "A trained mind is better than any script.", "Listening accomplishes more than speaking.", 
    "No shame is needing help.", "Stay focused on the present."],
    jul: ["No one said it'd be easy.", "Stop monkeying around.", "A little knowledge is dangerous.", "Doing the right thing is enough.", 
    "Your career is not a life sentence."],
    aug: ["Don't go expecting perfection.", "The good life is anywhere.", "Silence is strength.", "Don't be miserable in advance.",
    "Don't sweat the small stuff."],
    sep: ["A strong soul is better than good luck.", "Focus on what is yours alone.", "Do not be deceived by fortune.", "Nothing to fear but fear itself.", 
    "Be down to earth, or be brought down."],
    oct: ["Words can't be unsaid.", "Set the standards and use them.", "Always love.", "Revenge is a dish best not served.", "Don't get mad, help."],
    nov: ["The strong accept responsibility.", "Attachments are the enemy.", "Train to let go of what's not yours.", "It's not of them, it's on you.",
    "You're going to be ok."],
    dec: ["Don't hide from your feelings.", "Don't sell yourself too cheaply.", "Know thyself-before it's too late.", "Don't burn the candle at both ends.", "Give thanks."]
}

//runProgram() Function
//This Function will call the randNum function and use the stoicMessage object to generate a message. 
const runProgram = () => {
    const partNum = randNumGen(3);
    const monthNum = randNumGen(4);
    const messNum = randNumGen(5);

    console.log("Hello! Welcome the the random stoic message generator! This program will generate a random message from 'The Daily Stoic' written by Ryan Holiday and Stephen Hanselman.");
    console.log("See the random stoic message below: \n");
    console.log(stoicMessage.part[partNum]);
    if (partNum === 0) {
        console.log(stoicMessage.partOneMonths[monthNum]);
        if (monthNum === 0) {
            console.log(`${stoicMessage.jan[messNum]}`);
        } else if (monthNum === 1) {
            console.log(`${stoicMessage.feb[messNum]}`);
        } else if (monthNum === 2) {
            console.log(`${stoicMessage.mar[messNum]}`);
        } else if (monthNum === 3) {
            console.log(`${stoicMessage.apr[messNum]}`);
        };
    } else if (partNum === 1) {
        console.log(stoicMessage.partTwoMonths[monthNum]);
        if (monthNum === 0) {
            console.log(`${stoicMessage.may[messNum]}`);
        } else if (monthNum === 1) {
            console.log(`${stoicMessage.jun[messNum]}`);
        } else if (monthNum === 2) {
            console.log(`${stoicMessage.jul[messNum]}`);
        } else if (monthNum === 3) {
            console.log(`${stoicMessage.aug[messNum]}`);
        };
    } else if (partNum === 2) {
        console.log(stoicMessage.partThreeMonths[monthNum]);
        if (monthNum === 0) {
            console.log(`${stoicMessage.sep[messNum]}`);
        } else if (monthNum === 1) {
            console.log(`${stoicMessage.oct[messNum]}`);
        } else if (monthNum === 2) {
            console.log(`${stoicMessage.nov[messNum]}`);
        } else if (monthNum === 3) {
            console.log(`${stoicMessage.dec[messNum]}`);
        };
    };

    console.log("\nIf you enjoyed the stoic messages, go and buy the book today");

    return '';
}

//Run the random message generator!
console.log(runProgram()); //This line will be used to test the script throughout development.