/* Define firestore reference for easy use in functions */
const db = firebase.firestore();

db.collection("highscores").orderBy("score", "desc").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderAccount(doc);
    })
})


/* Display the imported data in a high score table */
const accountList = document.querySelector("#table_highscores");

function renderAccount(doc) {
    let tr = document.createElement("tr");
    let td_alias = document.createElement("td");
    let td_team = document.createElement("td");
    let td_score = document.createElement("td");

    tr.setAttribute("data-id", doc.id);
    td_alias.textContent = doc.data().alias;
    td_team.textContent = doc.data().team;
    td_score.textContent = doc.data().score;

    tr.appendChild(td_alias);
    tr.appendChild(td_team);
    tr.appendChild(td_score);

    accountList.appendChild(tr);
}
