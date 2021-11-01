---
title: First Shot at Unit Card Templating
notetype: feed
type: post
date: 27-10-2021
---

### **This**
```
<%*
  let name = tp.file.include("[[Weirdboy#Weirdboy]]")
  let abilities = tp.file.include("[[Weirdboy#Abilitites]]")
  let stats = tp.file.include("[[Weirdboy#Stats]]")
  let wargear = tp.file.include("[[Weirdboy#Wargear]]")
%>
<% name %>#<% abilities %>#<% stats %>#<% wargear %>
```

### Becomes **This**

> # Weirdboy
>
> ## Abilitites
>
> [[Ere We Go]]
> [[Waaagh]]
> [[Waaagh Energy]]
>
> ## Stats
>
> | Unit     | M   | WS  | BS  | S   | T   | W   | A   | Ld  | Sv  |
> |:-------- |:--- |:--- |:--- |:--- |:--- |:--- |:--- |:--- |:--- |
> | Weirdboy | 5"  | 3+  | 5+  | 5   | 5   | 5   | 3   | 6   | 6+  |
>
> ## Wargear
>
> | Weapon             | Range | Type  | S   | AP  | D   | Abilities |
> |:------------------ |:----- |:----- |:--- |:--- |:--- |:--------- |
> | [[Weirdboy Staff\|Weirdboy Staff]] | Melee | Melee | +3  | -1  | d3  | -         |

---

### Still to do
- Add frontmatter to template: title, create date, tags, etc
- tp.file.include needs to pull from file name, should be super simple
- Should be able to check infrequent things (psyker powers, relics, etc.) with an IF statement, I just gotta figure out how to do that in javascript
- Right now, if the Weirdboy had an upgrade/relic weapon (say, [[Broggs Buzzbomb]]), it would get its own separate section. Gotta see if I can figure out how to combine default and optional wargear into one chart automatically
- Fix "Abilities", it looks bad

---

{:.small .serif .oblique}
Update: I've made some decent progress on this, check out the updates [[Next State of Unit Templating]]