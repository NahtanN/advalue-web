const getScrollPosition = () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight

  const scrolled = winScroll / height

  return {
    winScroll,
    height,
    scrolled
  }
}

export default getScrollPosition