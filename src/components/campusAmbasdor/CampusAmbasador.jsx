import React from 'react';
import { H1 } from '../shared/typography/Headings';

import {
  Container,
  ContentSection,
  Description,
  IllustrationSection,
  TitleContainer,
  ItemContainer,
  Text,
  InnerCover,
  OuterCover,
  End,
  Title,
  TextContainer,
  PointContainer,
  SvgIconContainer,
} from './styles';
import { PrimaryButton } from '../shared/typography/Button';
import SvgIcon from '../communityPartners/diamond';
import { data, image, details } from '@/config/content/CampusAmbasador/campusAmbasador';

const CampusAmbasador = () => {
  return (
    <>
      <>
        <TitleContainer>
          <H1>{details.title}</H1>
        </TitleContainer>

        <Container>
          <IllustrationSection>
            <img src={image} alt='Community partners collaborating' className='w-full h-auto' />
          </IllustrationSection>
          <ContentSection>
            <Description>{details.des}</Description>
            <ul>
              {data.map((item, index) => (
                <ItemContainer key={index}>
                  <PointContainer>
                    <SvgIconContainer>
                      <SvgIcon />
                    </SvgIconContainer>
                    <TextContainer>
                      <Title>{item.title}</Title>
                      <Text>{item.description}</Text>
                    </TextContainer>
                  </PointContainer>
                </ItemContainer>
              ))}
            </ul>
          </ContentSection>
        </Container>
      </>

      <OuterCover>
        <InnerCover>
          <End>{details.end}</End>
          <PrimaryButton>{details.button}</PrimaryButton>
        </InnerCover>
      </OuterCover>
    </>
  );
};

export default CampusAmbasador;
