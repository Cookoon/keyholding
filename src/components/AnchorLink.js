import React from 'react'
import { string, node, func, shape } from 'prop-types'

const performScroll = href => {
  /* destination element to scroll to */
  const destinationElement = document.querySelector(href)

  /* position to scroll to */
  const scrollToPosition = destinationElement.offsetTop

  /* invoke scroll, with behavior smooth (not supported in Safari as of writing) */
  window.scrollTo({
    behavior: 'smooth',
    top: scrollToPosition,
  })
}

const handleClick = ({ href, callback, history, event }) => {
  /* prevent normal link behavior */
  event.preventDefault()

  /* call the function */
  performScroll(href)

  /*
     * only push to browser history if it’s a new anchor
     *
     * this fixes the “bug” in Gatsby (react-router ?)
     * where the same hash can be pushed to history
     *
     * if you want to stick to default Gatsby behavior, remove the if condition block
     * and uncomment history.push(href) following it
     */
  if (history.location.hash !== href) {
    history.push(href)
  }

  /* Uncomment below line if you want default Gatsby behavior */
  // history.push(href)

  /* perform callback (example: closing modal sidebar) */
  if (callback) {
    callback()
  }
}

const AnchorLink = ({ href, history, callback, children, ...restProps }) => (
  <a
    href={href}
    onClick={event =>
      handleClick({
        href,
        callback, // optional callback, I use it to close modal sidebar
        history, // history object props that layout and pages have
        event,
      })
    }
    {...restProps}
  >
    {children}
  </a>
)

AnchorLink.propTypes = {
  href: string.isRequired,
  callback: func,
  children: node.isRequired,
  history: shape({
    push: func.isRequired,
    hash: string.isRequired,
  }).isRequired,
}

AnchorLink.defaultProps = {
  callback: undefined,
}

export default AnchorLink
