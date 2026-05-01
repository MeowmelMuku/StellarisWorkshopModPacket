ServerEvents.recipes((event) => {
  event.recipes.gtceu
    .mixer("skystone_ingot")
    .itemInputs('#forge:dusts/stone', '#forge:dusts/certus_quartz')
    .itemOutputs('2x ae2:sky_dust')
    .circuit(1)
    .EUt(2)
    .duration(20);
})