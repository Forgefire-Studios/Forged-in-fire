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

//variables used for stack sizes
var Stack0 = 64  //slot capacity for the Basic Ports
var Stack1 = 128 //slot capacity for the Advanced Ports
var Stack2 = 64  //slot capacity for the Elite Ports
var Stack3 = 128 //slot capacity for the Ultimate Ports
var Stack4 = 64 //slot capacity for the Absolute Ports
var Stack5 = 128 //slot capacity for the Supreme Ports
var Stack6 = 64 //slot capacity for the Cosmic Ports
var Stack7 = 1024 //slot capacity for the Infinite Ports

MMEvents.registerPorts(event => {
    event.create('basic_item_port')
    .inputName({text: 'Basic Input Port', color: Basic})
    .outputName({text: 'Basic Output Port', color: Basic})
    .config('mm:item', e => {
        e.rows(3)
        e.columns(3)
        e.autoPush(true)
        e.tierRank(1)
        e.slotCapacity(Stack0)
    });

    event.create('advanced_item_port')
    .inputName({text: 'Advanced Input Port', color: Advanced})
        .outputName({text: 'Advanced Output Port', color: Advanced})
    .config('mm:item', e => {
        e.rows(3)
        e.columns(3)
        e.autoPush(true)
        e.tierRank(2)
        e.slotCapacity(Stack1)
    });

    event.create('elite_item_port')
    .inputName({text: 'Elite Input Port', color: Elite})
    .outputName({text: 'Elite Output Port', color: Elite})
    .config('mm:item', e => {
        e.rows(4)
        e.columns(4)
        e.autoPush(true)
        e.tierRank(3)
        e.slotCapacity(Stack2)
    });

    event.create('ultimate_item_port')
    .inputName({text: 'Ultimate Input Port', color: Ultimate})
    .outputName({text: 'Ultimate Output Port', color: Ultimate})
    .config('mm:item', e => {
        e.rows(4)
        e.columns(4)
        e.autoPush(true)
        e.tierRank(4)
        e.slotCapacity(Stack3)
    });

    event.create('absolute_item_port')
    .inputName({text: 'Absolute Input Port', color: Absolute})
    .outputName({text: 'Absolute Output Port', color: Absolute})
    .config('mm:item', e => {
        e.rows(5)
        e.columns(5)
        e.autoPush(true)
        e.tierRank(5)
        e.slotCapacity(Stack4)
    });

    event.create('supreme_item_port')
    .inputName({text: 'Supreme Input Port', color: Supreme})
    .outputName({text: 'Supreme Output Port', color: Supreme})
    .config('mm:item', e => {
        e.rows(5)
        e.columns(5)
        e.autoPush(true)
        e.tierRank(6)
        e.slotCapacity(Stack5)
    });

    event.create('cosmic_item_port')
    .inputName({text: 'Cosmic Input Port', color: Cosmic})
    .outputName({text: 'Cosmic Output Port', color: Cosmic})
    .config('mm:item', e => {
        e.rows(6)
        e.columns(9)
        e.autoPush(true)
        e.tierRank(7)
        e.slotCapacity(Stack6)
    });

    event.create('infinite_item_port')
    .inputName({text: 'Infinite Input Port', rainbow: true, speed: 0.1, spread: spread_0})
    .outputName({text: 'Infinite Output Port', rainbow: true, speed: 0.1, spread: spread_0})
    .config('mm:item', e => {
        e.rows(6)
        e.columns(9)
        e.autoPush(true)
        e.tierRank(8)
        e.slotCapacity(Stack7)
    })

})