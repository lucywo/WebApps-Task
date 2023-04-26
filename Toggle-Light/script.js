const btn = document.getElementById('toggle-btn'); // Das HTML-Element mit der ID "toggle-btn" wird der Variablen "btn" zugewiesen.
const nightBtn = document.getElementById('night-mode-btn'); // Das HTML-Element mit der ID "night-mode-btn" wird der Variablen "nightBtn" zugewiesen.
const body = document.body; // Das Body-Element des Dokuments wird der Variablen "body" zugewiesen.
const title = document.getElementById('title'); // Das HTML-Element mit der ID "title" wird der Variablen "title" zugewiesen.

btn.addEventListener('click', function() { // Ein Event-Listener wird hinzugefügt, der auf einen Klick auf den "toggle-btn" wartet und dann eine Funktion ausführt.
  body.classList.toggle('dark-mode'); // Die CSS-Klasse "dark-mode" wird dem Body-Element hinzugefügt oder entfernt, je nachdem ob sie bereits vorhanden ist.
  if (body.classList.contains('dark-mode')) { // Wenn die "dark-mode" Klasse bereits vorhanden ist, führe die folgenden Schritte aus:
    title.textContent = 'Good Night'; // Der Titel der Seite wird zu "Good Night" geändert.
    nightBtn.style.display = 'none'; // Der "night-mode-btn" wird ausgeblendet.
    btn.classList.add('dark-mode'); // Dem "toggle-btn" wird die CSS-Klasse "dark-mode" hinzugefügt.
  } else { // Wenn die "dark-mode" Klasse nicht vorhanden ist, führe die folgenden Schritte aus:
    title.textContent = 'Good Morning'; // Der Titel der Seite wird zu "Good Morning" geändert.
    nightBtn.style.display = 'flex'; // Der "night-mode-btn" wird wieder angezeigt.
    btn.classList.remove('dark-mode'); // Die CSS-Klasse "dark-mode" wird vom "toggle-btn" entfernt.
  }
});

nightBtn.addEventListener('click', function() { // Ein weiterer Event-Listener wird hinzugefügt, der auf einen Klick auf den "night-mode-btn" wartet und dann eine Funktion ausführt.
  body.classList.add('dark-mode'); // Die CSS-Klasse "dark-mode" wird dem Body-Element hinzugefügt.
  title.textContent = 'Good Night'; // Der Titel der Seite wird zu "Good Night" geändert.
  nightBtn.style.display = 'none'; // Der "night-mode-btn" wird ausgeblendet.
  btn.classList.add('dark-mode'); // Dem "toggle-btn" wird die CSS-Klasse "dark-mode" hinzugefügt.
});
