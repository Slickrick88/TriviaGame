// create object that hold
var triviaGame = {
    // variables
    //Game right asnwers
    answeredRight: 0,
    //Game wrong answers
    answeredWrong: 0,
    //Game not answered
    answeredNot: 0,
    //selectedQuestions
    //questionsArray
    questionsAsked: [],
    //interval
    interval: 28,
    time: 28,
    //answer order
    answerOrder: [],
    // questions
    questions:[{
        question: "question0",
        //possible answers to those questions
        answerSelected: 0,
        possibleAnswers: [{
            answer: "a",
            isCorrect: "true",
            //link to picture for right asnwer
            pickLink: "path"
            },{
            answer: "b",
            isCorrect: "false"
            },{
            answer: "c",
            isCorrect: "false"
            },{
            answer: "d",
            isCorrect: "false"
            }]
        },
        {
        question: "question1",
        answerSelected: 0,
        possibleAnswers: [{
            answer: "a",
            isCorrect: "true",
            pickLink: "path"
            },{
            answer: "b",
            isCorrect: "false"
            },{
            answer: "c",
            isCorrect: "false"
            },{
            answer: "d",
            isCorrect: "false"
            }]
        },
        {
        question: "question2",
        answerSelected: 0,
        possibleAnswers: [{
            answer: "a",
            isCorrect: "true",
            pickLink: "path"
            },{
            answer: "b",
            isCorrect: "false"
            },{
            answer: "c",
            isCorrect: "false"
            },{
            answer: "d",
            isCorrect: "false"
            }]
        },
        {
        question: "question3",
        answerSelected: 0,
        possibleAnswers: [{
            answer: "a",
            isCorrect: "true",
            pickLink: "path"
            },{
            answer: "b",
            isCorrect: "false"
            },{
            answer: "c",
            isCorrect: "false"
            },{
            answer: "d",
            isCorrect: "false"
            }]
        },
        {
        question: "question4",
        answerSelected: 0,
        possibleAnswers: [{
            answer: "a", 
            isCorrect: "true",
            pickLink: "path"
            },{
            answer: "b",
            isCorrect: "false"
            },{
            answer: "c",
            isCorrect: "false"
            },{
            answer: "d",
            isCorrect: "false"
            }]
        },
        {
        question: "question5",
        answerSelected: 0,
        possibleAnswers: [{
            answer: "a", 
            isCorrect: "true",
            pickLink: "path"
            },{
            answer: "b",
            isCorrect: "false"
            },{
            answer: "c",
            isCorrect: "false"
            },{
            answer: "d",
            isCorrect: "false"
            }]
        },
        {
        question: "question6",
        answerSelected: 0,
        possibleAnswers: [{
            answer: "a", 
            isCorrect: "true",
            pickLink: "path"
            },{
            answer: "b",
            isCorrect: "false"
            },{
            answer: "c",
            isCorrect: "false"
            },{
            answer: "d",
            isCorrect: "false"
            }]
        },
        {
        question: "question7",
        answerSelected: 0,
        possibleAnswers: [{
            answer: "a", 
            isCorrect: "true",
            pickLink: "path"
            },{
            answer: "b",
            isCorrect: "false"
            },{
            answer: "c",
            isCorrect: "false"
            },{
            answer: "d",
            isCorrect: "false"
            }]
        },
        {
        question: "question8",
        answerSelected: 0,
        possibleAnswers: [{
            answer: "a", 
            isCorrect: "true",
            pickLink: "path"
            },{
            answer: "b",
            isCorrect: "false"
            },{
            answer: "c",
            isCorrect: "false"
            },{
            answer: "d",
            isCorrect: "false"
            }]
        },
        {
        question: "question9",
        answerSelected: 0,
        possibleAnswers: [{
            answer: "a", 
            isCorrect: "true",
            pickLink: "path"
            },{
            answer: "b",
            isCorrect: "false"
            },{
            answer: "c",
            isCorrect: "false"
            },{
            answer: "d",
            isCorrect: "false"
            }]
        }
    ],

    start: function(){
        if(gameActive===true){
            triviaGame.questionShown();
        } else {
            gameActive===true;
            triviaGame.questionShown(); 
        };
    },

    pause: function(){
        gameActive===false;
        triviaGame.questionsAsked.length=0;
        triviaGame.time=28;
        clearInterval(intervalID);
        $("#timer").text("Paused");
        return;
    }, 

    reset: function(){
        triviaGame.questionsAsked.length=0;
        triviaGame.answerOrder.length=0;
        triviaGame.time=triviaGame.interval;
        clearInterval(intervalID);
        triviaGame.start();
    },

    //pick question
    questionShown: function() {
        console.log("Button Pushed");
        if(triviaGame.questionsAsked.length === 10){
            reset();            
        } else{
            triviaGame.pickQuestion();
        }
    },

    pickQuestion: function(){
        qSelector = Math.floor(Math.random() * 10);
        console.log("qSelector = "+qSelector);
        // check to see if question has been selected previously
        if(triviaGame.questionsAsked.indexOf(qSelector)===-1){
            //remove question from possible additional questions
            triviaGame.questionsAsked.push(qSelector);
            console.log(triviaGame.questions[qSelector].question);
            //push question to dom
            $("#TriviaQ").text(triviaGame.questions[qSelector].question);
            //populate possible answers
            triviaGame.pickRandomAnswers();
        } else {
            triviaGame.pickQuestion();
        }
    },
    
    //randomizes the answer order
    pickRandomAnswers: function(){
        answer = Math.floor(Math.random() * 4);
        console.log("pick answer ="+ answer);
        if(triviaGame.answerOrder.indexOf(answer)===-1){
            triviaGame.answerOrder.push(answer);
            if(triviaGame.answerOrder.length===4){
                //update dom
                triviaGame.UpdateAnswers();
            } else {
                triviaGame.pickRandomAnswers();
            }
        }else{
            triviaGame.pickRandomAnswers();
        }
    },

    // updates dom based on random answer order
    UpdateAnswers: function(){
        console.log("updatedAsnwers");
        // for(i=0; i<3; i++){
        //     console.log("i is = " +i+" "+triviaGame.answerOrder[i])
        //     a = parseInt(triviaGame.answerOrder[i]);
        //     q = triviaGame.questions[qSelector].question.possibleAnswers[a].answer;
        //     id = "#"+i;
            // console.log("id= "+ id + "attr= "+ triviaGame.questions[qSelector].question.possibleAnswers[a].isCorrect);
            // $(id).text(triviaGame.questions[qSelector].question.possibleAnswers[a].answer);
            // $(id).attr(triviaGame.questions[qSelector].question.possibleAnswers[a].isCorrect);
        // };
        //starts timer at interval determined
        $("#a0").text(triviaGame.questions[qSelector].possibleAnswers[triviaGame.answerOrder[0]].answer);
        $("#a0").attr(triviaGame.questions[qSelector].possibleAnswers[triviaGame.answerOrder[0]].isCorrect);
        $("#a1").text(triviaGame.questions[qSelector].possibleAnswers[triviaGame.answerOrder[1]].answer);
        $("#a2").text(triviaGame.questions[qSelector].possibleAnswers[triviaGame.answerOrder[2]].answer);
        $("#a3").text(triviaGame.questions[qSelector].possibleAnswers[triviaGame.answerOrder[3]].answer);
        triviaGame.timeLeft();
    },

    //interval function for countdown
    timeLeft: function(){
        intervalID = setInterval(triviaGame.countDown,1*1000);
    },

    //displays countdown timer in the dom
    countDown: function(){
        if(triviaGame.time>0){
            triviaGame.time --;
            $("#timer").text(triviaGame.time);
        }else{
            triviaGame.stop()
        }
    },

    stop: function(){
        triviaGame.answeredNot ++;
        triviaGame.reset();
    }

};

    
    
var intervalID;
var gameActive = false;

window.onload = function() {
$("#startButton").on("click", triviaGame.start);
$("#pauseButton").on("click", triviaGame.pause);
$("#a0").on("click", triviaGame.check);
$("#a1").on("click", triviaGame.check);
$("#a2").on("click", triviaGame.check);
$("#a3").on("click", triviaGame.check);
};
