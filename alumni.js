// Show selected file names in the photo upload area
const fileInput = document.getElementById('photo-file');
const fileNames = document.getElementById('file-names');

if (fileInput && fileNames) {
    fileInput.addEventListener('change', () => {
        const files = Array.from(fileInput.files);
        if (files.length === 0) {
            fileNames.textContent = '';
        } else if (files.length === 1) {
            fileNames.textContent = files[0].name;
        } else {
            fileNames.textContent = `${files.length} files selected`;
        }
    });
}
