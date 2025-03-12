//changing tags
document.addEventListener('DOMContentLoaded', function() {
    // Get all tag buttons and note cards
    const tagButtons = document.querySelectorAll('.tag-button');
    const noteCards = document.querySelectorAll('.note-card');
    
    // Add click event listeners to all tag buttons
    tagButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            tagButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get the selected tag
            const selectedTag = this.getAttribute('data-tag');
            
            // Filter notes based on selected tag
            noteCards.forEach(card => {
                if (selectedTag === 'all') {
                    // Show all cards if 'all' is selected
                    card.classList.remove('hidden');
                } else {
                    // Split the data-tags attribute into an array and check for an exact match
                    const cardTags = card.getAttribute('data-tags').split(' ');
                    if (cardTags.includes(selectedTag)) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });
});
