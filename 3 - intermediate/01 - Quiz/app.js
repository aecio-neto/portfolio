const form = document.querySelector('form');
const scoreMessageContainer = document.querySelector('#scoreMessage')
const ExtraInfoElements = document.querySelectorAll('.moreInfo');
const submitButton = document.querySelector('#submitButton');
const userSubmitAlert = document.querySelector('.userSubmitAlert');

const correctAnswers = ['C', 'C','B', 'D','E']

let score = 0

const getUserAnswers = () => userAnswers = correctAnswers.map((_, index) => 
  form[`inputQuestion${index + 1}`].value)

const calculateUserScore = userAnswers => {
  userAnswers.forEach((userAnswer, index) => {
    const isAnswerCorrect = userAnswer === correctAnswers[index]
    if (isAnswerCorrect) {
      score += 20;
    }
  })
}

const showFinalResult = () => {
  scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })

  const message = `Você acertou ${score / 20}/5 pergunta(s) | ${score}% de aproveitamento.`
  scoreMessageContainer.textContent = message
  scoreMessageContainer.classList.remove('d-none')
  score = 0;
}

const addExtraInfoElements = () => {
  ExtraInfoElements.forEach(item => { item.classList.remove('d-none')})
}

form.addEventListener('submit', event => {
  event.preventDefault();

  const userAnswers = getUserAnswers()

  const isQuestionsNotAnswered = userAnswers.includes('')
   if(isQuestionsNotAnswered) {
    userSubmitAlert.classList.remove('d-none')
    return
  }

  calculateUserScore(userAnswers)

  showFinalResult()

  addExtraInfoElements()

})
