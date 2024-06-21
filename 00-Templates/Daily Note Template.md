---
tags:
  - journal
symptoms: 
hoursSleep: 
Exercise: 
caloriesEaten: 
mood:
---
# 📆 Journal for <% moment(tp.file.title, "YYYY-MM-DD").format("dddd") %> the <% tp.date.now("DD") %> of <% tp.date.now("MMM YYYY") %>
<< [[<% tp.date.yesterday() %>|yesterday's note]] | [[<% tp.date.tomorrow() %>|tomorrow's note]] >>
<% tp.user.Timeline() %>

---

## <% tp.date.now("h:mm a") %>

<% tp.file.cursor(1) %>