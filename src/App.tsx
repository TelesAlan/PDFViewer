import { useState } from "react";

import PDFReader from "Components/PDFReader";
const App = () => {
	const [file, setFile] = useState<File>();

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files)  setFile(e.target.files[0]);
	};

	return (
		<main className="container">
			<header>
				<h1>Visualizador de PDF</h1>
				<p>Faça o upload do seu PDF para poder visualizar</p>

				<hr />
			</header>

			<section>
				<input
					type="file"
					accept="application/pdf"
					onChange={handleFileChange}
				/>

				<strong>{file && `${file.name} - ${file.type}`}</strong>
			</section>

			<section>
				{file ? (
					<PDFReader
						DocumentProps={{ file }}
					/>
				) : <h3>Poxa :( parece que você ainda não selecionou nenhum arquivo</h3>
				}
			</section>
		</main>
	)
}

export default App;