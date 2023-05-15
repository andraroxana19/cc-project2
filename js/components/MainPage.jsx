// js/components/MainPage.jsx
import Image from 'next/image';
import {useEffect, useState} from "react";
import React from "react";
import Navbar from "@/js/utils/Navbar.js";

import MyImage from "@/public/pizza1.jpg";
export default function MainPage() {
	const [records, setRecords] = useState([]);

	useEffect(() => {
		try{
			fetch('/api/records', {
				method: 'GET',
			})
				.then(response => response.json())
				.then(json => setRecords(json.data));
		}
		catch(e){
			console.log(e);
		}
	}, []);

	const deleteRecord = async (e) => {
		e.preventDefault();

		console.log(e.target.id);
		const id = e.target.id;

		try{
			fetch(`/api/records?id=${id}`, {
				method: 'DELETE',
			})
				.then(response => response.json())
				.then(json => {
					setRecords(records.filter(record => record._id !== id));
				});
		}
		catch(e){
			console.log(e);
		}
	}

	console.log(records);

	return (
		<section className={"bg-beige"}>
			<h1 className={"w-[500px] mx-auto text-center mt-3 text-6xl font-bold text-blue-600 padding-[100px]"}>Pizza Menu App</h1>
			<p className={"w-[1000px] mx-auto text-center mt-8 text-3xl text-blue-600"}>This is an app that showcases avalaible pizza for our restaurant.</p>
			<div><Navbar/></div>
			
			<div className={"container text-center text-3xl font-bold text-blue-100 padding-[100px]"}>
					<p>The history of pizza begins in antiquity, as various ancient cultures produced basic flatbreads with several toppings. 
						A precursor of pizza was probably the focaccia, a flatbread known to the Romans as panis focacius,
						 to which toppings were then added. Modern pizza evolved from similar flatbread dishes in Naples, Italy, in the 18th or early 19th century.</p>

						 <p>The word pizza was first documented in AD 997 in Gaeta and successively in different parts of Central and Southern Italy. 
						Pizza was mainly eaten in Italy and by emigrants from there. This changed after World War II 
						when Allied troops stationed in Italy came to enjoy pizza along with other Italian foods.</p>
					

				
			</div>
			<div className={"container"}>
			
			<Image src={"https://ottavio.ca/wp-content/uploads/2018/03/history-of-pizza.jpg"} width={500} height={500} 
				></Image>

			<Image src={"https://www.historytoday.com/sites/default/files/articles/pizza.jpg"} width={300} height={400} 
							></Image>
			</div>
			
		</section>
	)
}