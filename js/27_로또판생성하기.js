function btn1() {
    var btn1 = document.querySelectorAll('.box1');

    // Show each box1 element
    btn1.forEach(function(box) {
        box.style.display = 'block';
    });
}