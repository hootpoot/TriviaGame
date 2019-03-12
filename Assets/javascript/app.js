//set variables
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var count = 30;
var mode = "start";
var currentQuestion = 0;

//questions
var question = [{
    question: "What is the capital of Scotland?",
    input: ["Glasgow", "Aberdeen", "Edinburgh", "Dundee"],
    validAnswer: "2",
    image: "Assets/images/edinburgh.gif"
}, {
    question: "What is the official animal of Scotland?",
    input: ["Sheep", "Unicorn", "Haggis", "Highland Cow"],
    validAnswer: "1",
    image: "Assets/images/unicorn.gif"

}, {
    question: "Which of the following is NOT a traditional Scottish dish?",
    input: ["Haggis, Neeps and Tatties", "Cullen Skink", "Clootie Dumplings", "Sprooters"],
    validAnswer: "3",
    image: "Assets/images/haggis-use.jpg"
}, {
    question: "Who is the First Minister of Scotland?",
    input: ["William Wallace", "Nicola Sturgeon", "Robert Mellish", "Jeremy Corbyn"],
    validAnswer: "1",
    image: "Assets/images/nicola.gif"
}, {
    question: "The famous novel 'Trainspotting' was written by which Scottish author?",
    input: ["Irvine Welsh", "Denise Mina", "Iain Banks", "Walter Scott"],
    validAnswer: "0",
    image: "Assets/images/trainspotting.gif"
}, {
    question: "What Disney movie takes place in Scotland?",
    input: ["'Frozen'", "'Tangled'", "'Sleeping Beauty'", "'Brave'"],
    validAnswer: "3",
    image: "Assets/images/brave.gif"
}];

$(document).ready(function () {

    //set timer
    function timer() {
        count--;
        if (count <= 0) {
            clearInterval(counter);
            notRightAnswer();

        }
        $("#timer").html("00:" + count + " secs");
    };
    //main menu, start
    $("#start").on("click", function () {
        $(this).hide();

        showQuestion();
    });
    // initiate questions
    function showQuestion() {
        //assign question to div
        $("#questionScreen").css("display", "inline");
        $("#question").html(question[currentQuestion].question);

        //clear out answers
        $("#answers").html("");

        // hide correct and incorrect screens
        $("#correctScreen").css("display", "none");
        $("#incorrectScreen").css("display", "none");

        //timer
        count = 30;
        counter = setInterval(timer, 1000);
        $("#timer").html("00:" + count + " secs");

        var choicesArr = question[currentQuestion].input;
        var buttonsArr = [];
        //for loop to assign answer choices to buttons
        for (let i = 0; i < choicesArr.length; i++) {
            var button = $("<button/>");
            button.text(choicesArr[i]);
            button.attr('data-id', i);
            $('#answers').append(button);
            button.addClass("answer-choice");
            button.on("click", onAnswer);
        }


    };

    function onAnswer() {
        let correctId = question[currentQuestion].validAnswer;
        let pickedId = $(this).attr("data-id");
        clearInterval(counter);
        if (correctId === pickedId) {
            
            rightAnswer();
        } else {
            notRightAnswer();
        };


    };

    function rightAnswer() {
        $("#questionScreen").css("display", "none");
        $("#correctScreen").css("display", "inline");
        $(".gif").attr("src", question[currentQuestion].image);
        correct++;
        pause = setTimeout(pauseEnded, 4000);
    }

    function notRightAnswer() {
        $("#questionScreen").css("display", "none");
        $("#incorrectScreen").css("display", "inline");
        let correctId = question[currentQuestion].validAnswer;
        $("#rightAnswer").text(question[currentQuestion].input[correctId]);
        $(".gif").attr("src", question[currentQuestion].image);
        incorrect++;
        pause = setTimeout(pauseEnded, 4000);

    }

    function showEndScreen() {
        $("#endScreen").css("display", "inline");
        $("#correctScreen").css("display", "none");
        $("#incorrectScreen").css("display", "none");
        $("#number-right").text(correct);
        $("#number-wrong").text(incorrect);
        //$("#number-unanswered").text(unanswered);
    }

    function pauseEnded() {
        currentQuestion++;

        if (currentQuestion === question.length) {
            showEndScreen();
        } else {
            showQuestion();
        }
    }


});