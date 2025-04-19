#!/bin/bash

# Create directories if they don't exist
mkdir -p public/images

# Download the main image
echo "Downloading main article image..."
curl -o public/images/Photo2025-04-17_09-15-38-AM.jpg https://www.qcharity.org/Exportpath/WebStoryNews/2025/4/0-Photo2025-04-17_09-15-38-AM.jpg

# Make the script executable
chmod +x ./download_images.sh

echo "Images downloaded successfully to public/images folder"