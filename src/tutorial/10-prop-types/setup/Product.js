import React from "react";
import PropTypes from "prop-types";

import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ image, name, price }) => {
	const url = image && image.url;
	return (
		<article className='product'>
			<img src={url || defaultImage} alt={name || "default name"} />
			<h4>{name || "default name"}</h4>
			<p>${price || 9999.99}</p>
		</article>
	);
};

// requirement for props
Product.propTypes = {
	image: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
};

// // set up default props if missed
// Product.defaultProps = {
// 	name: "defaut name",
// 	price: 999.99,
// 	image: defaultImage,
// };
export default Product;
