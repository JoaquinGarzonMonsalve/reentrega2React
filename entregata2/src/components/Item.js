import MyButton from './MyButton.js';
import './estilos/Item.css';
import {Link} from 'react-router-dom';


function Item({title,imgurl,price,id, }) {

	const urlDetail = `/detail/${id}`;

	return (
		<div className='card'>
			<div>
				<h3>{title}</h3>
			</div>
			<div className='card-img'>
				<img className="imagenes" src={imgurl} alt={title} />
			</div>
			<div>
				<p>${price}</p>
				<Link to={urlDetail}><MyButton /></Link>
			</div>
			


		</div> 
		
	);
}

export default Item; 