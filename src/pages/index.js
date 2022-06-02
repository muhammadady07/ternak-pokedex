import { HomeStyle as S } from '@styles/index';
import { GET_POKEMONS } from '../lib/graphql-apollo/index';
import { useQuery } from '@apollo/client';
import { Fragment } from 'react';
import { Waypoint } from 'react-waypoint';
import { Card } from '@components/index';
import Head from 'next/head';

export default function Home() {
  const gqlVariables = {
    limit: 10,
  };
  const { loading, error, data, fetchMore } = useQuery(GET_POKEMONS, {
    variables: gqlVariables,
  });

  if (loading) return <S.TxtFetchStatus>Loading...</S.TxtFetchStatus>;
  if (error)
    return <S.TxtFetchStatus>{`Error! ${error.message}`}</S.TxtFetchStatus>;

  return (
    <>
      <Head>
        <title>Pokedex - Catch Your Pokemon</title>
        <meta
          name="description"
          content="Meta description content goes here."
        />
      </Head>
      <S.Container>
        {data?.pokemons?.results?.length > 0 &&
          data.pokemons.results.map((item, index) => (
            <Fragment key={index}>
              <Card name={item.name} img={item.image} />
              {index === data?.pokemons?.results?.length - 5 && (
                <Waypoint
                  onEnter={() =>
                    fetchMore({
                      variables: {
                        ...gqlVariables,
                        offset: data?.pokemons?.results?.length + 1,
                      },
                      updateQuery: (prev, { fetchMoreResult }) => {
                        if (
                          !fetchMoreResult ||
                          prev.pokemons.results.length >=
                            fetchMoreResult.pokemons.count
                        ) {
                          return prev;
                        }

                        return {
                          pokemons: {
                            ...prev.pokemons,
                            results: [
                              ...prev.pokemons.results,
                              ...fetchMoreResult.pokemons.results,
                            ],
                          },
                        };
                      },
                    })
                  }
                />
              )}
            </Fragment>
          ))}
      </S.Container>
    </>
  );
}
