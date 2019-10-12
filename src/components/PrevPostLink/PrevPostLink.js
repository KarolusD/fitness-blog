import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'

const PostLink = styled(Link)`
  visibility: ${({ inview }) => (inview ? 'visable' : 'hidden')};
  margin-top: 40px;
  padding: 32px 16px 88px 24px;
  position: relative;
  border: none;
  box-shadow: none;
  outline: none;
  width: 100%;
  min-height: 210px;
  height: auto;
  text-decoration: none;
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.black};
  border-radius: ${({ next }) => (next ? '0 0 64px 0' : '0 0 0 64px')};
  transition: transform 250ms cubic-bezier(0.51, 0.84, 0.32, 1.19);

  :before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 64px;
    background: ${({ theme, next }) =>
      next ? theme.lightAzure : theme.lightRose};
    border-radius: ${({ next }) => (next ? '0 0 64px 0' : '0 0 0 64px')};
  }

  :hover {
    transform: scale(1.05);
    h2 {
      text-decoration: underline;
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 48%;
  }
`

const H2 = styled.h2`
  font-family: ${({ theme }) => theme.font.family.rhd};
  font-weight: ${({ theme }) => theme.font.weight.black};
  font-size: ${({ theme }) => theme.font.size.mobile.h2};
  color: ${({ theme }) => theme.black};
  line-height: 40px;
  margin: 0;
  text-align: left;

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.desktop.h2};
  }
`

const PrevLink = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 8px;
  width: calc(100% - 24px);
  text-align: ${({ next }) => (next ? 'left' : 'right')};
  padding-right: 24px;
`

const P = styled.p`
  font-family: ${({ theme }) => theme.font.family.rhd};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.mobile.body};
  color: ${({ theme, next }) => (next ? theme.blue : theme.pink)};
  margin: 0;
  margin-bottom: 4px;
`

const Date = styled.p`
  font-family: ${({ theme }) => theme.font.family.rht};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.mobile.body2};
  color: ${({ theme, next }) => (next ? theme.blue : theme.pink)};
  margin: 0;
  margin-bottom: 4px;
`

const PrevPostLink = ({ title, date, linkTo, inview, next, text }) => {
  return (
    <PostLink to={linkTo} next={next ? 1 : 0} inview={inview ? 1 : 0}>
      <H2>{title}</H2>
      <PrevLink next={next ? 1 : 0}>
        <P next={next ? 1 : 0}>{text}</P>
        <Date next={next ? 1 : 0}>{date}</Date>
      </PrevLink>
    </PostLink>
  )
}

PrevPostLink.defaultProps = {
  title: '',
  date: '',
  inview: false,
  linkTo: '',
  next: false,
  text: 'poprzedni post',
}

PrevPostLink.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  inview: PropTypes.bool,
  linkTo: PropTypes.string,
  next: PropTypes.bool,
  text: PropTypes.string,
}

export default PrevPostLink
