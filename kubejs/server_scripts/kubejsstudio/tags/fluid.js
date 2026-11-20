// kubejsstudio fluid tags; re-apply merges by tag id
ServerEvents.tags('fluid', event => {
    event.add('kubejs:liquid_source', 'kubejs:flowing_liquid_source', 'kubejs:liquid_source')
})
