import {paranoia_log} from "./util.js";

/**
 * Registers a scene control button under "Token Controls" to toggle the Wifi Deadzone setting
 * @param buttons
 * @returns {*}
 */
export function register_wifi_dead_zone(controls) {
    paranoia_log("Registering Wifi Deadzone toggle");
    controls.tokens.tools.wifi = {
        name: "wifi",
        title: "Toggle Wifi Deadzone",
        icon: "fa-solid fa-wifi",
        order: Object.keys(controls.tokens.tools).length,
        button: true,
        visible: game.user.isGM,
        onChange: () => {
            toggle_wifi();
        },
    };
    return controls;
}

/**
 * Actually toggle the setting for Wifi Deadzone
 * This makes it so mousing over a token renders question marks instead of the name, XP points, and treason stars
 */
export function toggle_wifi() {
    paranoia_log("Toggling Wifi Deadzone setting");
    game.settings.set(
        "paranoia2017",
        "wifi_dead_zone",
        !game.settings.get("paranoia2017", "wifi_dead_zone"),
    );
}
