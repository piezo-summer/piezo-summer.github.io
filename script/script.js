window.addEventListener('load', () => {
    const homeNav = document.getElementById('homeNav');
    const lineUpNav = document.getElementById('lineUpNav');
    const ticketsNav = document.getElementById('ticketsNav');
    const impressionsNav = document.getElementById('impressionsNav');

    homeNav.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });

    lineUpNav.addEventListener('click', () => {
        window.scrollTo({
            top: document.getElementById('homeSection').clientHeight + 1,
            left: 0,
            behavior: 'smooth'
        });
    });

    ticketsNav.addEventListener('click', () => {
        window.scrollTo({
            top: document.getElementById('homeSection').clientHeight + document.getElementById('lineUpSection').clientHeight + 1,
            left: 0,
            behavior: 'smooth'
        });
    });

    impressionsNav.addEventListener('click', () => {
        window.scrollTo({
            top: document.getElementById('homeSection').clientHeight + document.getElementById('lineUpSection').clientHeight + document.getElementById('ticketSection').clientHeight + 1,
            left: 0,
            behavior: 'smooth'
        });
    });
});