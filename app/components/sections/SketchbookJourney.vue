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

function closeBubble() {
  bubble.open = false
}
const poses = ['idle', 'walk', 'run', 'wave', 'present', 'think', 'crouch', 'drop', 'read',
  'poke-head-react', 'poke-head-settle', 'poke-body-react', 'poke-body-settle', 'poke-feet-react', 'poke-feet-settle']
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
      if (!reacting) restoreTo = t.dataset.pose
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

    function onPointerDown(event) {
      if (event.button !== 0) return
      if (event.target.closest?.('.journey-bubble')) return
      if (event.target.closest?.('a, button, summary, input, textarea, select, label, [role="button"]')) {
        bubble.open = false
        return
      }
      const v = spriteHit(event.clientX, event.clientY)
      if (v === null) {
        bubble.open = false
        return
      }
      poke(v < .34 ? 'head' : v < .68 ? 'body' : 'legs')
    }

    let hoverFrame
    function onPointerMove(event) {
      if (event.pointerType !== 'mouse') return
      cancelAnimationFrame(hoverFrame)
      hoverFrame = requestAnimationFrame(() => {
        document.documentElement.classList.toggle('journey-poke-hover', spriteHit(event.clientX, event.clientY) !== null)
      })
    }

    function onScrollAway() {
      if (bubble.open && Math.abs(window.scrollY - bubbleScroll) > 40) bubble.open = false
    }

    function onKeyDown(event) {
      if (event.key === 'Escape') bubble.open = false
    }

    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('scroll', onScrollAway, { passive: true })
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('scroll', onScrollAway)
      document.removeEventListener('keydown', onKeyDown)
      cancelAnimationFrame(hoverFrame)
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
