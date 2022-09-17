import React from 'react'

type DownloadIconProps = {
    label: string;
  }; 
  

const DownloadIcon = ({ label} : DownloadIconProps) => (
    <svg  xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <title id="download">{label}</title>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    />
  </svg>
)



export default DownloadIcon
