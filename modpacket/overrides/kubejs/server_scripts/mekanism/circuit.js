ServerEvents.tags('item', event => {
    //为MEK电路板添加GT矿辞支持
    event.add('gtceu:circuits/lv', 'mekanism:basic_control_circuit')
    event.add('gtceu:circuits/mv', 'mekanism:advanced_control_circuit')
    event.add('gtceu:circuits/hv', 'mekanism:elite_control_circuit')
    event.add('gtceu:circuits/ev', 'mekanism:ultimate_control_circuit')
    event.add('gtceu:circuits/iv', 'mekanism_extras:absolute_control_circuit')
    event.add('gtceu:circuits/luv', 'mekanism_extras:supreme_control_circuit')
    event.add('gtceu:circuits/zpm', 'mekanism_extras:cosmic_control_circuit')
    event.add('gtceu:circuits/uv', 'mekanism_extras:infinite_control_circuit')
})
