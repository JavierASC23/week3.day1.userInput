let topwords = document.getElementById("main_title");
let topic_input = document.getElementById("title_input");
let noun_input = document.getElementById("noun");
let verb_input = document.getElementById("verb");
let adjective_input = document.getElementById("adjective");
let buttonSubmit = document.getElementById("submit_button");
let yadeezy = document.getElementById("story_result");
let everything = document.querySelector(".form_container")

topic_input.onkeyup = function() {
    topwords.innerHTML = topic_input.value;
}

buttonSubmit.onclick = function(event){


event.preventDefault();



let noun = noun_input.value;
let verb = verb_input.value;
let adjective = adjective_input.value;
let sentence =  `Last night I ate a ${noun}, and today I just had to ${verb}. What a ${adjective} day!`


if(noun == "" && verb == "" && adjective == ""){
    alert("Nothing had been typed into any field. Please enter information for the program to work");
}

else if(noun == "" ){
    alert("Nothing had been typed in the nouns. Please enter information for the program to work");
}

else if(verb == ""){
    alert("Nothing had been typed in the verbs. Please enter information for the program to work");
}

else if(adjective == ""){
    alert("Nothing had been typed in the adjectives. Please enter information for the program to work");
}

else{
    yadeezy.innerHTML = sentence;
    everything.style.display = "none";
}

}

