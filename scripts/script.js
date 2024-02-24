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
