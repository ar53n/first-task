(function () {
    var shri = document.querySelectorAll('.school__category')[0]
    var lectures = document.querySelectorAll('.lecture')
    var lectures_array = Array.prototype.slice.call(lectures);

    function displayScool(school) {
        lectures_array.forEach(function (lec) {
            if (school === 'shri_all') {
                lec.style.display = "flex"
            }
            if (lec.getAttribute("data-school").indexOf(school) >= 0) {
                console.log(lec)
                lec.style.display = "flex"
            } else if (school === 'shri_all') {
                lec.style.display = "flex"
            } else {
                lec.style.display = "none"
            }
        })
    }

    if (localStorage) {
        var targetSchool = localStorage.getItem('school');
        if (targetSchool) {
            displayScool(targetSchool);
            shri.querySelector('[value='+ targetSchool +']').checked = true;
        }
    }

    shri.addEventListener('change', function (e) {
        var targetSchool = e.target.value;
        if (localStorage) {
            localStorage.setItem('school', targetSchool)
        }
        displayScool(targetSchool);
    })

    document.addEventListener('click', function (e) {
        if (e.srcElement.classList.contains('modal')) {
            location.hash = "#close"
        }
    })
})()