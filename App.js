// function Changetextareabackgroundcolor(background){
//     document.getElementById('textarea').style.background=background;
// }
function Changetextareabackgroundcolor(color) {
    const textarea = document.getElementById('message'); // Correct ID reference
    if (textarea) {
        textarea.style.backgroundColor = color; // Set the background color
    } else {
        console.error("Textarea not found. Ensure the ID matches in HTML.");
    }
}
 function Changetextcolor(color){
    const textarea =document.getElementById('message');
    if(textarea){
        textarea.style.color=color;
    }else {
        console.error("Textarea not found. Ensure the ID matches in HTML.");
    }
 }
 function Changetextstyle(fontFamily){
    const textarea =document.getElementById('message');
    if(textarea){
        textarea.style.fontFamily=fontFamily;
    }else {
        console.error("Textarea not found. Ensure the ID matches in HTML.");
    }
 }