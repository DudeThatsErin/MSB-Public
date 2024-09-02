const { Task } = await dc.require("100-Resources/Datacore/Task.jsx");
const { Event } = await dc.require("100-Resources/Datacore/Event.jsx");

const Row = ({ page }) => {
    if (page.$frontmatter?.start) {
        return <Event page={page} />;
    } else {
        return <Task page={page} />;
    }
};

return { Row };