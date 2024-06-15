import './App.css';
import Header from './components/header';
import Main from './components/main';
import Card from './components/card';
import { data } from './Data';

console.log(data);
function App() {
  const cardElement = data.map( card => <Card
    key = {card.id} 
    img = {card.coverImg}
    rating = {card.stats.rating}
    reviewCount = {card.stats.reviewCount}
    country = {card.country}
    title = {card.title}
    price = {card.price}
    openSpots = {card.openSpots}
  />)

  return (
    <div className='app-content'>
      <Header />
      <Main />
      <section className="card-list">
        {cardElement}
      </section>
    </div>
  );
}

export default App;
