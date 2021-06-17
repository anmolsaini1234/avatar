const categories = document.querySelectorAll(".category");
const elementImages = document.querySelectorAll(".elementImage");
const elementImageContainer = document.querySelectorAll(
  ".elementImageContainer"
);
const elementColorSelector = document.querySelectorAll(".elementColorSelector");

const headImages = document.querySelectorAll(".headImageContainer");
const eyesImage = document.querySelectorAll(".eyesImageContainer");
const mouthImage = document.querySelectorAll(".mouthImageContainer");
const extrasImage = document.querySelectorAll(".extrasImageContainer");

const hideAllElements = () => {
  elementImageContainer.forEach((el) => {
    el.style.display = "none";
  });
};

const hideAllColors = () => {
  elementColorSelector.forEach((el) => {
    el.style.display = "none";
  });
};

const showElements = (elements) => {
  hideAllElements();
  hideAllColors();

  elements.forEach((el) => {
    el.style.display = "flex";
  });
};

// first filtering
showElements(headImages);

let activeCategory = "category1";

let activeElements = document.querySelectorAll(".headImageContainer");

//sets active category
categories.forEach((category) => {
  category.addEventListener("click", () => {
    if (category.classList[2]) return;

    categories.forEach((category) => {
      category.classList.remove("activeCategory");
    });

    category.classList.add("activeCategory");
    activeCategory = category.classList[1];

    if (activeCategory === "category1") {
      showElements(headImages);
    }

    if (activeCategory === "category2") {
      showElements(eyesImage);
    }

    if (activeCategory === "category3") {
      showElements(mouthImage);
    }
    if (activeCategory === "category4") {
      showElements(extrasImage);
    }
  });
});

// all the image assets

const imageAssets = {
  head: ["./assets/Face Elements/01 - Head/01A.png"],
  eyes: [
    "./assets/Face Elements/02 - Eyes/01A.png",
    "./assets/Face Elements/02 - Eyes/02A.png",
    "./assets/Face Elements/02 - Eyes/03A.png",
  ],
  mouth: [
    "./assets/Face Elements/03 - Mouth/01A.png",
    "./assets/Face Elements/03 - Mouth/02A.png",
    "./assets/Face Elements/03 - Mouth/03A.png",
    "./assets/Face Elements/03 - Mouth/04A.png",
    "./assets/Face Elements/03 - Mouth/05A.png",
    "./assets/Face Elements/03 - Mouth/06A.png",
  ],
  extras: [
    "./assets/Face Elements/04 - Extra/01.png",
    "./assets/Face Elements/04 - Extra/02.png",
    "./assets/Face Elements/04 - Extra/03.png",
    "./assets/Face Elements/04 - Extra/04.png",
  ],
};

const imageAssetsColors = {
  circle1: "./assets/Face Elements/01 - Head/01A.png",
  circle2: "./assets/Face Elements/01 - Head/01B.png",
  circle3: "./assets/Face Elements/01 - Head/01C.png",
  circle4: "./assets/Face Elements/01 - Head/01D.png",
  circle5: "./assets/Face Elements/02 - Eyes/01A.png",
  circle6: "./assets/Face Elements/02 - Eyes/01B.png",
  circle7: "./assets/Face Elements/02 - Eyes/01C.png",
  circle8: "./assets/Face Elements/02 - Eyes/02A.png",
  circle9: "./assets/Face Elements/02 - Eyes/02B.png",
  circle10: "./assets/Face Elements/02 - Eyes/02C.png",
  circle11: "./assets/Face Elements/02 - Eyes/03A.png",
  circle12: "./assets/Face Elements/02 - Eyes/03B.png",
  circle13: "./assets/Face Elements/02 - Eyes/03C.png",
  circle14: "./assets/Face Elements/03 - Mouth/01A.png",
  circle15: "./assets/Face Elements/03 - Mouth/01B.png",
  circle16: "./assets/Face Elements/03 - Mouth/01C.png",
  circle17: "./assets/Face Elements/03 - Mouth/02A.png",
  circle18: "./assets/Face Elements/03 - Mouth/02B.png",
  circle19: "./assets/Face Elements/03 - Mouth/02C.png",
  circle20: "./assets/Face Elements/03 - Mouth/03A.png",
  circle21: "./assets/Face Elements/03 - Mouth/03B.png",
  circle22: "./assets/Face Elements/03 - Mouth/03C.png",
  circle23: "./assets/Face Elements/03 - Mouth/04A.png",
  circle24: "./assets/Face Elements/03 - Mouth/04B.png",
  circle25: "./assets/Face Elements/03 - Mouth/04C.png",
  circle26: "./assets/Face Elements/03 - Mouth/05A.png",
  circle27: "./assets/Face Elements/03 - Mouth/05B.png",
  circle28: "./assets/Face Elements/03 - Mouth/05C.png",
  circle29: "./assets/Face Elements/03 - Mouth/06A.png",
  circle30: "./assets/Face Elements/03 - Mouth/06B.png",
  circle31: "./assets/Face Elements/03 - Mouth/06C.png",
  circle32: "./assets/Face Elements/04 - Extra/01.png",
  circle33: "./assets/Face Elements/04 - Extra/02.png",
  circle34: "./assets/Face Elements/04 - Extra/03.png",
  circle35: "./assets/Face Elements/04 - Extra/04.png",
};

