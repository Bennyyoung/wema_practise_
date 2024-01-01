import React, { useState, useRef } from "react";
import CloudDownload from "components/Images/CloudDownload/CloudDownload";
import Button from "components/Button/Button";
import ClipIcon from "components/Images/ClipIcon/ClipIcon";

interface IFormField {
  label: string;
  name: string
  type: string
  value: string | null
  optionData?: {
    name: string;
    value: string;
  }[]
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormField: React.FC<IFormField> = ({ label, name, type, value, handleChange, optionData }) => {

  const [isDragging, setIsDragging] = useState(false);
  const [showDroppedFile, setShowDroppedFile] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);

    const files = e.dataTransfer.files;
    setShowDroppedFile(files[0].name)
    // Process dropped files, you can access them via `files` object
    console.log(files);
    console.log('isDragging', isDragging)
  };

  const handleButtonClick = (e: React.MouseEventHandler<HTMLButtonElement> | any) => {
    e.preventDefault()
    if (fileInputRef.current) {
      console.log('fileInputRef', fileInputRef)
      fileInputRef.current.click();
    }
  };

  const renderFormTag = () => {
    if (type === 'file') {
      return (
        <div
          style={{ border: '2px dashed #ccc', height: '204px', padding: '2rem 6rem' }}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            ref={fileInputRef}
            className="file-upload"
            name={name}
            type={type}
            // @ts-ignore 
            value={value}
            onChange={handleChange}
          />
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CloudDownload />


            {showDroppedFile ? (
              <div style={{ marginTop: '3rem' }}>
                {showDroppedFile}
              </div>
            ) : (<>
              <p>{isDragging ? 'Drop here' : 'Drag here or click the button below to upload'}</p>

              <Button
                onClick={(e) => handleButtonClick(e)}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >

                <ClipIcon />
                <p>
                  Choose File
                </p>
              </Button>
            </>)
            }
          </div>
        </div>
      )
    } else if (type === 'select') {
      return (
        <select style={{ height: '32px' }}>
          {
            optionData?.map((option: any) => (
              <option key={option.value} value={option.value}>{option.name}</option>
            ))
          }
        </select>
      )
    } else {
      return (
        <input
          style={{ height: '32px' }}
          name={name}
          type={type}
          // @ts-ignore 
          value={value}
          onChange={handleChange}
        />
      )
    }
  }

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', marginBottom: '2rem' }}
    >
      <label
        style={{ color: '#1A1619', fontWeight: '600', lineHeight: '16.94px', fontSize: '14px', marginBottom: '0rem' }}>{label}</label>
      {renderFormTag()}
    </div>
  )
}

export default FormField