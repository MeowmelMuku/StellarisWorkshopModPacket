ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;
//'flopper:flopper'
    event.remove({ output: "flopper:flopper" })
    event.shaped(
        Item.of('flopper:flopper'),
        [
            'ABA',
            'ACA',
            'DAE'
        ],
        {
            B: 'minecraft:bucket',
            A: '#forge:plates/iron',
            C: '#forge:small_gears/iron',
            D: "#forge:tools/wrenches",
            E: "#forge:tools/hammers"
        }
    )
	
  greg
    .assembler("kubejs:flopper")
    .itemInputs('minecraft:bucket','5x #forge:plates/wrought_iron')
    .itemOutputs("flopper:flopper")
    .duration(800)
    .EUt(2);

//'woodenhopper:wooden_hopper'
    event.remove({ output: "woodenhopper:wooden_hopper" })
    event.shaped(
        Item.of('woodenhopper:wooden_hopper'),
        [
            'ABA',
            'ACA',
            'DAE'
        ],
        {
            B: 'minecraft:chest',
            A: '#minecraft:planks',
            C: '#forge:gears/wood',
            D: "#forge:tools/wrenches",
            E: "#forge:tools/hammers"
        }
    )
	
  greg
    .assembler("kubejs:wooden_hopper")
    .itemInputs('minecraft:chest','5x #minecraft:planks')
    .itemOutputs("woodenhopper:wooden_hopper")
    .duration(800)
    .EUt(2);
});
