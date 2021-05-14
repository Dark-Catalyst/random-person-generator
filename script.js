

console.log(bodyImages, headImages, legImages)

// var button = document.getElementById('generate-button');
document.getElementById('generate-head').addEventListener('click', generateHead);
document.getElementById('generate-body').addEventListener('click', generateBody);
document.getElementById('generate-legs').addEventListener('click', generateLegs);
document.getElementById('generate-all').addEventListener('click', generateAll);

function generateHead() {

    // get length of array 
    headlength = headImages.length - 1;
 
    // generate random number
    randomNumber = Math.round(Math.random()*headlength);

    // Replace the legs 
    document.getElementById('head-image').src = headImages[randomNumber];
}


function generateLegs() {

    // get length of array 
    legLength = legImages.length - 1;
 
    // generate random number
    randomNumber = Math.round(Math.random()*legLength);

    // Replace the legs 
    document.getElementById('leg-image').src = legImages[randomNumber];
}

function generateBody() {

    // get length of array 
    bodyLength = bodyImages.length - 1;
 
    // generate random number
    randomNumber = Math.round(Math.random()*bodyLength);

    // Replace the legs 
    document.getElementById('body-image').src = bodyImages[randomNumber];
}

function generateAll() {
    // call functions
    generateHead();
    generateBody();
    generateLegs();
}

