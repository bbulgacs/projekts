function uploadImage() {
    const fileInput = document.getElementById('imageInput');
    const file = fileInput.files[0];

    if (!file) {
        alert('Please select an image.');
        return;
    }

    const formData = new FormData();
    formData.append('image', file);

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Image uploaded:', data.imageUrl);
        displayImage(data.imageUrl);
    })
    .catch(error => {
        console.error('Error uploading image:', error);
    });
}

function displayImage(imageUrl) {
    const preview = document.getElementById('preview');
    const img = document.createElement('img');
    img.src = imageUrl;
    img.style.maxWidth = '400px'; // Adjust as needed
    preview.appendChild(img);
}

const express = require('express');
const multer = require('multer');
const path = require('path');

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

// Handle photo uploads
app.post('/upload', upload.single('photo'), (req, res) => {
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
