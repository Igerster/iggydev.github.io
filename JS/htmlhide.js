function TestsFunction() {
    var T = document.getElementById("HTML"),
        displayValue = "";
    if (T.style.display == "")
        displayValue = "none";

    T.style.display = displayValue;
}