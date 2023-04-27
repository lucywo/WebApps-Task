const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const maxChecked = 2;

let checkedCount = 0;
let lastChecked;

function handleCheckboxChange(e) {
  const checkbox = e.target;

  if (checkbox.checked) {
    if (checkedCount >= maxChecked) {
      lastChecked.checked = false;
      checkedCount--;
    }
    checkedCount++;
    lastChecked = checkbox;
  } else {
    checkedCount--;
  }
}

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', handleCheckboxChange);
});

