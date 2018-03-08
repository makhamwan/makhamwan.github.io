$(".block-choice").hide();
$(".image").hide();

var sumQuiz = list;
var listQuestion = [];
var answer;
var timeToPlay = 0;
var score = 0;
var numQuiz = 0;
var sumGameNo = 1;
var localTime = 5;
var beginTime;
var myPicture;

$(document).ready(function () {
  $(".option1").click(function () {
    $(".option1").hide();
    $(".option2").hide();
    numQuiz = 10;
    start();
  });
});

$(document).ready(function () {
  $(".option2").click(function () {
    $(".option1").hide();
    $(".option2").hide();
    numQuiz = 15;
    start();
  });
});

$(document).ready(function () {
  $(".choice1").click(function () {
    checkAnswer($(".choice1").text());
    newQuiz();
  });
});

$(document).ready(function () {
  $(".choice2").click(function () {
    checkAnswer($(".choice2").text());
    newQuiz();
  });
});

$(document).ready(function () {
  $(".choice3").click(function () {
    checkAnswer($(".choice3").text());
    newQuiz();
  });
});

$(document).ready(function () {
  $(".choice4").click(function () {
    checkAnswer($(".choice4").text());
    newQuiz();
  });
});

function start() {
  $(".localTime").show();
  $(".game").show();
  $(".block-choice").show();
  $(".exit").show();
  $(".image").show();
  $(".numQuiz").show();
  $(".timeToPlay").show();
  $(".score").show();
  setQuestion();
  $(".numQuiz").html("No: " + sumGameNo + "/" + numQuiz);
  startGame();
  setTimer();
}

function setQuestion() {
  while (true) {
    let number = Math.floor(Math.random() * 15);
    let no = sumQuiz[number].no;
    if (listQuestion.indexOf(no) == -1) {
      listQuestion.push(no);
      console.log(listQuestion);
      let question = sumQuiz[number].question;
      answer = sumQuiz[number].answer;
      myPicture = sumQuiz[number].image;
      let choice1 = sumQuiz[number].choice1;
      let choice2 = sumQuiz[number].choice2;
      let choice3 = sumQuiz[number].choice3;
      let choice4 = sumQuiz[number].choice4;
      $(".question").html(question);
      $(".choice1").html(choice1);
      $(".choice2").html(choice2);
      $(".choice3").html(choice3);
      $(".choice4").html(choice4);
      break;
    }
  }
}

function checkAnswer(choice) {
  if (answer == choice) {
    score++;
  }
}

function setTimer() {
  localTime = localTime - 1;
  $(".localTime").html(localTime + " sec");
  if (beginTime) {
    setTimeout(setTimer, 1000);
  }
  if (localTime < 0) {
    newQuiz();
  }
}
function startGame() {
  beginTime = true;
  $(".score").html( score + " score");
}
function stopTimer() {
  beginTime = false;
  localTime = 5;
}
function newQuiz() {
  sumGameNo++;
  $(".numQuiz").html("No: " + sumGameNo );
  if (sumGameNo > numQuiz) {
    stopTimer();
    $(".block-choice").hide();
    $(".image").hide();
    $(".localTime").hide();
    $(".timeToPlay").show();
    $(".numQuiz").html("No: " + numQuiz + "/" + numQuiz);
    $(".toggle").show();
    $(".timeToPlay").html("Time: " + Math.floor(timeToPlay / 60) + " minute " + timeToPlay % 60 + " sec");
  }
  else {
    setQuestion();
    timeToPlay = timeToPlay + (5 - localTime);
    stopTimer();
    setTimer();
    startGame();
  }
  $(".score").show();
}
$(document).ready(function () {
  $("#show").click(function () {
    if ($(".summary").is(":visible")) {
      $(".summary").hide();
    }
    else {
      $(".summary").show();
    }
  });
});
