---
tags: 
  - journal 
---
# 📆 Journal for <% moment(tp.file.title, "YYYY-MM-DD").format("dddd") %> the <% tp.date.now("DD") %> of <% tp.date.now("MMM YYYY") %>
<% tp.user.Timeline() %>
# Tasks for Today
```tasks
shortmode
due before today
not done
```

> [!check]- Due Today
> ```tasks
> shortmode
> due before tomorrow
> not done
> ```

> [!check]- Due Tomorrow
> ```tasks
> shortmode
> due tomorrow
> not done
> ```
# Other Notes
<< [[<% tp.date.yesterday() %>|yesterday's note]] | [[<% tp.date.tomorrow() %>|tomorrow's note]] >>