ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;
  
  event.remove({ output: "mae2:4x_crafting_accelerator" })
    event.remove({ output: "mae2:16x_crafting_accelerator" })
	  event.remove({ output: "mae2:64x_crafting_accelerator" })
	    event.remove({ output: "mae2:256x_crafting_accelerator" })
});
