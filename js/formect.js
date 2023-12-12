let currentPanelIndex = 0;

function showPanel(index) {
  document.querySelectorAll('.panel').forEach(panel => panel.style.display = 'none');

  const selectedPanel = document.querySelectorAll('.panel')[index];
  selectedPanel.style.display = 'grid';
  currentPanelIndex = index;

  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('activect'));
  document.querySelector(`.tab[data-index="${index}"]`).classList.add('activect');

  const backButton = document.querySelector('.tab-switch-btn[data-index="back"]');
  backButton.style.display = index > 0 ? 'inline-block' : 'none';

  const submitButton = document.querySelector('.tab-switch-btn[data-index="submit"]');
  submitButton.style.display = index === 2 ? 'inline-block' : 'none';

  const nextButton = document.querySelector('.tab-switch-btn[data-index="next"]');
  nextButton.style.display = index < 2 ? 'inline-block' : 'none';
}

function showNextPanel() {
  const totalPanels = document.querySelectorAll('.panel').length;

  if (currentPanelIndex >= 0 && currentPanelIndex < totalPanels - 1) {
    const currentTabForms = document.querySelectorAll(`.panel[data-index="${currentPanelIndex}"] form`);

    let isTabValid = true;

    currentTabForms.forEach(form => {
      if (!validateForm(form)) {
        isTabValid = false;
      }
    });

    if (isTabValid) {
      showPanel(currentPanelIndex + 1);
    }
  }
}

function showPreviousPanel() {
  if (currentPanelIndex > 0) {
    showPanel(currentPanelIndex - 1);
  }
}

// Updated validateForm to handle multiple forms
function validateForm(form) {
  const inputs = form.querySelectorAll('input[required]');
  let isValid = true;

  inputs.forEach(input => {
    if (input.value.trim() === '') {
      input.classList.add('invalid');
      isValid = false;
    } else {
      input.classList.remove('invalid');
    }
  });

  // Check if the form is valid and update the form's validity status
  form.classList.toggle('invalid', !isValid);

  return isValid;
}

function submitForReview() {
  // Updated to get forms within the current panel
  const formsInCurrentPanel = document.querySelectorAll(`.panel[data-index="${currentPanelIndex}"] form`);

  let isAllValid = true;

  formsInCurrentPanel.forEach(form => {
    if (!validateForm(form)) {
      isAllValid = false;
    }
  });

  if (isAllValid) {
    document.querySelector('.warpper-ofr').style.display = 'none';
    const popupContainer = document.getElementById('popup-container-ofr');
    popupContainer.style.display = 'flex';
  }
}

showPanel(0);

const formInputs = document.querySelectorAll('.panel form input');

// Добавляем обработчик события для каждого инпута
formInputs.forEach(input => {
  // Сохраняем оригинальный плейсхолдер
  const originalPlaceholder = input.placeholder;

  input.addEventListener('focus', function() {
    // Получаем родительскую форму инпута
    const form = this.closest('form');

    // Добавляем класс к форме при фокусировке на инпуте
    if (form) {
      form.classList.add('focused');
    }

    // Устанавливаем плейсхолдер на пустую строку при фокусировке
    this.placeholder = '';
  });

  // Добавляем обработчик события для снятия фокуса с инпута
  input.addEventListener('blur', function() {
    // Получаем родительскую форму инпута
    const form = this.closest('form');

    // Удаляем класс с формы при потере фокуса на инпуте
    if (form) {
      form.classList.remove('focused');
    }

    // Восстанавливаем оригинальный плейсхолдер при потере фокуса
    this.placeholder = originalPlaceholder;
  });
});



