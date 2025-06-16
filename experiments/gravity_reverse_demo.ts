// Gravity Reverse Demo
import { World } from 'gravifun'

const world = new World('scenes/objects_flood.glb')

let reverse = false

world.onLoad(() => {
  console.log("Gravity reverse demo initialized")

  setInterval(() => {
    reverse = !reverse
    world.setGravity(0, reverse ? 9.81 : -9.81, 0)
    console.log("Gravity flipped:", reverse ? "DOWN" : "UP")

    world.objects.forEach(obj => {
      obj.body.wakeUp()
      obj.body.applyImpulse({
        x: 0,
        y: reverse ? 2 : -2,
        z: 0
      }, obj.body.position)
    })
  }, 3000)
})
