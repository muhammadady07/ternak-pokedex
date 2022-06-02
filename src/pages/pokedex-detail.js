import Image from 'next/image';
import { PokedexDetailStyle as S } from '@styles/index';
import { GET_POKEMON_DETAIL } from '@lib/graphql-apollo/index';
import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { Tab } from '@components/index';
import { PokedexDetailTab } from '@components/PokedexDetail/index';
import { useRouter } from 'next/router';
import Modal from 'react-modal';
import Head from 'next/head';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function PokedexDetail() {
  const [activeTab, setActiveTab] = useState(0);
  const [modalIsOpen, setIsOpenModal] = useState(false);
  const [isSuccessCatch, setIsSuccessCatch] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [nickname, setNickname] = useState('');
  const router = useRouter();

  const gqlVariables = {
    name: router?.query?.name,
  };
  const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
    variables: gqlVariables,
  });

  if (loading) return <S.TxtFetchStatus>Loading...</S.TxtFetchStatus>;
  if (error)
    return <S.TxtFetchStatus>{`Error! ${error.message}`}</S.TxtFetchStatus>;

  const renderTab = [
    {
      title: 'Moves',
      render: () => (
        <PokedexDetailTab data={data?.pokemon?.moves} type={'move'} />
      ),
    },
    {
      title: 'Types',
      render: () => (
        <PokedexDetailTab data={data?.pokemon?.types} type={'type'} />
      ),
    },
    {
      title: 'Stats',
      render: () => (
        <PokedexDetailTab data={data?.pokemon?.stats} type={'stats'} />
      ),
    },
  ];

  const get50PercentChance = () => {
    if (Math.random() < 0.5) {
      setIsSuccessCatch(true);
      setIsOpenModal(true);
    } else {
      setIsSuccessCatch(false);
      setIsOpenModal(true);
    }
  };

  const onClickSaveNickname = async () => {
    try {
      const getPrevPokemonData =
        (await JSON.parse(window.localStorage.getItem('myPokemon'))) || [];
      const findSamePokemonName = getPrevPokemonData.findIndex(
        (item) => item.pokemonName === router?.query?.name
      );
      if (findSamePokemonName === 0 || findSamePokemonName > 0) {
        const getPokemonDetailData =
          getPrevPokemonData[findSamePokemonName].nickname;
        const isSameNickname = getPokemonDetailData === nickname;
        if (isSameNickname) {
          setErrorMsg(
            'existing nickname is the same, please enter a different name'
          );
        } else {
          getPrevPokemonData.push({
            pokemonName: router?.query?.name,
            nickname,
            image: data?.pokemon?.sprites?.front_default,
          });
          window.localStorage.setItem(
            'myPokemon',
            JSON.stringify(getPrevPokemonData)
          );
          setIsSuccessCatch(false);
          setNickname('');
          setIsOpenModal(false);
        }
      } else {
        getPrevPokemonData.push({
          pokemonName: router?.query?.name,
          nickname,
          image: data?.pokemon?.sprites?.front_default,
        });
        window.localStorage.setItem(
          'myPokemon',
          JSON.stringify(getPrevPokemonData)
        );
        setIsSuccessCatch(false);
        setNickname('');
        setIsOpenModal(false);
      }
    } catch (e) {}
  };

  return (
    <>
      <Head>
        <title>Pokedex - {router?.query?.name}</title>
        <meta name="description" content="Find your best pokemon partner" />
      </Head>
      <S.Container>
        <S.ContainerInner>
          <S.TxtTitle>{router?.query?.name}</S.TxtTitle>
          <Image
            src={data?.pokemon?.sprites?.front_default}
            alt="logo"
            layout="fixed"
            width={120}
            height={120}
            objectFit="contain"
            priority
          />
        </S.ContainerInner>
        <Tab
          tabs={renderTab}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
        />
        <S.FooterCatch>
          <S.FooterCatchInnerContainer>
            <S.Pointer onClick={() => get50PercentChance()}>
              <Image
                src={'/images/main-logo.png'}
                alt="logo"
                layout="fixed"
                width={63}
                height={63}
              />
              <S.TxtCatch>Catch !</S.TxtCatch>
            </S.Pointer>
          </S.FooterCatchInnerContainer>
        </S.FooterCatch>
        {isSuccessCatch ? (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setIsOpenModal(true)}
            style={customStyles}
            ariaHideApp={false}
          >
            <S.ContainerModal>
              <S.ModalTxt>
                {`Successfully catching ${router?.query?.name}, please 
                  input the nickname and look at my pokemon list
                `}
              </S.ModalTxt>
              <S.ModalTxt>***{errorMsg}</S.ModalTxt>
              <S.InputNickName
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
              <S.ModalSubmitBtn onClick={() => onClickSaveNickname()}>
                Save
              </S.ModalSubmitBtn>
            </S.ContainerModal>
          </Modal>
        ) : (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setIsOpenModal(true)}
            style={customStyles}
            ariaHideApp={false}
          >
            <S.ContainerModal>
              <S.ModalTxt>
                {`Failed catching ${router?.query?.name}, please try again 
                or try to catch other pokemon
                `}
              </S.ModalTxt>
              <S.ModalSubmitBtn onClick={() => setIsOpenModal(false)}>
                Close
              </S.ModalSubmitBtn>
            </S.ContainerModal>
          </Modal>
        )}
      </S.Container>
    </>
  );
}
