function animateCSS(element, animationName, callback) {
    element.classList.add('animated', animationName)

    function handleAnimationEnd() {
        element.classList.remove('animated', animationName)
        element.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    element.addEventListener('animationend', handleAnimationEnd)
}
//smooth scroll
$(document).ready(function () {
    $("a").on('click', function (event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                window.location.hash = hash;
            });
        }
    });
});
//smooth scroll end
const log = console.log;
const courses = document.querySelectorAll('.course img');
courses.forEach(course => {
    course.addEventListener('mouseover', (e) => {
        course.classList.add('animated', 'pulse', 'fast')
    })
    course.addEventListener('animationend', (e) => {
        course.classList.remove('animated', 'pulse', 'fast')
    })
})

//footer copy right dynamic date
$('.copyright').html(`&copy; ${new Date().getFullYear()} All Rights Reserved.`);
$('.designed-by').html('Designed and developed by <a class="samir" href="https://fb.com/lahadrimas" target="_blank">Samir Dahal</a>');

//check toggling navbar
$('.navbar-toggler').on('click', (e) => {
    if (!$('#menu').hasClass('show')) {
        $('.overlay').addClass('active');
    }
    else {
        $('.overlay').removeClass('active');
    }
})
$('.overlay').on('click', (e) => {
    $('#menu').removeClass('show');
    $('.overlay').removeClass('active');
})