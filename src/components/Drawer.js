function Drawer({onClose, onRemove, items = []}) {
    return (
        <div  className="overlay">
        <div className="drawer">
          <h2 className="mb-30 d-flex justify-between">Cart <img onClick={onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove"/></h2>

          <div className="items">
          
          {
            items.map((obj)=> (
              <div key={obj.id} className="cartItem d-flex align-center mb-20">
<div className="cartItemImg" style={{backgroundImage: `url(${obj.imageUrl})`}} ></div>
<div className="mr-20 flex">
  <p className="mb-5">{obj.title}</p>
  <b>{obj.price}</b>
</div>
<img onClick={()=> onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
</div>
            ))
          }

          </div>
          <div className="cartTotalBlock">
          <ul>
  <li>
    <span>Total</span>
    <div></div>
    <b>21 498 uah</b>
  </li>
  <li>
    <span>Tax 5%:</span>
    <div></div>
    <b>1074 uah.</b>
  </li>
</ul>
<button className="greenButton">Add order <img src="/img/arrow.svg" alt="arrow"/> </button>
</div>
        </div>
        </div>
    )
}

export default Drawer;