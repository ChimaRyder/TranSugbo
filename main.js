function moveTab(element) {
    console.log(event.target);
    indicator = document.getElementById("indicator");
    tabs = document.getElementsByClassName("tab");
    section = document.getElementsByClassName("passes_description");

    for(let i = 0; i < 3; i++)
    {
        if (element == tabs[i])
        {
            console.log(tabs[i]);
            tabs[i].setAttribute("style", "color: white;");
            section[i].style.display = "block";
        } else {
            tabs[i].removeAttribute("style");
            section[i].style.display = "none";
        }
    }

    if (element == tabs[0])
    {
        indicator.setAttribute("style", "translate: 0 0");
    } else if (element == tabs[1])
    {
        indicator.setAttribute("style", "translate: 101.5% 0");
    } else {
        indicator.setAttribute("style", "translate: 203% 0");
    }
}

function displayLogin() {
    form = document.getElementById("loginform");
    
    if (form.style.display == "flex") {
        form.style.display = "none";
    } else {
        form.style.display = "flex";
    }
}

function viewhide() {
    password = document.getElementById("password");
    eye = document.getElementById("eye");

    if (password.type == "text") {
        password.type = "password";
        eye.src = "images/hidden.svg";
    } else {
        password.type = "text";
        eye.src = "images/view.svg";
    }
}

let cit_mun = [
'Alcantara',
'Alcoy',
'Alegria',
'Aloguinsan',
'Argao',
'Asturias',
'Badian',
'Balamban',
'Bantayan',
'Barili',
'Bogo City',
'Boljoon',
'Borbon',
'Carcar City',
'Carmen',
'Catmon',
'Cebu City',
'Compostela',
'Consolacion',
'Cordova',
'Daanbantayan',
'Dalaguete',
'Danao City',
'Dumanjug',
'Ginatilan',
'Lapu-Lapu City',
'Liloan',
'Madridejos',
'Malabuyoc',
'Mandaue City',
'Medellin',
'Minglanilla',
'Moalboal',
'Naga City',
'Oslob',
'Pilar',
'Pinamungahan',
'Poro',
'Ronda',
'Samboan',
'San Fernando',
'San Francisco',
'San Remigio',
'Santa Fe',
'Santander',
'Sibonga',
'Sogod',
'Tabogon',
'Tabuelan',
'Talisay City',
'Toledo City',
'Tuburan',
'Tudela',
];

var checkInput;
var validInput = 0;

function showResults(inputBox) {
    let result = [];
    let input = inputBox.value;
    if(input.length) {
        result = cit_mun.filter((keyword)=>{
          return keyword.toLowerCase().includes(input.toLowerCase());
        });
    } else {
        result = cit_mun;
    }

    if (inputBox == document.getElementById("from_municipality")){
        checkInput = 0;
    } else {
        checkInput = 1;
    }

    display(result);
}

function display(result) {
    const resultBox = document.getElementById("cit_mun_results");
    noDestination = "<li> No Destination Found </li>";

    const content = result.map((list)=>{
        if (checkInput == 1) {
            input = document.getElementById("from_municipality");
        } else {
            input = document.getElementById("to_municipality");
        }

        if (list == input.value) {
            result.length--;
            return "";
        }
        
        if (list == result[result.length-1]) {
            return "<li onmousedown=selectInput(this);>" + list + "</li>";
        }

        return "<li onmousedown=selectInput(this);>" + list + "</li>" + "<hr>";
    });

    resultBox.style.display = "block";
    
    if(!result.length) {
        resultBox.innerHTML = "<ul>" + noDestination + "</ul>";
    } else {
        resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";
    }
}

function selectInput(city) {
    if (checkInput == 0) {
        input = document.getElementById("from_municipality");
        xmark = document.getElementById("left");
    } else {
        input = document.getElementById("to_municipality");
        xmark = document.getElementById("right");
    }

    input.value = city.innerHTML;
    if (validInput > 2) {
        validInput = 2;
    } else {
        validInput++;
    }

    const resultBox = document.getElementById("cit_mun_results");
    resultBox.style.display = "none";
}

function showX(input) {
    if (checkInput == 0) {
        xmark = document.getElementById("left");
    } else {
        xmark = document.getElementById("right");
    }

    if(input.value.length) {
        xmark.style.display = "block";
    }
}

