import './preview.css'

import { useEffect, useState } from 'react';
import FileViewer from 'react-file-viewer';
import Message from '../message'

const Preview = (props) => {
    // const file =
    //     "https://cats-server-dev-route-cats-dev.apps.kw.projectinnovate.sg/v1/uploads/jobs/files/1624940011295_Sample_JD_1.docx";

    // const[file,setFile]=useState();

    
        
    // const type = "docx";

    // const onError = (e) => {
    //     console.log(e, "error in file-viewer");
    // };

    let extension = props.preview.name.split('.').pop().toLowerCase();

    useEffect(()=>{
        // function fetchpdf(){
        //     fetch('https://cats-server-dev-route-cats-dev.apps.kw.projectinnovate.sg/v1/uploads/jobs/files/1624940011295_Sample_JD_1.docx', {
        //         mode: 'cors' 
        //       })
        //       .then(response => response.blob())
        //       .then(data => {
        //         // handle the file
        //         console.log('response',data)
        //         setFile(data)    
        //       })
        //       .catch(error => console.error('Error:', error));
        // }

        // fetchpdf();
        console.log('file name',props.preview.name)

        {props.preview && console.log('file extension',props.preview.name.split('.')[1])}
    },[props])

    if(extension==='html'){
        return(
            <>
            <div className='container preview-container'>
                
                <div className='row header-row'>
                    <h3>📄{props.preview.name}</h3>
                </div>


                <div className="row">
                    
                    {/* <iframe 
                        src="https://www.buoyantcap.com" 
                        title="Buoyant Capital" 
                        className='preview-frame'
                    ></iframe> */}

                    <embed
                        type="text/html" 
                        src="https://www.buoyantcap.com" 
                        className='preview-frame'
                    ></embed>
                
                
                </div>

                {/* <button onClick={()=>{console.log(props)}}></button> */}
                {/* <FileViewer
                    fileType={type}
                    filePath={file}
                    onError={onError} 
                /> */}
            </div>
        </>
        )
    }

    if(extension==='png' || extension==='jpg' || extension==='jpeg'){
        return(
            <div className='container preview-container'>
                <div className='row header-row'>
                    <h3>📄{props.preview.name}</h3>
                </div>

                <div className="row">
                    {/* <img  src="https://investor.buoyantcap.com/assets/img/logo.png" className='preview-frame' /> */}
                    /home/user/Desktop/{props.absPath} <br/>
                    /home/user/Desktop/temp/{props.preview.name}
                    {/* <img  src={`/home/user/Desktop/temp/${props.preview.name}`} className='preview-frame' /> */}
                    <img  src='/home/user/Desktop/temp/Pasted image.jpg' className='preview-frame' />
                    


                </div>
            </div>
        )
    }

    return (
        <>
            <div>
                <Message message="File format is not supportable!!" type='info' />
                {/* {props.absPath} */}
            </div>
        </>
    );
};

export default Preview;


 