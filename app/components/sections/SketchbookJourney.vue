<template>
  <div ref="layer" class="journey-layer" aria-hidden="true">
    <svg class="notebook-path">
      <defs>
        <mask :id="maskId" maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">
          <path ref="reveal" fill="none" stroke="white" stroke-width="10" />
          <path ref="jumpGap" fill="none" style="stroke: black; stroke-width: 11" />
        </mask>
      </defs>
      <path ref="line" :mask="'url(#' + maskId + ')'" />
    </svg>
    <span ref="landingMarks" class="journey-landing-marks"></span>
    <div ref="traveler" class="journey-traveler" data-pose="idle">
      <img v-for="name in visiblePoses" :key="name" :data-frame="name" :src="'/images/sketchbook/pose-' + (name === 'read' ? 'read-v2' : name) + '.webp'" alt="" decoding="async">
    </div>
  </div>
  <div v-if="bubble.open" ref="bubbleEl" class="journey-bubble" role="status" :style="{ left: bubble.left + 'px', top: bubble.top + 'px', '--tail': bubble.tail + 'px' }">
    <p>{{ bubble.text }}</p>
    <NuxtLink v-if="bubble.to" :to="bubble.to" class="ink-button" @click="closeBubble">{{ bubble.label }}</NuxtLink>
  </div>
  <div v-if="ghost.active" class="journey-ghost" aria-hidden="true" :data-split="ghost.frame === 'lifted' ? '' : null" :style="{ '--x': ghost.x + 'px', '--y': ghost.y + 'px', '--swing': ghost.swing + 'deg', '--legs': ghost.legs + 'deg', '--arm-l': ghost.armL + 'deg', '--arm-r': ghost.armR + 'deg', '--stretch': ghost.stretch, '--h': ghostHeight + 'px' }">
    <template v-if="ghost.frame === 'lifted'">
      <span class="journey-ghost-carrier"><img class="journey-ghost-legs" src="/images/sketchbook/pose-lifted-body.webp" alt=""></span>
      <img class="journey-ghost-body" src="/images/sketchbook/pose-lifted-body.webp" alt="">
      <span class="journey-ghost-carrier"><img class="journey-ghost-hand journey-ghost-hand-l" src="/images/sketchbook/pose-lifted-hand-l.webp" alt=""></span>
      <span class="journey-ghost-carrier"><img class="journey-ghost-hand journey-ghost-hand-r" src="/images/sketchbook/pose-lifted-hand-r.webp" alt=""></span>
    </template>
    <img v-else class="journey-ghost-body" :src="ghostSrc" alt="">
  </div>
</template>

<script setup>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { flightPose } from '~/utils/sketchbook-flight'

const maskId = useId()
const layer = ref(null)
const line = ref(null)
const reveal = ref(null)
const jumpGap = ref(null)
const traveler = ref(null)
const landingMarks = ref(null)
const bubbleEl = ref(null)
const bubble = reactive({ open: false, text: '', to: '', label: '', left: 0, top: 0, tail: 0 })

const ghost = reactive({ active: false, x: 0, y: 0, swing: 0, legs: 0, armL: 0, armR: 0, stretch: 0, height: 116, frame: 'lifted' })
const ghostSrc = computed(() => '/images/sketchbook/pose-' + ghost.frame + '.webp')
const ghostHeight = computed(() => ghost.height * (ghost.frame === 'crouch' ? .79 : 1))

function closeBubble() {
  bubble.open = false
}
const poses = ['idle', 'walk', 'run', 'wave', 'present', 'think', 'crouch', 'drop', 'read',
  'poke-head-react', 'poke-head-settle', 'poke-body-react', 'poke-body-settle', 'poke-feet-react', 'poke-feet-settle', 'lifted-body', 'lifted-hand-l', 'lifted-hand-r']
const flightFrames = ['fly-slow', 'fly-down', 'fly-dive', 'fly-up', 'fly-land']
const mobileFlight = ref(false)
const visiblePoses = computed(() => mobileFlight.value ? [...poses, ...flightFrames] : poses)
const serviceRoute = [
  { card: 'corporate', at: 'entry' },
  { card: 'corporate', at: 'hide', cardStage: 'tuck' },
  { card: 'corporate', at: 'peek', cardStage: 'peek-right' },
  { card: 'corporate', at: 'peek-more', cardStage: 'peek-right' },
  { card: 'corporate', at: 'hide', cardStage: 'tuck' },
  { card: 'landing', at: 'hide', cardStage: 'tuck' },
  { card: 'landing', at: 'peek', cardStage: 'peek-left' },
  { card: 'landing', at: 'peek-more', cardStage: 'peek-left' },
  { card: 'landing', at: 'retract', cardStage: 'peek-retract' },
  { card: 'landing', at: 'launch', cardStage: 'drop-tuck' },
  { card: 'landing', at: 'land', cardStage: 'jump' },
  { card: 'landing', at: 'settle', cardStage: 'landing' },
]

