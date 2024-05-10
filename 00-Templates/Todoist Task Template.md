
| status | title | created | due | labels | project | link |
| -------| ----- | ------- | --- | ------ | ------- | ---- |

{%- for task in tasks %}
{% capture line %}
|
{{ task.resolutionState }}
|
{{ task.title }}
|
{{ task.creationDate | date: "%Y-%m-%d" }}
|
{{ task.dueDate }}
|
{% for label in task.labelNames %} #{{ label }}{% endfor %}
|
{{task.projectName}}
|
{{ task.url }}
|
{% endcapture %}{{ line | strip_newlines}}{% endfor %}
