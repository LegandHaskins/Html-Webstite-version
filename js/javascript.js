// (function() {
//     var i = 0;
//     (function loop() {
//         document.getElementsByTagName("body").style.background = (sequence[i]);
//         i = (i + 1) % sequence.length;
//         setTimeout(loop, 1000);
//     }());
// }());
// var sequence = ["red", "green", "blue", "gray"];
$(document).ready(function() {
    var sequence = ["#45046a", "#fee2b3", "#f6d743", "#2fc4b2", "#d291bc", "#b5076b", "#dddddd"];
    var i = 0;
    (function loop() {
        document.getElementsByTagName("body")[0].style.backgroundColor = (sequence[i]);
        i = (i + 1) % sequence.length;
        setTimeout(loop, 1000);
    }());
});
// alert("hello world");