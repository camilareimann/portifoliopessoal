function initAnimaScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    const pop = document.querySelectorAll('.js-scroll-pop');
    const windowHalf = window.innerHeight * 0.6;

    if (sections.length) {
        function animaScroll() {
            sections.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const inSectionVisible = (sectionTop - windowHalf) < 0;
                if (inSectionVisible)
                    section.classList.add('ativo');
                else
                    section.classList.remove('ativo');

            })
        }

        animaScroll();

        window.addEventListener('scroll', animaScroll);
    }

    if (pop.length) {
        function animaScroll() {
            pop.forEach(section => {
                const sectionTop = section.getBoundingClientRect().top;
                const inSectionVisible = (sectionTop - windowHalf) < 0;
                if (inSectionVisible)
                    section.classList.add('ativo');
                else
                    section.classList.remove('ativo');

            })
        }

        animaScroll();

        window.addEventListener('scroll', animaScroll);
    }

}

initAnimaScroll();

const button = document.querySelector(".button-contact");
button.addEventListener("click", function (event) {
    event.preventDefault();
})

function sendEmail() {
    let parametros = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    }
    if (parametros.name !== "" && parametros.email !== "" && parametros.message !== "") {
        const serviceID = "service_m362nvp";
        const templateID = "template_m5ubili";

        emailjs.send(serviceID, templateID, parametros)
            .then(
                res => {
                    document.getElementById("name").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("message").value = "";
                    console.log(res);
                    alert("you're message was sent successfully");
                }
            )
    }
};



