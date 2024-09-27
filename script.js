const buttons = document.querySelectorAll('.button');
const card = document.querySelector('.card');

buttons.forEach(function (button) {
  // console.log(button);

  button.addEventListener('click', function (e) {
    // console.log(e);
    // console.log(e.target)

    if(e.target.id==='gray'){
      card.style.backgroundColor=e.target.id
      
    }

    if(e.target.id==='white'){
      card.style.backgroundColor=e.target.id
    }

    if(e.target.id==='blue'){
       card.style.backgroundColor=e.target.id
    }

    if(e.target.id==='yellow'){
      card.style.backgroundColor=e.target.id
    }

    if(e.target.id==='orange'){
        card.style.backgroundColor=e.target.id
      }

    if(e.target.id==='red'){
        card.style.backgroundColor=e.target.id
      }

    if(e.target.id==='pink'){
        card.style.backgroundColor=e.target.id
      }

    if(e.target.id==='purple'){
        card.style.backgroundColor=e.target.id
      }

    if(e.target.id==='green'){
        card.style.backgroundColor=e.target.id
      }
  });

});


document.getElementById('save-draft').addEventListener('click', function() {
  const draftName = document.getElementById('draft-name').value.trim();
  const draftContent = document.getElementById('textarea').value.trim();

  if (draftName && draftContent) {
      // Save the draft in localStorage
      localStorage.setItem(draftName, draftContent);
      alert('Draft saved successfully!');
  } else {
      alert('Please enter both a draft name and content.');
  }
});

document.getElementById('show-drafts').addEventListener('click', function() {
  const draftsList = document.getElementById('drafts-list');
  draftsList.innerHTML = ''; // Clear previous content

  if (localStorage.length === 0) {
      draftsList.innerHTML = 'No drafts saved.';
      return;
  }

  // Show all saved drafts
  for (let i = 0; i < localStorage.length; i++) {
      const draftName = localStorage.key(i);
      const draftContent = localStorage.getItem(draftName);

      const draftElement = document.createElement('div');
      draftElement.className = 'draft-item';
      draftElement.innerHTML =`<strong>${draftName}</strong>:${draftContent}`;

      draftsList.appendChild(draftElement);
  }
});

document.getElementById('delete-drafts').addEventListener('click', function() {
  if (localStorage.length === 0) {
      alert('No drafts to delete.');
      return;
  }
  
  // Confirm before deleting
  if (confirm('Are you sure you want to delete all drafts?')) {
      localStorage.clear(); // Clear all drafts from localStorage
      alert('All drafts deleted successfully!');
      document.getElementById('drafts-list').innerHTML = ''; // Clear the displayed list of drafts
  }
});