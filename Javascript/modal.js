var modal_1 = document.getElementById("myModal_1");

// Fonction pour afficher le modal
function afficherModal_1() {
    var img_1 = document.getElementById("img01");
    img_1.src = this.src; 
    modal_1.style.display = "block"; 
}

function close_1(){
    modal_1.style.display = "none";
}


function afficherModal_2() {
    var modal_2 = document.getElementById("myModal_2");
    var img_2 = document.getElementById("img02");
    img_2.src = this.src; 
    modal_2.style.display = "block"; 
  }
  
    // Fermer le modal lorsqu'on clique sur le bouton de fermeture
    document.querySelector(".close").addEventListener("click", function() {
    modal_2.style.display = "none";
});

function afficherModal_3() {
    var modal_3 = document.getElementById("myModal_3");
    var img_3 = document.getElementById("img03");
    img_3.src = this.src; 
    modal_3.style.display = "block"; 
  }
  
    // Fermer le modal lorsqu'on clique sur le bouton de fermeture
    document.querySelector(".close").addEventListener("click", function() {
    modal_3.style.display = "none";
});