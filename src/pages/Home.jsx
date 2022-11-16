import Card from '../components/Card/Card';

function Home({items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorite, onAddToCart}) {
    return (
        <div className="content p-40">
       <div className="d-flex align-center justify-between mb-40">
       <h1>{searchValue ? `Search by reauest: "${searchValue}"` : 'All sneakers'}</h1>
       <div className="search-block d-flex">
        <img src="/img/search.svg" alt="Search"/>
        {searchValue && <img onClick={()=> setSearchValue('')} className="clear cu-p" src="/img/btn-remove.svg" alt="Remove"/>}
        <input onChange={onChangeSearchInput} value={searchValue} placeholder="Search..."></input>
       </div>
       </div>
        
        <div className="d-flex flex-wrap">

        
        {
          items.filter((item)=>item.title.toLowerCase().includes(searchValue)).map(value => (
          <Card 
           key={value.id}  
           onPlus={(obj)=> onAddToCart(obj)} 
           onFavorite={(obj)=> onAddToFavorite(obj)}
           {...value}
           />
           ))}
             
        
        </div>
      </div>
    );
}

export default Home;