(function() {

    var elem = document.getElementById("myBar");
    var width = 1;
    var timesec = 0;
    timesec ++;

    var id = setInterval(frame, 1800);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + '%';
      }
    }
    window.onload = function(){
      var hou = 2;
      var sec = 59;

      setInterval(function(){
      var a = new Date();
          document.getElementById("timer").innerHTML = hou +" : " + sec ;

          sec--;
          if(sec == 00){
              hou--;
              sec = 59;
              if (hou == 0 ){
                document.body.style.backgroundColor ="#C44536";
                document.body.style.transition = "all 0.5s";
                  alert("QUIZZ IS OVER!");
                  hou = 0;
                  sec = 00;

              }
          }
          },1000);


  }

  function resetTimer()
  {

  }
  var questions = [{
    question: "What is the third closest planet from the Sun  in our Solar system?",
    choices: ["Venus", "Uranus", "Earth"],
    correctAnswer: 2
  }, {
    question: "What is the distance between Earth and the Sun?",
    choices: ["4.6 billions km","13.2 billions km","2 billions km"],
    correctAnswer: 0
  }, {
    question: "What is the biggest planet?",
    choices: ["Jupiter","Uranus","Pluto"],
    correctAnswer: 0
  }, {
    question: "What is the hottest planet ?",
    choices: ["Venus","Mars","Mercury"],
    correctAnswer: 2
  }, {
    question: "How long does it take for the sunlight to reach our planet?",
    choices: ["20 secondes","15 minutes","8 minutes"],
    correctAnswer: 3
  }, {
    question: "Who was the first Astronaut?",//
    choices: ["Neil Armastrong","Donald Trump","Obama"],
    correctAnswer: 0
  }, {
    question: "What was the name of the first Satelitte sent?",//
    choices: ["Sputnik","Mariejoue","Nova"],
    correctAnswer: 0
  }, {
    question: "What is a light year?",
    choices: ["Travelling distance","Time","Density"],
    correctAnswer: 0
  }, {
    question: "Planets are made of Gas or Rock?",
    choices: ["Rock","Gas","Both"],
    correctAnswer: 3
  }, {
    question: "The furthest Satellite send was?",
    choices: ["Sayonara-43","Voyager 1","Sputnik-9"],
    correctAnswer: 2
  }];

  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object

  // Display initial question
  Next();

  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();

    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {
      return false;
    }
    choose();

    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Please make a selection!');
    } else {
      questionCounter++;
      Next();
    }
  });

  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();

    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    Next();
  });

  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();

    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    Next();
    $('#start').hide();
    document.body.style.backgroundColor ="var(--colorOne)";
    document.body.style.transition = "all 0.5s";
  });

  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });

  // Creates and returns the div that contains the questions and
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });

    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);

    var question = $('<p>').append(questions[index].question);
    qElement.append(question);

    var radioButtons = createRadios(index);
    qElement.append(radioButtons);

    return qElement;
  }

  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }

  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }

  // Displays next requested element
  function Next() {
    quiz.fadeOut(function() {
      $('#question').remove();

      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }

        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){

          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }

  // Computes score and returns a paragraph element to be displayed
  function displayScore() {

    var bgColor = ["#C44536","#8FC0A9"];
    var score = $('<p>',{id: 'question'});
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }

    score.append('Your score is ' + numCorrect + ' / ' +
                 questions.length );
                 if (numCorrect > 5) {
                   document.body.style.backgroundColor =bgColor[1];
                   document.body.style.transition = "all 0.5s";
                 } else {
                   document.body.style.backgroundColor =bgColor[0];
                   document.body.style.transition = "all 0.5s";
                 }
    return score;
  }
})();
