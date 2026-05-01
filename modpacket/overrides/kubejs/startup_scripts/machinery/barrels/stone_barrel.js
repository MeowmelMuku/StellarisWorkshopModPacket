GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('stone_barrel')
        .category('primitive')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 2, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.BATH);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('stone_barrel', 'simple')
        .tiers(GTValues.ULV)
        .definition((tier, builder) => {
            builder
				.langValue(`${GTValues.VLVH[tier]} Stone Barrel`)
                .recipeType('stone_barrel')
                .workableTieredHullModel('gtceu:block/machines/stone_barrel');
        }
    );

});