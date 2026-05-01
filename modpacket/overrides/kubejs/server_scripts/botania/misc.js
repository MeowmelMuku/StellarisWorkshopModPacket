ServerEvents.recipes(event => {
  event.custom({
    "type": "botania:mana_infusion",
    "input": {
      "item": 'ae2:certus_quartz_crystal'
    },
    "mana": 400,
    "output": {
      "item": 'mysticalagriculture:prosperity_shard',
      "count": 4
    }
  })
  event.custom({
    "type": "botania:mana_infusion",
    "input": {
      "item": 'ae2:charged_certus_quartz_crystal'
    },
    "mana": 900,
    "output": {
      "item": 'mysticalagriculture:prosperity_shard',
      "count": 9
    }
  })
  
  event.custom({
    "type": "botania:mana_infusion",
    "input": {
      "item": 'gtceu:quantum_star'
    },
    "mana": 2000,
    "output": {
      "item": 'mysticalagriculture:inferium_ore',
      "count": 32
    }
  })
  event.custom({
    "type": "botania:mana_infusion",
    "input": {
      "item": 'gtceu:gravi_star'
    },
    "mana": 4000,
    "output": {
      "item": 'mysticalagriculture:inferium_ore',
      "count": 64
    }
  })
  event.custom({
    "type": "botania:mana_infusion",
    "input": {
      "item": 'enderio:soularium_block'
    },
    "mana": 100,
    "output": {
      "item": 'mysticalagriculture:soulium_block',
      "count": 1
    }
  })
})