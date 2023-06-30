import { useState } from "react";

import FileInput from "Components/FileInput";
import PDFReader from "Components/PDFReader";
const App = () => {
	const [file, setFile] = useState<File>();

	const onChangeFile = (file?: File) => setFile(file);

	return (
		<main className="container">
			<header>
				<h1>Visualizador de PDF</h1>
				<p>Carregue seu arquivo PDF e aproveite a visualização!</p>

				<hr />
			</header>

			<section>
				<FileInput
					inputProps={{
						accept: "application/pdf"
					}}
					onChangeFile={onChangeFile}
				/>
			</section>

			<section>
				{file && (
					<PDFReader
						DocumentProps={{ file }}
					/>
				)}
			</section>
		</main>
	)
}

export default App;