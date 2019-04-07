function enter() {

    var p = document.getElementsByTagName('p')[0].innerHTML;

    p = parseInt(p);

    for (i = p - 1; i > 1; i--) {
        p = p * i;
        document.getElementsByTagName('p')[1].innerHTML = "factorial of no is : " + p;

    }
}
