

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var timer = 30;
    var mode = "start";
    
    var question = [{
        question: "What is the capital of Scotland?",
        choices: ["Glasgow", "Aberdeen", "Edinburgh", "Dundee" ],
        validAnswer: 2
        }, {
        question:"What is the official animal of Scotland?",
        choices: ["Sheep", "Unicorn", "Haggis", "Highland Cow"],
        validAnswer: 1
        
        }, {
        question:"Which of the following is NOT a traditional Scottish dish?",
        choices: ["Haggis, Neeps ans Tatties", "Cullen Skink", "Clootie Dumplings", "Sprooters"],
        validAnswer: 3
        
        }, {
        question:"Who is the First Minister of Scotland?",
        choices: ["William Wallace", "Nicola Sturgeon", "Robert Mellish", "Jeremy Corbyn"],
        validAnswer: 1
        
        }
    ];

$(document).ready(function () {    
    

    function timer() {
    count--;
    if (count <= 0) {
        clearInterval(counter);
        return;
    }   
    $("#timer").html("Time remaining: " + "00:" + count + " secs"); 
    };

    $("#start").on("click", function() {
        $(this).hide();
        counter = setInterval(timer, 1000);
    });

    


});