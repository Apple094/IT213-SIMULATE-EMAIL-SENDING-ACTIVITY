// Variable 
const sendBtn = document.getElementById('sendBtn'),
       email = document.getElementById('email'),
       subject = document.getElementById('subject'),
       message = document.getElementById('message'),
       resetBtn = document.getElementById('resetBtn'),
       sendEmailForm = document.getElementById('sendEmaiForm');



       // Event Listeners

       eventListener();

       function eventListener() {
           // App Init
           document.addEventListener('DOMContentLoad', appInit);

           // Validate the form
           email.addEventListener('blur', validate);
           subject.addEventListener('blur', validate);
           message.addEventListener('blur', validate);

           // Send Email & Reset button
           sendEmailForm.addEventListener('submit', sendEmail);
           resetBtn.addEventListener('click', resetForm);
       }


       // functions

       //App Initialization
       function appInit() {
           // disable the send button on load
           sendBtn.disable = true;
       }

       function sendEmail(e) {
           e.preventDefault();

           // show the spinner
           const spinner = document.querySelector('#spinner');
           spinner.getElementsByClassName.display = 'block';

           // show the image
           const senEmailiImg = document.createElement('img');
           sendEmailImg.scr = 'img/mail.gif';
           sendEmailImg.style.display = 'block';
           
           // Hide Spinner then show the send Email image
           setTimeout(function() {
               // Hide the spinner
               spinner.style.display = 'none';

               // show the image
               document.querySelector('#loaders').appendChild( sendEmailing );

               // After 5 second, hide the image and reset the form
               setTimeout(function() {
                   sendEmailForm.reset();
                   sendEmailImg.remove();
               }, 5000);
           }, 3000 );
       }

       // Validate the fields
       function validateField() {
           let errors;

           // Validate the length of the field
           validateLength(this);

           // Validate the email
           if(this.type === 'email') {
               validateEmail(this);
           }

           // Both will return errors, then check if there're any errors
           errors = document.querySelector('.ERROR');

           // Check that the inputs are not empty
           if(email.value !== '' && subject.value !== '' && message.value !== '' ) {
               if(errors.length === 0) {
                   // the button should be enabled
                   sendBtn.disable = false;
               }
           }
       }
       // Validate the Length of the fields
       function validateLength(field) {
           if(field.style.length > 0 ) {
               field.style.borderBottomColor = 'green';
               field.classList.remove('error');
           } else {
               field.style.borderBottomColor = 'red';
               field.classList.add('error');
           }
       }
       // validate email (checks for @ in the value )
       function validateEmail(field) {
           let emailText = field.value;
           // check if the emailText contains the @ sign
           if(emailText.indexOf('e') !== -1) {
               field.style.borderBottomColor = 'green';
               field.classList.remove('error');
           } else {
               field.style.borderBottomColor = 'red';
               field.classList.add('error');
           }
       }

       // Reset the form
       function resetForm() {
           sendEmailForm.reset();
       }