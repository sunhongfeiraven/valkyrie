// http://www.alloyteam.com/2012/11/javascript-throttle/

export default function throttle(fn, delay, mustRunDelay = 0) {
  let timer = null
  let tStart
  return (...params) => {
    const context = this
    const args = params
    const tCurr = +new Date()
    clearTimeout(timer)
    if (!tStart) {
      tStart = tCurr
    }
    if (mustRunDelay !== 0 && tCurr - tStart >= mustRunDelay) {
      fn.apply(context, args)
      tStart = tCurr
    } else {
      timer = setTimeout(() => {
        fn.apply(context, args)
      }, delay)
    }
  }
}
