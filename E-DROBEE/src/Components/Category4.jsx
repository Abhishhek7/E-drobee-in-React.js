import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const products = [
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/product10.png",
		title: "Beauty",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/product5.png",
		title: "Furniture",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/product24.png",
		title: "School Product",
	},
	{
		img: "https://cdn.easyfrontend.com/pictures/ecommerce/product17.png",
		title: "Fashion",
	},
];

const Category = ({ product }) => {
	const containerStyle = {
		backgroundImage:
			"linear-gradient(180deg, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.4))",
	};
	return (
		<Link to="/showcard">
			<div className="bg-white dark:bg-slate-800 flex flex-col h-full relative z-20">
				<div
					className="absolute top-0 left-0 w-full h-full -z-10"
					style={containerStyle}
				></div>
				<div className="flex justify-center items-center p-6 h-full">
					<img
						src={product.img}
						alt="..."
						className="max-h-40 max-w-full w-auto"
					/>
				</div>
				<div className="text-center px-4 py-6">
					<h2 className="text-lg font-bold leading-none mb-2">
						{product.title}
					</h2>
				</div>
			</div>
		</Link>
	);
};

Category.propTypes = {
	product: PropTypes.object.isRequired,
};

const Epcategory4 = () => {
	return (
		<section className="ezy__epcategory4 light py-14 md:py-8  bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
			<div className="container px-4 mx-auto">
				<h2 className="text-2xl leading-none md:text-[40px] font-bold text-center">
					Product Category
				</h2>

				<div className="grid grid-cols-12 gap-6 text-center mt-6 md:mt-12">
					{products.map((product, i) => (
						<div className="col-span-12 sm:col-span-6 lg:col-span-3" key={i}>
							<Category product={product} />
						</div>
					))}
				</div>

				{/* button start  */}
				<div className="text-center mt-12">
				<Link to='/showcard'>	<button className="text-white font-bold py-3 px-11 bg-blue-600 hover:bg-opacity-90 rounded">
						See All
					</button>
					</Link>
				</div>
				{/* button end  */}
			</div>
		</section>
	);
};
export default Epcategory4;