const desktopRoute = [
  { id: 'hero-work-link', stage: 'start' },
  { id: 'hero-work-link', stage: 'duck' },
  { id: 'services', x: .07, y: .13 },
  { id: 'services', x: .025, y: .48 },
  ...serviceRoute,
  { id: 'projects', offset: 10 },
  { id: 'projects', y: .76, vertical: true },
  { id: 'projects', y: 1.09, vertical: true },
  { id: 'process', x: .12, offset: -20 },
  { id: 'process', x: .055, y: .1 },
  { id: 'process', x: .026, y: .54 },
  { id: 'process', x: .025, y: 1, offset: -22 },
  { id: 'process', x: .19, y: 1, offset: -12 },
  { id: 'about', x: .30, offset: -20 },
  { id: 'about', x: .57, offset: -23 },
  { id: 'about', sideLane: true, offset: -18 },
  { id: 'about', sideLane: true, y: .44, vertical: true },
  { id: 'about', sideLane: true, exit: true, vertical: true },
  { id: 'faq', offset: -16 },
  { id: 'faq', y: .50, vertical: true },
  { id: 'faq', y: .93, vertical: true },
  { id: 'faq', y: 1, offset: 130, vertical: true },
  { id: 'journey-destination', stage: 'above' },
  { id: 'journey-destination', stage: 'finish' },
]
const mobileRoute = [
  { id: 'hero-illustration', x: .18, y: 1, offset: 5 },
  { id: 'services', mobileLane: true, offset: -12 },
  { id: 'services', mobileLane: true, y: .19, vertical: true },
  { card: 'corporate', at: 'entry' },
  { card: 'corporate', at: 'hide', cardStage: 'tuck' },
  { card: 'corporate', at: 'peek', cardStage: 'peek-right' },
  { card: 'corporate', at: 'peek-more', cardStage: 'peek-right' },
  { card: 'corporate', at: 'retract', cardStage: 'peek-right-retract' },
  { card: 'line_oa_template', at: 'launch', cardStage: 'drop-tuck' },
  { card: 'line_oa_template', at: 'land', cardStage: 'jump' },
  { card: 'line_oa_template', at: 'settle', cardStage: 'landing' },
  { id: 'projects', y: .12 },
  { id: 'projects', y: .84, vertical: true },
  { id: 'process', mobileLane: true, offset: -18 },
  { id: 'process', mobileLane: true, y: .52, vertical: true },
  { id: 'process', mobileLane: true, y: .88, vertical: true },
  { id: 'about', sideLane: true, offset: -16 },
  { id: 'about', sideLane: true, y: .5, vertical: true },
  { id: 'about', sideLane: true, exit: true, vertical: true },
  { id: 'faq', offset: -16 },
  { id: 'faq', y: .40, vertical: true },
  { id: 'faq', y: .88, vertical: true },
  { id: 'faq', y: 1, offset: 76, vertical: true },
  { id: 'journey-destination', stage: 'above' },
  { id: 'journey-destination', stage: 'finish' },
]

const scenePoses = {
  projects: 'present',
  process: 'think',
  about: 'wave',
  faq: 'read',
}

const arrivalStart = .945
const arrivalSwap = .57
const peekStretch = 3.8
const runSpeed = 1100
const walkSpeed = 750

let cleanup

