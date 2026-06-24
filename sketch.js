// =====================================================
// DIGI FUNERALZ INTERACTION
// Landing page → funeral page → warning → continue
// =====================================================

window.addEventListener("DOMContentLoaded", () => {
  const landingPayRespectsBtn = document.querySelector(".landing-pay-respects");
  const warningScreen = document.querySelector(".warning-screen");
  const warningContinueBtn = document.querySelector(".warning-continue");
  const warningLeaveBtn = document.querySelector(".warning-leave");

  if (!landingPayRespectsBtn || !warningScreen || !warningContinueBtn || !warningLeaveBtn) {
    console.error("Missing HTML element. Check your class names:", {
      landingPayRespectsBtn,
      warningScreen,
      warningContinueBtn,
      warningLeaveBtn,
    });
    return;
  }

  // Click Pay Your Respects on landing page
  landingPayRespectsBtn.addEventListener("click", () => {
    document.body.classList.add("entered-funeral");
    warningScreen.classList.add("show");
  });

  // Click Continue on warning
  warningContinueBtn.addEventListener("click", () => {
    warningScreen.classList.remove("show");
  });

  // Click No thanks on warning
  warningLeaveBtn.addEventListener("click", () => {
    warningScreen.classList.remove("show");
    document.body.classList.remove("entered-funeral");
  });


  // Click ok on pop up add
  // warningLeaveBtn.addEventListener("click", () => {
  //   warningScreen.classList.remove("show");
  //   document.body.classList.remove("entered-casino");
  // });


// =====================================================
// PEARL BORDER GENERATOR
// Adds lots of pearl images into the border containers
// =====================================================

const pearlContainers = document.querySelectorAll(".pearl-border");

pearlContainers.forEach((container) => {
  for (let i = 0; i < 120; i++) {
    const pearl = document.createElement("img");
    pearl.src = "imgs/pearl.png";
    pearl.alt = "";
    container.appendChild(pearl);
  }
});

});


//this is a test
