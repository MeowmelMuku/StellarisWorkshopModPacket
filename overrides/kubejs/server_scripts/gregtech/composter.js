ServerEvents.recipes(event => {
    const composting = (odds, fuel) => {
        event.recipes.gtceu.composting(fuel.split(':')[1])
            .itemInputs(`${fuel}`)
            .chancedOutput('minecraft:bone_meal', odds, 0)
            .duration(42);
    };
    
    // 30%
    ['#minecraft:fox_food','minecraft:seagrass', 'minecraft:pink_petals', 'minecraft:dried_kelp', 'minecraft:pitcher_pod',
        'minecraft:mangrove_roots', 'minecraft:hanging_roots', 'minecraft:grass', 'minecraft:kelp', 'minecraft:small_dripleaf', 'minecraft:moss_carpet', 'minecraft:torchflower_seeds', '#minecraft:saplings', '#minecraft:leaves', '#forge:seeds'
    ].forEach(organic=>{
        composting(3000, organic)
    });
    
    // 50%
    ['minecraft:tall_grass', 'minecraft:vine', 'minecraft:cactus',  'minecraft:nether_sprouts', 'minecraft:sugar_cane', 'minecraft:twisting_vines',
        'minecraft:glow_lichen', 'minecraft:weeping_vines', 'minecraft:melon_slice'
    ].forEach(organic=>{
        composting(5000, organic)
    });

    // 65%
    ['#forge:mushrooms', 'minecraft:melon', 'minecraft:shroomlight',
        'minecraft:lilac', 'minecraft:dandelion', 'minecraft:sunflower', 'minecraft:pumpkin',
         'minecraft:apple', 'minecraft:crimson_roots', 'minecraft:orange_tulip', 'minecraft:fern', 
        'minecraft:pink_tulip',  'minecraft:carved_pumpkin', 'minecraft:moss_block',  'minecraft:lily_of_the_valley', 'minecraft:cocoa_beans',
         'minecraft:blue_orchid', 'minecraft:rose_bush', 'minecraft:lily_pad', 'minecraft:azure_bluet', 'minecraft:sea_pickle', 'minecraft:crimson_fungus',
        'minecraft:warped_roots', 'minecraft:spore_blossom', 'minecraft:big_dripleaf',
        'minecraft:wheat', 'minecraft:peony', 'minecraft:nether_wart', 'minecraft:large_fern', 'minecraft:cornflower',
        'minecraft:red_tulip', 'minecraft:poppy', 'minecraft:mushroom_stem', 'minecraft:warped_fungus', 'minecraft:wither_rose', 'minecraft:allium',
        'minecraft:oxeye_daisy', 'minecraft:white_tulip'].forEach(organic=>{
        composting(6500, organic)
    });

    // 85%
    ['minecraft:hay_block', 'minecraft:pitcher_plant', 'minecraft:brown_mushroom_block',
        'minecraft:nether_wart_block', 'minecraft:baked_potato', 'minecraft:warped_wart_block',
        'minecraft:red_mushroom_block', 'minecraft:bread', 'minecraft:torchflower',
       'minecraft:cookie'].forEach(organic=>{
        composting(8500, organic)
    });

    // 100%
    ['minecraft:cake', 'minecraft:pumpkin_pie'].forEach(organic=>{
        composting(10000, organic)
    });

});