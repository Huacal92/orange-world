document.addEventListener('DOMContentLoaded', () => {
    const mobileMainMenuItems = document.querySelectorAll('.collapse .mobile_mainmenu li:has(ul)');

    mobileMainMenuItems.forEach(item => {
        const spanArrow = document.createElement('span');
        spanArrow.className = 'arrow';
        spanArrow.innerHTML = '<span class="arrow"><i class="fa-solid fa-caret-right"></i></span>';
        item.insertBefore(spanArrow, item.firstChild);
    });

    const mmenuToggle = document.getElementById('mmenu_toggle');
    const mobileNav = document.querySelector('.mobile_nav');

    mmenuToggle.addEventListener('click', () => {
        mmenuToggle.classList.toggle('active');

        if (mmenuToggle.classList.contains('active')) {
            mobileNav.style.display = 'block';
        } else {
            mobileNav.style.display = 'none';
        }
    });

    const mobileMainMenuArrows = document.querySelectorAll('.mobile_mainmenu > li span.arrow');

    mobileMainMenuArrows.forEach(arrow => {
        arrow.addEventListener('click', () => {
            const ul = arrow.parentNode.querySelector('.sub-menu');
            if (ul) {
                if (window.getComputedStyle(ul).display !== 'none') {
                    ul.style.display = 'none';
                }else{
                    ul.style.display = 'block';
                }
                arrow.classList.toggle('active');
            }
        });
    });
});
