---
tags: 
  - journal 
---
# 📆 Journal for <% moment(tp.file.title, "YYYY-MM-DD").format("dddd") %> the <% tp.date.now("DD") %> of <% tp.date.now("MMM YYYY") %>
<% tp.user.Timeline() %>

## How have you felt today?
> [!info]- Use this chart
> ![[Emotion-Wheel-1.jpg|800]]

# Tasks
> [!check-r]- Overdue
> ```tasks
> shortmode
> due before today
> not done
> ```

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