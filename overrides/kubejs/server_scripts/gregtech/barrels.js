ServerEvents.recipes(event => {
const id = global.id
    event.shaped('gtceu:ulv_barrel',[
        'ADA',
        'ACA',
        'ADA'],{
        A: '#forge:stripped_logs',
        C: 'woodenbucket:wooden_bucket',
        D: '#minecraft:wooden_slabs'
    }).id('kubejs:shaped/ulv_barrel');

    event.shaped('gtceu:ulv_stone_barrel',[
        'ADA',
        'ACA',
        'ADA'],{
            A: '#forge:stone',
            C: 'minecraft:bucket',
            D: 'minecraft:stone_slab'
    }).id('kubejs:shaped/ulv_stone_barrel');

    const sbarrel = (output, fluidcons, nconsfluid, circ) => {
        event.recipes.gtceu.stone_barrel(`${output}`)
            .notConsumableFluid(`${nconsfluid}`)
            .inputFluids(`${fluidcons} 1000`)
            .itemOutputs(`minecraft:${output}`)
            .circuit(circ)
            .duration(15);
    }

    sbarrel('cobblestone','minecraft:water','minecraft:lava',0)
    sbarrel('obsidian','minecraft:lava','minecraft:water',10)
    sbarrel('blackstone','exdeorum:witch_water','minecraft:lava',0)

    event.recipes.gtceu.stone_barrel(`tempered_glass`)
        .itemInputs(`minecraft:glass`)
        .inputFluids(`minecraft:lava 1000`)
        .itemOutputs(`gtceu:tempered_glass`)
        .duration(600);

const barrel = (output, item, fluid) => {
    event.recipes.gtceu.barrel(`${output.split(':')[1]}`)
        .itemInputs(`${item}`)
        .inputFluids(`${fluid} 1000`)
        .itemOutputs(`${output}`)
        .duration(15);
}

barrel('minecraft:clay','exdeorum:dust','minecraft:water')
barrel('minecraft:mud','minecraft:dirt','minecraft:water')
barrel('minecraft:brown_mushroom_block','exdeorum:mycelium_spores','exdeorum:witch_water')
barrel('minecraft:red_mushroom_block','minecraft:brown_mushroom_block','exdeorum:witch_water')
barrel('minecraft:soul_sand','#minecraft:smelts_to_glass','exdeorum:witch_water')
barrel('minecraft:soul_soil','minecraft:coarse_dirt','exdeorum:witch_water')
barrel('minecraft:blackstone','minecraft:cobblestone','exdeorum:witch_water')
barrel('minecraft:slime_block','minecraft:red_mushroom_block','exdeorum:witch_water')

const compost = [
    'minecraft:hanging_roots','minecraft:pumpkin_pie','minecraft:string','minecraft:apple', 'minecraft:pumpkin','minecraft:mangrove_roots', 'minecraft:big_dripleaf',
    'minecraft:spore_blossom','minecraft:vine', 'minecraft:lily_pad','minecraft:sweet_berries','minecraft:red_mushroom','exdeorum:grass_seeds', 'minecraft:brown_mushroom',
    'minecraft:spider_eye','minecraft:melon_slice','minecraft:sugar_cane','minecraft:fern','minecraft:bamboo', 'exdeorum:mycelium_spores', 'minecraft:bread',
    'minecraft:glow_berries','minecraft:cactus','exdeorum:silk_worm', '#minecraft:flowers', '#forge:seeds', '#forge:crops', '#minecraft:saplings', '#minecraft:leaves'
]
compost.forEach(type => {
    event.recipes.gtceu.barrel_composting(`${type.split(':')[1]}_composting`)
        .itemInputs(`4x ${type}`)
        .itemOutputs('minecraft:dirt')
        .duration(15);
});
});
