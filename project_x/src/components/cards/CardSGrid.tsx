import { useDispatch, useSelector } from 'react-redux';
import { SetIsDetails, SetCardDetails, SetIsError } from '../../store/actions/cardsActions';
import { RootState } from '../../store/store';
import { ICard } from '../../types/card';
const countCards = 30;
interface ICardsGrid {
  cards: [];
  sorting: string;
  page: number;
  filtersSortingType: any;
}

export default function CardsGrid({ cards, sorting, page, filtersSortingType }: ICardsGrid) {
  const dispatch = useDispatch();

  function setCardsGrid() {
    if (cards.length > 0) {
      const array = cards.map((card: ICard) => <CardItem card={card} />);

      if (sorting === filtersSortingType.SORTING_BY_DESCENDING) {
        array.reverse();
      }

      let newAr = [];
      let initialValue = page * countCards - 30;
      for (let i: number = initialValue; i < countCards * page; i++) {
        newAr[i] = array[i];
      }

      return newAr;
    }
  }
  return <>{setCardsGrid()}</>;
}
interface ICardItem {
  card: ICard;
}
function CardItem({ card }: ICardItem) {
  const dispatch = useDispatch();

  return (
    <img
      onClick={() => {
        dispatch(SetIsDetails(true));
        dispatch(SetCardDetails(card));
        console.log(card);
      }}
      className='cardItem'
      width={230}
      src={card.img}
      alt=''
    />
  );
}
