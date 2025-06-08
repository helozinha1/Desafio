let correctAnswers = [false, false, false, false]; // Para controlar quais enigmas foram resolvidos
let clues = ["", "", "", ""]; // Para armazenar as pistas reveladas

function checkAnswer(enigmaNumber, correctAnswer) {
    const answerInput = document.getElementById(`answer${enigmaNumber}`);
    const feedback = document.getElementById(`feedback${enigmaNumber}`);
    const clue = document.getElementById(`clue${enigmaNumber}`);
    const nextEnigma = document.getElementById(`enigma${enigmaNumber + 1}`);

    // Verifica a resposta, convertendo para minúsculas para flexibilidade, e para número se for o caso
    const isCorrect = (answerInput.value.toLowerCase() === correctAnswer.toLowerCase()) ||
                      (enigmaNumber === 2 && parseInt(answerInput.value) === parseInt(correctAnswer)); // Para o enigma 2 (número)

    if (isCorrect) {
        // Mensagens de sucesso com um toque de humor palmeirense zoando o Corinthians
        const successMessages = [
            "Acertou! Até parece que é palmeirense, de tão fácil! 😉",
            "Inacreditável, Fiel! Uma resposta correta! O amor realmente faz milagres...",
            "Parabéns! Mas não se acostuma, a vida não é só vitória de vez em quando!",
            "Conseguiu! Não foi no fax, foi na raça! Haha!",
            "Uau! Essa foi por pouco, hein? O amor me dá paciência para te ensinar!"
        ];
        const randomSuccessMessage = successMessages[Math.floor(Math.random() * successMessages.length)];

        feedback.textContent = randomSuccessMessage;
        feedback.className = "";
        feedback.style.color = "#32CD32"; // Verde para sucesso (cor do Palmeiras!)
        clue.className = ""; // Mostra a pista
        correctAnswers[(enigmaNumber - 1)] = true; // Marca como resolvido
        clues[(enigmaNumber - 1)] = clue.textContent.split(': ')[1]; // Extrai apenas a pista

        // Se não for o último enigma, mostra o próximo
        if (enigmaNumber < 4) {
            nextEnigma.className = "enigma-part";
        } else {
            // Se for o último enigma, mostra a mensagem final e as pistas
            document.getElementById('final-message').className = "";
            document.getElementById('final-clues').textContent = clues.join(" - "); // Junta as pistas
            // Mensagem final provocativa
            document.getElementById('final-message').innerHTML += "<br><p>Parabéns, Fiel (você é só meu, tá?! 😉)! Você desvendou os enigmas, mesmo com as provocações! Agora use os dígitos na tela de bloqueio do nosso site especial. E não se esqueça: o nosso amor é Bi-Mundial de verdade e com Libertadores de sobra! Aqui o choro é livre, mas o amor é Verde! 💚</p>";
        }
    } else {
        // Mensagens de erro com um toque de humor palmeirense zoando o Corinthians
        const errorMessages = [
            "Errou! Tá mais perdido que o time em 2007, hein? Tente de novo!",
            "Que pena! Nem todo dia é dia de 'milagre' em Itaquera. Tente novamente!",
            "Ops! Essa foi para a Série B da inteligência. Concentra aí!",
            "Não foi dessa vez. Pelo visto, o amor é verde, e a resposta não é preta e branca! Kkk!",
            "Mais um vexame? Calma, a gente tenta de novo. Mas o choro é livre!"
        ];
        const randomErrorMessage = errorMessages[Math.floor(Math.random() * errorMessages.length)];

        feedback.textContent = randomErrorMessage;
        feedback.className = "";
        feedback.style.color = "#FF4500"; // Vermelho para erro (mas não é o verde da vitória!)
    }
}