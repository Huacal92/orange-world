

/* Toggle Icon Search */
const toggleSearch = document.querySelector('.toggle_search');
const searchFormField = document.querySelector('.h-search-form-field');
const searchIcon = toggleSearch.querySelector('i');

toggleSearch.addEventListener('click', function() {
    this.classList.toggle('active');
    searchFormField.classList.toggle('show');

    if (searchIcon.classList.contains('fa-magnifying-glass')) {
        searchIcon.classList.remove('fa-magnifying-glass');
        searchIcon.classList.add('fa-xmark');
    } else {
        searchIcon.classList.remove('fa-xmark');
        searchIcon.classList.add('fa-magnifying-glass');
    }

    const searchInput = document.querySelector('.h-search-form-inner > form > input.search-field');
    /* searchInput.focus(); */
});

/* Menu Sticky top */

const siteHeader = document.getElementById('site-header');
const owMainHeader = document.querySelector('.sticky-header .ow-main-header');
const owMobileHeader = document.querySelector('.sticky-header .ow-header-mobile');

window.addEventListener( 'scroll', function(){

    if (siteHeader.classList.contains('sticky-header')) {
        const siteHeaderHeight = siteHeader.offsetHeight + 30;

        if (window.scrollY >= siteHeaderHeight) {
            owMainHeader.classList.add('is-stuck');
            owMobileHeader.classList.add('is-stuck');
        } else {
            owMainHeader.classList.remove('is-stuck');
            owMobileHeader.classList.remove('is-stuck');
        }
    }
});


/* Dropdown Language */
let lastSelectedLang = '';
const dropdown = document.querySelector('.ow-language-dropdown');
const dropdownContent = document.querySelector(' .dropdown-content');
const dropbtn = document.querySelector('.dropbtn');


dropdown.addEventListener('click', function() {
    dropdownContent.classList.toggle('show');
});

dropdownContent.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
        const lang = e.target.getAttribute('data-lang');
        if (lastSelectedLang !== '') {
            const lastLangItem = document.querySelector(`[data-lang="${lastSelectedLang}"]`);
            lastLangItem.style.display = 'block'; // Muestra el último elemento seleccionado
        }
        lastSelectedLang = lang; // Actualiza el último idioma seleccionado
        dropbtn.textContent = e.target.textContent; // Actualiza el texto del botón con el idioma seleccionado
        e.target.style.display = 'none'; // Oculta el elemento seleccionado del menú desplegable
        /* console.log(`Idioma seleccionado: ${lang}`); */
    }
});

/*Popup Video*/
var $video_play = $('.btn-play');
if ($video_play.length > 0 ) {
    $video_play.magnificPopup({
        type: 'iframe',
        removalDelay: 160,
        preloader: true,
        fixedContentPos: true,
        callbacks: {
        beforeOpen: function() {
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
    });
}








