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
    interval: 15,
    time: 15,
    //answer order
    answerOrder: [],
    // questions
    questions:[{
        question: "What was ALF's girlfriend from Melmac's name?",
        //possible answers to those questions
        answerSelected: 0,
        possibleAnswers: [{
            answer: "Rhonda",
            isCorrect: true,
            //link to picture for right asnwer
            pickLink: "assets/images/ALF.jpg"
            },{
            answer: "Sharnath",
            isCorrect: false
            },{
            answer: "Beatrice",
            isCorrect: false
            },{
            answer: "Kathy",
            isCorrect: false
            }]
        },
        {
        question: "What actor was famous for the line nanoo nanoo?",
        answerSelected: 0,
        possibleAnswers: [{
            answer: "Robin Williams for his character Mork from Ork",
            isCorrect: true,
            pickLink: "assets/images/RobinWilliams.jpg"
            },{
            answer: "Sue Ellen's sister, Kristin ",
            isCorrect: false
            },{
            answer: "Dorothy Tootie Ramsey",
            isCorrect: false
            },{
            answer: "Rick Blake in Dancing With the Stars",
            isCorrect: false
            }]
        },
        {
        question: "What's the name of the company that creates Wile E. Coyote's many devices?",
        answerSelected: 0,
        possibleAnswers: [{
            answer: "Acme",
            isCorrect: true,
            pickLink: "assets/images/acme.jpg"
            },{
            answer: "General Electric",
            isCorrect: false
            },{
            answer: "Acmax",
            isCorrect: false
            },{
            answer: "Axno",
            isCorrect: false
            }]
        },
        {
        question: "What does Marvin the Martian call his stick of dynamite?",
        answerSelected: 0,
        possibleAnswers: [{
            answer: "The Illudium Q-36 Exposive Space Modulator",
            isCorrect: true,
            pickLink: "assets/images/martian.jpg"
            },{
            answer: "Boom Stick",
            isCorrect: false
            },{
            answer: "The P-34 Thermal Detonator",
            isCorrect: false
            },{
            answer: "The Ultimate Nullifier",
            isCorrect: false
            }]
        },
        {
        question: "What hit song was featured on the Space Jam soundtrack?",
        answerSelected: 0,
        possibleAnswers: [{
            answer: "I Believe I Can Fly", 
            isCorrect: true,
            pickLink: "assets/images/spaceJam.jpg"
            },{
            answer: "Beautiful Day",
            isCorrect: false
            },{
            answer: "First of the Month",
            isCorrect: false
            },{
            answer: "Believe!",
            isCorrect: false
            }]
        },
        {
        question: "What was the Tazamanian Devil's solo TV show called?",
        answerSelected: 0,
        possibleAnswers: [{
            answer: "Taz-Mania", 
            isCorrect: true,
            pickLink: "assets/images/taz.jpg"
            },{
            answer: "The Devil Down Under",
            isCorrect: false
            },{
            answer: "Trippen with Taz",
            isCorrect: false
            },{
            answer: "Devil you Know",
            isCorrect: false
            }]
        },
        {
        question: "Complete the quote: I will name him ______ and I will hug him and pet him",
        answerSelected: 0,
        possibleAnswers: [{
            answer: "George", 
            isCorrect: true,
            pickLink: "assets/images/george.jpg"
            },{
            answer: "Ralph",
            isCorrect: false
            },{
            answer: "Rick",
            isCorrect: false
            },{
            answer: "Darrin",
            isCorrect: false
            }]
        },
        {
        question: "The short What's Opera Doc? lampoons the works of which composer?",
        answerSelected: 0,
        possibleAnswers: [{
            answer: "Ralph Wagner", 
            isCorrect: true,
            pickLink: "assets/images/operaDoc.jpg"
            },{
            answer: "Wolfgang Amadeus Mozart",
            isCorrect: false
            },{
            answer: "Giacomo Puccini",
            isCorrect: false
            },{
            answer: "Giuseppe Verdi",
            isCorrect: false
            }]
        },
        {
        question: "Complete the quote: I knew I should have taken a left turn at __________",
        answerSelected: 0,
        possibleAnswers: [{
            answer: "Albuquerque", 
            isCorrect: true,
            pickLink: "assets/images/Albuquerque.jpeg"
            },{
            answer: "Tallahassee",
            isCorrect: false
            },{
            answer: "Charlotte",
            isCorrect: false
            },{
            answer: "Baton Rouge",
            isCorrect: false
            }]
        },
        {
        question: "What is Foghorn Leghorn's signature phrase?",
        answerSelected: 0,
        possibleAnswers: [{
            answer: "I say, I say", 
            isCorrect: true,
            pickLink: "assets/images/Foghorn.jpeg"
            },{
            answer: "Whats up doc?",
            isCorrect: false
            },{
            answer: "Listen up y'all",
            isCorrect: false
            },{
            answer: "I do declare",
            isCorrect: false
            }]
        }
    ],

    start: function(){
        //determine if game is already running
        if(gameActive===true){
            //game is already running execute next round
            triviaGame.questionShown();
        } else {
            //start a new game
            triviaGame.questionShown();
        };
    },

    //round reset function
    rReset: function(){
        clearInterval(intervalID);
        clearTimeout();
        triviaGame.answerOrder.length=0;
        triviaGame.time=triviaGame.interval;
        $("#timing").show();
        $("#Trivia").show();
        $("#answerVerification").hide();
        $("#scoreData").hide();
        $("#timer").text(triviaGame.time);
        triviaGame.start();
    },

    //game reset function
    gReset: function(){
        gameActive===true;
        $("#start").hide(); 
        triviaGame.questionsAsked.length=0;
        triviaGame.rReset();
    },

    //determine if game is over or not.
    questionShown: function() {
        if(triviaGame.questionsAsked.length === 10){
            // gamee over display results
            triviaGame.displayResults();
            $("#start").show();            
        } else{
            //pick new question
            triviaGame.pickQuestion();
        }
    },

    //pick question
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
        if(triviaGame.answerOrder.indexOf(answer)===-1){
            triviaGame.answerOrder.push(answer);
            console.log("answer order: "+ triviaGame.answerOrder)
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
        $("#a0").text(triviaGame.questions[qSelector].possibleAnswers[triviaGame.answerOrder[0]].answer);
        $("#a0").attr('ans',triviaGame.questions[qSelector].possibleAnswers[triviaGame.answerOrder[0]].isCorrect);
        $("#a1").text(triviaGame.questions[qSelector].possibleAnswers[triviaGame.answerOrder[1]].answer);
        $("#a1").attr('ans',triviaGame.questions[qSelector].possibleAnswers[triviaGame.answerOrder[1]].isCorrect);
        $("#a2").text(triviaGame.questions[qSelector].possibleAnswers[triviaGame.answerOrder[2]].answer);
        $("#a2").attr('ans',triviaGame.questions[qSelector].possibleAnswers[triviaGame.answerOrder[2]].isCorrect);
        $("#a3").text(triviaGame.questions[qSelector].possibleAnswers[triviaGame.answerOrder[3]].answer);
        $("#a3").attr('ans',triviaGame.questions[qSelector].possibleAnswers[triviaGame.answerOrder[3]].isCorrect);
        triviaGame.timeLeft();
    },

    //interval function for countdown
    timeLeft: function(){
        $("#timer").text("Time Remaining: "+ triviaGame.time);
        intervalID = setInterval(triviaGame.countDown,1000);
    },

    //displays countdown timer in the dom
    countDown: function(){
        if(triviaGame.time>0){
            //time still remainin
            triviaGame.time --;
            $("#timer").text("Time Remaining: "+ triviaGame.time);
        }else{
            //times up increment answers not answered and move to next round
            triviaGame.answeredNot ++;
            triviaGame.rReset();
        }
    },

    // executed when answer is picked to see if answer is correct
    check: function(s){ 
        clearInterval(intervalID);
        setTimeout(triviaGame.rReset, 3000);
        if(s==="true"){
            triviaGame.answeredRight++;
            $("#timing").hide();
            $("#Trivia").hide(); 
            $("#answerVerification").show();
            $("#answerID").text("Correct!");
            $("#image-holder").attr('src',triviaGame.questions[qSelector].possibleAnswers[0].pickLink);   
        } else {
            triviaGame.answeredWrong++;
            $("#timing").hide();
            $("#Trivia").hide(); 
            $("#answerVerification").show();
            $("#answerID").text("Incorrect - Correct Answer was: " + triviaGame.questions[qSelector].possibleAnswers[0].answer);
            $("#image-holder").attr('src',"assets/images/wrong.jpg");    
        }
    },

    //when round is over updates the dom with game stats
    displayResults: function(){
        gameActive ===false;
        clearInterval(intervalID);   
        $("#timing").hide();
        $("#Trivia").hide();
        $("#scoreData").show();
        $("#asnweredCorrectly").text("Correct Answers:  " + triviaGame.answeredRight);
        $("#asnweredIncorrrectly").text("Incorrect Answers:  " + triviaGame.answeredWrong);
        $("#didntAnswer").text("Didnt Answer:  " + triviaGame.answeredNot);
    }

};

    
 //set global variables   
var intervalID;
var countDownID;
var gameActive = false;
var s=false;

//execute the game
window.onload = function() {
    $("#timing").hide();
    $("#Trivia").hide();
    $("#scoreData").hide();
    $("#answerVerification").hide();
    $("#startButton").on("click", triviaGame.gReset);
    $(".tAnswer").on("click",  function(){
        s = $(this).attr('ans');
        console.log("s = "+ s);
        triviaGame.check(s);
    });
};
