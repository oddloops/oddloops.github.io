// Creates a typing animation
function typeContent(element, content, typeSpeed) {
    let length = 0;
    let contentLength = content.length;
    let timer = setInterval(function() {
        element.innerHTML += content.charAt(length);
        length++;
        if (length == contentLength) {
            clearInterval(timer);
        }
    }, typeSpeed)
}

// helper function for typeContent
function typing(element, content, speed) {
        return new Promise((resolve, reject) => {
            typeContent(element, content, speed);
            setTimeout(() => {
            resolve();
        }, 1500);
    });
}

// creates the fade in effect
function revealElement(delay) {
    // Get all the tags in a div or section
    const allTags = document.querySelectorAll('.fade-out');

    // Loop through each tag and add the 'show' class after a short delay
    allTags.forEach((tag, index) => {
        setTimeout(() => {
            tag.classList.add('fade-in');
        }, index * delay); // delay by 200ms
    });
}