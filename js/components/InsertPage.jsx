// js/components/MainPage.jsx
export default function InsertPage() {
	const insertRecord = async (e) => {
		e.preventDefault();

		const title = document.getElementById('title').value;
		const marime = document.getElementById('marime').value;
		const quantity = document.getElementById('qnty').value;
		const description = document.getElementById('description').value;
		const data = {
			nume: title,
			marime: marime,
			qty: quantity,
			contact: description
		};

		console.log(data);

		fetch("/api/orders", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then( () => {
				console.log("A records has been uploaded")
				document.getElementById('title').value = '';
				document.getElementById('description').value = '';
			})
	}

	return (
		<section className={"bg-black"}>

				<h1 className={"w-[500px] mx-auto mb-2 text-center text-6xl font-bold text-blue-600"}>Place order</h1>

				<p className={"w-[1000px] mx-auto text-center mt-4 text-3xl text-blue-600"}>This is where you can place your pizza order</p>
				
				<form>
						<div className="mb-2 mt-10 px-10 py-">
							<label htmlFor="email" className="font-bold  text-4xl block mb-2  font-large text-white dark:text-white">Pizza name</label>
							<input align="center"  type="text" id="title"
								className="bg-gray-50 border  text-4xl border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Your title" required/>
						</div>
						<div className="mb-6 px-10 py-5">
							<label htmlFor="number" className="font-bold  text-4xl  block mb-2 font-medium text-white dark:text-white">Size</label>
							<input align="center"  type="text" id="marime"
								className="bg-gray-50 border border-gray-300  text-4xl text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Marime" required/>
						</div>
						<div className="mb-6 px-10">
							<label htmlFor="number" className="font-bold  text-4xl  block mb-2 font-medium text-white dark:text-white">Quantity</label>
							<input align="center"  type="text" id="qnty"
								className="bg-gray-50 border border-gray-300  text-4xl text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Quantity" required/>
						</div>
						<div className="mb-10 px-10">
							<label htmlFor="description"
								className="block mb-2 font-bold  text-4xl  font-medium text-white dark:text-white">Your contact</label>
							<input type="text"align="center"  id="description"
									className="bg-gray-50 border text-4xl border-gray-300 text-gray-900 text-sm text-size-24 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Your contact"  required/>
						</div>
						<button type="submit "
								onClick={ insertRecord }
								className="text-white py-30 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-large rounded-lg  w-full text-2xl sm:w-auto px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit Order
						</button>
					</form>
				
		</section>
		
	)
}