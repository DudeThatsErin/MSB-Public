module.exports = async (tp) => {
    // Prompt the user for an emoji
    const names = await tp.system.prompt("What are the class names?");

    // If no emoji is provided, use a default one
    const finalName = names ? names : "text-black";

    // Return the new file name (optional)
    return `<span class="${finalName}"></span>`;
};
