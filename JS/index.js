// All the icons
pythonIcon = document.querySelector(".fa-python")
pythonStars = document.querySelector(".python-stars")
pythonStars.style.opacity = "0"
pythonIcon.addEventListener("mouseover", function(){
    pythonStars.style.opacity = "1"
    pythonStars.style.transition = "all 0.2s ease-in";
})
pythonIcon.addEventListener("mouseout", function(){
    pythonStars.style.opacity = "0"
    pythonStars.style.transition = "all 0.2s ease-in";
})

HTMLIcon = document.querySelector(".fa-html5")
HTMLStars = document.querySelector(".html-stars")
HTMLStars.style.opacity = "0"
HTMLIcon.addEventListener("mouseover", function(){
    HTMLStars.style.opacity = "1"
    HTMLStars.style.transition = "all 0.2s ease-in";
})
HTMLIcon.addEventListener("mouseout", function(){
    HTMLStars.style.opacity = "0"
    HTMLStars.style.transition = "all 0.2s ease-in";
})

CSSIcon = document.querySelector(".fa-css3-alt")
CSSStars = document.querySelector(".css-stars")
CSSStars.style.opacity = "0"
CSSIcon.addEventListener("mouseover", function(){
    CSSStars.style.opacity = "1"
    CSSStars.style.transition = "all 0.2s ease-in";
})
CSSIcon.addEventListener("mouseout", function(){
    CSSStars.style.opacity = "0"
    CSSStars.style.transition = "all 0.2s ease-in";
})

JSIcon = document.querySelector(".fa-square-js")
JSStars = document.querySelector(".js-stars")
JSStars.style.opacity = "0"
JSIcon.addEventListener("mouseover", function(){
    JSStars.style.opacity = "1"
    JSStars.style.transition = "all 0.2s ease-in";
})
JSIcon.addEventListener("mouseout", function(){
    JSStars.style.opacity = "0"
    JSStars.style.transition = "all 0.2s ease-in";
})

reactIcon = document.querySelector(".fa-react")
reactStars = document.querySelector(".react-stars")
reactStars.style.opacity = "0"
reactIcon.addEventListener("mouseover", function(){
    reactStars.style.opacity = "1"
    reactStars.style.transition = "all 0.2s ease-in";
})
reactIcon.addEventListener("mouseout", function(){
    reactStars.style.opacity = "0"
    reactStars.style.transition = "all 0.2s ease-in";
})

nodeIcon = document.querySelector(".fa-node-js")
nodeStars = document.querySelector(".node-stars")
nodeStars.style.opacity = "0"
nodeIcon.addEventListener("mouseover", function(){
    nodeStars.style.opacity = "1"
    nodeStars.style.transition = "all 0.2s ease-in";
})
nodeIcon.addEventListener("mouseout", function(){
    nodeStars.style.opacity = "0"
    nodeStars.style.transition = "all 0.2s ease-in";
})

gitIcon = document.querySelector(".fa-git-alt")
gitStars = document.querySelector(".git-stars")
gitStars.style.opacity = "0"
gitIcon.addEventListener("mouseover", function(){
    gitStars.style.opacity = "1"
    gitStars.style.transition = "all 0.2s ease-in";
})
gitIcon.addEventListener("mouseout", function(){
    gitStars.style.opacity = "0"
    gitStars.style.transition = "all 0.2s ease-in";
})


// Scroll into view
//About Button
aboutButtonHTML = document.querySelector(".nav1")
aboutButtonHTML.addEventListener("click", function(){
    // aboutSectionHTML.scrollIntoView({behavior: 'smooth'});
    window.scrollTo({ top: 0, behavior: 'smooth' })
})

//Skills Button
skillsButtonHTML = document.querySelector(".nav2")
aboutSectionHTML = document.querySelector(".about-section")
skillsButtonHTML.addEventListener("click", function(){
    window.scrollTo({ top: `${aboutSectionHTML.clientHeight}`, behavior: 'smooth' })
})

//Socials Button
socialsButtonHTML = document.querySelector(".nav3")
skillsSectionHTML = document.querySelector(".skills")
socialsButtonHTML.addEventListener("click", function(){
    window.scrollTo({ top: `${aboutSectionHTML.clientHeight+skillsSectionHTML.clientHeight}`, behavior: 'smooth' })
})