<%*
  let title = tp.file.title
  if (title.startsWith("Untitled")) {
    title = await tp.system.prompt("Title");
  }
  await tp.file.move("/Public/Wargear/Melee/" + tp.file.title);
  title = tp.user.kebabCase(title)
  await tp.file.rename(title);
  tR += "---"
%>
title: <%* tR += title %>
<%* title = tp.user.titlize(title) %>created: <% tp.date.now("YYYY-MM-DD") %>
notetype: nofeed
tags: wargear melee
---

# <% title %>

---

# Stats

| Weapon | Range | Type  | S   | AP  | D   | Abilities |
| ------ | ----- | ----- | --- | --- | --- | --------- |
|        | Melee | Melee |     |     |     |           |
|        | Melee | Melee |     |     |     |           | 