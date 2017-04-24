(function () {
    var shri = document.querySelectorAll('.school__category')[0]
    var lectures = document.querySelectorAll('.lecture')
    var lectures_array = Array.prototype.slice.call(lectures);
    shri.addEventListener('change', function (e) {
        console.log(e)
        lectures_array.forEach(function (lec) {
            if (e.target.value === 'shri_all') {
                lec.style.display = "flex"
            }
            if (lec.getAttribute("data-school").indexOf(e.target.value) >= 0) {
                console.log(lec)
                lec.style.display = "flex"
            } else if (e.target.value === 'shri_all') {
                lec.style.display = "flex"
            } else {
                lec.style.display = "none"
            }
        })
    })

    document.addEventListener('click', function (e) {
        if (e.srcElement.classList.contains('modal')) {
            location.hash = "#close"
        }
    })
})()