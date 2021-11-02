<%* //get some values
  if (tp.frontmatter.unit != null) { var unitRaw = tp.frontmatter.unit;
  } else { var unitRaw = await tp.system.prompt('unit'); }
  let unit = tp.user.kebabCase(unitRaw);
  let name = tp.frontmatter.name;
      name = tp.user.titlize(name);
  //pull tags, convert to array, and alphabetize
  let ranged = tp.frontmatter.wargearRanged.split(' ');
      ranged.sort();
  let melee = tp.frontmatter.wargearMelee.split(' ');
      melee.sort();
  let abilities = tp.frontmatter.abilities.split(' ');
      abilities.sort();
  let spells = tp.frontmatter.spells.split(' ');
      spells.sort();
  var unitA = unit + '-abilities';
  var uaLink = '[[' + unitA + ']]';
  var unitS = unit + '-stats';
  var usLink = '[[' + unitS + ']]';
%>
# <% name %>
## <% tp.user.titlize(unit) %>
### Abilities
<% tp.file.include(uaLink) -%>
<%*
  //adds all non-base abilities (warlord traits, upgrades, etc)
  let abilitiesLength = abilities.length;
  for(var i=0; i<abilitiesLength; i++) {
  	var abilitiesTemp = abilities[i];
	var abilitiesLink = '[[' + abilitiesTemp + ']]'; 
%>
<%- tp.file.include(abilitiesLink) %>
<%* } %>
---

### Stats
<% tp.file.include(usLink) %>
---
### Wargear

| Weapon | Range | Type | S   | AP  | D   | Abilities |
| ------ | ----- | ---- | --- | --- | --- | --------- |
<%* //adds all ranged weapons
  let rangedLength = ranged.length;
  for(var i=0; i<rangedLength; i++) {
  	var rangedTemp = ranged[i];
	var rangedLink = '[[' + rangedTemp + ']]';
%>
<%- tp.file.include(rangedLink) %>
<%* } -%>
<%* //adds all melee weapons
  let meleeLength = melee.length;
  for(var i=0; i<meleeLength; i++) {
  	var meleeTemp = melee[i];
	var meleeLink = '[[' + meleeTemp + ']]'; %>
<%- tp.file.include(meleeLink) %>
<%* } %>
<%* //adds the spells
  let spellsLength = spells.length;
  for(var i=0; i<spellsLength; i++) {
  	var spellsTemp = spells[i];
	var spellsLink = '[[' + spellsTemp + ']]'; %>
<%- tp.file.include(spellsLink) %>
<%* } %>