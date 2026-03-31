ServerEvents.recipes((event) => {
	const greg = event.recipes.gtceu;
	//氟石
    event.recipes.gtceu.chemical_reactor("fluorite_dust")
        .itemInputs('gtceu:calcium_dust')
        .inputFluids("gtceu:fluorine 2000")
        .itemOutputs('3x mekanism:dust_fluorite')
        .EUt(480)
        .duration(200)
		
	//蒸馏水到重水
    greg.distillation_tower('gregtech:distillation_tower_to_heavy_water')
		.inputFluids(
			Fluid.of('gtceu:distilled_water', 10000),//蒸馏水
		)
        .outputFluids(
			Fluid.of('mekanism:heavy_water', 5000),//重水
         )
		.duration(40)
		.EUt(480);

    greg.distillation_tower('gregtech:distillation_tower_to_brine')
		.inputFluids(
			Fluid.of('minecraft:water', 10000),//水
		)
        .outputFluids(
			Fluid.of('mekanism:brine', 5000),//盐水
        )
		.duration(40)
		.EUt(480);

   
    greg.distillation_tower('gregtech:distillation_tower_to_lithium')
		.inputFluids(
			Fluid.of('mekanism:brine', 10000),//盐水
		)
        .outputFluids(
			Fluid.of('mekanism:lithium', 5000),//锂
        )
		.duration(40)
		.EUt(480);
});
