// Accessing the speed options
const speedsMenu = document.getElementsByClassName("video-speeds menu")[0]

// Generating the menu toggles for more speed options
const newSpeeds = ["2.0", "2.50", "3.0", "5.0"]
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