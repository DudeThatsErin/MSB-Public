const { Task } = await dc.require('100-Resources/Datacore/Task.jsx');

const Someday = () => {
    const pages = dc.useQuery('@page AND !path(RESOURCES/Templates) AND !closed AND #someday');
    const columns = [{ id: '', value: (page) => <Task page={page} /> }];

    return <dc.VanillaTable columns={columns} rows={pages} />;
};

return { Someday };