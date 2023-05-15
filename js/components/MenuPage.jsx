// js/components/MainPage.jsx
import Image from 'next/image';
import {useEffect, useState} from "react";
import React from "react";
import Navbar from "@/js/utils/Navbar.js";


export default function MenuPage() {
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
				<h1 className={"w-[500px] mx-auto text-center mt-3 text-6xl font-bold text-blue-600"}>Our Menu</h1>
				
				<p className={"w-[1000px] mx-auto text-center mt-8  text-3xl text-blue-600"}>See the menu.</p>
				
			
			<div><Navbar/></div>
			<div className={"grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3"}>
					{
						records.map(record => (
							<div key={record._id}
								className={"max-w-sm p-6 bg-gradient-to-r from-gray-500 from-30% via-white-500 via-50% to-yellow-500 to-90% border border-gray-200 rounded-lg shadow "}
							>
								<h3 className={"mb-2 text-3xl font-bold text-gray-950"}>{record.nume}</h3>
								<h4 className={" font-bold text-blue-900 "}>{record.marime }</h4>
								<Image width={400} height={400} src={record.link}  
								></Image>

							</div>
						))
					}
				</div>
		</section>
	)
}