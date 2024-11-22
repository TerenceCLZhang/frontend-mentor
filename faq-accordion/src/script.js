const questionDivs = document.querySelectorAll(".question");
const selectedIcon = "./images/icon-minus.svg";
const unselectedIcon = "./images/icon-plus.svg";

questionDivs.forEach((questionDiv) => {
  questionDiv.addEventListener("click", () => {
    const answer = questionDiv.nextElementSibling;
    const icon = questionDiv.getElementsByTagName("img")[0];

    // Hide all other answers and set their icons to the unselected state
    questionDivs.forEach((otherQuestionDiv) => {
      if (otherQuestionDiv !== questionDiv) {
        const otherAnswer = otherQuestionDiv.nextElementSibling;
        const otherIcon = otherQuestionDiv.getElementsByTagName("img")[0];

        // Hide the other answer and reset their icon to the unselected one
        if (otherAnswer && !otherAnswer.classList.contains("hidden")) {
          otherAnswer.classList.add("hidden");
          otherIcon.src = unselectedIcon;
        }
      }
    });

    // Toggle the visibility of the clicked question's answer and update the icon
    if (answer && answer.classList.contains("hidden")) {
      answer.classList.remove("hidden");
      icon.src = selectedIcon;
    } else {
      answer.classList.add("hidden");
      icon.src = unselectedIcon;
    }
  });
});
