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