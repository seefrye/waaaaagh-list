<%* //get some values
  if (tp.frontmatter.unit != null) { var unitRaw = tp.frontmatter.unit;
  } else { var unitRaw = await tp.system.prompt('unit'); }
  let unit = tp.user.kebabCase(unitRaw);
  if (tp.frontmatter.abilities != null) { var abilities = tp.frontmatter.abilities.split(' ');
    abilities.sort(); } else {}
  var unitA = unit + '-abilities';
  var uaLink = '[[' + unitA + ']]';
  var unitS = unit + '-stats';
  var usLink = '[[' + unitS + ']]';
  let name = tp.frontmatter.name;
      name = tp.user.titlize(name);
%>
# <% name %>
## <% tp.user.titlize(unit) %>
### Abilities
<% tp.file.include(uaLink) -%>
<%*
  //adds all non-base abilities (warlord traits, upgrades, etc)
  if (tp.frontmatter.abilities != null) {
  let abilitiesLength = abilities.length;
  for(var i=0; i<abilitiesLength; i++) {
  	var abilitiesTemp = abilities[i];
	var abilitiesLink = '[[' + abilitiesTemp + ']]'; 
%>
<%- tp.file.include(abilitiesLink) %>
<%* }} else {} %>
---

### Stats

<%tp.file.include(usLink)%>

---

### Wargear

| Weapon | Range | Type | S   | AP  | D   | Abilities |
| ------ | ----- | ---- | --- | --- | --- | --------- |
<%* //adds all ranged weapons
  if(tp.frontmatter.wargearRanged != null) {
  let ranged = tp.frontmatter.wargearRanged.split(' ');
      ranged.sort();
  let rangedLength = ranged.length;
  for(var i=0; i<rangedLength; i++) {
  	var rangedTemp = ranged[i];
	var rangedLink = '[[' + rangedTemp + ']]';
%>
<%- tp.file.include(rangedLink) %>
<%* }} else {}  -%>
<%* //adds all melee weapons
  if(tp.frontmatter.wargearMelee != null) {
    let melee = tp.frontmatter.wargearMelee.split(' ');
    melee.sort();
	let meleeLength = melee.length;
  for(var i=0; i<meleeLength; i++) {
  	var meleeTemp = melee[i];
	var meleeLink = '[[' + meleeTemp + ']]'; %>
<%- tp.file.include(meleeLink) %>
<%* }} else {} 
  //check for spells & add header if present
  if(tp.frontmatter.spells != null) { %>
---

### Spells
  <%*
	let spells = tp.frontmatter.spells.split(' ');
    spells.sort();
    let spellsLength = spells.length;
  for(var i=0; i<spellsLength; i++) {
  	var spellsTemp = spells[i];
	var spellsLink = '[[' + spellsTemp + ']]'; %>
<%- tp.file.include(spellsLink) %>
<%* }} else {} %>