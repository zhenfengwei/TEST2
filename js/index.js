window.onload = function() {
    var Sgu = document.querySelector('.nav ul:nth-child(2) li:nth-child(3)');
    var Sgi = document.querySelector('.nav .white');
    var Sli = document.querySelectorAll('.nav1 .left li');
    var Sul = document.querySelectorAll('.content2 div');
    var Sel = document.querySelector('.content2');
    var Se = document.querySelectorAll('.home ul:nth-of-type(2) div h6 p');
    var Sm = document.querySelectorAll('.home ul:nth-of-type(2) img');
    var So = document.querySelectorAll('.home ul:nth-of-type(1) li');
    var St = document.querySelector('.left-active');
    var Sth = document.querySelectorAll('.left-active .right-active');
    Sgu.onmouseover = function () {
        Sgi.style.display = 'block';
    };
    Sgu.onmouseout = function () {
        Sgi.style.display = 'none';
    };
    var length = Sli.length;
    for (var i = 0; i < length; i++) {
        Sli[i].id = i;
        Sli[i].onmouseover = function () {
            for (var j = 0; j < length; j++) {
                Sli[j].className = '';
            }
            Sel.style.display = 'block';
            Sli[this.id].className = 'active';
            Sul[this.id].style.display = 'block';
            Sel.style.top = '144px';
        }
        Sli[i].onmouseout = function () {
            for (var j = 0; j < length; j++) {
                Sli[j].className = '';
            }
            Sel.style.display = 'none';
            Sli[this.id].className = 'active';
            Sul[this.id].style.display = 'none';
        }
    }
    var length = So.length;
    for (var i = 0; i < length; i++) {
        So[i].id = i;
        So[i].onmouseover = function () {
            for (var j = 0; j < length; j++) {
                Sli[j].className = '';
            }
            St.style.display = 'block';
            So[this.id].className = 'active2';
            Sth[this.id].style.display = 'block';
        }
        So[i].onmouseout = function () {
            for (var j = 0; j < length; j++) {
                So[j].className = '';
            }
            St.style.display = 'none';
            So[this.id].className = 'active2';
            Sth[this.id].style.display = 'none';
        }
    }
    var length = Se.length;
    for (var e = 0; e < length; e++) {
        Se[e].id = e;
        Se[e].onclick = function () {
            for (var j = 0; j < length; j++) {
                Se[j].className = '';
                Sm[j].style.display = 'none';
            }
            Se[this.id].className = 'active1';
            Sm[this.id].style.display = 'block';
        }
    }

}

