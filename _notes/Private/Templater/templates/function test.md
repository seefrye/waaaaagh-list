<%*
  let unit = await tp.system.prompt("unit");
  let unitKebab = tp.user.kebabCase(unit);
  let unitLink = '[[' + unitKebab + ']]';
  let unitAbilities = '[[' + unitKebab + '#Abilities]]';
  var unitAbilitiesText = tp.file.include(unitAbilities);
%>
<%*
  let wargear = await tp.system.prompt("wargear", "". true);
  if (wargear != null) {
	let wargearKebab = tp.user.kebabCase(wargear);
    let wargearLink = '[[' + wargearKebab + ']]';
	let wargearStats = '[[' + wargearKebab + '#Stats]]';
    var wargearStatsText = tp.file.include(wargearStats);
  }
  else {
    var wargearStatsText = '';
  }
%>
<%*
  let psychic = await tp.system.prompt("psychic")
  if (psychic != null) {
    let psychicKebab = tp.user.kebabCase(psychic);
	let psychicLink = '[[' + psychicKebab + ']]';
	let psychicDetails = '[[' + psychicKebab + '#Description]]';
	var psychicDetailsText = tp.file.include(psychicDetails);
}
  else {
    var psychicDetailsText = '';
}
%>
<%_ unitAbilitiesText _%>
<%_ wargearStatsText %>
<%_ psychicDetailsText %>