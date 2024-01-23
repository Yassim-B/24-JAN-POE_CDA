import {Quiz} from "./Quiz.js";
import {Question} from "./Question.js";

init();

function init() {
    let quiz = new Quiz();
    let q1 = new Question("Quel est le sens de la vie ?", ["42", "Manger des pizzas", "Chili con carne"], 0);
    let q2 = new Question("Quelle est la couleur du cheval d'Henri IV ?  ", ["Rouge", "Vert", "Blanc"], 2);
    quiz.ajouterQuestion(q1);
    quiz.ajouterQuestion(q2);
    quiz.afficherQuestion(q1);
    document.getElementById('submit').addEventListener(
        'click',
        (evt) => quiz.collecterReponse()
    );
}