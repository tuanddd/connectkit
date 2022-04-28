import React from 'react';
import { useContext, routes } from './../FamilyKit';

import styled from 'styled-components';
import { motion } from 'framer-motion';

import Button from '../Button';
import { ModalHeading } from '../Modal/styles';

const Container = styled(motion.div)`
  width: 100%;
  min-width: 574px;
`;

const Tiles = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 24px 0 0;
  gap: 16px;
`;
const Tile = styled(motion.div)`
  padding: 52px 24px;
  border-radius: 18px;
  background: var(--body-background-secondary);
  box-shadow: inset 0 0 0 2px var(--body-background-secondary-hover);
`;

const KnowledgeBase: React.FC = () => {
  return (
    <Container>
      <ModalHeading>Learn About Wallets</ModalHeading>
      <Tiles>
        <Tile>Title A</Tile>
        <Tile>Title B</Tile>
        <Tile>Title C</Tile>
        <Tile>Title D</Tile>
        <Tile>Title E</Tile>
        <Tile>Title F</Tile>
      </Tiles>
    </Container>
  );
};

export default KnowledgeBase;