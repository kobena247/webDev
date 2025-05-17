/*** Dark Mode ***/
let themeButton = document.getElementById("theme-button");
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
}
themeButton.addEventListener("click", toggleDarkMode);

/*** Form Handling ***/
let submitButton = document.getElementById("rsvp-button");
let count = 3;
const addParticipant = () => {

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const homeState = document.getElementById('homeState').value;

  const newP = document.createElement('p');
  newP.textContent = `⚓️ ${name} from ${homeState} has RSVP'd.`;
  const participantsDiv = document.getElementById('rsvp-participants');
  participantsDiv.appendChild(newP);

  const rsvpCount = document.getElementById('rsvp-count').remove();
  count = count + 1;
  const newRsvp = document.createElement('p');
  newRsvp.id = 'rsvp-count';
  newRsvp.textContent = "🚀 " + count + " people have RSVP'd to this event!";
  participantsDiv.append(newRsvp);
}

/*** Form Validation [PLACEHOLDER] [ADDED IN UNIT 7] ***/

const validateForm = (event) => {
  event.preventDefault();
  let containsErrors = false;
  var rsvpInputs = document.getElementById("rsvp-form").elements;
  let person = {
    name: rsvpInputs[0].value,
    homeTown: rsvpInputs[1],
    email: rsvpInputs[2]
  }

  for (let i = 0; i < rsvpInputs.length; i++){
      const input = rsvpInputs[i];
      if (input.value.length < 2) {
        containsErrors = true;
        input.classList.add('error');
      }
      else {
        input.classList.remove('error');
      }
  }
  
  let email = document.getElementById('email');
  if(email.value.includes("@")){
    email.classList.remove('error');
  }
  else{
    containsErrors = true;
    email.classList.add('error');
  }
  if (containsErrors == false){
    addParticipant();
    toggleModal(person);
    for (let i = 0; i < rsvpInputs.length; i++){
      rsvpInputs[i].value = "";
    }
  }
}
submitButton.addEventListener("click", validateForm);

/*** Animations [PLACEHOLDER] [ADDED IN UNIT 8] ***/
let motionEnabled = true;
let rotateFactor = 0;
let modalImage = document.getElementById("modal-img");
let animateImage = () => {
 if(!motionEnabled) return;
   
 rotateFactor = rotateFactor == 0 ? -10 : 0;
  modalImage.style.transform = `rotate(${rotateFactor}deg)`;
}

let modalButton = document.getElementById('modal-button');
let closeModal = () => {
  let modal = document.getElementById('success-modal');
  modal.style.display = "none";
}

modalButton.addEventListener("click", closeModal);

/*** Success Modal [PLACEHOLDER] [ADDED IN UNIT 9] ***/
const toggleModal = (person) => {
  let modal = document.getElementById("success-modal");
  let modalContent = document.getElementById("modal-text");
  modal.style.display = "flex";
  modalContent.textContent = `💫 Ahoy, ${person.name}! Thanks for RSVping! 
  We've beeen waiting for you! It's time to explore the endless horizons of design.`;

  let intervalId = setInterval(animateImage, 500);
  setTimeout(()=> {
    modal.style.display = "none";
  clearInterval(intervalId);}, 5000);
}

let motionButton = document.getElementById("motion-button");
let animationOff = false;
let reduceMotion = () => {
  motionEnabled = !motionEnabled;
  motionButton.textContent = motionEnabled ? "Reduce Motion" : "Motion Off";
}

motionButton.addEventListener("click", reduceMotion);


