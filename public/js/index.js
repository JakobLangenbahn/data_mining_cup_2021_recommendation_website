/* Define firestore reference for easy use in functions */
const db = firebase.firestore();

/* Update personal Highscore */
function update_highscore(alias, team) {
    const increment = firebase.firestore.FieldValue.increment(1);
    const storyRef = db.collection('highscores').doc(alias);
    storyRef.set({score: increment, alias: alias, team: team}, {merge: true});
}

/* Load the next book and corresponding recommendations */
function display_next_recommendations() {
    // Next Book
    let random_number = 1 + Math.floor(Math.random() * 2);
    book_id = "00" + random_number;

    // Next Model
    model_0_id = "101";
    model_1_id = "102";
    model_2_id = "103";

    // Random Rank of recommendation
    recommendation_rank = Math.floor(Math.random() * 5);

    // Retrieve recommendations model
    firebase.firestore().collection("recommendations").where("book", "==", book_id).where("model_id", "==", model_0_id).limit(1).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

            if (recommendation_rank == 0) {
                recommendation_model_0 = doc.data().recommendation_1;
            }
            if (recommendation_rank == 1) {
                recommendation_model_0 = doc.data().recommendation_2;
            }
            if (recommendation_rank == 2) {
                recommendation_model_0 = doc.data().recommendation_3;
            }
            if (recommendation_rank == 3) {
                recommendation_model_0 = doc.data().recommendation_4;
            }
            if (recommendation_rank == 4) {
                recommendation_model_0 = doc.data().recommendation_5;
            }
        })
    });

    firebase.firestore().collection("recommendations").where("book", "==", book_id).where("model_id", "==", model_0_id).limit(1).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

            if (recommendation_rank == 0) {
                recommendation_model_0 = doc.data().recommendation_1;
            }
            if (recommendation_rank == 1) {
                recommendation_model_0 = doc.data().recommendation_2;
            }
            if (recommendation_rank == 2) {
                recommendation_model_0 = doc.data().recommendation_3;
            }
            if (recommendation_rank == 3) {
                recommendation_model_0 = doc.data().recommendation_4;
            }
            if (recommendation_rank == 4) {
                recommendation_model_0 = doc.data().recommendation_5;
            }

            db.collection("books").where("id", "==", recommendation_model_0)
                .limit(1).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    let recommendation_0_title = doc.data().title;
                    let recommendation_0_author = doc.data().author;
                    let recommendation_0_image_url = doc.data().image_url;

                    document.getElementById("recommendation_0_title").innerHTML = recommendation_0_title;
                    document.getElementById("recommendation_0_author").innerHTML = recommendation_0_author;
                    document.getElementById("recommendation_0_image").src = recommendation_0_image_url;
                })
            });
        })
    });

    db.collection("recommendations").where("book", "==", book_id)
        .where("model_id", "==", model_1_id).limit(1).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

            if (recommendation_rank == 0) {
                recommendation_model_1 = doc.data().recommendation_1;
            }
            if (recommendation_rank == 1) {
                recommendation_model_1 = doc.data().recommendation_2;
            }
            if (recommendation_rank == 2) {
                recommendation_model_1 = doc.data().recommendation_3;
            }
            if (recommendation_rank == 3) {
                recommendation_model_1 = doc.data().recommendation_4;
            }
            if (recommendation_rank == 4) {
                recommendation_model_1 = doc.data().recommendation_5;
            }
            db.collection("books").where("id", "==", recommendation_model_1)
                .limit(1).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    let recommendation_1_title = doc.data().title;
                    let recommendation_1_author = doc.data().author;
                    let recommendation_1_image_url = doc.data().image_url;

                    document.getElementById("recommendation_1_title").innerHTML = recommendation_1_title;
                    document.getElementById("recommendation_1_author").innerHTML = recommendation_1_author;
                    document.getElementById("recommendation_1_image").src = recommendation_1_image_url;
                })
            });
        })
    });

    db.collection("recommendations").where("book", "==", book_id)
        .where("model_id", "==", model_2_id).limit(1).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

            if (recommendation_rank == 0) {
                recommendation_model_2 = doc.data().recommendation_1;
            }
            if (recommendation_rank == 1) {
                recommendation_model_2 = doc.data().recommendation_2;
            }
            if (recommendation_rank == 2) {
                recommendation_model_2 = doc.data().recommendation_3;
            }
            if (recommendation_rank == 3) {
                recommendation_model_2 = doc.data().recommendation_4;
            }
            if (recommendation_rank == 4) {
                recommendation_model_2 = doc.data().recommendation_5;
            }
            db.collection("books").where("id", "==", recommendation_model_2)
                .limit(1).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    let recommendation_2_title = doc.data().title;
                    let recommendation_2_author = doc.data().author;
                    let recommendation_2_image_url = doc.data().image_url;

                    document.getElementById("recommendation_2_title").innerHTML = recommendation_2_title;
                    document.getElementById("recommendation_2_author").innerHTML = recommendation_2_author;
                    document.getElementById("recommendation_2_image").src = recommendation_2_image_url;
                })
            });
        })
    });


    // Retrieve information about the book and the recommendations
    db.collection("books").where("id", "==", book_id)
        .limit(1).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let book_title = doc.data().title;
            let book_author = doc.data().author;
            let book_image_url = doc.data().image_url;

            document.getElementById("book_title").innerHTML = book_title;
            document.getElementById("book_author").innerHTML = book_author;
            document.getElementById("book_image").src = book_image_url;
        })
    });


}


/* Update model scores */
function update_model_counts(choice) {
    const increment = firebase.firestore.FieldValue.increment(1);

    const model0Ref = db.collection('model_scores').doc(model_0_id);
    const model1Ref = db.collection('model_scores').doc(model_1_id);
    const model2Ref = db.collection('model_scores').doc(model_2_id);

    model0Ref.set({appearances: increment}, {merge: true});
    model1Ref.set({appearances: increment}, {merge: true});
    model2Ref.set({appearances: increment}, {merge: true});

    if (choice == "recommendation_0") {
        model0Ref.set({chosen: increment}, {merge: true});
    }
    ;
    if (choice == "recommendation_1") {
        model1Ref.set({chosen: increment}, {merge: true});
    }
    ;
    if (choice == "recommendation_2") {
        model2Ref.set({chosen: increment}, {merge: true});
    }
    ;
};



/* Send data to database and execute function update_highscore and function display_next_recommendations */
function choice_recommendation(choice) {
    // receive name data
    alias = document.getElementById("alias").value;
    team = document.getElementById("team").value;

    db.collection("decisions").doc().set({
        alias: alias,
        team: team,
        book_id: book_id,
        decision: choice,
        model_0_id: model_0_id,
        model_1_id: model_1_id,
        model_2_id: model_2_id,
        recommendation_shown_0: recommendation_model_0,
        recommendation_shown_1: recommendation_model_1,
        recommendation_shown_2: recommendation_model_2,
        time: firebase.firestore.FieldValue.serverTimestamp()
    });

    update_model_counts(choice);
    update_highscore(alias, team);
    display_next_recommendations();
};

// Initialize global variable
let book_id;
let model_0_id = "101";
let model_1_id = "102";
let model_2_id = "103";
let alias;
let team;
let choice;
let recommendation_model_0;
let recommendation_model_1;
let recommendation_model_2;
let recommendation_rank;


// Initialize images
display_next_recommendations()