(function() {
    'use strict';
  
    var section = document.querySelectorAll(".content-section");
    var sections = {};
    var i = 0;
    const questionTitle = document.getElementById("question-title");
  
    Array.prototype.forEach.call(section, function(e) {
      sections[e.id] = e.offsetTop;
    });

    var parent = document.getElementById("scroller");

    document.getElementById("scroller").onscroll = function() {handleScroll()};

    function handleScroll() {
      var scrollPosition = parent.scrollTop || document.body.scrollTop;
  
      for (i in sections) {
        if (sections[i] <= (scrollPosition + 700)) {
          var activeSection = document.getElementById(i);
          var activeQuestion = activeSection.dataset.question;
          var activeBg = activeSection.dataset.bg;
          console.log(activeQuestion, activeBg);
          
          questionTitle.innerHTML = activeQuestion;

          document.getElementById('leftSide').style.background="url(/img/" + activeBg + ")"; // specify the image path here
        }
      }
    };
  })();
  