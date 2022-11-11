function Drawer() {
    return (
        <div style={{display: 'none'}} className="overlay">
        <div className="drawer">
          <h2 className="mb-30 d-flex justify-between">Cart <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove"/></h2>

          <div className="items">
          <div className="cartItem d-flex align-center mb-20">

<div className="cartItemImg" style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} ></div>


<div className="mr-20 flex">
  <p className="mb-5">Mens sneakers Nike Air Max 270</p>
  <b>12 999uah</b>
</div>
<img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
</div>

<div className="cartItem d-flex align-center mb-20">

<div className="cartItemImg" style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} ></div>


<div className="mr-20 flex">
<p className="mb-5">Mens sneakers Nike Air Max 270</p>
<b>12 999uah</b>
</div>
<img className="removeBtn" src="/img/btn-remove.svg" alt="Remove"/>
</div>
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