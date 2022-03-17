let lignes = 10;   // Variable globale
let colonnes = 10; // Variable globale
let pourfendeur_ligne = lignes;  // Variable globale
let pourfendeur_colonne = 1;     // Variable globale

let affichage_actif = false; // Variable globale
let fantome_1_ligne = null; // Variable globale
let fantome_1_colonne = null; // Variable globale
let fantome_2_ligne = null; // Variable globale
let fantome_2_colonne = null; // Variable globale
let VarControleTimer = null; // Variable globale

let case_bloquee_1_ligne = 5;
let case_bloquee_1_colonne = 5;

function creationTable() {
    lignes = document.getElementById("lignes").value;
    colonnes = document.getElementById("colonnes").value;

    if (lignes == "" || lignes == null)
	lignes = 10;
    if (colonnes== "" || colonnes == null)
	colonnes = 10;

    pourfendeur_ligne = lignes;
    pourfendeur_colonne = 1;
    affichage_actif = true;
    initialisation_fantomes();
    affichageTable();
    VarControleTimer = setInterval(deplacement_fantomes, 200);
}

function affichageTable() {
    let j=1;
    let output = "<table border='1' cellspacing='0' cellpadding='10'>";

    for (i=1;i<=lignes;i++) {
	output = output + "<tr>";  // début de la création d'une nouvelle ligne
	while (j<=colonnes) {
	    if ((i == pourfendeur_ligne) && (j == pourfendeur_colonne)) {
		output = output + "<td bgcolor='orange'>" + "" + "</td>";
	    } else if ((i == fantome_1_ligne) && (j == fantome_1_colonne)) {
		output = output + "<td bgcolor='cyan'>" + "" + "</td>";
	    } else if ((i == fantome_2_ligne) && (j == fantome_2_colonne)) {
		output = output + "<td bgcolor='pink'>" + "" + "</td>";
	    } else if ((i == case_bloquee_1_ligne) && (j == case_bloquee_1_colonne)) {
		output = output + "<td bgcolor='black'>" + "" + "</td>";
	    } else {
		output = output + "<td>" + "" + "</td>";
	    }
	    j = j+1;
	}
	output = output + "</tr>"; // fin de la création de la nouvelle ligne
	j = 1;
    }
    output = output + "</table>";
    document.getElementById("resultat").innerHTML = output;
}

document.addEventListener('keydown', (e) => {
    if (affichage_actif == true) {
	if (e.key == "ArrowUp") {
	    versLeHaut();
	} else if (e.key == "ArrowDown") {
	    versLeBas();
	} else if (e.key == "ArrowLeft") {
	    versLaGauche();
	} else if (e.key == "ArrowRight") {
	    versLaDroite();
	} else {
	    console.log(`property value is "${e.key}"`);
	}
    }
})

function versLeHaut() {
    if (pourfendeur_ligne > 1) {
	if ((pourfendeur_ligne - 1 == case_bloquee_1_ligne) && (pourfendeur_colonne == case_bloquee_1_colonne))
	    return;
	pourfendeur_ligne = pourfendeur_ligne - 1;
	affichageTable()
    }
}

function versLeBas() {
    if (pourfendeur_ligne < lignes) {
	if ((pourfendeur_ligne + 1 == case_bloquee_1_ligne) && (pourfendeur_colonne == case_bloquee_1_colonne))
	    return;
	pourfendeur_ligne = pourfendeur_ligne + 1;
	affichageTable()
    }
}

function versLaGauche() {
    if (pourfendeur_colonne > 1) {
	if ((pourfendeur_ligne == case_bloquee_1_ligne) && (pourfendeur_colonne - 1 == case_bloquee_1_colonne))
	    return;
	pourfendeur_colonne = pourfendeur_colonne - 1;
	affichageTable()
    }
}

function versLaDroite() {
    if (pourfendeur_colonne < colonnes) {
	if ((pourfendeur_ligne == case_bloquee_1_ligne) && (pourfendeur_colonne + 1 == case_bloquee_1_colonne))
	    return;
	pourfendeur_colonne = pourfendeur_colonne + 1;
	affichageTable()
    }
}

function initialisation_fantomes() {
    fantome_1_ligne = Math.floor(Math.random() * lignes + 1);
    fantome_1_colonne = Math.floor(Math.random() * colonnes + 1);
    fantome_2_ligne = Math.floor(Math.random() * lignes + 1);
    fantome_2_colonne = Math.floor(Math.random() * colonnes + 1);
}

function deplacement_fantomes() {
    let direction_pour_fantome_1 = Math.floor(Math.random() * 4 + 1);
    // 1 vers le haut, 2 vers le bas, 3 vers la gauche, 4 vers la droite
    if ((direction_pour_fantome_1 == 1) && (fantome_1_ligne > 1)) {
	fantome_1_ligne = fantome_1_ligne - 1;
    } else if ((direction_pour_fantome_1 == 2) && (fantome_1_ligne < lignes)) {
	fantome_1_ligne = fantome_1_ligne + 1;
    } else if ((direction_pour_fantome_1 == 3) && (fantome_1_colonne > 1)) {
	fantome_1_colonne = fantome_1_colonne - 1;
    } else if ((direction_pour_fantome_1 == 4) && (fantome_1_colonne < colonnes)) {
	fantome_1_colonne = fantome_1_colonne + 1;
    }
    let direction_pour_fantome_2 = Math.floor(Math.random() * 4 + 1);
    // 1 vers le haut, 2 vers le bas, 3 vers la gauche, 4 vers la droite
    if ((direction_pour_fantome_2 == 1) && (fantome_2_ligne > 1)) {
	fantome_2_ligne = fantome_2_ligne - 1;
    } else if ((direction_pour_fantome_2 == 2) && (fantome_2_ligne < lignes)) {
	fantome_2_ligne = fantome_2_ligne + 1;
    } else if ((direction_pour_fantome_2 == 3) && (fantome_2_colonne > 1)) {
	fantome_2_colonne = fantome_2_colonne - 1;
    } else if ((direction_pour_fantome_2 == 4) && (fantome_2_colonne < colonnes)) {
	fantome_2_colonne = fantome_2_colonne + 1;
    }
    affichageTable();
}
