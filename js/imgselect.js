// item selection

var avatars = ["img1","img2","img3","img4","img5","img6","img7","img8","img9","img10"];

$('li').click(function () {
    console.log(this.id);
    if (document.getElementById(this.id).className == "") {
        for (var i = 0; i < avatars.length; i++) {
            if (document.getElementById(avatars[i]).className == "selected") {
                document.getElementById(avatars[i]).className = "";
            }
        }
        document.getElementById(this.id).className = "selected";
    }
    else {
        document.getElementById(this.id).className = "";
    }

    console.log(this);
});


// function ifSelect() {
//     var avatarbody = document.getElementById("avatar-body");
//     var avatars = avatarbody.getElementsByTagName("ul");
//     for (var i = 0; i < avatars[0].getElementsByTagName("li").length; i++) {
//         console.log(avatars[0].getElementsByTagName("li")[i].className);
//         if (avatars[0].getElementsByTagName("li")[i].className == "selected") {

//         }
//     }
// }