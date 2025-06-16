// Zero Gravity Mode
import { World } from 'gravifun'

const world = new World('scenes/chaos_tower.glb')

world.setGravity(0, 0, 0)

world.onLoad(() => {
  console.log("Zero gravity enabled — float responsibly.")

  world.objects.forEach((obj, i) => {
    obj.body.mass = 1
    obj.body.velocity.set(
      Math.random() * 2 - 1,
      Math.random() * 2 - 1,
      Math.random() * 2 - 1
    )
    obj.body.angularVelocity.set(
      Math.random() * 0.2,
      Math.random() * 0.2,
      Math.random() * 0.2
    )
    obj.body.sleepSpeedLimit = 0
    obj.body.wakeUp()
  })

  let tick = 0
  setInterval(() => {
    tick++
    if (tick % 120 === 0) {
      console.log("Floating objects count:", world.objects.length)
    }
  }, 100)
})
