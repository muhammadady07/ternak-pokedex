import React from 'react';
import {
  Container,
  NameTxt,
  OwnedTxt,
  Pointer,
  DescriptionWrapper,
} from '@common/Card/style';
import Image from 'next/image';
import { string } from 'prop-types';

const Card = ({ img, name, nickname }) => {
  const getPrevPokemonData =
    JSON.parse(window.localStorage.getItem('myPokemon')) || [];
  const getPrevPokemon = () => {
    const findSamePokemonName = getPrevPokemonData.filter(
      (item) => item.pokemonName === name
    );
    if (findSamePokemonName.length > 0) {
      const getPokemonDetailData = findSamePokemonName.length;
      return getPokemonDetailData;
    } else {
      return '0';
    }
  };

  const removePokemon = () => {
    try {
      const findSamePokemonNickname = getPrevPokemonData.findIndex(
        (item) => item.nickname === nickname
      );
      if (findSamePokemonNickname === 0 || findSamePokemonNickname > 0) {
        getPrevPokemonData.splice(findSamePokemonNickname, 1);
        window.localStorage.setItem(
          'myPokemon',
          JSON.stringify(getPrevPokemonData)
        );
        location.reload();
      }
    } catch (e) {}
  };

  return (
    <Container>
      {nickname && (
        <Pointer onClick={() => removePokemon()}>
          <Image
            src={'/images/remove.png'}
            alt="logo"
            layout="fixed"
            width={25}
            height={25}
            objectFit="contain"
          />
        </Pointer>
      )}
      <Image
        src={img}
        alt="logo"
        layout="fixed"
        width={120}
        height={120}
        objectFit="contain"
        priority
      />
      <DescriptionWrapper>
        <NameTxt>{name}</NameTxt>
        {nickname ? (
          <NameTxt>{nickname}</NameTxt>
        ) : (
          <OwnedTxt>{getPrevPokemon()} Owned</OwnedTxt>
        )}
      </DescriptionWrapper>
      <Pointer href={`/pokedex-detail?name=${name}`}>
        <Image
          src={'/images/right-arrow.png'}
          alt="logo"
          layout="fixed"
          width={25}
          height={25}
          objectFit="contain"
        />
      </Pointer>
    </Container>
  );
};

Card.propTypes = {
  img: string.isRequired,
  name: string.isRequired,
  nickname: string,
};

Card.defaultProps = {
  nickname: '',
};

export default Card;
