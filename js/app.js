/*
*Ici je récupère les boutons du jeu
*/
const pierreBtn = document.getElementById('pierre');
const feuilleBtn = document.getElementById('feuille');
const ciseauxBtn = document.getElementById('ciseaux');

const score_final = document.getElementById('score-final');
const score_user = document.getElementById('score-user');
const score_ordinateur = document.getElementById('score-ordinateur');


const compteur_0 = document.getElementById('compteur-0');
const compteur_1 = document.getElementById('compteur-1');
const compteur_2 = document.getElementById('compteur-2');

const choix_ordinateur = document.getElementById('choix-ordinateur');
const vs_choix = document.getElementById('vs-choix');
const choix_utilisateur = document.getElementById('choix-utilisateur');

const rejouer_chi = document.getElementById('rejouer-chi');
//const affichage = document.getElementById('affichage');

let tour = 0;
let humain = null;
let ordi = null;
let resultat = null;

let humain_score = 1;
let ordinateur_score = 1;


const ordiChoix = ['pierre', 'feuille', 'ciseaux'];

function warGame(j, o) {
    switch (j) {
        case 'pierre':
            choix_utilisateur.innerHTML = '👊';
            choix_utilisateur.style.fontSize = '150%';
            vs_choix.innerHTML = 'VS';
            vs_choix.style.fontSize = '150%'
            break;
        case 'feuille':
            choix_utilisateur.innerHTML = '✋';
            choix_utilisateur.style.fontSize = '150%'
            vs_choix.innerHTML = 'VS';
            vs_choix.style.fontSize = '150%'
            break;
        case 'ciseaux':
            choix_utilisateur.innerHTML = '🖖';
            choix_utilisateur.style.fontSize = '150%'
            vs_choix.innerHTML = 'VS';
            vs_choix.style.fontSize = '150%'
            break;
        default:
            break;
    }
    switch (o) {
        case 'pierre':
            choix_ordinateur.innerHTML = '👊';
            choix_ordinateur.style.fontSize = '150%'
            break;
        case 'feuille':
            choix_ordinateur.innerHTML = '✋';
            choix_ordinateur.style.fontSize = '150%'
            break;
        case 'ciseaux':
            choix_ordinateur.innerHTML = '🖖';
            choix_ordinateur.style.fontSize = '150%'
            break;
        default:
            break;
    }

    if (j === 'pierre' && o === 'ciseaux' || j === 'feuille' && o === 'pierre' || j === 'ciseaux' && o === 'feuille') {
        resultat = 'Gagné';
        score_user.innerHTML = humain_score++;
        /* affichage.innerHTML = `Joueur : ${joueur} Vs Ordinateur ${ordi} : Résultat ${resultat}`; */
    } else if (j === 'ciseaux' && o === 'pierre' || j === 'pierre' && o === 'feuille' || j === 'feuille' && o === 'ciseaux') {
        resultat = 'Perdu!';
        score_ordinateur.innerHTML = ordinateur_score++;
        /* affichage.innerHTML = `Joueur : ${joueur} Vs Ordinateur ${ordi} : Résultat ${resultat}`; */
    }
    else {
        resultat = 'Egalité!';
        /* affichage.innerHTML = `Joueur : ${joueur} Vs Ordinateur ${ordi} : Résultat ${resultat}`; */
    }


    switch (tour++) {
        case tour = 0:
            compteur_0.className = `bi bi-circle-fill text-bg`;
            console.log(tour);
            tour++
            break;
        case tour = 1:
            compteur_1.className = `bi bi-circle-fill text-bg`;
            console.log(tour);
            tour++
            break;
        case tour = 2:
            compteur_2.className = `bi bi-circle-fill text-bg`;
            console.log(tour);
            document.getElementById('btn-modal').click();
            console.log(`Humain score : ${humain_score} ordi score : ${ordinateur_score}`)
            if (humain_score > ordinateur_score) {
                score_final.innerHTML = `Félicitation vous avez gagné`

            } else if (humain_score < ordinateur_score) {
                score_final.innerHTML = `Dommage re tenter votre chance`

            }

            else {
                score_final.innerHTML = `Egaliter recommencer`

            }
            break;
        default:
            break;

    }
}
function stop_game() {
    pierreBtn.disabled = true;
    feuilleBtn.disabled = true;
    ciseauxBtn.disabled = true;
    rejouer_chi.hidden = false;
    rejouer_chi.className = `text-bg_valide`;
}

function play_game() {
    rejouer_chi.hidden = true;
    

    pierreBtn.disabled = false;
    feuilleBtn.disabled = false;
    ciseauxBtn.disabled = false;
    tour = 0;
    compteur_0.className = `bi bi-circle text-primary`;
    compteur_1.className = `bi bi-circle text-primary`;
    compteur_2.className = `bi bi-circle text-primary`;
    humain_score = 1;
    ordinateur_score = 1;
    score_user.innerHTML = 0;
    score_ordinateur.innerHTML = 0;
}

function reset() {
    tour = 0;
    compteur_0.className = `bi bi-circle text-primary`;
    compteur_1.className = `bi bi-circle text-primary`;
    compteur_2.className = `bi bi-circle text-primary`;
    humain_score = 1;
    ordinateur_score = 1;
    score_user.innerHTML = 0;
    score_ordinateur.innerHTML = 0;
    /*  affichage.innerHTML = ``; */

    choix_utilisateur.innerHTML = '';
    vs_choix.innerHTML = '';
    choix_ordinateur.innerHTML = '';
}
pierreBtn.addEventListener('click', function () {
    joueur = 'pierre';
    chiffre = Math.floor(Math.random() * 3);
    ordi = ordiChoix[chiffre];
    warGame(joueur, ordi);
})
feuilleBtn.addEventListener('click', function () {
    joueur = 'feuille';
    chiffre = Math.floor(Math.random() * 3);
    ordi = ordiChoix[chiffre];
    warGame(joueur, ordi);
})
ciseauxBtn.addEventListener('click', function () {
    joueur = 'ciseaux';
    chiffre = Math.floor(Math.random() * 3);
    ordi = ordiChoix[chiffre];
    warGame(joueur, ordi);
})




