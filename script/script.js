window.addEventListener('load', () => {
    const trailer = document.getElementById('trailer');
    let lastscrolly = 0;
    let ticking = false;

    AOS.init();
    const rellax = new Rellax('.rellax');

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