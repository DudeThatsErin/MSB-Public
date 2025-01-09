<%*
  const defaultTitle = tp.date.now("HHmm")+' '+tp.file.title;
  const title = await tp.system.prompt("Title of the drawing?", defaultTitle);
  const folder = tp.file.folder(true);
  const transcludePath = (folder== '/' ? '' : folder + '/') + title + '.excalidraw';
  tR = '![['+transcludePath+']]';
  const ea = ExcalidrawAutomate;
  ea.reset();
  ea.setTheme(1); //set Theme to dark
  await ea.create({
    filename : title,
    foldername : folder,
    //templatePath: 'Excalidraw/Template.excalidraw', //uncomment if you want to use a template
    onNewPane : true
  });
%>