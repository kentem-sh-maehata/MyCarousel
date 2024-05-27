{
    var next_1 = document.getElementById('next');
    var prev_1 = document.getElementById('prev');
    var ul_1 = document.querySelector('ul');
    var slides_1 = ul_1 === null || ul_1 === void 0 ? void 0 : ul_1.children;
    var currentIdx_1 = 0;
    var dots_1 = [];
    function updateButtons() {
        prev_1 === null || prev_1 === void 0 ? void 0 : prev_1.classList.remove('hidden');
        next_1 === null || next_1 === void 0 ? void 0 : next_1.classList.remove('hidden');
        if (currentIdx_1 === 0)
            prev_1 === null || prev_1 === void 0 ? void 0 : prev_1.classList.add('hidden');
        if (slides_1 && currentIdx_1 === (slides_1 === null || slides_1 === void 0 ? void 0 : slides_1.length) - 1)
            next_1 === null || next_1 === void 0 ? void 0 : next_1.classList.add('hidden');
    }
    function moveSlides() {
        var slideWidth = 0;
        if (slides_1 !== undefined) {
            slideWidth = slides_1[0].getBoundingClientRect().width;
        }
        if (ul_1 !== null)
            ul_1.style.transform = "translateX(".concat(-1 * slideWidth * currentIdx_1, "px)");
        updateButtons();
        updateDots();
    }
    function setupDots() {
        var _a;
        if (slides_1) {
            var _loop_1 = function (i) {
                var button = document.createElement('button');
                button.addEventListener('click', function () {
                    currentIdx_1 = i;
                    updateDots();
                    updateButtons();
                    moveSlides();
                });
                dots_1.push(button);
                (_a = document.querySelector('nav')) === null || _a === void 0 ? void 0 : _a.appendChild(button);
            };
            for (var i = 0; i < (slides_1 === null || slides_1 === void 0 ? void 0 : slides_1.length); i++) {
                _loop_1(i);
            }
            dots_1[0].classList.add('current');
        }
    }
    function updateDots() {
        dots_1.forEach(function (dot) {
            dot.classList.remove('current');
        });
        dots_1[currentIdx_1].classList.add('current');
    }
    updateButtons();
    setupDots();
    next_1 === null || next_1 === void 0 ? void 0 : next_1.addEventListener('click', function () {
        currentIdx_1++;
        moveSlides();
    });
    prev_1 === null || prev_1 === void 0 ? void 0 : prev_1.addEventListener('click', function () {
        currentIdx_1--;
        moveSlides();
    });
}