onMounted(() => {
  const notebook = layer.value.closest('main')
  const destination = notebook.querySelector('#journey-destination')
  const media = gsap.matchMedia()

  media.add('(prefers-reduced-motion: no-preference)', () => {
    let trigger
    let frame
    let settle
    let landedTimer
    let landingStart
    let previousDistance
    let total = 0
    let stops = []
    let faqLane
    let aboutLane
    let worksLane
    let mobileLanes = {}
    let mobileLaneRanges = []
    let mobileHeight
    let glide
    let flightDirection = 0
    let flightSpeed = 0
    let landingTimer
    let arrival
    let duckLane
    let serviceBeats = []
    let timedBeats = []
    let pacedLength = 0
    let previousProgress = 0
    let running = false
    let reacting = false
    let restoreTo = 'idle'
    let reactionTimer
    let settleReactionTimer
    let bubbleTimer
    let bubbleScroll = 0
    let pokeTimes = []
    const lineCursor = { head: 0, body: 0, legs: 0 }

    function applyPose(name) {
      traveler.value.dataset.pose = name
      notebook.classList.toggle('journey-thinking', name === 'think')
    }

    function pose(name) {
      if (reacting || traveler.value.dataset.pose === name) return
      applyPose(name)
    }

    function distanceAtProgress(progress) {
      let position = progress * pacedLength
      for (const { start, end, stretch } of timedBeats) {
        const length = end - start
        if (position <= start) break
        if (position <= start + length * stretch) return start + (position - start) / stretch
        position -= length * (stretch - 1)
      }
      return Math.min(position, total)
    }

    function paint(progress, velocity = 0) {
      if (reacting) endReaction()
      const arrivalProgress = gsap.utils.clamp(0, 1, (progress - arrivalStart) / (1 - arrivalStart))
      const swapped = arrivalProgress >= arrivalSwap
      const growth = gsap.utils.clamp(0, 1, (arrivalProgress - arrivalSwap) / (1 - arrivalSwap))
      destination.style.setProperty('--arrival-visible', swapped ? '1' : '0')
      destination.style.setProperty('--arrival-scale', String(gsap.utils.interpolate(arrival.scale, 1, growth)))
      traveler.value.classList.toggle('is-ready', progress > 0 && !swapped)
      const distance = distanceAtProgress(Math.min(1, progress / arrivalStart))
      if (previousDistance < landingStart && distance >= landingStart && distance < landingStart + 48) {
        notebook.classList.add('journey-landed')
        clearTimeout(landedTimer)
        landedTimer = setTimeout(() => notebook.classList.remove('journey-landed'), 480)
      }
      previousDistance = distance
      const point = line.value.getPointAtLength(distance)
      const arrivalTravel = Math.min(1, arrivalProgress / arrivalSwap)
      const x = gsap.utils.interpolate(point.x, arrival.x, arrivalTravel)
      const y = gsap.utils.interpolate(point.y, arrival.y, arrivalTravel)
      const ducking = duckLane && point.x >= duckLane.left && point.x <= duckLane.right && Math.abs(point.y - duckLane.y) < 13
      const inFaqLane = point.y >= faqLane.top && point.y <= faqLane.bottom + faqLane.height
      const inAboutLane = point.y >= aboutLane.top && point.y <= aboutLane.bottom
      const inWorksLane = point.y >= worksLane.top && point.y <= worksLane.bottom
      const side = mobileLaneRanges.find(lane => point.y >= lane.top && point.y <= lane.bottom)
      const activeLane = inFaqLane ? faqLane : inAboutLane ? aboutLane : inWorksLane ? worksLane : side
      const height = mobileFlight.value ? mobileHeight : activeLane?.height
      traveler.value.style.setProperty('--scene-height', height ? height + 'px' : '')
      reveal.value.style.strokeDashoffset = String(total - distance)
      gsap.set(traveler.value, { x, y })
      const serviceBeat = serviceBeats.find(beat => distance >= beat.start && distance < beat.end)
      traveler.value.dataset.cardStage = serviceBeat?.stage || ''
      const peeking = serviceBeat?.stage.startsWith('peek')
      const jumping = serviceBeat?.stage === 'jump'
      const landing = serviceBeat?.stage === 'landing'
      const delta = progress - previousProgress
      const flight = mobileFlight.value && !serviceBeat && arrivalTravel === 0 && progress > 0 && !swapped
      clearTimeout(landingTimer)
      if (Math.abs(delta) > .00005) {
        const ahead = line.value.getPointAtLength(Math.min(total, distance + 3))
        const behind = line.value.getPointAtLength(Math.max(0, distance - 3))
        const horizontal = arrivalTravel > 0 ? arrival.x - point.x : ahead.x - behind.x
        const direction = inFaqLane && Math.abs(horizontal) < .5 ? -1 : Math.sign(horizontal) || 1
        traveler.value.style.setProperty('--facing', direction * delta < 0 ? '-1' : '1')
        const speed = Math.min(3000, Math.abs(velocity))
        if (flight) {
          const nextDirection = Math.sign(delta)
          flightSpeed = nextDirection === flightDirection ? flightSpeed * .58 + speed * .42 : speed
          if (flightDirection !== nextDirection) glide = null
          flightDirection = nextDirection
          glide = flightPose(glide, nextDirection, flightSpeed)
          traveler.value.style.setProperty('--facing', '1')
          pose(glide)
        } else {
          glide = null
          flightDirection = 0
          running = speed >= (running ? walkSpeed : runSpeed)
          pose(peeking ? 'idle' : jumping ? 'drop' : landing || ducking ? 'crouch' : running ? 'run' : 'walk')
        }
      }
      if (peeking) {
        traveler.value.style.setProperty('--facing', serviceBeat.stage.startsWith('peek-right') ? '1' : '-1')
        pose('idle')
      }
      if (jumping) pose('drop')
      if (landing) pose('crouch')
      previousProgress = progress
      clearTimeout(settle)
      settle = setTimeout(() => {
        running = false
        const scene = stops.find(stop => point.y >= stop.start && point.y <= stop.end)
        if (peeking || jumping || landing) return
        if (!ducking) traveler.value.style.setProperty('--facing', '1')
        const resting = ducking ? 'crouch' : scene?.pose || 'idle'
        if (flight && glide) {
          const needsBrake = glide === 'fly-dive' || glide === 'fly-down'
          glide = null
          flightDirection = 0
          flightSpeed = 0
          const land = () => {
            pose('fly-land')
            landingTimer = setTimeout(() => pose(resting), 180)
          }
          if (needsBrake) {
            pose('fly-slow')
            landingTimer = setTimeout(land, 75)
          } else {
            land()
          }
        } else {
          pose(resting)
        }
      }, 160)
    }

    function rebuild() {
      const resumeProgress = trigger ? previousProgress : null
      trigger?.kill()
      const bounds = notebook.getBoundingClientRect()
      const mobile = window.matchMedia('(max-width: 680px)').matches
      if (mobileFlight.value !== mobile) {
        mobileFlight.value = mobile
        glide = null
        flightDirection = 0
        flightSpeed = 0
        clearTimeout(landingTimer)
        pose('idle')
      }
      const faq = notebook.querySelector('#faq').getBoundingClientRect()
      // The running sprite is the widest frame, at 232 × 320.
      const ratio = mobile ? .67 : 232 / 320
      const baseHeight = mobile ? 52 : gsap.utils.clamp(64, 116, window.innerWidth * .1)
      const destinationBounds = destination.getBoundingClientRect()
      arrival = {
        x: destinationBounds.left - bounds.left + destinationBounds.width / 2,
        y: destinationBounds.bottom - bounds.top - 3,
        scale: gsap.utils.clamp(.25, 1, baseHeight / destinationBounds.height),
      }
      const button = notebook.querySelector('#hero-work-link').getBoundingClientRect()
      const buttonLeft = button.left - bounds.left
      const buttonRight = button.right - bounds.left
      notebook.dataset.landingCard = mobile ? 'line-oa' : 'landing'
      duckLane = mobile ? null : {
        left: buttonLeft + 8,
        right: Math.min(bounds.width - 14, buttonRight + 22),
        y: button.bottom - bounds.top + baseHeight * .79 + 8,
      }
      const works = notebook.querySelector('#project-carousel').getBoundingClientRect()
      function sideLane(edge, section) {
        const direction = mobile ? -1 : 1
        const space = mobile ? edge : document.documentElement.clientWidth - edge
        const height = Math.min(baseHeight, (space - (mobile ? 10 : 12)) / ratio)
        return {
          x: edge - bounds.left + direction * (height * ratio / 2 + 7),
          top: section.top - bounds.top - 18,
          bottom: section.bottom - bounds.top,
          height,
        }
      }

      faqLane = sideLane(mobile ? faq.left : faq.right, faq)
      mobileLanes = mobile ? Object.fromEntries([['services', '.services-intro'], ['process', '.process-notes']].map(([id, selector]) => {
        const section = notebook.querySelector('#' + id)
        const content = section.querySelector(selector).getBoundingClientRect()
        return [id, sideLane(content.left, section.getBoundingClientRect())]
      })) : {}
      mobileLaneRanges = Object.values(mobileLanes)
      const worksIntro = notebook.querySelector('.work-intro').getBoundingClientRect()
      const worksSection = notebook.querySelector('#projects').getBoundingClientRect()
      const worksEdge = mobile ? Math.min(works.left, worksIntro.left) : worksIntro.right
      const worksGap = works.left - worksEdge
      worksLane = mobile
        ? sideLane(worksEdge, worksSection)
        : {
            x: worksEdge - bounds.left + worksGap / 2,
            top: worksSection.top - bounds.top - 20,
            bottom: worksSection.bottom - bounds.top + 40,
            height: Math.min(baseHeight, (worksGap - 12) / ratio),
          }
      const about = notebook.querySelector('#about')
      // Decorative artwork can extend into the margin without moving the character's lane.
      const aboutItems = Array.from(about.children)
        .filter(element => element.getAttribute('aria-hidden') !== 'true')
        .map(element => element.getBoundingClientRect())
      const aboutEdge = mobile
        ? Math.min(...aboutItems.map(item => item.left))
        : Math.max(...aboutItems.map(item => item.right))
      aboutLane = sideLane(aboutEdge, about.getBoundingClientRect())
      aboutLane.bottom = Math.max(...aboutItems.map(item => item.bottom)) - bounds.top + aboutLane.height + 8
      mobileHeight = mobile
        ? Math.min(baseHeight, faqLane.height, worksLane.height, aboutLane.height, ...mobileLaneRanges.map(lane => lane.height))
        : baseHeight
      arrival.scale = gsap.utils.clamp(.25, 1, mobileHeight / destinationBounds.height)
      stops = Object.entries(scenePoses).map(([id, pose]) => {
        const section = notebook.querySelector('#' + id).getBoundingClientRect()
        const top = section.top - bounds.top
        const inset = Math.min(36, section.height * .2)
        return { start: top + inset, end: top + section.height - inset, pose }
      })
      const points = (mobile ? mobileRoute : desktopRoute).map(scene => {
        if (scene.card) {
          const cardElement = notebook.querySelector('[data-service-card="' + scene.card + '"]')
          const card = cardElement.getBoundingClientRect()
          const x = card.left - bounds.left
          const y = card.top - bounds.top
          const height = mobileHeight * (mobile ? 1 : .8)
          const second = scene.card === 'landing'
          const side = second ? .72 : scene.card === 'line_oa_template' ? .55 : .27
          const landingY = y + card.height + mobileHeight + 22
          const peekX = x + card.width * side
          const angle = (Number.parseFloat(getComputedStyle(cardElement).rotate) || 0) * Math.PI / 180
          const topEdge = mobile
            ? y + card.height / 2 + (peekX - x - card.width / 2) * Math.tan(angle) - cardElement.offsetHeight / (2 * Math.cos(angle))
            : y
          const positions = {
            entry: [x - 12, y + height * .42],
            hide: [peekX, topEdge + Math.max(height * .97, card.height * .7)],
            peek: [peekX, topEdge + height * .74],
            'peek-more': [peekX, topEdge + height * (mobile ? .615 : .63)],
            retract: [peekX, topEdge + height + 4],
            launch: [peekX, y + card.height + 3],
            land: [Math.min(bounds.width - 28, peekX + 16), landingY],
            settle: [Math.min(bounds.width - 16, peekX + 28), landingY + 3],
          }
          const [left, top] = positions[scene.at]
          return { x: left, y: top, cardStage: scene.cardStage, vertical: scene.at.startsWith('peek') || scene.at === 'retract', straightPeek: mobile && scene.cardStage?.startsWith('peek') }
        }
        const boundsOfSection = notebook.querySelector('#' + scene.id).getBoundingClientRect()
        const y = boundsOfSection.top - bounds.top
        if (scene.id === 'hero-work-link') {
          return {
            x: scene.stage === 'start' ? duckLane.right : duckLane.left + 8,
            y: duckLane.y,
            horizontal: scene.stage === 'duck',
          }
        }
        if (scene.id === 'journey-destination') {
          const left = boundsOfSection.left - bounds.left
          // Use the image box as a keep-out area, including space for the moving sprite.
          const gutter = mobile || left < 65
          const offsets = gutter
            ? { above: -56, finish: -26 }
            : { above: -54, finish: boundsOfSection.height * .89 }
          return {
            x: gutter
              ? Math.max(5, left - (scene.stage === 'above' ? 22 : 34))
              : left - (scene.stage === 'above' ? 14 : 52),
            y: y + offsets[scene.stage],
            terminalStage: scene.stage,
          }
        }
        const x = scene.id === 'faq' ? faqLane.x : scene.sideLane ? aboutLane.x : scene.id === 'projects' ? worksLane.x : scene.mobileLane ? mobileLanes[scene.id].x : bounds.width * scene.x
        return { x, y: scene.exit ? aboutLane.bottom : y + boundsOfSection.height * (scene.y ?? 0) + (scene.offset ?? 0), vertical: scene.vertical }
      })
      const landingPoint = points.find(point => point.cardStage === 'jump')
      gsap.set(landingMarks.value, { x: landingPoint.x, y: landingPoint.y })
      previousDistance = undefined
      const first = points[0]
      let path = 'M ' + first.x + ' ' + first.y
      let beatStart
      const hiddenSegments = []
      serviceBeats = []
      const handles = [null]
      for (let index = 1; index < points.length; index++) {
        const previous = points[index - 1]
        const next = points[index]
        const before = points[index - 2] ?? previous
        const after = points[index + 1] ?? next
        let control1 = [previous.x + (next.x - before.x) / 6, previous.y + (next.y - before.y) / 6]
        let control2 = [next.x - (after.x - previous.x) / 6, next.y - (after.y - previous.y) / 6]
        if (next.horizontal) {
          control1 = [control1[0], previous.y]
          control2 = [control2[0], next.y]
        }
        if (next.vertical) {
          control1 = [previous.x, control1[1]]
          control2 = [next.x, control2[1]]
        }
        if (next.straightPeek) {
          const dy = next.y - previous.y
          control1 = [next.x, previous.y + dy / 3]
          control2 = [next.x, next.y - dy / 3]
        }
        if (next.terminalStage === 'above') {
          const dx = next.x - previous.x
          const bend = gsap.utils.clamp(24, 48, (next.y - previous.y) * .8)
          control1 = [previous.x, previous.y + bend]
          control2 = [next.x - dx * .34, next.y]
        }
        if (next.terminalStage === 'finish') {
          const dx = next.x - previous.x
          const dy = next.y - previous.y
          control1 = [previous.x + dx * .66, previous.y]
          control2 = [next.x, previous.y + dy * .38]
        }
        if (next.cardStage === 'jump') {
          const drop = next.y - previous.y
          control1 = [previous.x + 3, previous.y + drop * .14]
          control2 = [next.x - 3, next.y - drop * .28]
        }
        handles[index] = [control1, control2]
      }
      // Smooth every joint between non-card segments: align the incoming and outgoing
      // tangents (no sharp corners) and give short handles a minimum length so that
      // turns become wide ellipses instead of tight arcs. Card stages keep their own shapes.
      const unit = (x, y) => {
        const length = Math.hypot(x, y)
        return length > .001 ? [x / length, y / length] : null
      }
      for (let index = 1; index < points.length - 1; index++) {
        const joint = points[index]
        if (joint.cardStage || points[index + 1].cardStage) continue
        const incoming = handles[index][1]
        const outgoing = handles[index + 1][0]
        const a = unit(joint.x - incoming[0], joint.y - incoming[1])
        const b = unit(outgoing[0] - joint.x, outgoing[1] - joint.y)
        const direction = a && b && unit(a[0] + b[0], a[1] + b[1])
        if (!direction) continue
        const chordIn = Math.hypot(joint.x - points[index - 1].x, joint.y - points[index - 1].y)
        const chordOut = Math.hypot(points[index + 1].x - joint.x, points[index + 1].y - joint.y)
        const lengthIn = Math.min(chordIn * .6, Math.max(Math.hypot(joint.x - incoming[0], joint.y - incoming[1]), chordIn * .38))
        const lengthOut = Math.min(chordOut * .6, Math.max(Math.hypot(outgoing[0] - joint.x, outgoing[1] - joint.y), chordOut * .38))
        handles[index][1] = [joint.x - direction[0] * lengthIn, joint.y - direction[1] * lengthIn]
        handles[index + 1][0] = [joint.x + direction[0] * lengthOut, joint.y + direction[1] * lengthOut]
      }
      for (let index = 1; index < points.length; index++) {
        const previous = points[index - 1]
        const next = points[index]
        const [control1, control2] = handles[index]
        if (next.cardStage) {
          line.value.setAttribute('d', path)
          beatStart = line.value.getTotalLength()
        }
        const segment = ' C ' + control1.join(' ') + ', ' + control2.join(' ') + ', ' + next.x + ' ' + next.y
        if (['drop-tuck', 'jump'].includes(next.cardStage)) {
          hiddenSegments.push('M ' + previous.x + ' ' + previous.y + segment)
        }
        path += segment
        if (next.cardStage) {
          line.value.setAttribute('d', path)
          serviceBeats.push({ start: beatStart, end: line.value.getTotalLength(), stage: next.cardStage })
        }
      }
      jumpGap.value.setAttribute('d', hiddenSegments.join(' '))
      const last = points.at(-1)
      line.value.setAttribute('d', path)
      total = line.value.getTotalLength()
      landingStart = serviceBeats.find(beat => beat.stage === 'landing')?.start
      const cardTiming = { 'peek-right': mobile ? 6.5 : peekStretch, 'peek-left': peekStretch, 'peek-retract': 3.8, 'peek-right-retract': 6.8, 'drop-tuck': .26, jump: .70, landing: 1.4 }
      timedBeats = serviceBeats.filter(beat => cardTiming[beat.stage])
        .map(beat => ({ ...beat, stretch: cardTiming[beat.stage] }))
      pacedLength = timedBeats.reduce((length, beat) => length + (beat.end - beat.start) * (beat.stretch - 1), total)
      reveal.value.setAttribute('d', path)
      reveal.value.style.strokeDasharray = String(total)
      notebook.classList.add('journey-ready')
      let lastScroll = window.scrollY
      let initializing = true
      trigger = ScrollTrigger.create({
        trigger: notebook,
        start: () => Math.max(32, notebook.getBoundingClientRect().top + window.scrollY + first.y - window.innerHeight * .75),
        end: 'clamp(top+=' + last.y + ' 76%)',
        onUpdate: self => {
          const scroll = window.scrollY
          if (initializing || scroll === lastScroll) return
          lastScroll = scroll
          paint(self.progress, self.getVelocity())
        },
      })
      initializing = false
      previousProgress = resumeProgress ?? trigger.progress
      paint(previousProgress)
    }

    const resize = new ResizeObserver(() => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(rebuild)
    })
    rebuild()
    resize.observe(notebook)

    // ── Poking Elio ─────────────────────────────────────────────────────────
    // The layer is decorative and sits behind the content, so clicks are caught on the
    // document and hit-tested against the sprite's visible pixels (not its box).
    const restingPoses = ['idle', 'wave', 'present', 'think', 'read']
    const alphaCache = new Map()
    const zoneSprite = { head: 'poke-head', body: 'poke-body', legs: 'poke-feet' }
    const zoneLines = {
      head: ['哎呀！別戳我的頭～', '嘿，我正在想事情耶', '頭髮要亂掉啦！'],
      legs: ['癢癢的～哈哈', '別戳腳啦！', '差點跌倒…'],
    }
    const sectionTalk = {
      hero: { text: '嗨，我是 Elio！先看看我能幫你做什麼吧', label: '看服務', to: '/#services' },
      services: { text: '想知道哪一種服務適合你？', label: '和我聊聊', to: '/contact' },
      projects: { text: '這些都是我一件一件做出來的', label: '看全部作品', to: '/#projects' },
      process: { text: '流程很簡單，先聊聊你的想法就好', label: '開始討論', to: '/contact' },
      about: { text: '我喜歡把資訊整理成好讀的頁面', label: '合作洽詢', to: '/contact' },
      faq: { text: '還有問題嗎？直接問我最快', label: '合作洽詢', to: '/contact' },
    }

    function visibleFrame() {
      return traveler.value.querySelector('[data-frame="' + traveler.value.dataset.pose + '"]')
    }

    // Returns the vertical position (0 = top of the sprite, 1 = feet) when the pointer is on a solid pixel.
    function spriteHit(clientX, clientY) {
      const t = traveler.value
      if (!t.classList.contains('is-ready') || t.dataset.cardStage) return null
      if (!reacting && !restingPoses.includes(t.dataset.pose)) return null
      const img = visibleFrame()
      if (!img || !img.complete || !img.naturalWidth) return null
      const rect = img.getBoundingClientRect()
      if (clientX < rect.left || clientX > rect.right || clientY < rect.top || clientY > rect.bottom) return null
      let u = (clientX - rect.left) / rect.width
      const v = (clientY - rect.top) / rect.height
      if (Number.parseFloat(getComputedStyle(t).getPropertyValue('--facing')) < 0) u = 1 - u
      let image = alphaCache.get(img.currentSrc)
      if (!image) {
        const canvas = document.createElement('canvas')
        canvas.width = img.naturalWidth
        canvas.height = img.naturalHeight
        const context = canvas.getContext('2d', { willReadFrequently: true })
        context.drawImage(img, 0, 0)
        image = context.getImageData(0, 0, canvas.width, canvas.height)
        alphaCache.set(img.currentSrc, image)
      }
      const x = Math.min(image.width - 1, Math.max(0, Math.floor(u * image.width)))
      const y = Math.min(image.height - 1, Math.max(0, Math.floor(v * image.height)))
      return image.data[(y * image.width + x) * 4 + 3] > 60 ? v : null
    }

    function currentSection() {
      // Elio often stands in the gap between two sections, so pick the nearest one.
      const foot = visibleFrame().getBoundingClientRect().bottom - 8
      let nearest = null
      let nearestDistance = Infinity
      for (const id of ['hero', 'services', 'projects', 'process', 'about', 'faq']) {
        const box = notebook.querySelector('#' + id)?.getBoundingClientRect()
        if (!box) continue
        const distance = foot < box.top ? box.top - foot : foot > box.bottom ? foot - box.bottom : 0
        if (distance < nearestDistance) {
          nearest = id
          nearestDistance = distance
        }
      }
      return nearestDistance < 260 ? nearest : null
    }

    function endReaction() {
      clearTimeout(reactionTimer)
      clearTimeout(settleReactionTimer)
      if (reacting) {
        reacting = false
        applyPose(restoreTo)
      }
      traveler.value.removeAttribute('data-reaction')
      bubble.open = false
      clearTimeout(bubbleTimer)
    }

    async function poke(zone) {
      const t = traveler.value
      markEngaged()
      if (!reacting) restoreTo = hintBefore ?? t.dataset.pose
      hintBefore = null
      reacting = true
      clearTimeout(reactionTimer)
      const now = performance.now()
      pokeTimes = pokeTimes.filter(time => now - time < 4000)
      pokeTimes.push(now)
      applyPose(zoneSprite[zone] + '-react')
      clearTimeout(settleReactionTimer)
      settleReactionTimer = setTimeout(() => {
        if (reacting) applyPose(zoneSprite[zone] + '-settle')
      }, 520)
      t.removeAttribute('data-reaction')
      void t.offsetWidth // restart the motion when poked again
      t.dataset.reaction = zone

      let talk
      if (pokeTimes.length >= 6) {
        talk = { text: '好啦好啦～再戳我要去工作囉' }
      } else if (zone === 'body') {
        talk = sectionTalk[currentSection()] ?? { text: '嗨！需要幫忙嗎？', label: '合作洽詢', to: '/contact' }
      } else {
        talk = { text: zoneLines[zone][lineCursor[zone]++ % zoneLines[zone].length] }
      }
      bubble.text = talk.text
      bubble.label = talk.label ?? ''
      bubble.to = talk.to ?? ''
      bubble.open = true
      bubbleScroll = window.scrollY
      await nextTick()

      const rect = visibleFrame().getBoundingClientRect()
      const frame = notebook.getBoundingClientRect()
      const width = bubbleEl.value?.offsetWidth ?? 0
      const centre = rect.left + rect.width / 2 - frame.left
      const left = gsap.utils.clamp(width / 2 + 8, Math.max(width / 2 + 8, frame.width - width / 2 - 8), centre)
      bubble.left = left
      bubble.top = rect.top - frame.top
      bubble.tail = gsap.utils.clamp(16, Math.max(16, width - 16), width / 2 + centre - left)

      reactionTimer = setTimeout(() => {
        reacting = false
        applyPose(restoreTo)
        t.removeAttribute('data-reaction')
      }, 1900)
      clearTimeout(bubbleTimer)
      bubbleTimer = setTimeout(() => { bubble.open = false }, talk.to ? 6000 : 4200)
    }

    // ── Picking Elio up ─────────────────────────────────────────────────────
    // A fixed "ghost" copy follows the pointer above every layer while the real sprite
    // stays on the path. On release the ghost drops back onto the sprite's current spot.
    const DRAG_THRESHOLD = 6
    // He hangs from the grabbed point like a weight on a rope: a damped pendulum driven by the
    // pointer's acceleration, so a hard flick throws him further, and he overshoots and swings back.
    const PENDULUM = { stiffness: 190, damping: 5.5, push: .0045, max: .45 } // push: rad/s² per px/s²; max in rad
    const STRETCH = { stiffness: 230, damping: 11, push: .002, max: .06 } // vertical give when jerked up or down
    // The legs hang from the hips and trail the torso: relative angle (rad) driven by the torso's angular acceleration.
    const LEGS = { stiffness: 150, damping: 5.5, lag: .35, max: .3 }
    // The hands hang from the cuffs: light and floppy, so softer springs and more lag than the legs.
    const ARMS = { stiffness: 60, damping: 1.9, lag: .9, max: .7, rightStiffness: 1.12 }
    const interactiveSelector = '.journey-bubble, a, button, summary, input, textarea, select, label, [role="button"]'
    const grabLines = ['哇～放我下來啦！', '要掉下去啦～', '你力氣好大！']
    const landLines = ['呼～差點摔倒', '謝啦，我繼續走囉']
    const frameScale = { crouch: .79, think: 1.14 }
    let press = null // { x, y, id, zone }
    let dragging = false
    let returning = false
    let physicsFrame
    let releaseFactor = 1
    const pointer = { x: 0, y: 0 }
    const sim = { angle: 0, omega: 0, legs: 0, legsVel: 0, armL: 0, armLVel: 0, armR: 0, armRVel: 0, stretch: 0, stretchVel: 0, vx: 0, vy: 0, px: 0, py: 0, t: 0 }
    let returnFrame
    let grabCursor = 0
    let landCursor = 0
    let hoverFrame
    let lastScrollAt = performance.now()
    const HINT_KEY = 'elio-journey-hint'      // how many times this visit he has already nudged
    const ENGAGED_KEY = 'elio-journey-engaged' // set for good once the visitor has poked or lifted him
    const HINT_LIMIT = 3
    let hintCount = 0
    let engaged = false
    let lastHintAt = 0
    let hintBefore = null // the pose he had before waving, so an interaction does not leave him waving
    let hintPoseTimer
    try {
      hintCount = Number(sessionStorage.getItem(HINT_KEY)) || 0
      engaged = localStorage.getItem(ENGAGED_KEY) === '1'
    } catch { /* storage unavailable: the hint just repeats */ }

    function markEngaged() {
      engaged = true
      clearTimeout(hintPoseTimer)
      try { localStorage.setItem(ENGAGED_KEY, '1') } catch { /* ignore */ }
    }

    function ghostHeightFor(frame) {
      return ghost.height * (frameScale[frame] ?? 1)
    }

    function beginPress(x, y, id) {
      if (dragging || returning) return false
      const v = spriteHit(x, y)
      if (v === null) return false
      press = { x, y, id, zone: v < .34 ? 'head' : v < .68 ? 'body' : 'legs' }
      return true
    }

    // Puts the bubble's tail on (x, y), a viewport point, keeping the bubble inside the page.
    function placeBubble(x, y) {
      const frame = notebook.getBoundingClientRect()
      const width = bubbleEl.value?.offsetWidth ?? 0
      const centre = x - frame.left
      const left = gsap.utils.clamp(width / 2 + 8, Math.max(width / 2 + 8, frame.width - width / 2 - 8), centre)
      bubble.left = left
      bubble.top = y - frame.top
      bubble.tail = gsap.utils.clamp(16, Math.max(16, width - 16), width / 2 + centre - left)
    }

    async function sayAt(text, x, y, hideAfter) {
      bubble.text = text
      bubble.label = ''
      bubble.to = ''
      bubble.open = true
      bubbleScroll = window.scrollY
      await nextTick()
      placeBubble(x, y)
      clearTimeout(bubbleTimer)
      bubbleTimer = setTimeout(() => { bubble.open = false }, hideAfter)
    }

    function simulate(now) {
      const dt = Math.min(.033, Math.max(.001, (now - sim.t) / 1000))
      sim.t = now
      const vx = sim.vx + ((pointer.x - sim.px) / dt - sim.vx) * .4 // smoothed pointer velocity
      const vy = sim.vy + ((pointer.y - sim.py) / dt - sim.vy) * .4
      const ax = gsap.utils.clamp(-14000, 14000, (vx - sim.vx) / dt)
      const ay = gsap.utils.clamp(-14000, 14000, (vy - sim.vy) / dt)
      sim.px = pointer.x
      sim.py = pointer.y
      sim.vx = vx
      sim.vy = vy
      for (let i = 0; i < 2; i++) { // two sub-steps keep the springs stable
        const h = dt / 2
        const torsoAcceleration = -PENDULUM.stiffness * sim.angle - PENDULUM.damping * sim.omega + PENDULUM.push * ax
        sim.omega += torsoAcceleration * h
        sim.angle += sim.omega * h
        sim.legsVel += (-LEGS.stiffness * sim.legs - LEGS.damping * sim.legsVel - LEGS.lag * torsoAcceleration) * h
        sim.legs = gsap.utils.clamp(-LEGS.max, LEGS.max, sim.legs + sim.legsVel * h)
        sim.armLVel += (-ARMS.stiffness * sim.armL - ARMS.damping * sim.armLVel - ARMS.lag * torsoAcceleration) * h
        sim.armL = gsap.utils.clamp(-ARMS.max, ARMS.max, sim.armL + sim.armLVel * h)
        sim.armRVel += (-ARMS.stiffness * ARMS.rightStiffness * sim.armR - ARMS.damping * sim.armRVel - ARMS.lag * torsoAcceleration) * h
        sim.armR = gsap.utils.clamp(-ARMS.max, ARMS.max, sim.armR + sim.armRVel * h)
        if (Math.abs(sim.angle) > PENDULUM.max) {
          sim.angle = Math.sign(sim.angle) * PENDULUM.max
          sim.omega *= .4
        }
        sim.stretchVel += (-STRETCH.stiffness * sim.stretch - STRETCH.damping * sim.stretchVel - STRETCH.push * ay) * h
        sim.stretch = gsap.utils.clamp(-STRETCH.max, STRETCH.max, sim.stretch + sim.stretchVel * h)
      }
      ghost.swing = sim.angle * 180 / Math.PI * releaseFactor
      ghost.legs = sim.legs * 180 / Math.PI * releaseFactor
      ghost.armL = sim.armL * 180 / Math.PI * releaseFactor
      ghost.armR = sim.armR * 180 / Math.PI * releaseFactor
      ghost.stretch = sim.stretch * releaseFactor
      physicsFrame = requestAnimationFrame(simulate)
    }

    function startDrag(x, y) {
      dragging = true
      endReaction()
      markEngaged()
      const t = traveler.value
      restoreTo = hintBefore ?? (restingPoses.includes(t.dataset.pose) ? t.dataset.pose : 'idle')
      hintBefore = null
      const img = visibleFrame()
      const poseHeight = Number.parseFloat(getComputedStyle(img).getPropertyValue('--pose-height')) || 1
      ghost.height = img.getBoundingClientRect().height / poseHeight
      ghost.frame = 'lifted'
      ghost.x = x
      ghost.y = y
      ghost.swing = 0
      ghost.legs = 0
      ghost.armL = 0
      ghost.armR = 0
      ghost.stretch = 0
      ghost.active = true
      t.style.opacity = '0'
      document.documentElement.classList.add('journey-dragging')
      document.documentElement.classList.remove('journey-poke-hover')
      pointer.x = x
      pointer.y = y
      Object.assign(sim, { angle: 0, omega: 0, legs: 0, legsVel: 0, armL: 0, armLVel: 0, armR: 0, armRVel: 0, stretch: 0, stretchVel: 0, vx: 0, vy: 0, px: x, py: y, t: performance.now() })
      releaseFactor = 1
      cancelAnimationFrame(physicsFrame)
      physicsFrame = requestAnimationFrame(simulate)
      sayAt(grabLines[grabCursor++ % grabLines.length], x, y - ghostHeightFor(ghost.frame) * .32 - 4, 2200)
    }

    function moveDrag(x, y) {
      pointer.x = x
      pointer.y = y
      ghost.x = x
      ghost.y = y
      if (bubble.open) placeBubble(x, y - ghostHeightFor(ghost.frame) * .32 - 4) // the bubble stays above his head
    }

    function releaseDrag() {
      dragging = false
      returning = true
      document.documentElement.classList.remove('journey-dragging')
      bubble.open = false
      ghost.frame = 'drop'
      const start = { x: ghost.x, y: ghost.y }
      const startedAt = performance.now()
      const slide = gsap.parseEase('power2.out')
      const bounce = gsap.parseEase('bounce.out')
      const step = now => {
        const p = Math.min(1, (now - startedAt) / 560)
        // Aim at the sprite's live position: the page may scroll while the ghost is falling back.
        const rect = visibleFrame().getBoundingClientRect()
        const targetX = rect.left + rect.width / 2
        const targetY = rect.bottom - ghostHeightFor(ghost.frame) * .68
        ghost.x = start.x + (targetX - start.x) * slide(p)
        ghost.y = start.y + (targetY - start.y) * bounce(p)
        pointer.x = ghost.x
        pointer.y = ghost.y
        releaseFactor = 1 - p
        if (p < 1) {
          returnFrame = requestAnimationFrame(step)
          return
        }
        landGhost()
      }
      returnFrame = requestAnimationFrame(step)
    }

    function landGhost() {
      cancelAnimationFrame(physicsFrame)
      releaseFactor = 1
      ghost.swing = 0
      ghost.legs = 0
      ghost.armL = 0
      ghost.armR = 0
      ghost.stretch = 0
      ghost.active = false
      const t = traveler.value
      t.style.opacity = ''
      applyPose('crouch')
      const rect = visibleFrame().getBoundingClientRect()
      sayAt(landLines[landCursor++ % landLines.length], rect.left + rect.width / 2, rect.top, 1800)
      setTimeout(() => {
        if (t.dataset.pose === 'crouch') applyPose(restoreTo) // untouched by scrolling: stand back up
        returning = false
      }, 220)
    }

    function movePress(x, y) {
      if (!press) return
      if (!dragging) {
        if (Math.hypot(x - press.x, y - press.y) < DRAG_THRESHOLD) return
        startDrag(x, y)
        return
      }
      moveDrag(x, y)
    }

    function endPress(cancelled) {
      const finished = press
      press = null
      if (dragging) releaseDrag()
      else if (finished && !cancelled) poke(finished.zone)
    }

    function onPointerDown(event) {
      if (event.pointerType === 'touch' || event.button !== 0) return
      if (event.target.closest?.(interactiveSelector)) {
        bubble.open = false
        return
      }
      if (!beginPress(event.clientX, event.clientY, event.pointerId)) {
        bubble.open = false
        return
      }
      event.preventDefault() // no text selection while grabbing
    }

    function onPointerMove(event) {
      if (event.pointerType === 'touch') return
      if (press && press.id === event.pointerId) {
        movePress(event.clientX, event.clientY)
        return
      }
      if (event.pointerType !== 'mouse') return
      cancelAnimationFrame(hoverFrame)
      hoverFrame = requestAnimationFrame(() => {
        document.documentElement.classList.toggle('journey-poke-hover', !dragging && spriteHit(event.clientX, event.clientY) !== null)
      })
    }

    function onPointerEnd(event) {
      if (event.pointerType === 'touch') return
      if (press && press.id === event.pointerId) endPress(event.type === 'pointercancel')
    }

    // Touch: a non-passive touchstart is the only way to stop the page from scrolling under the finger.
    function onTouchStart(event) {
      if (event.touches.length !== 1 || event.target.closest?.(interactiveSelector)) return
      const touch = event.touches[0]
      if (beginPress(touch.clientX, touch.clientY, touch.identifier)) event.preventDefault()
    }

    function onTouchMove(event) {
      if (!press) return
      const touch = Array.from(event.touches).find(item => item.identifier === press.id)
      if (!touch) return
      event.preventDefault()
      movePress(touch.clientX, touch.clientY)
    }

    function onTouchEnd(event) {
      if (press && !Array.from(event.touches).some(item => item.identifier === press.id)) endPress(event.type === 'touchcancel')
    }

    function onScrollAway() {
      lastScrollAt = performance.now()
      if (bubble.open && !dragging && !returning && Math.abs(window.scrollY - bubbleScroll) > 40) bubble.open = false
    }

    function onKeyDown(event) {
      if (event.key !== 'Escape') return
      if (dragging) endPress(true)
      bubble.open = false
    }

    function onBlur() {
      if (press) endPress(true)
    }

    // A friendly nudge: he waves and says hello when he stands still in view. Up to three times a visit,
    // 20s apart, and never again once the visitor has played with him.
    const hintTimer = setInterval(() => {
      if (engaged || hintCount >= HINT_LIMIT || reacting || dragging || returning || press || bubble.open) return
      if (lastHintAt && performance.now() - lastHintAt < 20000) return
      const t = traveler.value
      if (!t || !t.classList.contains('is-ready') || t.dataset.cardStage || !restingPoses.includes(t.dataset.pose)) return
      if (performance.now() - lastScrollAt < 1500) return
      const rect = visibleFrame().getBoundingClientRect()
      if (rect.top < 60 || rect.bottom > window.innerHeight - 10) return
      hintCount += 1
      lastHintAt = performance.now()
      try { sessionStorage.setItem(HINT_KEY, String(hintCount)) } catch { /* ignore */ }
      hintBefore = t.dataset.pose
      applyPose('wave')
      clearTimeout(hintPoseTimer)
      hintPoseTimer = setTimeout(() => {
        if (!reacting && !dragging && t.dataset.pose === 'wave' && hintBefore) applyPose(hintBefore)
        hintBefore = null
      }, 2200)
      sayAt('戳戳我？也可以把我拎起來喔～', rect.left + rect.width / 2, rect.top, 7000)
    }, 800)

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('pointermove', onPointerMove)
    document.addEventListener('pointerup', onPointerEnd)
    document.addEventListener('pointercancel', onPointerEnd)
    document.addEventListener('touchstart', onTouchStart, { passive: false })
    document.addEventListener('touchmove', onTouchMove, { passive: false })
    document.addEventListener('touchend', onTouchEnd)
    document.addEventListener('touchcancel', onTouchEnd)
    window.addEventListener('scroll', onScrollAway, { passive: true })
    window.addEventListener('blur', onBlur)
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('pointermove', onPointerMove)
      document.removeEventListener('pointerup', onPointerEnd)
      document.removeEventListener('pointercancel', onPointerEnd)
      document.removeEventListener('touchstart', onTouchStart)
      document.removeEventListener('touchmove', onTouchMove)
      document.removeEventListener('touchend', onTouchEnd)
      document.removeEventListener('touchcancel', onTouchEnd)
      window.removeEventListener('scroll', onScrollAway)
      window.removeEventListener('blur', onBlur)
      document.removeEventListener('keydown', onKeyDown)
      cancelAnimationFrame(hoverFrame)
      cancelAnimationFrame(returnFrame)
      cancelAnimationFrame(physicsFrame)
      clearInterval(hintTimer)
      clearTimeout(hintPoseTimer)
      ghost.active = false
      traveler.value && (traveler.value.style.opacity = '')
      document.documentElement.classList.remove('journey-dragging')
      clearTimeout(reactionTimer)
      clearTimeout(settleReactionTimer)
      clearTimeout(bubbleTimer)
      document.documentElement.classList.remove('journey-poke-hover')
      bubble.open = false
      resize.disconnect()
      cancelAnimationFrame(frame)
      clearTimeout(settle)
      clearTimeout(landedTimer)
      clearTimeout(landingTimer)
      notebook.classList.remove('journey-landed', 'journey-thinking')
      trigger?.kill()
      traveler.value?.classList.remove('is-ready')
      notebook.classList.remove('journey-ready')
      delete notebook.dataset.landingCard
      destination.style.removeProperty('--arrival-scale')
      destination.style.removeProperty('--arrival-visible')
    }
  })

  cleanup = () => media.revert()
})

onBeforeUnmount(() => cleanup?.())
</script>
