// Function that adds more playback speed options to the current video
const addMoreSpeeds = () => {
    const speedsMenu = document.getElementsByClassName("video-speeds menu")
    const newSpeeds = ["2.0", "2.50", "3.0", "5.0"] // wanted speeds
    for (let i = 0; i < speedsMenu.length; i++) {
        for (let j = 0; j < newSpeeds.length; j++) {
            let speed = document.createElement("li")
            speed.setAttribute("data-speed", newSpeeds[j])
            let button = document.createElement("button")
            button.setAttribute("class", "control speed-option")
            button.setAttribute("tabindex", "-1")
            button.setAttribute("aria-pressed", "false")
            button.innerHTML = newSpeeds[j] + "x"
            speed.appendChild(button)
            speedsMenu[i].insertBefore(speed, speedsMenu[i].firstChild) // inserts each speed at the beginning of the menu
        }
    }
}

// Add extra speed options for the first video on the page
addMoreSpeeds()

// Add extra speed options when switching videos
const buttons = document.getElementsByTagName("Button")
for (let button of buttons) {
    if (button.getAttribute("class").startsWith("seq_video") || button.getAttribute("class").startsWith("sequence-nav-button")) {
        button.onclick = addMoreSpeeds
    }
}