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

function revealElement(query) {
    // Get all the tags in a div or section
    const allTags = document.querySelectorAll(query);

    // Loop through each tag and add the 'show' class after a short delay
    allTags.forEach((tag, index) => {
    setTimeout(() => {
        tag.classList.add('fade-in');
        }, index * 200); // delay by 200ms
    });
}