import ChangeEvent, { useState, useEffect } from 'react';

const FileInput = ({
	inputProps,
	onChangeFile
}: {
	inputProps?: React.InputHTMLAttributes<HTMLInputElement>
	onChangeFile: (file?: File) => void
}) => {
	const [selectedFile, setSelectedFile] = useState<File>();

	const handleFileChange = (event: ChangeEvent.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files.length > 0) {
			setSelectedFile(event.target.files[0]);
		}
	};
	const handleRemoveFile = () => setSelectedFile(undefined);

	useEffect(() => {
		onChangeFile(selectedFile);
	}, [selectedFile]);

	return (
		<div>
			<label htmlFor="fileInput" className="drop-container">
				<span className="drop-title">Drop files here</span>
				or
				<input 
					type="file"
					id="fileInput"
					onChange={handleFileChange}
					{...inputProps}
				/>
			</label>
		</div>
	);
};

export default FileInput;