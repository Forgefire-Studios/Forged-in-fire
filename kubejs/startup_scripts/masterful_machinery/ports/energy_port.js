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
    event.create('basic_energy_port')
    .inputName({text: 'Basic Energy Input Port', color: Basic})
    .outputName({text: 'Basic Energy Output Port', color: Basic})
    .config('mm:energy', e => {
        e.capacity(1024000)
        e.maxReceive(512000)
        e.maxExtract(512000)
        e.autoPush(true)
        e.tierRank(1)
    })

    event.create('advanced_energy_port')
    .inputName({text: 'Advanced Energy Input Port', color: Advanced})
    .outputName({text: 'Advanced Energy Output Port', color: Advanced})
    .config('mm:energy', e => {
        e.capacity(4096000)
        e.maxReceive(2048000)
        e.maxExtract(2048000)
        e.autoPush(true)
        e.tierRank(2)
    })

    event.create('elite_energy_port')
    .inputName({text: 'Elite Energy Input Port', color: Elite})
    .outputName({text: 'Elite Energy Output Port', color: Elite})
    .config('mm:energy', e => {
        e.capacity(16384000)
        e.maxReceive(8192000)
        e.maxExtract(8192000)
        e.autoPush(true)
        e.tierRank(3)
    })

    event.create('ultimate_energy_port')
    .inputName({text: 'Ultimate Energy Input Port', color: Ultimate})
    .outputName({text: 'Ultimate Energy Output Port', color: Ultimate})
    .config('mm:energy', e => {
        e.capacity(65536000)
        e.maxReceive(32768000)
        e.maxExtract(32768000)
        e.autoPush(true)
        e.tierRank(4)
    })

    event.create('absolute_energy_port')
    .inputName({text: 'Absolute Energy Input Port', color: Absolute})
    .outputName({text: 'Absolute Energy Output Port', color: Absolute})
    .config('mm:energy', e => {
        e.capacity(262144000)
        e.maxReceive(131072000)
        e.maxExtract(131072000)
        e.autoPush(true)
        e.tierRank(5)
    })

    event.create('supreme_energy_port')
    .inputName({text: 'Supreme Energy Input Port', color: Supreme})
    .outputName({text: 'Supreme Energy Output Port', color: Supreme})
    .config('mm:energy', e => {
        e.capacity(1048576000)
        e.maxReceive(524288000)
        e.maxExtract(524288000)
        e.autoPush(true)
        e.tierRank(6)
    })

    event.create('cosmic_energy_port')
    .inputName({text: 'Cosmic Energy Input Port', color: Cosmic})
    .outputName({text: 'Cosmic Energy Output Port', color: Cosmic})
    .config('mm:energy', e => {
        e.capacity(4194304000)
        e.maxReceive(2097152000)
        e.maxExtract(2097152000)
        e.autoPush(true)
        e.tierRank(7)
    })

    event.create('infinite_energy_port')
    .inputName({text: 'Infinite Energy Input Port', rainbow: true, speed: 0.1, spread: spread_0})
    .outputName({text: 'Infinite Energy Output Port', rainbow: true, speed: 0.1, spread: spread_0})
    .config('mm:energy', e => {
        e.capacity(16777216000)
        e.maxReceive(2147483647)
        e.maxExtract(2147483647)
        e.autoPush(true)
        e.tierRank(8)
    })

})