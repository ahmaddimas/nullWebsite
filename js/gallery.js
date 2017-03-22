$(document).ready(function() {
    $('#btnShow').click(function(event) {
        var lf = $('header').css('right');
        if (lf === '0px') {
            $('header').css('right', '-15%');
            $('#background > .shadow').fadeOut(500);
            $(this).css('transform', 'rotateZ(0deg)');
        } else {
            $('header').css('right', '0%');
            $('#background > .shadow').fadeIn(500).click(function(event) {
                $('header').css('right', '-15%');
                $('#background > .shadow').fadeOut(500);
                $('#btnShow').css('transform', 'rotateZ(0deg)');
            });
            $(this).css('transform', 'rotateZ(-90deg)');
        }
    });

});
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Get the modal
var modal = document.getElementsByClassName('myModal')[0];

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName('myImg')[0];
var img1 = document.getElementsByClassName('myImg')[1];
var img2 = document.getElementsByClassName('myImg')[2];
var img3 = document.getElementsByClassName('myImg')[3];
var img4 = document.getElementsByClassName('myImg')[4];
var img5 = document.getElementsByClassName('myImg')[5];

var modalImg = document.getElementsByClassName("img01")[0];

var captionText = document.getElementsByClassName("caption")[0];

img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img1.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img2.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img3.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img4.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img5.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
modal.onclick = function() {
    modal.style.display = "none";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
