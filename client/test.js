console.log("Starting Matchmaker Lite...");
function calculateCompatibility() {
	console.log("calculateCompatibility()");
	const DESIRED_RESPONSE = [
		5, 
		5,
		5,
        5,
	]
	const MAX_SCORE = 20;
	let question1Response = document.getElementById("q1").selectedOptions[0].value;
	let question2Response = document.getElementById("q2").selectedOptions[0].value;
	let question3Response = document.getElementById("q3").selectedOptions[0].value;
	let question4Response = document.getElementById("q4").selectedOptions[0].value;
	console.log("Question 1 Answers:")
	console.log(document.getElementById("q1").selectedOptions[0].text);
	console.log(document.getElementById("q1").selectedOptions[0].value);
	console.log(question1Response);
	console.log("Question 2 Answers:");
	console.log(document.getElementById("q2").selectedOptions[0].text);
	console.log(document.getElementById("q2").selectedOptions[0].value);
	console.log(question2Response);
	console.log("Question 3 Answers:");
	console.log(document.getElementById("q3").selectedOptions[0].text);
	console.log(document.getElementById("q3").selectedOptions[0].value);
	console.log(question3Response);
    console.log("Question 4 Answers:");
	console.log(document.getElementById("q4").selectedOptions[0].text);
	console.log(document.getElementById("q4").selectedOptions[0].value);
	console.log(question4Response);
	let question1Compatibility = 5 - Math.abs(question1Response - DESIRED_RESPONSE[0]);
	let question2Compatibility = 5 - Math.abs(question2Response - DESIRED_RESPONSE[1]);
	let question3Compatibility = 5 - Math.abs(question3Response - DESIRED_RESPONSE[2]);
    let question4Compatibility = 5 - Math.abs(question4Response - DESIRED_RESPONSE[3]);
	console.log("c1="+question1Compatibility);
	console.log("c2="+question2Compatibility);
	console.log("c3="+question3Compatibility);
    console.log("c4="+question4Compatibility);
	let totalCompatibility = question1Compatibility + question2Compatibility + question3Compatibility + question4Compatibility;
	totalCompatibility *= 100 / MAX_SCORE;
	totalCompatibility = Math.round(totalCompatibility);
	console.log("tc="+ totalCompatibility);
	document.getElementById("compatibility").innerHTML = "Your score is: " + totalCompatibility;
        if (MAX_SCORE == 100){document.getElementById("explanation").innerHTML = "You are Cav Scout matieral!"

    }
        else if (MAX_SCORE >99 <50 ){document.getElementById("explanation").innerHTML = "Work harder your almost there"

    }
        else {document.getElementById("explanation").innerHTML = "YOU HAVE FAILED!"

    }
}