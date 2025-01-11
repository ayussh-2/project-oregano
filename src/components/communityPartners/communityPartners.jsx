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
} from './styles';
import { PrimaryButton } from '../shared/typography/Button';
import SvgIcon from './diamond';
import { data, image, mentions } from '@/config/content/CommunityPartners/CommunityPartners';

const CommunityPartnerSection = () => {
  return (
    <>
      <>
        <TitleContainer>
          <H1>{mentions.title}</H1>
        </TitleContainer>

        <Container>
          <ContentSection>
            <Description>{mentions.des}</Description>
            <ul>
              {data.map((item, index) => (
                <ItemContainer key={index}>
                  <SvgIcon />
                  <Text>{item.description}</Text>
                </ItemContainer>
              ))}
            </ul>
          </ContentSection>

          <IllustrationSection>
            <img src={image} alt='Community partners collaborating' className='w-full h-auto' />
          </IllustrationSection>
        </Container>
      </>

      <OuterCover>
        <InnerCover>
          <End>{mentions.end}</End>
          <PrimaryButton>{mentions.button}</PrimaryButton>
        </InnerCover>
      </OuterCover>
    </>
  );
};

export default CommunityPartnerSection;
