const addElement = function(){
    const rootElement = document.getElementById("root");
    const newElement = `
        <h1>Visszajelzés</h1>

        <input type="text" placeholder="Tárgy"><br>

        <textarea type="text" placeholder="Megjegyzés"></textarea><br><br>
            <input type="checkbox">
            <label>Elolvastam és elfogadom az <span>Adatkezelési Tájékoztatót</span>.</label>
            <br><br>
        
            <input type="checkbox">
            <label>Szeretnék hírlevelet kapni.</label><br>
        <button>Mentés</button>
    `
    rootElement.insertAdjacentHTML("beforeend", newElement);
}

const loadEvent = function() {
    addElement()
}

window.addEventListener("load", loadEvent);