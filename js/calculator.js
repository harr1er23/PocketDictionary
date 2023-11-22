function calc() {
    //получаем ссылку на элемент Select (Тип дизайна)
    const statisticType = document.getElementById("statisticT-type");
    const slider = document.getElementById("slider");
    const unlimitedAccess = document.getElementById("unlimited-access");
    const personalCoach = document.getElementById("personal-coach");
    const exclusiveLessons = document.getElementById("exclusive-lessons");

    const count = document.getElementById("count");
    //получаем ссылку на элемент span, в него будем писать стоимость дизайна
    const result = document.getElementById("result"); 

    const values = {
        "5000": 3,
        "10000": 6,
        "15000": 9,
        "20000": 12,
        "25000": 15,
        "30000": 18,
        "35000": 21,
        "40000": 24,
        "45000": 27,
        "50000": 30,
    }

    var price = 0;
    price += parseInt(statisticType.options[statisticType.selectedIndex].value);
    price += (unlimitedAccess.checked == true) ? parseInt(unlimitedAccess.value) : 0;
    price += (personalCoach.checked == true) ? parseInt(personalCoach.value) : 0;
    price += (exclusiveLessons.checked == true) ? parseInt(exclusiveLessons.value) : 0;
    price += values[slider.value]

    result.innerHTML = price;
}