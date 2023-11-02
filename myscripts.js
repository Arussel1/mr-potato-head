function enlargeImage(img) {
    const enlargedContainer = document.createElement('div');
    enlargedContainer.classList.add('enlarged');
    enlargedContainer.innerHTML = `
        <span class="enlarge-icon" onclick="shrinkImage(this)">❌</span>
        <img src="${img.src}" alt="Enlarged Image">
    `;
    
    document.body.appendChild(enlargedContainer);
    
    // Add a slight delay before applying the 'active' class to allow for the transition effect
    setTimeout(() => {
        enlargedContainer.classList.add('active');
        enlargedContainer.style.opacity = "1";
    }, 100);
}

function shrinkImage(icon) {
    const enlargedContainer = icon.closest('.enlarged');
    
    // Remove the 'active' class and reduce opacity to start the transition effect
    enlargedContainer.classList.remove('active');
    enlargedContainer.style.opacity = "0";
    
    // Remove the container from the DOM after the transition is complete
    setTimeout(() => {
        enlargedContainer.remove();
    }, 2000);
}