const imageColors = {
  head1: ["circle1", "circle2", "circle3", "circle4"],
  eyes1: ["circle5", "circle6", "circle7"],
  eyes2: ["circle8", "circle9", "circle10"],
  eyes3: ["circle11", "circle12", "circle13"],
  mouth1: ["circle14", "circle15", "circle16"],
  mouth2: ["circle17", "circle18", "circle19"],
  mouth3: ["circle20", "circle21", "circle22"],
  mouth4: ["circle23", "circle24", "circle25"],
  mouth5: ["circle26", "circle27", "circle28"],
  mouth6: ["circle29", "circle30", "circle31"],
  extras1: ["circle32"],
  extras2: ["circle33"],
  extras3: ["circle34"],
  extras4: ["circle35"],
};

const displayHead = document.querySelector(".display__head");
const displayEyes = document.querySelector(".display__eyes");
const displayMouth = document.querySelector(".display__mouth");
const displayExtras = document.querySelector(".display__extras");

// main display state
const mainDisplayImage = {
  head: "",
  eyes: "",
  mouth: "",
  extras: "",
};

const updateDisplay = () => {
  // four layers of images placed absolutly on top of each other
  // head
  displayHead.src = mainDisplayImage["head"];
  // eyes
  displayEyes.src = mainDisplayImage["eyes"];
  // mouth
  displayMouth.src = mainDisplayImage["mouth"];
  // extras
  displayExtras.src = mainDisplayImage["extras"];
};

const updateState = (type, number) => {
  mainDisplayImage[type] = imageAssets[type][number - 1];
  updateDisplay();
};

const updateColorState = (type, circle) => {
  mainDisplayImage[type] = imageAssetsColors[circle];
  updateDisplay();
};

elementImageContainer.forEach((el) => {
  el.addEventListener("click", () => {
    // console.log(hello);
    const elementType = el.childNodes[1].classList[2].slice(0, -5);
    const elementNumber = el.classList[1].slice(-1);

    updateState(elementType, elementNumber);
    // console.log(mainDisplayImage);

    hideAllElements();

    imageColors[el.classList[1]].forEach((circle) => {
      document.querySelector(`.${circle}`).style.display = "flex";
    });
  });
});

elementColorSelector.forEach((el) => {
  el.addEventListener("click", () => {
    updateColorState(el.classList[1].slice(0, -12), el.classList[2]);
  });
});


//////////////////////////////// Screenshot functionallity /////////////////////////////////////////////////////
const displayAvatar = document.querySelector('.display')
const button = document.querySelector('.confirm__button');



 document.querySelector('.confirm__button').addEventListener('click', function() {
  html2canvas(document.querySelector('.display'), {
    scale: 2,
      onrendered: function(canvas) {
          // document.body.appendChild(canvas);
        return Canvas2Image.saveAsPNG(canvas);
      }
  });
});
/////////////////////////// Screenshot functionallity //////////////////////////////////////////////////////////

