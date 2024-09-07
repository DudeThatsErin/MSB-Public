module.exports = async (tp) => {
    // Prompt the user for an emoji
    const emoji = await tp.system.prompt("Enter an emoji to use in the file title:");

    // If no emoji is provided, use a default one
    const finalEmoji = emoji ? emoji : "😄";

    // Return the new file name (optional)
    return `> [!banner-icon] ${finalEmoji}`;
};
