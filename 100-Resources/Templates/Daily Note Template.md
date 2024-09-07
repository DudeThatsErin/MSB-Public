---
tags:
  - excalidraw
  - journal
hoursSleep: 
Exercise: 
fasting: 
caloriesEaten: 
mood: 
cssclasses:
  - banner
  - banner-inline-title
  - banner-fade
excalidraw-plugin: parsed
excalidraw-open-md: true
taskbone-ocr: 
---
<% await tp.user.BannerOnCreation() %>
<% await tp.user.EmojiTitle(tp) %>
# 📆 Journal for <% moment(tp.file.title, "YYYY-MM-DD").format("dddd") %> the <% tp.date.now("DD") %> of <% tp.date.now("MMM YYYY") %>
<% tp.user.Timeline() %>

> [!multi-column|center]
> 
>> [!blank-container]
>>>[!bookmark]+ Today's Tasks
>>> ```tasks
>>> shortmode
>>> due before tomorrow
>>> not done
>>> group by function (task.heading + '.md' === task.file.filename) ? '' : task.heading
>>> group by function \
>>>     const date = task.due.moment; \
>>>     return \
>>>         (!date)                           ? '%%4%% Undated' :      \
>>>         !date.isValid()                   ? '%%0%% Invalid date' : \
>>>         date.isBefore(moment(), 'day')    ? '%%1%% Overdue' :      \
>>>         date.isSame(moment(), 'day')      ? '%%2%% Today'   :      \
>>>         '%%3%% Future';
>>> sort by priority
>>> sort by due date
>>> sort by start date
>>> hide due date
>>> hide start date
>>> hide scheduled date
>>> hide created date
>>> hide recurrence rule
>>> hide cancelled date
>>> ```
>
>> [!blank-container]
>>> [!info-lighto]+ Recently Accessed Files
>>>```dataview
>>>LIST 
>>>FROM ""
>>>SORT file.mtime
>>>DESC LIMIT 5
>>>```
>
>
>> [!blank-container]
>>>[!award]+ Today's Affirmations
>>>1. 
>>>2. 
>>>3.  
>
>
>> [!blank-container]
>>>[!draw]- Excalidraw Drawing
>>>![[<%tp.file.title%>.svg]]
---
## <% tp.date.now("h:mm a") %>
<% tp.file.cursor(1) %>


# Tasks
## New Tasks
- [ ] 
## Today
```tasks
shortmode
due before tomorrow
not done
group by function (task.heading + '.md' === task.file.filename) ? '' : task.heading
group by function \
    const date = task.due.moment; \
    return \
        (!date)                           ? '%%4%% Undated' :      \
        !date.isValid()                   ? '%%0%% Invalid date' : \
        date.isBefore(moment(), 'day')    ? '%%1%% Overdue' :      \
        date.isSame(moment(), 'day')      ? '%%2%% Today'   :      \
        '%%3%% Future';
sort by priority
sort by due date
sort by start date
hide due date
hide start date
hide scheduled date
hide created date
hide recurrence rule
hide cancelled date
```

## Tomorrow
```tasks
shortmode
due tomorrow
not done
group by function (task.heading + '.md' === task.file.filename) ? '' : task.heading
group by function \
    const date = task.due.moment; \
    return \
        (!date)                           ? '%%4%% Undated' :      \
        !date.isValid()                   ? '%%0%% Invalid date' : \
        date.isBefore(moment(), 'day')    ? '%%1%% Overdue' :      \
        '%%3%% Future';
sort by priority
sort by due date
sort by start date
hide due date
hide start date
hide scheduled date
hide created date
hide recurrence rule
hide cancelled date
```

# Excalidraw
---

==⚠  Switch to EXCALIDRAW VIEW in the MORE OPTIONS menu of this document. ⚠== You can decompress Drawing data with the command palette: 'Decompress current Excalidraw file'. For more info check in plugin settings under 'Saving'


# Excalidraw Data
## Text Elements
%%
## Drawing
```json
{
	"type": "excalidraw",
	"version": 2,
	"source": "https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.2.9",
	"elements": [],
	"appState": {
		"theme": "light",
		"viewBackgroundColor": "#ffffff",
		"currentItemStrokeColor": "#1e1e1e",
		"currentItemBackgroundColor": "transparent",
		"currentItemFillStyle": "solid",
		"currentItemStrokeWidth": 2,
		"currentItemStrokeStyle": "solid",
		"currentItemRoughness": 1,
		"currentItemOpacity": 100,
		"currentItemFontFamily": 1,
		"currentItemFontSize": 20,
		"currentItemTextAlign": "left",
		"currentItemStartArrowhead": null,
		"currentItemEndArrowhead": "arrow",
		"scrollX": 386,
		"scrollY": 570.140625,
		"zoom": {
			"value": 1
		},
		"currentItemRoundness": "round",
		"gridSize": null,
		"gridColor": {
			"Bold": "#C9C9C9FF",
			"Regular": "#EDEDEDFF"
		},
		"currentStrokeOptions": null,
		"previousGridSize": null,
		"frameRendering": {
			"enabled": true,
			"clip": true,
			"name": true,
			"outline": true
		},
		"objectsSnapModeEnabled": false
	},
	"files": {}
}
```
%%