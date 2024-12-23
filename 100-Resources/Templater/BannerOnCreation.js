async function getRandomImageFromFolder(folderPath) {
    try {
        // Get all files in the vault
        const files = app.vault.getFiles();

        // Filter files to those that are in the specified folder and are images
        const imageFiles = files.filter(file => {
            const ext = file.extension.toLowerCase();
            const inFolder = file.path.startsWith(folderPath);
            return inFolder && (ext === 'jpg' || ext === 'jpeg' || ext === 'png' || ext === 'gif');
        });

        if (imageFiles.length === 0) {
            throw new Error('No image files found in the folder.');
        }

        const randomIndex = Math.floor(Math.random() * imageFiles.length);
        return imageFiles[randomIndex].path;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = async (tp) => {
    try {
        const folderPath = `90-Attachments/90-Banners`;
        const randomImagePath = await getRandomImageFromFolder(folderPath);

        return  `![[${randomImagePath}|banner]]`;
    } catch (err) {
        return `Error: ${err.message}`;
    }
};
