

document.addEventListener('mousemove', function(event) {
    const stand = document.querySelector('.stand');
    const offsetX = 15; // Adjust the offset based on the size of your element
    const offsetY = 15; // Adjust the offset based on the size of your element
    
    // Calculate new position with slight delay
    const newX = event.pageX - offsetX;
    const newY = event.pageY - offsetY;
    
    // Apply new position with transition
    stand.style.transform = `translate(${newX}px, ${newY}px)`;
});

