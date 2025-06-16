// Zero Gravity Mode
import { World } from 'gravifun'

const world = new World('chaos_tower.glb')

world.setGravity(0, 0, 0)
world.onLoad(() => {
  console.log("Zero gravity enabled — float responsibly.")
  world.objects.forEach(obj => {
    obj.body.mass = 1
    obj.body.velocity.set(Math.random(), Math.random(), Math.random())
  })
})
