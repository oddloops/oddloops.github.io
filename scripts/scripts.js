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
    // Get all the links
    const links = document.querySelectorAll(query);

    // Loop through the links and add the 'show' class after a short delay
    links.forEach((link, index) => {
    setTimeout(() => {
        link.classList.add('show');
        }, index * 200); // delay each link by 200ms
    });
}