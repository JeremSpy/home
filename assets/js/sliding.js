var words = ["avec sa bonne étoile ? 🌟", "avec brio ? 👌", "sur la Statue de la Liberté ? 🗽", "dans l'espace ? 🌌", "avec un alien ? 👽", "avec le Père-Noël ? 🎅", "par voie postale ? 💌", "avec Dracula ? 🧛"],
    slide = true,
    index = 0;

for (var i = 0; i <= words.length - 1; i++) {
    $("#liste-mots").append("<li>" + words[i] + "</li>");
}

var slideUp = function () {
    $("#liste-mots").animate({
        marginTop: "-=40px"
    }, 400, function () {
        if (index == words.length - 2) {
            slide = false;
        } else {
            index += 1;
        }
    });
}

var slideDown = function () {
    $("#liste-mots").animate({
        marginTop: "+=40px"
    }, 400, function () {
        if (index == 0) {
            slide = true;
        } else {
            index -= 1;
        }
    });
}

setInterval(function () {
    if (slide) {
        slideUp();
    } else {
        slideDown();
    }
}, 250);