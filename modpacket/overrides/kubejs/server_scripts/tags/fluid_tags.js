ServerEvents.tags('fluid', event => {
    // 原油兼容
    event.add('forge:crude_oil', 'gtceu:oil_medium')
    event.add('forge:oil_medium', 'createdieselgenerators:crude_oil')
    
    // 生物柴油流体兼容
    event.add('forge:biodiesel', 'gtceu:bio_diesel')
    event.add('forge:bio_diesel', 'createdieselgenerators:biodiesel')
})