function hideX() {
    if (checkInput == 0) {
        xmark = document.getElementById("left");
    } else {
        xmark = document.getElementById("right");
    }

    xmark.style.display = "none";
}

function clearinput(xmark, num) {
    if (num == 0) {
        input = document.getElementById("from_municipality");
    } else {
        input = document.getElementById("to_municipality");
    }

    input.value = '';
    validInput--;

    if (validInput < 0){
        validInput = 0;
    }

    xmark.style.display = "none";
}

function swap() {
    from = document.getElementById("from_municipality");
    to = document.getElementById("to_municipality");
    a = from.value;
    b = to.value;

    if (validInput == 2) {
        from.value = b;
        to.value = a;
    }
}

function moveslider(checkbox) {
    one = document.getElementById("firstbutton");
    two = document.getElementById("secondbutton");
    three = document.getElementById("thirdbutton");
    four = document.getElementById("fourthbutton");
    slider = document.getElementById("photoslider");

    if (checkbox == one) {
        slider.style.left = "0px";
    } else if (checkbox == two) {
        slider.style.left = "-515px";
    } else if (checkbox == three) {
        slider.style.left = "-1009px";
    } else if (checkbox == four) {
        slider.style.left = "-1530px";
    }
}


function saveDataTicket() {
    from = document.getElementById("from_municipality").value;
    to = document.getElementById("to_municipality").value;
    date = document.getElementById("depart_date").value;
    adult = document.getElementById("adult").value;
    children = document.getElementById("children").value;

    localStorage.setItem('departure', from);
    localStorage.setItem('arrival', to);
    localStorage.setItem('date', date);
    localStorage.setItem('adult', adult);

    if (children == "") {
        children = 0;
    }

    localStorage.setItem('children', children);
}

function saveDataSearch() {
    from = document.getElementById("from_municipality").value;
    to = document.getElementById("to_municipality").value;
    date = document.getElementById("depart_date").value;

    localStorage.setItem('departure', from);
    localStorage.setItem('arrival', to);
    localStorage.setItem('date', date);
}

function loadData() {
    from = document.getElementById("from_municipality");
    to = document.getElementById("to_municipality");
    date = document.getElementById("depart_date");

    from.value = localStorage.getItem('departure');
    to.value = localStorage.getItem('arrival');
    date.value = localStorage.getItem('date');
}

function loadBilling() {
    date = document.getElementById("depart_date");
    adult = document.getElementById("adult_counter");
    children = document.getElementById("children_counter");
    childblock = document.getElementsByClassName("child_block");
    fromdisplay = document.getElementById("billing_from");
    todisplay = document.getElementById("billing_to");

    fromdisplay.innerHTML = localStorage.getItem('departure');
    todisplay.innerHTML = localStorage.getItem('arrival');
    date.innerHTML = localStorage.getItem('date');
    adult.innerHTML = "x" + localStorage.getItem("adult");
    children.innerHTML = "x" + localStorage.getItem("children");

    if (localStorage.getItem("children") == 0) {
        for (let i = 0; i < childblock.length; i++) {
            childblock[i].style.display = "none";
        }
    }
}

function calcTotal() {
    mode = document.getElementById("billing_mode");
    var basefare;

    if (mode.selectedIndex == 0) {
        basefare = 50;
    } else {
        basefare = 35;
    }

    const childfare = basefare - (basefare * .10);

    adultprice = parseInt(localStorage.getItem("adult")) * basefare;
    childprice = parseInt(localStorage.getItem("children")) * childfare;

    total = adultprice + childprice;



    document.getElementById("total").innerHTML = "Total: &#8369 " + total;
}

function resetForm() {
    localStorage.clear();
}

function add(counter, name) {
    curr = localStorage.getItem(name);
    curr++;
    localStorage.setItem(name, curr);
    counter.innerHTML = "x" + localStorage.getItem(name);
    calcTotal();
}

function sub(counter, name) {
    curr = localStorage.getItem(name);
    curr--;
    if (curr < 1) {
        curr = 1;
    }
    localStorage.setItem(name, curr);
    counter.innerHTML = "x" + localStorage.getItem(name);
    calcTotal();
}