document.querySelectorAll('.like-button').forEach(button => {
    button.addEventListener('click', () => {
        const postFooter = button.parentElement;
        const likesCountElement = postFooter.querySelector('.likes-count');
        let likesCount = parseInt(likesCountElement.textContent);
        
        if (button.textContent === 'Like') {
            likesCount++;
            button.textContent = 'Unlike';
        } else {
            likesCount--;
            button.textContent = 'Like';
        }

        likesCountElement.textContent = ${likesCount} likes;
    });
});