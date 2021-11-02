<%* 
  //get some values
  if (tp.frontmatter.unit != null) { var unitRaw = tp.frontmatter.unit;
  } else { var unitRaw = await tp.system.prompt('unit'); }
  let unit = tp.user.kebabCase(unitRaw);
  let name = tp.frontmatter.name;
  let wargearRanged = tp.frontmatter.wargearRanged.split(' ');
  let wargearMelee = tp.frontmatter.wargearMelee.split(' ');
  let abilities = tp.frontmatter.abilities.split(' ');
  let spells = tp.frontmatter.spells.split(' ');
  
  %>