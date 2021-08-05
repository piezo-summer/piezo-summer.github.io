window.addEventListener('load', () => {
    (function () {
        document.addEventListener("mousemove", parallax);
        const elem = document.querySelector("#homeSection");

        function parallax(e) {
            const _w = window.innerWidth / 2;
            const _h = window.innerHeight / 2;
            const _mouseX = e.clientX;
            const _mouseY = e.clientY;
            const _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
            const _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
            const _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;

            elem.style.backgroundPosition = `${_depth3}, ${_depth2}, ${_depth1}`;
        }

    })();
});