// Your web app's Firebase configuration (ENTER YOUR FIREBASE CONFIGURATION DETAILS)
var firebaseConfig = {
  apiKey: "AIzaSyD5wPeGsfKMHgQBjSCvoPMYgnsa7oggqKI",
  authDomain: "icrack-login.firebaseapp.com",
  projectId: "icrack-login",
  storageBucket: "icrack-login.appspot.com",
  messagingSenderId: "440283608690",
  appId: "1:440283608690:web:afd852fc791f7a7db8f4eb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var form = document.querySelector('#loginForm');
var message = document.querySelector('#messageDiv');
var message_value = document.querySelector('.message');

// user login
if(form){
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let email = form.email.value;
        let password = form.password.value;
    
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            window.location = 'index.html';
        })
        .catch((error) => {
            message.style.display = 'block';
            message_value.innerText = error.message;
            setTimeout(function(){
                message.style.display = 'none';
            }, 3000);
        });
    })
}