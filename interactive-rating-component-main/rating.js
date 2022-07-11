function chooseRating(e) {
    let rating = e.value;
    console.log (rating);
    document.getElementById("rats").innerHTML = rating.toString();
}
function submitRating(){
    var x = document.getElementById("myDiv");
    if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
}