// Function that adds more playback speed options to the current video
const addMoreSpeeds = () => {
    const speedsMenu = document.getElementsByClassName("video-speeds menu")[0]
    const newSpeeds = ["2.0", "2.50", "3.0", "5.0"] // wanted speeds
    if (speedsMenu.childNodes.length === 4) {
        for (let i = 0; i < newSpeeds.length; i++) {
            let speed = document.createElement("li")
            speed.setAttribute("data-speed", newSpeeds[i])
            let button = document.createElement("button")
            button.setAttribute("class", "control speed-option")
            button.setAttribute("tabindex", "-1")
            button.setAttribute("aria-pressed", "false")
            button.innerHTML = newSpeeds[i] + "x"
            speed.appendChild(button)
            speedsMenu.insertBefore(speed, speedsMenu.firstChild) // inserts each speed at the beginning of the menu
        }
    }
}

// Add extra speed options when switching videos
const mutationObserver = new MutationObserver(function(mutations) {
    mutations.forEach(addMoreSpeeds);
});
mutationObserver.observe(document.getElementById("seq_content"), {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true
})