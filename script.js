//Mixed Messages Program. 
//This program will generate a new, randomized output every time a user runs it. 

//randNumGen() Function
//Generate a random number between 0 and 9
const randNumGen = () => {
    const randNum = Math.floor(Math.random() * 10);
    return randNum;
}