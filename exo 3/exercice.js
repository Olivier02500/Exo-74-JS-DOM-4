let libButton = document.getElementById('lib-button');
let name = document.getElementById('noun');
let adjecif = document.getElementById('adjective');
let name2 = document.getElementById('person');

let libIt = function() {
    let storyDiv = document.getElementById("story");
    storyDiv.innerHTML = name.value+ " " + adjecif.value + " " + name2.value;
};

libButton.addEventListener('click', libIt);{

}










