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