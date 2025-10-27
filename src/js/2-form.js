const STORAGE_KEY = 'feedback-form-state';

const formData = {
  email: '',
  message: '',
};

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', updateFormData);
feedbackForm.addEventListener('submit', handleSubmit);
populateForm();

function updateFormData(event) {
  const name = event.target.name;
  const value = event.target.value.trim();

  formData[name] = value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  const form = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (form) {
    feedbackForm.elements.email.value = form.email;
    feedbackForm.elements.message.value = form.message;
    formData.email = form.email;
    formData.message = form.message;
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const email = event.target.elements.email.value.trim();
  const message = event.target.elements.message.value.trim();

  if (email === '' || message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
}
