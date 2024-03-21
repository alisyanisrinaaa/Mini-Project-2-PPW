// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
});

// Di Luar Hamburger
window.addEventListener('click', function (e) {
    if(e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active')
        navMenu.classList.add('hidden')
    }
})

// Navbar
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;
    const toTop = document.querySelector("#to-top");

    if (window.scrollY > fixednav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.add('hidden');
        toTop.classList.remove('flex');
    }
}

// SHETS API
const scriptURL =
'https://script.google.com/macros/s/AKfycbxj5xyRzrH8KhRl9QXVYKfqrwi6sUUkQGkBg4gW9YUczLy063aqDxEcvBWGMZjiTaiqKA/exec';
const form = document.forms['tailwind-contact-form'];
const btnKirim = document.querySelector('.btn-kirim');
const btnAllert = document.querySelector('.btn-allert');
const btnLoading = document.querySelector('.btn-loading');
var alert_del = document.querySelectorAll('.alert-del');
alert_del.forEach((x) =>
x.addEventListener('click', function () {
    x.parentElement.classList.toggle('hidden');
})
);

form.addEventListener('submit', e => {
e.preventDefault()
btnKirim.classList.toggle('hidden');
btnLoading.classList.toggle('hidden');
fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })
    .then(response => {
        btnKirim.classList.toggle('hidden');
        btnLoading.classList.toggle('hidden');
        btnAllert.classList.toggle('hidden');
        form.reset();
        console.log('Success!', response);
    })
    .catch(error => console.error('Error!', error.message));
})

//form
const contactForm = document.getElementById("contactForm");    

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameINput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");

    const name = nameINput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    //localstorage
    localStorage.setItem("name", name);     
    localStorage.setItem("email", email);
    localStorage.setItem("message", message);

    nameINput.value = "";
    emailInput.value = "";
    messageInput.value = "";
});

// Dark Mode
// const darkToggle = document.querySelector('#dark-toggle')
// const html = document.querySelector('html')

// darkToggle.addEventListener('click', function() {
//     if (darkToggle.checked) {
//         html.classList.add('dark')
//     } else {
//         html.classList.remove('dark')
//     }
// })