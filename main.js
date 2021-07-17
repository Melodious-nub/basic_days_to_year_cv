document.getElementById("submit").onclick = function() {
    var a = prompt('Days');
    var y = a/365;
    var yr = Math.floor(y);
    var m = (a%365)/30;
    var mn = Math.floor(m);
    var d = (a%365)%30;
    console.log(yr,mn,d);
    alert('Year :'+ yr +' '+'Month :'+' ' + mn +' ' +' '+ 'Days : ' + d);
};
