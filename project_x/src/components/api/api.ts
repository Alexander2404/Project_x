import { SetCards, SetIsError, SetIsLoading } from '../../store/actions/cardsActions';
import { Dispatch } from '@reduxjs/toolkit';
import { ICard } from '../../types/card';

export function getCards(className: string, type: string, rarityList: []) {
  const url = `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/${className}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd1d55b1f4cmsh173caee2347f49ap145702jsne2cf19019c3a',
      'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
    },
  };
  return (dispatch: Dispatch) => {
    try {
      const table: any = {};
      dispatch(SetIsLoading(true));
      dispatch(SetCards([]));
      fetch(url, options)
        .then((response) => response.json())
        .then((json) => {
          dispatch(SetIsLoading(false));
          if (type === 'All') {
            if (rarityList.length > 0) {
              dispatch(
                SetCards(
                  json
                    .filter(({ name }: ICard) => !table[name] && (table[name] = 1))
                    .filter((card: ICard) => card.hasOwnProperty('img'))

                    .filter((card: ICard) => {
                      for (let i = 0; i < rarityList.length; i++) {
                        if (card.rarity === rarityList[i]) {
                          return card;
                        }
                      }
                    }),
                ),
              );
            } else {
              dispatch(
                SetCards(
                  json
                    .filter(({ name }: ICard) => !table[name] && (table[name] = 1))
                    .filter((card: ICard) => card.hasOwnProperty('img')),
                ),
              );
            }
          }
          if (type !== 'All') {
            if (rarityList.length > 0) {
              dispatch(
                SetCards(
                  json
                    .filter(({ name }: ICard) => !table[name] && (table[name] = 1))
                    .filter((card: ICard) => card.hasOwnProperty('img') && card.type === type)
                    .filter((card: ICard) => {
                      for (let i = 0; i < rarityList.length; i++) {
                        if (card.rarity === rarityList[i]) {
                          return card;
                        }
                      }
                    }),
                ),
              );
            } else {
              dispatch(
                SetCards(
                  json
                    .filter(({ name }: ICard) => !table[name] && (table[name] = 1))
                    .filter((card: ICard) => card.hasOwnProperty('img') && card.type === type),
                ),
              );
            }
          }
        });
    } catch (err) {
      console.log(err);
    }
  };
}

export function getCardByName(name: string) {
  const url = `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${name}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd1d55b1f4cmsh173caee2347f49ap145702jsne2cf19019c3a',
      'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
    },
  };
  return function (dispatch: Dispatch) {
    const table: any = {};
    dispatch(SetIsLoading(true));
    dispatch(SetCards([]));
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        dispatch(SetIsLoading(false));

        if (json.hasOwnProperty('error')) {
          console.log(json.hasOwnProperty('error'));
          dispatch(SetIsError(true));
        } else {
          dispatch(SetIsError(false));
          dispatch(
            SetCards(
              json
                .filter(({ name }: ICard) => !table[name] && (table[name] = 1))
                .filter((card: ICard) => card.hasOwnProperty('img')),
            ),
          );
        }
      });
  };
}
