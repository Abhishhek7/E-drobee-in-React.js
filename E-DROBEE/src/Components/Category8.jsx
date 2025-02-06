import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const items = [
	{
		title: "New trends - Hair Grips",
		followers: "594190",
		imageUrl: [
			"https://cdn.easyfrontend.com/pictures/portfolio/portfolio17.jpg",
			"https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_1.png",
			"https://cdn.easyfrontend.com/pictures/portfolio/portfolio15.jpg",
		],
		price: "US $18.78",
	},
	{
		title: "Newest - Rolling Items",
		followers: "564356",
		imageUrl: [
			"https://cdn.easyfrontend.com/pictures/portfolio/portfolio3.jpg",
			"https://cdn.easyfrontend.com/pictures/portfolio/portfolio8.jpg",
			"https://cdn.easyfrontend.com/pictures/portfolio/portfolio19.jpg",
		],
		price: "US $15.99",
	},
	{
		title: "Trends - Mixed",
		followers: "34532",
		imageUrl: [
			"https://cdn.easyfrontend.com/pictures/portfolio/portfolio10.jpg",
			"https://cdn.easyfrontend.com/pictures/portfolio/portfolio12.jpg",
			"https://cdn.easyfrontend.com/pictures/portfolio/portfolio_1_2.png",
		],
		price: "US $28.79",
	},
	{
		title: "Popular - Watch List",
		followers: "567346",
		imageUrl: [
			"https://cdn.easyfrontend.com/pictures/portfolio/portfolio11.jpg",
			"https://cdn.easyfrontend.com/pictures/portfolio/portfolio5.jpg",
			"https://cdn.easyfrontend.com/pictures/portfolio/portfolio20.jpg",
		],
		price: "US $18.78",
	},
];

const ItemCard = ({ item, isTopTrending }) => {
	const { title, followers, imageUrl, price } = item;
	return (
		<div className="col-span-2 md:col-span-1">
			<Link to= "/cart">
				<div className="bg-white dark:bg-slate-800 shadow-xl rounded-md p-6 relative">
					{isTopTrending && (
						<div
							className="absolute top-16 lg:top-8 right-0 flex justify-center items-center bg-blue-600 bg-opacity-10 text-blue-600"
							style={{
								clipPath:
									"polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 5% 50%)",
							}}
						>
							<p className="text-sm mb-0 mx-4 py-1">Top Trending</p>
						</div>
					)}
					{!isTopTrending && (
						<div
							className="absolute top-16 lg:top-8 right-0 flex justify-center items-center bg-blue-500 bg-opacity-10 text-blue-500"
							style={{
								clipPath:
									"polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 5% 50%)",
							}}
						>
							<p className="text-sm mb-0 mx-4 py-1">Newest</p>
						</div>
					)}
					<div>
						<h4 className="text-2xl font-bold mb-2">{title}</h4>
						<p className="opacity-75">{followers} followers</p>
					</div>
					<div className="grid grid-cols-3 gap-6">
						{imageUrl.map((image, index) => (
							<div className="col-span-3 lg:col-span-1 mt-4" key={index}>
								<div className="relative">
									<div
										className="absolute top-0 left-8 w-8 h-10 flex justify-center items-center bg-blue-600 text-white"
										style={{
											clipPath:
												"polygon(100% 0, 100% 100%, 50% 85%, 0 100%, 0 0)",
										}}
									>
										<p className="mb-2 mx-4 py-1 text-lg">{index + 1}</p>
									</div>
									<div className="flex items-center justify-center h-full">
										<img
											src={image}
											alt=""
											className="max-w-full h-auto rounded-md"
										/>
									</div>
									<h5 className="text-lg font-bold text-center mt-2">
										{price}
									</h5>
								</div>
							</div>
						))}
					</div>
				</div>
			</Link>
		</div>
	);
};

ItemCard.propTypes = {
	item: PropTypes.object.isRequired,
	isTopTrending: PropTypes.number.isRequired,
};

const Epcategory8 = () => {
	return (
		<section className="md:py-8 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
			<div className="container  px-4 mx-auto">
				<h1 className="text-[32px] leading-tight font-bold mb-2">
					More Rankings
				</h1>
				<div className="grid grid-cols-2 gap-6 mt-8">
					{items.map((item, index) => (
						<ItemCard key={index} item={item} isTopTrending={index !== 2} />
					))}
				</div>
			</div>
		</section>
	);
};
export default Epcategory8;