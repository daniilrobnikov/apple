import { useEffect, useState } from 'react'
import useEasing from './Easings'

function useWindowSize(query) {
  const [windowSize, setWindowSize] = useState({
    boxHeight: undefined,
    windowHeight: undefined,
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowSize({
          boxHeight: document.querySelector(query).clientHeight,
          windowHeight: window.innerHeight,
        })
      }

      window.addEventListener('resize', handleResize)
      handleResize()
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])
  return windowSize
}

function useStickyKeyframe(query) {
  const { boxHeight, windowHeight } = useWindowSize(query)

  const [keyframe, setKeyframe] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleScroll() {
        var boxEl = document.querySelector(query)
        var scrollTop = -boxEl.getBoundingClientRect().top

        if (scrollTop >= 0) {
          setKeyframe(Math.min(1, scrollTop / (boxHeight - windowHeight)))
        }
      }

      window.addEventListener('scroll', handleScroll)
      handleScroll()
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [boxHeight, windowHeight])

  return isNaN(keyframe) ? 0 : keyframe
}
function useStickyAnimation(
  [startState = 0, endState = 1],
  [startFrame = 0, endFrame = 1],
  keyframe,
  easing
) {
  const [activeState, setActiveState] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleScroll() {
        var frame = (keyframe - startFrame) / (endFrame - startFrame)
        frame = Math.max(0, Math.min(1, frame))
        frame = easing ? useEasing(frame, easing) : frame
        setActiveState(startState + (endState - startState) * frame)
      }

      window.addEventListener('scroll', handleScroll)
      handleScroll()
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [keyframe])

  return isNaN(activeState) ? startState : activeState
}
function useStickyVideo(video, keyframe) {
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    if (video.current) {
      setDuration(video.current.duration)
    }
  }, [video.current])

  useEffect(() => {
    if (duration) {
      video.current.currentTime = keyframe * duration
    }
  }, [duration, keyframe])
}

function useKeyframe(query) {
  const { boxHeight, windowHeight } = useWindowSize(query)

  const [keyframe, setKeyframe] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleScroll() {
        var boxEl = document.querySelector(query)
        var scrollTop = -boxEl.getBoundingClientRect().top + windowHeight

        if (scrollTop >= 0) {
          setKeyframe(Math.min(1, scrollTop / (boxHeight + windowHeight)))
        }
      }

      window.addEventListener('scroll', handleScroll)
      handleScroll()
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [boxHeight, windowHeight])

  return isNaN(keyframe) ? 0 : keyframe
}

function useAnimation(
  [startState = 0, endState = 1],
  [startFrame = 0, endFrame = 1],
  keyframe
) {
  const [activeState, setActiveState] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleScroll() {
        var frame = (keyframe - startFrame) / (endFrame - startFrame)
        frame = Math.max(0, Math.min(1, frame))
        setActiveState(startState + (endState - startState) * frame)
      }

      window.addEventListener('scroll', handleScroll)
      handleScroll()
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [keyframe])

  return isNaN(activeState) ? startState : activeState
}

function useWhileInView([startState = 0, endState = 1], keyframe, easing) {
  const [activeState, setActiveState] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleScroll() {
        keyframe = easing ? useEasing(keyframe, easing) : keyframe
        setActiveState(startState + (endState - startState) * keyframe)
      }

      window.addEventListener('scroll', handleScroll)
      handleScroll()
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [keyframe])

  return isNaN(activeState) ? startState : activeState
}

export {
  useWhileInView,
  useKeyframe,
  useAnimation,
  useStickyKeyframe,
  useStickyVideo,
  useStickyAnimation,
}
