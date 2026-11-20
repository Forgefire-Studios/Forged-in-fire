ServerEvents.recipes(event => {
event.replaceInput(
  { output: 'ars_nouveau:imbuement_chamber' },         // Arg 1: the filter
  'ars_nouveau:archwood_planks',                    // Arg 2: the item to replace
  Ingredient.of('kubejs:arcane_planks')  // Arg 3: the item to replace it with 
  // Do /kjs hand with the items you want to use to see all their tags.
);
event.replaceInput(
  { mod: 'ars_nouveau' },         // Arg 1: the filter
  'minecraft:gold_ingot',                    // Arg 2: the item to replace
  Ingredient.of('kubejs:infused_iron')  // Arg 3: the item to replace it with 
  // Do /kjs hand with the items you want to use to see all their tags.
);

event.replaceInput(
  { mod: 'ars_nouveau' },         // Arg 1: the filter
  'minecraft:gold_nugget',                    // Arg 2: the item to replace
  Ingredient.of('kubejs:infused_iron_nugget')  // Arg 3: the item to replace it with 
  // Do /kjs hand with the items you want to use to see all their tags.
);

})