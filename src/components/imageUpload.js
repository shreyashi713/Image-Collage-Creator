import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button, Card, CloseButton } from "react-bootstrap";

const ImageUpload = ({ onUpload }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    const newImages = acceptedFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setSelectedImages((prev) => [...prev, ...newImages]);
    onUpload(acceptedFiles);
  }, [onUpload]);

  const removeImage = (index) => {
    const updatedImages = selectedImages.filter((_, i) => i !== index);
    setSelectedImages(updatedImages);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="image-container"> 
      <div className="upload-container text-center">
        {/* Choose Files Button */}
        <Button variant="primary" className="mt-3 choose-btn" onClick={() => document.querySelector("input").click()}>
          Choose Files
        </Button>

        {/* Drag & Drop Area */}
        <div {...getRootProps()} className="dropzone my-2">
          <input {...getInputProps()} />
          <p>{isDragActive ? "Drop the images here..." : "Drag & Drop your images here"}</p>
        </div>

        {/* Image Previews */}
        <div className="image-preview-container">
          {selectedImages.map((image, index) => (
            <Card key={index} className="image-card">
              <CloseButton className="remove-btn" onClick={() => removeImage(index)} />
              <Card.Img variant="top" src={image.preview} alt="Uploaded preview" />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
