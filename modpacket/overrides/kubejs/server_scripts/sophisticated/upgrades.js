ServerEvents.recipes((event) => {
  event.remove({ id: "sophisticatedbackpacks:upgrade_base" });
  event.shaped("sophisticatedbackpacks:upgrade_base", ["BSB", "LWL", "BSB"], {
    B: "#forge:bolts/iron",
    S: "minecraft:string",
    L: "minecraft:leather",
    W: "#forge:plates/wood",
  });
  event.recipes.gtceu
    .assembler("sophisticatedbackpacks:upgrade_base")
    .itemInputs(
      "#forge:plates/wood",
      "2x minecraft:leather",
      "2x #forge:bolts/iron",
      "2x minecraft:string"
    )
    .itemOutputs("sophisticatedbackpacks:upgrade_base")
    .duration(100)
    .EUt(16);
	
  event.remove({ id: "sophisticatedstorage:upgrade_base" });
  event.shaped("sophisticatedstorage:upgrade_base", ["BSB", "LWL", "BSB"], {
    B: "#forge:bolts/copper",
    S: "minecraft:string",
    L: "minecraft:leather",
    W: "#forge:plates/wood",
  });
  event.recipes.gtceu
    .assembler("sophisticatedstorage:upgrade_base")
    .itemInputs(
      "#forge:plates/wood",
      "2x minecraft:leather",
      "2x #forge:bolts/copper",
      "2x minecraft:string"
    )
    .itemOutputs("sophisticatedstorage:upgrade_base")
    .duration(100)
    .EUt(16);
});
