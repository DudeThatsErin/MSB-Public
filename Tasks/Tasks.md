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

> [!check]- Due Tomorrow
> ```tasks
> shortmode
> due tomorrow
> not done
> ```