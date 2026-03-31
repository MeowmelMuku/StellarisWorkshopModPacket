ServerEvents.recipes((event) => {
	const greg = event.recipes.gtceu;

	event.recipes.gtceu.electric_blast_furnace("gtceu:neutronium_nugget")
        .itemInputs(
			"gtceu:neutronium_nugget",
			'avaritia:neutron_pile'
		)
        .itemOutputs('avaritia:neutron_nugget')
        .duration(1200)
        .EUt(122880)
        .blastFurnaceTemp(9000);
		
	event.recipes.gtceu.electric_blast_furnace("gtceu:bedrock")
        .itemInputs(
			"gtceu:bedrock_block"
		)
        .itemOutputs('minecraft:bedrock')
        .duration(600)
        .EUt(7680)
        .blastFurnaceTemp(6000);
		
	event.recipes.gtceu.compressor("gtceu:bedrock")
        .itemInputs(
			"64x gtceu:stone_dust"
		)
        .itemOutputs('gtceu:bedrock_dust')
        .duration(9999)
        .EUt(7);
});