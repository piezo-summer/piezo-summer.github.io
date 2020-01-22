window.addEventListener('load', () => {
    const homeNav = document.getElementById('homeNav');
    const trailerNav = document.getElementById('trailerNav');
    const lineUpNav = document.getElementById('lineUpNav');
    const ticketsNav = document.getElementById('ticketsNav');
    const merchNav = document.getElementById('merchNav');
    const galleryNav = document.getElementById('galleryNav');
    const trailer = document.getElementById('trailer');
    const menu = document.getElementById('menu');
    let lastscrolly = 0;
    let ticking = false;

    homeNav.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });

        menu.click();
    });

    trailerNav.addEventListener('click', () => {
        window.scrollTo({
            top: document.getElementById('homeSection').clientHeight + 1,
            left: 0,
            behavior: 'smooth'
        });

        menu.click();
    });

    lineUpNav.addEventListener('click', () => {
        window.scrollTo({
            top: document.getElementById('homeSection').clientHeight + document.getElementById('trailerSection').clientHeight + 1,
            left: 0,
            behavior: 'smooth'
        });

        menu.click();
    });

    ticketsNav.addEventListener('click', () => {
        window.scrollTo({
            top: document.getElementById('homeSection').clientHeight + document.getElementById('lineUpSection').clientHeight + document.getElementById('trailerSection').clientHeight + 1,
            left: 0,
            behavior: 'smooth'
        });

        menu.click();
    });

    merchNav.addEventListener('click', () => {
        window.scrollTo({
            top: document.getElementById('homeSection').clientHeight + document.getElementById('lineUpSection').clientHeight + document.getElementById('ticketSection').clientHeight + document.getElementById('trailerSection').clientHeight + 1,
            left: 0,
            behavior: 'smooth'
        });

        menu.click();
    });

    galleryNav.addEventListener('click', () => {
        window.scrollTo({
            top: document.getElementById('homeSection').clientHeight + document.getElementById('lineUpSection').clientHeight + document.getElementById('ticketSection').clientHeight + document.getElementById('merchSection').clientHeight + document.getElementById('trailerSection').clientHeight + 1,
            left: 0,
            behavior: 'smooth'
        });

        menu.click();
    });

    window.addEventListener('scroll', () => {
        lastscrolly = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(() => {
                if (document.getElementById('homeSection').clientHeight / 2 + 1 < lastscrolly && document.getElementById('homeSection').clientHeight + document.getElementById('trailerSection').clientHeight / 2 + 1 > lastscrolly) {
                    trailer.play();
                } else {
                    trailer.pause();
                }

                ticking = false;
            });

            ticking = true;
        }
    });
});