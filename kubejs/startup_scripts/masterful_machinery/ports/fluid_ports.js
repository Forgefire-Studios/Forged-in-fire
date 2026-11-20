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

//variables used for slotcapacity
var sC1 = 32000
var sC2 = 64000
var sC3 = 128000
var sC4 = 256000
var sC5 = 4096000
var sC6 = 32768000
var sC7 = 262144000
var sC8 = 2097152000

MMEvents.registerPorts(event => {
    
    event.create('basic_fluid_port')
    .inputName({text: 'Basic Input Port', color: Basic})
    .outputName({text: 'Basic Output Port', color: Basic})
    .config('mm:fluid', e => {
        e.rows(1)
        e.columns(1)
        e.slotCapacity(sC1)
        e.autoPush(true)
        e.tierRank(1)
    })

    event.create('advanced_fluid_port')
    .inputName({text: 'Advanced Input Port', color: Advanced})
    .outputName({text: 'Advanced Output Port', color: Advanced})
    .config('mm:fluid', e => {
        e.rows(1)
        e.columns(1)
        e.slotCapacity(sC2)
        e.autoPush(true)
        e.tierRank(2)
    })

    event.create('elite_fluid_port')
    .inputName({text: 'Elite Input Port', color: Elite})
    .outputName({text: 'Elite Output Port', color: Elite})
    .config('mm:fluid', e => {
        e.rows(1)
        e.columns(1)
        e.slotCapacity(sC3)
        e.autoPush(true)
        e.tierRank(3)
    })

    event.create('ultimate_fluid_port')
    .inputName({text: 'Ultimate Input Port', color: Ultimate})
    .outputName({text: 'Ultimate Output Port', color: Ultimate})
    .config('mm:fluid', e => {
        e.rows(1)
        e.columns(1)
        e.slotCapacity(sC4)
        e.autoPush(true)
        e.tierRank(4)
    })

    event.create('absolute_fluid_port')
    .inputName({text: 'Absolute Input Port', color: Absolute})
    .outputName({text: 'Absolute Output Port', color: Absolute})
    .config('mm:fluid', e => {
        e.rows(1)
        e.columns(1)
        e.slotCapacity(sC5)
        e.autoPush(true)
        e.tierRank(5)
    })

    event.create('supreme_fluid_port')
    .inputName({text: 'Supreme Input Port', color: Supreme})
    .outputName({text: 'Supreme Output Port', color: Supreme})
    .config('mm:fluid', e => {
        e.rows(1)
        e.columns(3)
        e.slotCapacity(sC6)
        e.autoPush(true)
        e.tierRank(6)
    })

    event.create('cosmic_fluid_port')
    .inputName({text: 'Comsic Input Port', color: Cosmic})
    .outputName({text: 'Comsic Output Port', color: Cosmic})
    .config('mm:fluid', e => {
        e.rows(1)
        e.columns(1)
        e.slotCapacity(sC7)
        e.autoPush(true)
        e.tierRank(7)
    })

    event.create('infinite_fluid_port')
    .inputName({text: 'Infinite Input Port', rainbow: true, speed: 0.1, spread: spread_0})
    .outputName({text: 'Infinite Output Port', rainbow: true, speed: 0.1, spread: spread_0})
    .config('mm:fluid', e => {
        e.rows(1)
        e.columns(1)
        e.slotCapacity(sC8)
        e.autoPush(true)
        e.tierRank(8)
    })

})
