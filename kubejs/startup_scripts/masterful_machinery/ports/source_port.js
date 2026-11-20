//variables used for color and spread
var Basic    = '#62ffbe'
var Advanced = '#ff826d'
var Elite    = '#49f2f9'
var Ultimate = '#fc89ff'
var Absolute = '#eaeb45'
var Supreme  = '#a40002'
var Cosmic   = '#fa94ee'
var spread_0 = 0.0
var spread_1 = 0.08

MMEvents.registerPorts(event => {
    event.create('basic_source_port')
    .inputName({text: 'Basic source Input Port', color: Basic})
    .outputName({text: 'Basic source Output Port', color: Basic})
    .config('mm:ars_nouveau/source', e => {
        e.capacity(1024000)
        e.range(6)
        e.tierRank(1)
    })

    event.create('advanced_source_port')
    .inputName({text: 'Advanced source Input Port', color: Advanced})
    .outputName({text: 'Advanced source Output Port', color: Advanced})
    .config('mm:ars_nouveau/source', e => {
        e.capacity(4096000)
        e.range(6)
        e.tierRank(2)
    })

    event.create('elite_source_port')
    .inputName({text: 'Elite source Input Port', color: Elite})
    .outputName({text: 'Elite source Output Port', color: Elite})
    .config('mm:ars_nouveau/source', e => {
        e.capacity(16384000)
        e.range(6)
        e.tierRank(3)
    })

    event.create('ultimate_source_port')
    .inputName({text: 'Ultimate source Input Port', color: Ultimate})
    .outputName({text: 'Ultimate source Output Port', color: Ultimate})
    .config('mm:ars_nouveau/source', e => {
        e.capacity(65536000)
        e.range(6)
        e.tierRank(4)
    })

    event.create('absolute_source_port')
    .inputName({text: 'Absolute source Input Port', color: Absolute})
    .outputName({text: 'Absolute source Output Port', color: Absolute})
    .config('mm:ars_nouveau/source', e => {
        e.capacity(262144000)
        e.range(6)
        e.tierRank(5)
    })

    event.create('supreme_source_port')
    .inputName({text: 'Supreme source Input Port', color: Supreme})
    .outputName({text: 'Supreme source Output Port', color: Supreme})
    .config('mm:ars_nouveau/source', e => {
        e.capacity(1048576000)
        e.range(6)
        e.tierRank(6)
    })

})
