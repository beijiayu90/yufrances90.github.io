const toggleMenuBtn = () => {

    const currentDisplayValue = document.getElementById("hidden").style.display;

    if (currentDisplayValue === "" || currentDisplayValue === "none") {
        document.getElementById("hidden").style.display = "block";
    } else {
        document.getElementById("hidden").style.display = "none";
    }
}