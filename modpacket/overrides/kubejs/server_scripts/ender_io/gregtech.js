ServerEvents.recipes((event) => {
	const greg = event.recipes.gtceu;
	
	event.remove({ id: "enderio:conduit_binder_composite" });
    greg
        .mixer("kubejs:conduit_binder_composite")
        .itemInputs(
            '5x gtceu:stone_dust',
            '2x gtceu:quartz_sand_dust',
            '2x gtceu:clay_dust'
        )
		.circuit(9)
        .itemOutputs("9x enderio:conduit_binder_composite")
        .duration(200)
        .EUt(30);
		
	//铜合金锭 'enderio:copper_alloy_ingot' 
    event.recipes.gtceu.electric_blast_furnace("enderio:copper_alloy_ingot")
        .itemInputs('#forge:dusts/copper', '#forge:dusts/silicon')
        .itemOutputs("2x enderio:copper_alloy_ingot")
        .duration(100)
        .EUt(30)
        .blastFurnaceTemp(1800);
	
	//充能合金锭 'enderio:energetic_alloy_ingot'
    event.recipes.gtceu.electric_blast_furnace("enderio:energetic_alloy_ingot")
        .itemInputs(
			'#forge:dusts/redstone', 
			'#forge:dusts/glowstone',
			'#forge:dusts/gold'
		)
        .itemOutputs("3x enderio:energetic_alloy_ingot")
        .duration(200)
        .EUt(30)
        .blastFurnaceTemp(1800);
		
	//震动合金 'enderio:vibrant_alloy_ingot'
    event.recipes.gtceu.electric_blast_furnace("enderio:vibrant_alloy_ingot")
        .itemInputs(
			'#forge:ingots/energetic_alloy',
			'#forge:gems/ender_pearl'
		)
        .itemOutputs("2x enderio:vibrant_alloy_ingot")
        .duration(200)
        .EUt(30)
        .blastFurnaceTemp(1800);
		
	//红石合金 'enderio:redstone_alloy_ingot'
    event.recipes.gtceu.electric_blast_furnace("enderio:redstone_alloy_ingot")
        .itemInputs(
			'#forge:dusts/redstone',
			'#forge:dusts/silicon'
		)
        .itemOutputs("2x enderio:redstone_alloy_ingot")
        .duration(100)
        .EUt(30)
        .blastFurnaceTemp(1800);
		
	//导电合金 '64x enderio:conductive_alloy_ingot'
    event.recipes.gtceu.electric_blast_furnace("enderio:conductive_alloy_ingot")
        .itemInputs(
			"enderio:copper_alloy_ingot",
			'#forge:dusts/redstone',
			'#forge:dusts/iron'
		)
        .itemOutputs("3x enderio:conductive_alloy_ingot")
        .duration(100)
        .EUt(30)
        .blastFurnaceTemp(1800);
		
	//脉冲合金 'enderio:pulsating_alloy_ingot'
    event.recipes.gtceu.electric_blast_furnace("enderio:pulsating_alloy_ingot")
        .itemInputs(
			'#forge:ingots/iron',
			'#forge:gems/ender_pearl'
		)
        .itemOutputs("2x enderio:pulsating_alloy_ingot")
        .duration(200)
        .EUt(120)
        .blastFurnaceTemp(2700);
		
	//玄钢合金 'enderio:dark_steel_ingot'
    event.recipes.gtceu.electric_blast_furnace("enderio:dark_steel_ingot")
        .itemInputs(
			'#forge:dusts/iron',
			'#forge:dusts/coal',
			'#forge:dusts/obsidian'
		)
        .itemOutputs("3x enderio:dark_steel_ingot")
        .duration(400)
        .EUt(120)
        .blastFurnaceTemp(2700);
		
	//魂金 'enderio:soularium_ingot'
	event.recipes.gtceu.electric_blast_furnace("enderio:soularium_ingot")
        .itemInputs(
			'minecraft:soul_sand',
			'#forge:dusts/gold'
		)
        .itemOutputs("2x enderio:soularium_ingot")
        .duration(100)
        .EUt(30)
        .blastFurnaceTemp(1800);
		
	//末影钢 '64x enderio:end_steel_ingot'
	event.recipes.gtceu.electric_blast_furnace("enderio:end_steel_ingot")
        .itemInputs(
			"minecraft:end_stone",
			"gtceu:dark_steel_ingot",
			'#forge:dusts/obsidian'
		)
        .itemOutputs("3x enderio:end_steel_ingot")
        .duration(400)
        .EUt(480)
        .blastFurnaceTemp(3600);
});