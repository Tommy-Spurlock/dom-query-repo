// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"

const sectionE1 = document.querySelector(".article__header")
sectionE1.textContent = "Welcome to the Tommy blog"


// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.

const sectionA1 = document.querySelectorAll(".article__header")
console.log(sectionA1)

for(let i=0; i<sectionA1.length; i++) {
       sectionA1[i].classList.add("important")
    console.log(sectionA1[i])
}


// Obtain a reference the element with a class of dashed and remove it.
const sectionD1 = document.querySelector(".dashed")
sectionD1.classList.remove("dashed")

// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.
const sectionF1 = document.querySelector(".article__footer")
sectionF1.classList.add("goldenrod")

