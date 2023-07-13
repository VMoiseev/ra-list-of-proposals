import './App.css';
import Listing from './components/Listing';
import dataOfItems from './data/easy';

function App() {
  const data = dataOfItems().map((item) => (item));

  return (
    <div className="wrapper">
      <div className="item-list">
        {data.map((item) => (<Listing key={item.listing_id} items={item} />))}
      </div>
    </div>
  );
}

export default App;
