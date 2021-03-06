/* Define firestore reference for easy use in functions */
const db = firebase.firestore();


/* Display the imported data in a high score table */
const accountList_round_1 = document.querySelector("#table_scores_round_1");
const accountList_round_2 = document.querySelector("#table_scores_round_2");
const accountList_round_3 = document.querySelector("#table_scores_round_3");


function renderAccount(doc, model_chosen, model_appearances, model_score, team, name, accountList) {
    let tr = document.createElement("tr");
    let td_team = document.createElement("td");
    let td_name = document.createElement("td");
    let td_chosen = document.createElement("td");
    let td_appearances = document.createElement("td");
    let td_score = document.createElement("td");

    tr.setAttribute("data-id", doc.id);
    td_team.textContent = team;
    td_name.textContent = name;
    td_chosen.textContent = model_chosen;
    td_appearances.textContent = model_appearances;
    td_score.textContent = model_score;

    tr.appendChild(td_team);
    tr.appendChild(td_name);
    tr.appendChild(td_chosen);
    tr.appendChild(td_appearances);
    tr.appendChild(td_score);

    accountList.appendChild(tr);
}


db.collection("model_scores").where("round", "==", "first").orderBy("score", "desc").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        let model_chosen = doc.data().chosen;
        let model_appearances = doc.data().appearances;
        let model_score = (model_chosen / model_appearances);
        let team = doc.data().team_id;
        let model_id = doc.data().id;
        const storyRef = db.collection('model_scores').doc(model_id);
        storyRef.set({score: model_score}, {merge: true});
        renderAccount(doc, model_chosen, model_appearances, model_score, team, model_id, accountList_round_1);
    })
})

db.collection("model_scores").where("round", "==", "second").orderBy("score", "desc").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        let model_chosen = doc.data().chosen;
        let model_appearances = doc.data().appearances;
        let model_score = (model_chosen / model_appearances);
        let team = doc.data().team_id;
        let model_id = doc.data().id;
        const storyRef = db.collection('model_scores').doc(model_id);
        storyRef.set({score: model_score}, {merge: true});
        renderAccount(doc, model_chosen, model_appearances, model_score, team, model_id, accountList_round_2);
    })
})

db.collection("model_scores").where("round", "==", "third").orderBy("score", "desc").get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        let model_chosen = doc.data().chosen;
        let model_appearances = doc.data().appearances;
        let model_score = (model_chosen / model_appearances);
        let team = doc.data().team_id;
        let model_id = doc.data().id;
        const storyRef = db.collection('model_scores').doc(model_id);
        storyRef.set({score: model_score}, {merge: true});
        renderAccount(doc, model_chosen, model_appearances, model_score, team, model_id, accountList_round_3);
    })
})

