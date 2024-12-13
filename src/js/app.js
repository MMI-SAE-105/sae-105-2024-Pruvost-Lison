//script pour le toggle menu
document.addEventListener('DOMContentLoaded', function () {
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
});

// Accordion functionality
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.classList.toggle('active');
    });
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


