document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const navItems = document.querySelectorAll('.nav-item');
    const tabContents = document.querySelectorAll('.tab-content');
    
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Hide all tab contents
            tabContents.forEach(content => content.style.display = 'none');
            
            // Show corresponding tab content
            const tabName = this.getAttribute('data-tab');
            document.querySelector(`.${tabName}-tab`).style.display = 'block';
        });
    });
    
    // Initialize dashboard as default view
    document.querySelector('.dashboard-tab').style.display = 'block';

    // Tool button functionality
    const toolButtons = document.querySelectorAll('.start-tool-btn');
    toolButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tool = this.getAttribute('data-tool');
            alert(`Launching ${tool} tool - This would open a dedicated tool interface in a real implementation`);
        });
    });

    // Journal save functionality
    const saveJournalBtn = document.querySelector('.save-journal-btn');
    saveJournalBtn.addEventListener('click', function() {
        const textarea = document.querySelector('.journal-editor textarea');
        if (textarea.value.trim() === '') {
            alert('Please enter some text before saving');
            return;
        }
        
        const entriesContainer = document.querySelector('.journal-entries');
        const noEntries = document.querySelector('.no-entries');
        
        if (noEntries) {
            noEntries.remove();
        }
        
        const entry = document.createElement('div');
        entry.className = 'journal-entry';
        entry.innerHTML = `
            <div class="entry-content">
                <p>${textarea.value}</p>
            </div>
            <div class="entry-meta">
                <span class="entry-date">${new Date().toLocaleString()}</span>
                <button class="entry-delete"><i class="fas fa-trash"></i></button>
            </div>
        `;
        
        entriesContainer.prepend(entry);
        textarea.value = '';
        
        // Add delete functionality
        entry.querySelector('.entry-delete').addEventListener('click', function() {
            entry.remove();
            if (document.querySelectorAll('.journal-entry').length === 0) {
                entriesContainer.innerHTML = `
                    <div class="no-entries">
                        <i class="fas fa-pen-fancy"></i>
                        <p>No journal entries yet. Start documenting your ideation process!</p>
                    </div>
                `;
            }
        });
    });

    // View recommendations button
    const viewRecommendationsBtn = document.querySelector('.view-recommendations-btn');
    if (viewRecommendationsBtn) {
        viewRecommendationsBtn.addEventListener('click', function() {
            alert('Showing detailed recommendations - This would expand the recommendations section in a real implementation');
        });
    }
});