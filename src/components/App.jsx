import React from "react";
import "../index.css";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../note.js";

function App() {
	return (
		<div className="">
			<Header />
			{notes.map((note) => (
				<Note key={note.id} heading={note.title} content={note.content} />
			))}

			<Footer />
		</div>
	);
}

export default App;
