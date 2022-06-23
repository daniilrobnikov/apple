import { useState, useEffect } from 'react'

function useScrollBox(ref) {
  const [scrollBox, setScrollBox] = useState({
    scrollWidth: undefined,
    visibleWidth: undefined,
    itemWidth: undefined,
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setScrollBox({
          visibleWidth: ref.current.clientWidth,
          scrollWidth: ref.current.scrollWidth,
          itemWidth: ref.current.scrollWidth / ref.current.children.length,
        })
      }

      window.addEventListener('resize', handleResize)
      handleResize()
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])
  return scrollBox
}

function useScrollX(ref) {
  const { scrollWidth, visibleWidth, itemWidth } = useScrollBox(ref)

  const [scrollX, setScrollX] = useState({
    left: 0,
    right: 0,
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleScroll() {
        var scrollLeft = ref.current.scrollLeft

        if (scrollLeft <= 10) {
          ref.current.nextSibling.childNodes[0].disabled = true
        } else {
          ref.current.nextSibling.childNodes[0].disabled = false
        }
        if (scrollLeft + visibleWidth >= scrollWidth - 10) {
          ref.current.nextSibling.childNodes[1].disabled = true
        } else {
          ref.current.nextSibling.childNodes[1].disabled = false
        }

        var leftIndex =
          Math.ceil(scrollLeft / itemWidth) -
          Math.floor(visibleWidth / itemWidth)
        if (!isNaN(leftIndex) && leftIndex >= 0) {
          var left = ref.current.childNodes[leftIndex].offsetLeft
        }
        var rightIndex =
          Math.floor(scrollLeft / itemWidth) +
          Math.floor(visibleWidth / itemWidth)
        if (
          !isNaN(rightIndex) &&
          rightIndex <= ref.current.children.length - 1
        ) {
          var right = ref.current.childNodes[rightIndex].offsetLeft
        }

        setScrollX({
          left: left,
          right: right,
        })
      }

      ref.current.addEventListener('scroll', handleScroll)
      handleScroll()
      return () => {
        ref.current.removeEventListener('scroll', handleScroll)
      }
    }
  }, [ref.current, scrollWidth, visibleWidth, itemWidth])

  return scrollX
}

export { useScrollBox, useScrollX }
