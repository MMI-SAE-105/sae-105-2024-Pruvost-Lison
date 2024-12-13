
document.addEventListener('DOMContentLoaded', function () {
    //script pour le toggle menu

    var toggleMenu = function () {
        // Pour le bouton #btnmenu
        document.getElementById('btnmenu').addEventListener('click', function () {
            document.getElementById('panel').classList.toggle('go-right');
        });

        // Pour le bouton #hide-menu
        document.getElementById('hide-menu').addEventListener('click', function () {
            document.getElementById('panel').classList.toggle('go-right');
        });

        // Pour les liens dans #panel
        var panelLinks = document.querySelectorAll('#panel a');
        panelLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                document.getElementById('panel').classList.toggle('go-right');
                document.getElementById('btnmenu').classList.toggle('visible');
            });
        });
    };

    toggleMenu();

    //script pour le carousel
    const container = document.querySelector('.container');
    const slides = document.querySelectorAll('.element');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    const slideWidth = slides[0].offsetWidth + 10;
    const totalSlides = slides.length;
    let currentIndex = 0;

    function updateButtons() {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === totalSlides - 1;
    }

    function scroll(direction) {
        currentIndex += direction;
        if (currentIndex < 0) currentIndex = 0;
        if (currentIndex >= totalSlides) currentIndex = totalSlides - 1;

        container.scrollTo({
            left: currentIndex * slideWidth,
            behavior: 'smooth'
        });

        updateButtons();
    }

    nextBtn.addEventListener('click', () => scroll(1));
    prevBtn.addEventListener('click', () => scroll(-1));


    updateButtons();
    //fin du code carousel
});

// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxContent = document.getElementById("lightbox-content");

document.querySelectorAll(".lightbox-trigger").forEach(trigger => {
    trigger.onclick = () => {
        lightboxContent.textContent = trigger.dataset.content;
        lightbox.showModal();
    };
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.close();
    }
});


function initMap() {
    // Coordonnées de Belfort
    const belfort = { lat: 47.639999, lng: 6.850000 };

    // Créer la carte centrée sur Belfort
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: belfort,
    });

    // Ajouter un marqueur à Belfort
    const marker = new google.maps.Marker({
        position: belfort,
        map: map,
        title: 'Belfort'
    });
}

