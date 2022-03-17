let lignes = 10;   // Variable globale
let colonnes = 10; // Variable globale

let case_ligne = lignes;  // Variable globale
let case_colonne = 1;     // Variable globale

let affichage_actif = false; // Variable globale

function creationTable() {
    lignes = document.getElementById("lignes").value;
    colonnes = document.getElementById("colonnes").value;

    if (lignes == "" || lignes == null)
	lignes = 10;
    if (colonnes== "" || colonnes == null)
	colonnes = 10;

    case_ligne = lignes;
    case_colonne = 1;
    affichageTable();
}

function affichageTable() {
    let j=1;
    let output = "<table border='1' cellspacing='0' cellpadding='10'>";

    for (i=1;i<=lignes;i++) {
	output = output + "<tr>";  // début de la création d'une nouvelle ligne
	while (j<=colonnes) {
	    if ((i == case_ligne) && (j == case_colonne)) {
		output = output + "<td bgcolor='orange'>" + "" + "</td>";
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
    affichage_actif = true;
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
    if (case_ligne > 1) {
	case_ligne = case_ligne - 1;
	affichageTable()
    }
}

function versLeBas() {
    if (case_ligne < lignes) {
	case_ligne = case_ligne + 1;
	affichageTable()
    }
}

function versLaGauche() {
    if (case_colonne > 1) {
	case_colonne = case_colonne - 1;
	affichageTable()
    }
}

function versLaDroite() {
    if (case_colonne < colonnes) {
	case_colonne = case_colonne + 1;
	affichageTable()
    }
}
