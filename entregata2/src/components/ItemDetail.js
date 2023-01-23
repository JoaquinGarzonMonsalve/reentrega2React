import products from '../data/data.js';
import ItemCount from './ItemCount.js';



function ItemDetail({product}) {
	return (
		
		<div className='card'>
			<div>
            <div className='card-img'>
			<img className="" src={product.thumbnail} alt={product.title}/>
			</div>
            <h3>{product.title}</h3>
			</div>
			
			<div>
			<p>${product.price}</p>
			</div>
			<ItemCount stock={product.stock}/>
			
		</div>
		
	);
}

export default ItemDetail; 