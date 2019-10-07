import React from 'react'
import styled from 'styled-components'
import Image from 'components/Image/Image'
import ArrowLink from 'components/ArrowLink/ArrowLink'
import PropTypes from 'prop-types'

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin: 80px auto;
  background: ${({ background }) => background};
  width: 80%;
  max-width: 480px;
  height: auto;
  border-radius: ${({ leftImage }) =>
    leftImage ? '0 64px 0 0' : '64px 0 0 0'};
  padding-bottom: 32px;
  cursor: pointer;

  &:first-of-type {
    margin: 0 auto;
  }

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: ${({ leftImage }) => (leftImage ? 'row-reverse' : 'row')};
    background: linear-gradient(
      90deg,
      ${({ leftImage, background }) =>
        leftImage
          ? `transparent 20%, ${background} 20%`
          : `${background} 80%, transparent 80%`}
    );
    max-width: 980px;
    width: calc(100% - 20vw);
    align-items: flex-start;
    margin: 200px auto;
    padding-bottom: 0;
  }
`

const H2 = styled.h2`
  font-family: ${({ theme }) => theme.font.family.rhd};
  font-weight: ${({ theme }) => theme.font.weight.black};
  font-size: ${({ theme }) => theme.font.size.mobile.h2};
  color: ${({ theme }) => theme.black};
  margin: 0;
  margin-bottom: 24px;
`

const H3 = styled.h3`
  font-family: ${({ theme }) => theme.font.family.rhd};
  font-size: ${({ theme }) => theme.font.size.mobile.h4};
  font-weight: ${({ theme }) => theme.font.weight.black};
  color: ${({ theme }) => theme.black};
  white-space: nowrap;
  margin: 0;

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.font.size.desktop.h5};
  }

  ${({ theme }) => theme.mq.huge} {
    font-size: ${({ theme }) => theme.font.size.desktop.h4};
  }
`

const PriceOffer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 24px 0;

  ${({ theme }) => theme.mq.desktop} {
    margin: 32px 0;
    flex-direction: row;
    align-items: baseline;
  }
`

const PriceOr = styled.span`
  font-family: ${({ theme }) => theme.font.family.rhd};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.mobile.body};
  color: ${({ theme, leftImage }) => (leftImage ? theme.rose : theme.azure)};
  margin: 16px 0;

  ${({ theme }) => theme.mq.desktop} {
    margin: 0 12px;
  }

  ${({ theme }) => theme.mq.huge} {
    margin: 0 16px;
  }
`

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  padding-left: 24px;
`

const ListItem = styled.li`
  position: relative;
  font-family: ${({ theme }) => theme.font.family.rhd};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.mobile.body2};
  color: ${({ theme }) => theme.black};
  line-height: 24px;
  letter-spacing: 0.02rem;
  margin: 4px 0;

  ::before {
    content: '';
    position: absolute;
    top: 8px;
    left: -20px;
    width: 8px;
    height: 8px;
    border-radius: 8px 0 0 0;
    background: ${({ theme, leftImage }) =>
      leftImage ? theme.rose : theme.azure};
  }
`

const OfferDesc = styled.div`
  width: 100%;
  padding: 48px 24px 0 10%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  ${({ theme }) => theme.mq.desktop} {
    padding: ${({ leftImage }) =>
      leftImage ? '56px 0 0 16px' : '56px 0 0 48px'};
    width: 50%;
  }
`

const OfferImage = styled.div`
  width: 90%;
  max-width: 400px;
  transform: translateY(48px);

  ${({ theme }) => theme.mq.desktop} {
    transform: translateY(16px);
    width: 50%;
  }
`

const StyledImage = styled(Image)`
  && {
    border-radius: 2px;
    ${({ theme }) => theme.mq.desktop} {
      border-radius: ${({ leftImage }) =>
        leftImage ? '64px 0 0 0' : '0 64px 0 0'};
    }
  }
`

const OfferItem = ({
  title,
  offerList,
  firstPrice,
  secondPrice,
  leftImage,
  imageName,
  color,
  background,
  alt,
  className,
}) => {
  return (
    <FlexWrapper
      className={className}
      leftImage={leftImage}
      background={background}
    >
      <OfferDesc leftImage={leftImage}>
        <H2>{title}</H2>
        <List>
          {offerList.map(item => (
            <ListItem leftImage={leftImage} key={item}>
              {item}
            </ListItem>
          ))}
        </List>
        <PriceOffer>
          <H3>{firstPrice}</H3>
          <PriceOr leftImage={leftImage}>lub</PriceOr>
          <H3>{secondPrice}</H3>
        </PriceOffer>
        <ArrowLink
          text="wybierz ten pakiet"
          style={{ width: '100%', pointerEvents: 'none' }}
          color={color}
        />
      </OfferDesc>
      <OfferImage>
        <StyledImage filename={imageName} alt={alt} leftImage={leftImage} />
      </OfferImage>
    </FlexWrapper>
  )
}

OfferItem.defaultProps = {
  className: '',
}

OfferItem.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  offerList: PropTypes.arrayOf(PropTypes.string).isRequired,
  firstPrice: PropTypes.string.isRequired,
  secondPrice: PropTypes.string.isRequired,
  leftImage: PropTypes.bool.isRequired,
  imageName: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

export default OfferItem
