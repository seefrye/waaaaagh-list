---
name: Next State of Unit Templating
notetype: feed
type: post
season: summer
date: 30-10-2021
---

# Current state
I've figured out how to read frontmatter tags in a document, which makes automating unit cards a heck of a lot easier. Right now, I'm just including 'enough tags' to hopefull cover most cases. However, it would be way better if I could treat each tag as an array and iterate through them, rather than having 'spell1', 'spell2', etc.

The way it works right now is you generate a new document and populate the frontmatter tags like so:

```
nam: Automated Unit Card
notetype: nofeed
unit: weirdboy
wargear: boombits
wargear_nochart: ammo-runt
upgrade: more-dakka
relic: da-irongob
relic_weapon: broggs-buzzbomb
wlt: ard-as-nails
spell1: jabbin-fingerz
spell2: da-jump
spell3: warpath
```

Name and note type are for jekyll - required for publishing, but not for building the unit card itself. The template should be able to handle any empty or missing tags, skipping them if null. There's a smarter way to do this, but I haven't gotten there yet. Once your values are set, apply the template at the new line after the frontmatter block. Right now, the template looks something like this:

```<%*
  // read frontmatter tags for 'unit', asks for user inupt otherwise
  if (tp.frontmatter.unit != null) { var unitRaw = tp.frontmatter.unit;
  } else { var unitRaw = await tp.system.prompt("unit"); }
  // generate links for unit sections
  // kebabCase turns A Value Like This into one-like-this
  let unit = tp.user.kebabCase(unitRaw);
  // titlize turns a-kebab-case-value Into A Title Value
  let name = tp.user.titlize(unit);
  var unitAbilities = unit + '-abilities';
  var uaLink = '[[' + unitAbilities + ']]';
  var unitStats = unit + '-stats';
  var usLink = '[[' + unitStats + ']]';
  var unitWargear = unit + '-wargear';
  var uwLink = '[[' + unitWargear + ']]';
  // check wargear, inserted with wargear
  if (tp.frontmatter.wargear != null) {
  	var wargearRaw = tp.frontmatter.wargear;
	var wg = tp.user.kebabCase(wargearRaw);
	var wgLink = '[[' + wg + ']]';
  } else {}
  // check no-chart wargear, inserted with abilities
  if (tp.frontmatter.wargear_nochart != null) {
  	var wargear_nochartRaw = tp.frontmatter.wargear_nochart;
	var wgnc = tp.user.kebabCase(wargear_nochartRaw);
	var wgncLink = '[[' + wgnc + ']]';
  } else {}
  // check ability, inserted with abilities
  if (tp.frontmatter.upgrade != null) {
  	var upgradeRaw = tp.frontmatter.upgrade;
	var upgrade = tp.user.kebabCase(upgradeRaw);
	var upgradeLink = '[[' + upgrade + ']]';
  } else {}
  // check relic, inserted with abilities
  if (tp.frontmatter.relic != null) {
  	var relicRaw = tp.frontmatter.relic;
	var relic = tp.user.kebabCase(relicRaw);
	var relicLink = '[[' + relic + ']]';
  } else {}
  // check relic weapon, inserted with wargear
  if (tp.frontmatter.relic_weapon != null) {
  	var relic_weaponRaw = tp.frontmatter.relic_weapon;
	var relic_weapon = tp.user.kebabCase(relic_weaponRaw);
	var relic_weaponLink = '[[' + relic_weapon + ']]';
  } else {}
  // check warlord trait, inserted with abilities
  if (tp.frontmatter.wlt != null) {
  	var wltRaw = tp.frontmatter.wlt;
	var wlt = tp.user.kebabCase(wltRaw);
	var wltLink = '[[' + wlt + ']]';
  } else {}
  // check first spell, inserted after wargear
  if (tp.frontmatter.spell1 != null) {
  	var spell1Raw = tp.frontmatter.spell1;
	var spell1 = tp.user.kebabCase(spell1Raw);
	var spell1Link = '[[' + spell1 + ']]';
  } else {}
  // check second spell, inserted after wargear
  if (tp.frontmatter.spell2 != null) {
  	var spell2Raw = tp.frontmatter.spell2;
	var spell2 = tp.user.kebabCase(spell2Raw);
	var spell2Link = '[[' + spell2 + ']]';
  } else {}
  // check third spell, inserted after wargear
  if (tp.frontmatter.spell3 != null) {
  	var spell3Raw = tp.frontmatter.spell3;
	var spell3 = tp.user.kebabCase(spell3Raw);
	var spell3Link = '[[' + spell3 + ']]';
  } else {}
  // exit codespace, begin inserting values
%>  
# <% name %>

---

<% tp.file.include(uaLink) _%>
<%* if (tp.frontmatter.wargear_nochart != null) { _%>
<%- tp.file.include(wgncLink) %>
<%* } else { } _%>
<%* if (tp.frontmatter.upgrade != null) { _%>
<%_ tp.file.include(upgradeLink) %>
<%* } else { } _%>
<%* if (tp.frontmatter.wlt != null) { _%>
<%_ tp.file.include(wltLink) %>
<%* } else { } _%>
<%* if (tp.frontmatter.relic != null) { _%>
<%_ tp.file.include(relicLink) %>
<%* } else { } -%>

---

<% tp.file.include(usLink) %>

---

<% tp.file.include(uwLink) _%>
<%* if (tp.frontmatter.wargear != null) { %>
<%_ tp.file.include(wgLink) %>
<%* } else { } _%>
<%* if (tp.frontmatter.relic_weapon != null) { %>
<%_ tp.file.include(relic_weaponLink) %>
<%* } else { } -%>

---

<%* if (tp.frontmatter.spell1 != null) { %>
<%_ tp.file.include(spell1Link) %>
<%* } else { } _%>
```

Again, there's clearly better ways to do this, but I haven't gotten there yet. Running that template will automatically pull and format the data for that unit card, and spit out a markdown file. Here's that markdown rendered in-broswer. Check out the flashcards for rule text: **[[Automated Unit Card Example]]**