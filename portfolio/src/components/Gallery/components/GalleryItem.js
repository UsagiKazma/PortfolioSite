import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import {Animated} from 'react-animated-css'
 
const GalleryItem = ({id, source, thumbnail, caption, description, position, toggleLightbox}) => {

    const onClick = useCallback((e) => {
        e.preventDefault()
        toggleLightbox(position)
    }, [position, toggleLightbox]);

    return (
    
    <article key={id} className="6u 12u$(xsmall) work-item">
        <Animated animationIn="fadeInDown" animationOut="fadeOut" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
        <a
        className="image fit thumb"
        href={source}
        onClick={onClick}
        >
        <img src={source} />
        </a>
        <h3>{caption}</h3>
        <p>{description}</p>
        </Animated>
    </article>)
};

GalleryItem.displayName = 'GalleryItem'
GalleryItem.propTypes = {
  id: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  toggleLightbox: PropTypes.func.isRequired
}

export default GalleryItem