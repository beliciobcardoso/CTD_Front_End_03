import './style.scss';
import { ListHorizontalItem } from '../../components/ListHorizontalItem';
import { ListVerticalItem } from '../../components/ListVerticalItem';
import {
  cheapGames,
  halloweenGames,
  earlyAccessGames,
  newGames,
} from './games';
export function AppGames() {
  return (
    <>
      <main className='pageMain'>
        <h1>App Games</h1>

        <div className='listConteiner'>
          <h1>New Games</h1>
          {newGames.map((newGame, index) => {
            return <ListVerticalItem key={index} item={newGame} />;
          })}
        </div>

        <div className='cardConteiner'>
          {halloweenGames.map((halloweenGame, index) => {
            return <ListHorizontalItem key={index} item={halloweenGame} />;
          })}
        </div>

        <div className='listConteiner'>
          <h1>Early Access Games</h1>
          {earlyAccessGames.map((earlyAccessGame, index) => {
            return <ListVerticalItem key={index} item={earlyAccessGame} />;
          })}
        </div>

        <div className='cardConteiner'>
          {cheapGames.map((cheapGame, index) => {
            return <ListHorizontalItem key={index} item={cheapGame} />;
          })}
        </div>
      </main>
    </>
  );
}
