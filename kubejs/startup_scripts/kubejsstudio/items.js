// kubejsstudio registry additions; re-apply merges by id
StartupEvents.registry('item', event => {
    event.create('kubejs:infused_iron').displayName('Infused Iron').texture('minecraft:item/iron_ingot').parentModel('minecraft:item/iron_ingot').glow(true)
    event.create('kubejs:infused_iron_nugget').texture('minecraft:item/iron_nugget').parentModel('minecraft:item/iron_nugget').glow(true)
})
