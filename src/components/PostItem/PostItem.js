import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import ArrowLink from 'components/ArrowLink/ArrowLink'
import { Link } from 'gatsby'
import ScrollAnimation from 'react-animate-on-scroll'

const Post = styled.div`
  text-decoration: none;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  margin-bottom: 108px;
  width: auto;
  max-width: 100%;
  height: auto;

  &:hover {
    .post-title {
      text-decoration: underline;
    }

    .post-image {
      :before {
        transform: translate(32px, 32px);
      }
    }
  }

  .post-image__photo::before {
    border-radius: 80px 0 0 0;
  }

  .post-image__photo {
    border-radius: 2px;
  }

  :nth-child(even) {
    .post-desc {
      margin: 0;
    }

    .post-image__photo::before {
      border-radius: 0 80px 0 0;
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    align-items: center;
    max-width: 510px;
    flex-direction: row;
    .post-image__photo img {
      border-radius: 64px 0 0 0;
    }
    :nth-child(even) {
      flex-direction: row-reverse;
      .post-desc {
        margin: 0 64px 0 0;
      }
      .post-image__photo img {
        border-radius: 0 64px 0 0;
      }
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    max-width: 610px;
    margin-bottom: 128px;
  }
`

const PostDate = styled.h3`
  font-family: ${({ theme }) => theme.font.family.rhd};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.mobile.body2};
  letter-spacing: 0.3rem;
  line-height: 24px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.azure};
  margin: 0;
  margin-bottom: 8px;

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.desktop.body2};
    margin-bottom: 16px;
  }
`

const PostTitle = styled.h2`
  position: relative;
  font-family: ${({ theme }) => theme.font.family.rhd};
  font-weight: ${({ theme }) => theme.font.weight.black};
  font-size: ${({ theme }) => theme.font.size.mobile.h2};
  color: ${({ theme }) => theme.black};
  margin: 0;
  margin-bottom: 16px;
  line-height: 4.2rem;
  transition: all 200ms ease-in-out;

  ${({ theme }) => theme.mq.desktop} {
    margin-bottom: 32px;
    font-size: ${({ theme }) => theme.font.size.desktop.h2};
  }
`

const PostDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: auto;
  height: 100%;
  margin: 0;
  max-width: 100%;

  ${({ theme }) => theme.mq.tablet} {
    margin: 0 0 0 88px;
    max-width: 340px;
  }
`

const PostImage = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  margin-top: 24px;

  ${({ theme }) => theme.mq.tablet} {
    width: auto;
    height: 100%;
  }
`

const StyledImage = styled(Img)`
  overflow: visible !important;

  ${({ theme }) => theme.mq.tablet} {
    ::before {
      transition: transform 200ms ease-in-out;
      content: '';
      position: absolute;
      top: -16px;
      left: -16px;
      height: 100%;
      width: 100%;
      background: ${({ theme }) => theme.lightAzure};
    }
  }
`

const PostItem = ({
  image,
  alt,
  date,
  title,
  arrowDisplay,
  arrowColor,
  arrowText,
  link,
  to,
  className,
}) => {
  return (
    <Post className={className} as={link ? Link : null} to={to}>
      <PostImage className="post-image">
        <ScrollAnimation animateIn="fadeInBottom" delay={300} animateOnce>
          <StyledImage className="post-image__photo" fixed={image} alt={alt} />
        </ScrollAnimation>
      </PostImage>
      <PostDesc className="post-desc">
        <ScrollAnimation animateIn="fadeInBottom" animateOnce>
          <PostDate>{date}</PostDate>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInBottom" delay={300} animateOnce>
          <PostTitle className="post-title">{title}</PostTitle>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInBottom" delay={500} animateOnce>
          <ArrowLink
            style={{ pointerEvents: 'none' }}
            text={arrowText}
            color={arrowColor}
            arrowDisplay={arrowDisplay}
          />
        </ScrollAnimation>
      </PostDesc>
    </Post>
  )
}

PostItem.defaultProps = {
  arrowColor: null,
  arrowText: null,
  link: false,
  to: null,
  className: '',
  arrowDisplay: false,
}

PostItem.propTypes = {
  image: PropTypes.objectOf(PropTypes.node).isRequired,
  alt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  arrowDisplay: PropTypes.bool,
  arrowColor: PropTypes.string,
  arrowText: PropTypes.string,
  to: PropTypes.string,
  link: PropTypes.bool,
  className: PropTypes.string,
}

export default PostItem
