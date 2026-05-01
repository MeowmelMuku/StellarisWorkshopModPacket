/**
 ? Misc modern materials we have to add
 ? Place non-nomifactory materials here
 */

// AE2 Materials

GTCEuStartupEvents.registry("gtceu:element", event => {
    event.create("dilithium")
        .protons(119)
        .neutrons(229)
        .symbol("Dl")
})

GTCEuStartupEvents.registry("gtceu:material", event => {
	event.create('andesite_alloy')
        .ingot().fluid()
        .color(0xa7ad9f).iconSet("metallic")
        .components('andesite', 'iron')
        .flags(GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING,GTMaterialFlags.GENERATE_SPRING_SMALL);

	GTMaterials.get("andesite_alloy").addFlags(GTMaterialFlags.GENERATE_PLATE,GTMaterialFlags.GENERATE_ROD,GTMaterialFlags.GENERATE_FRAME,GTMaterialFlags.GENERATE_BOLT_SCREW,GTMaterialFlags.GENERATE_RING,GTMaterialFlags.GENERATE_GEAR,GTMaterialFlags.GENERATE_SMALL_GEAR,GTMaterialFlags.GENERATE_SPRING,GTMaterialFlags.GENERATE_SPRING_SMALL);
})

GTCEuStartupEvents.materialModification(event => {
    GTMaterials.Glowstone.setComponents("1x tricalcium_phosphate", "1x gold")
    GTMaterials.Glowstone.setFormula("AuCa3(PO4)2", true)

    // We keep Ingots in the material definition so we can replace it in the Ore Processing Diagram with vanilla Netherite Scrap, then remove it here.
    TagPrefix.ingot.setIgnored(GTMaterials.get("netherite_scrap"), Ingredient.of("minecraft:netherite_scrap"))
})
