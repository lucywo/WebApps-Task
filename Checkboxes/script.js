function limitCheckboxSelection() {
    const checkboxes = document.querySelectorAll('.toggle-checkbox');
    let checkedCount = 0;
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        checkedCount++;
        if (checkedCount === 3) {
          checkbox.checked = false;
          checkedCount--;
        }
      }
    });
  }
  