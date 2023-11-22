let slider = document.getElementById('slider')
let selector = document.getElementById('selector')
let selectValue = document.getElementById('selectValue')
let progressBar = document.getElementById('progressBar')

selectValue.innerHTML = slider.value

slider.oninput = function() {
    if(slider.value <= 45000){
        selectValue.innerHTML = this.value
        selector.style.left = this.value + '%'
        progressBar.style.width = this.value + '%'
    }else{
        selectValue.innerHTML = "Не ограничено"
    }
}