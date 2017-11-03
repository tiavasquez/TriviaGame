$(document).ready(function() {

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
        count = 30;
        counter=setInterval(timer, 1000); 
    }
     
    function timer() {
        count=count-1;
        if (count <= 0) {
            clearInterval(counter);
            return;
        }
        document.getElementById("timer").innerHTML=count + " secs"; 
    }    

    //TODO: if count = 0 OR they click on done button,  gradeTest
    $('#doneButton').on('click', gradeTest);
    //TODO: if they click done, gradetest and stop timer

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

        alert("#correct: " + numCorrect);
        alert("#incorrect: " + numIncorrect);
        alert("#unanswered: " + unAnswered);
        
    } //end of gradeTest function

    
}); //end of document.ready