import { HomeStyle as S } from '@styles/index';
import { useEffect, useState } from 'react';
import { Card } from '@components/index';
import Head from 'next/head';

export default function PokedexDetail() {
  const [pokemonData, setPokemonData] = useState([]);
  useEffect(() => {
    const getPrevPokemonData =
      JSON.parse(window.localStorage.getItem('myPokemon')) || [];
    setPokemonData(getPrevPokemonData);
  }, []);

  return (
    <>
      <Head>
        <title>My Pokemon</title>
        <meta
          name="description"
          content="list of pokemon that you have caught"
        />
      </Head>
      <S.Container>
        {pokemonData.length > 0 &&
          pokemonData.map((item, index) => (
            <Card
              key={index}
              name={item.pokemonName}
              img={item.image}
              nickname={item.nickname}
            />
          ))}
      </S.Container>
    </>
  );
}
