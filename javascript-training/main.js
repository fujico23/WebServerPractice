const textInputElement = document.getElementIdBy('text-input')
const submitButtonElement = document.getElementIdBy('submit-button')
textInputElement.addEventListener('input', (event) => {
  const inputValue = event.target.value
  submitButtonElement.disabled = inputValue.length === 0
})