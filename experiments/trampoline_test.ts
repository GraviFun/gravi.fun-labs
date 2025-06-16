// Trampoline Physics Test
import { World } from 'gravifun'

const world = new World('scenes/chaos_tower.glb')

// Configuration
const TRAMPOLINE_TAG = 'bouncy'
const BOUNCE_FORCE = 15

world.onLoad(() => {
  console.log("Trampoline test scene loaded")

  world.objects.forEach(obj => {
    if (obj.name.toLowerCase().includes(TRAMPOLINE_TAG)) {
      obj.material.restitution = 1.5
      obj.body.material.restitution = 1.5
      console.log("Bouncy surface detected:", obj.name)
    }
  })

  world.physics.addEventListener('postStep', () => {
    world.objects.forEach(obj => {
      if (obj.body.velocity.y < -5 && isTouchingTrampoline(obj)) {
        obj.body.velocity.y = BOUNCE_FORCE
        obj.body.wakeUp()
      }
    })
  })
})

function isTouchingTrampoline(obj: any): boolean {
  return world.objects.some(surface => {
    return surface.name.toLowerCase().includes(TRAMPOLINE_TAG) &&
      Math.abs(surface.position.y - obj.position.y) < 1.1 &&
      Math.abs(surface.position.x - obj.position.x) < 2
  })
}
