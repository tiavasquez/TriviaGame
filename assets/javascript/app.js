$(document).ready(function() {

    $("#questionsSection").hide();
    $("#doneButton").hide();
    $("#timeRemaining").hide();
    $("#results").hide();
    var numCorrect;
    var numIncorrect;
    var unAnswered;
    var count;
    var counter; 

    $("#startButton").on("click", playTrivia);

    function playTrivia() {
        numCorrect = 0;
        numIncorrect = 0;
        unAnswered = 0;
        //hide start button
        $("#startButton").hide();
        //show questions
        $("#questionsSection").show();
        //show time remaining
        $("#timeRemaining").show();
        //show done button
        $("#doneButton").show();
        count = 30;
        //show how much time they have to start with
        document.getElementById("timer").innerHTML=count;
        counter=setInterval(timer, 1000); 
    }
     
    function timer() {
        count=count-1;
        if (count <= 0) {
            //if time runs out, gradetest
            clearInterval(counter);
            gradeTest();
            return;
        }   
        document.getElementById("timer").innerHTML=count;   
    }    
    
    //if they click done, stop timer and gradetest
    $('#doneButton').on('click', function() {
        clearInterval(counter);
        gradeTest();
    });
    

    function gradeTest() { 
        var qName;
        //find how many questions there are
        var n =  $("div.question").length;
        //loop through all questions
        for (i=1; i<=n; i++) { 
            qName = "question" + i;
            var value = $("[name=" + qName +"]:checked").val();
            //based on the answer, add to the appropriate counter
            switch(value) {
                case "correct":
                    numCorrect++;
                    break;
                case "incorrect":
                    numIncorrect++;
                    break;
                case undefined:
                    unAnswered++;
                    break;
                default:
                    console.log("unexpected value: "+ value);
            }
        } //end of for loop

        //show results
        $("#results").show();
        document.getElementById("correctCount").innerHTML=numCorrect;
        document.getElementById("incorrectCount").innerHTML=numIncorrect;
        document.getElementById("unansweredCount").innerHTML=unAnswered;
        
        //hide other elements on page
        $("#questionsSection").hide();
        $("#doneButton").hide();
        $("#timeRemaining").hide();

    } //end of gradeTest function

    
}); //end of document.ready