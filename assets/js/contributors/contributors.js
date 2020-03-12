/*
$.ajax({
    type: 'GET',
    dataType: "text",
    url: AUTHOR_FILE,
    success: parseAuthors,
});
*/

/**
 * Parse les auteurs
 * @param data
 */
function parseAuthors() {
    let file = new File(["# DEVELOPPERS:\n" +
    "- Iulian Ober\n" +
    "- Paul Renaud-Goud\n" +
    "- Pablo Seban\n" +
    "\n" +
    "# CONTRIBUTORS:\n" +
    "- Fabrice Pelleau\n" +
    "- Xavier Fernandez\n" +
    "- Dimitri Calmels\n" +
    "- Skander Aghilone\n" +
    "- Richard Beilleau\n" +
    "- Lucas Lemauff\n" +
    "- Jimmy Marty\n" +
    "- Damien Fayolle\n" +
    "- Théo Solsona\n" +
    "- Tommy Latgé\n" +
    "- Aymeric Delabarre\n" +
    "- Valentin Vivier\n" +
    "- Alban Tolsau\n" +
    "- Lenny Blanc\n" +
    "- Callune Gitenet\n" +
    "- Valentin Montal\n" +
    "- Pierre Lotte\n" +
    "- Axel Gerard\n" +
    "- Jérôme De Vivo\n" +
    "- Rémi Laborie\n" +
    "- Walid Chnaif\n" +
    "- Tanguy Veyrenc de Lavalette\n" +
    "- Thomas Gouveia\n" +
    "- Mouhamad Sylla\n" +
    "- Hugo Amalric\n" +
    "- Elias Omari\n" +
    "- Julian Labatut\n" +
    "\n" +
    "# TRANSLATORS:\n" +
    "\n" +
    "# ALL THOSE OF YOU THAT MADE PREVIOUS RELEASES POSSIBLE\n"], AUTHOR_FILE, {
        type: "text/plain",
    });
    let reader = new FileReader();
    reader.onload = function(progressEvent) {
        // By lines
        var lines = this.result.split('\n');
        for(var line = 0; line < lines.length; line++){
            console.log(lines[line]);
        }
    };
    reader.readAsText(file);
}

parseAuthors();