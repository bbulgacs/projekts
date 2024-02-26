const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, Date.now() + ext);
    }
});

const upload = multer({ storage });

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Handle image uploads
app.post('/upload', upload.single('image'), (req, res) => {
    const imageUrl = `http://localhost:${PORT}/${req.file.path}`;
    res.json({ imageUrl });
});

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir);
}

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

function uploadPhoto() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    function uploadPhoto() {
        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];
    
        if (!file) {
            alert('Please select a file.');
            return;
        }
    
        const formData = new FormData();
        formData.append('photo', file);
    
        fetch('/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('Photo uploaded:', data.imageUrl);
            displayModal(data.imageUrl);
        })
        .catch(error => {
            console.error('Error uploading photo:', error);
        });
    }
    
    function displayModal(imageUrl) {
        const modal = document.getElementById('myModal');
        const modalImg = document.getElementById('uploadedPhoto');
        modal.style.display = "block";
        modalImg.src = imageUrl;
    }
    
    function closeModal() {
        const modal = document.getElementById('myModal');
        modal.style.display = "none";
    }
    