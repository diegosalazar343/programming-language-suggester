function determineResult(input1, input2, input3, input4,input5) {

  const valTotal = input1 + input2 + input3 + input4 + input5;

  if (valTotal <= 8) {
    language = "Csharp" ;
  }
  else if (valTotal<= 12) {
    language = "JavaScript"
  }
  else{
    language = "Ruby"
  }
  return language;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const interests = parseInt($("input:radio[name=interests]:checked").val());
    const animal = parseInt($("input:radio[name=animal]:checked").val());
    const learning = parseInt($("input:radio[name=learning]:checked").val());
    const sport = parseInt($("input:radio[name=sport]:checked").val());
    const weaknesses = parseInt($("input:radio[name=weaknesses]:checked").val());
    let languageResult = determineResult(interests,animal,learning,sport,weaknesses);

    if (languageResult === "Csharp") {
      $("#quizResults").hide();
      $("#quizResults").show();
      $("#languageResults").text("Csharp");
      $(".image").hide();
      $("#Csharp").show();
    } else if (languageResult === "JavaScript") {
      $("#quizResults").hide();
      $("#quizResults").show();
      $("#languageResults").text("JavaScript")
      $(".image").hide();
      $("#JavaScript").show();
    } else {
      $("#quizResults").hide();
      $("#quizResults").show();
      $("#languageResults").text("Ruby")
      $(".image").hide();
      $("#Ruby").show();
    }
    console.log(languageResult);
  });
});
