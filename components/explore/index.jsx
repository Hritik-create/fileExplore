import './explore.css';
import fileData from '../fileData';
import { useEffect, useState } from 'react';
import Preview from '../preview';
import Loading from '../loading';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addData } from '../../util/dataSlice';
import { setAvailability } from '../../util/dataSlice';

const Explore = () => {
    const [absolutePath, setAbsolutePath] = useState('root');
    const [expanded, setExpanded] = useState([]);
    const [preview, setPreview] = useState();
    const [loading, setLoading] = useState(false);
    const [previewPath,setPreviewPath] = useState('');

    const dispatch = useDispatch()

    function toggleExpand(directoryPath) {
        let newExpanded;

        if (expanded.includes(directoryPath)) {
            newExpanded = collapseFolderAndFiles(directoryPath, expanded);
            if (absolutePath === directoryPath) {
                const parentFolder = findParentFolder(fileData, directoryPath, 'root'); 
                setAbsolutePath(parentFolder);
            }
        } else {
            newExpanded = [...expanded, directoryPath];
            setAbsolutePath(directoryPath); 
        }

        setExpanded(newExpanded);
    }

    function collapseFolderAndFiles(directoryPath, expandedList) {
        const directoryNode = findFolderByPath(fileData, directoryPath); 
        const descendants = getAllDescendants(directoryNode);

        return expandedList.filter(path => !descendants.includes(path) && path !== directoryPath);
    }

    function getAllDescendants(directory) {
        if (!directory || directory.type !== 'directory') return [];
        const descendants = directory.children
            .filter(child => child.type === 'directory')
            .map(child => [child.path, ...getAllDescendants(child)]);
        return descendants.flat();
    }

    function findFolderByPath(data, path, currentPath = 'root') {
        const currentFullPath = currentPath === 'root' ? data.name : `${currentPath}/${data.name}`;
        if (currentFullPath === path) return data;
        if (data.type === 'directory') {
            for (const child of data.children) {
                const result = findFolderByPath(child, path, currentFullPath);
                if (result) return result;
            }
        }
        return null;
    }

    function findParentFolder(data, directoryPath, parentPath = 'root') {
        const currentFullPath = parentPath === 'root' ? data.name : `${parentPath}/${data.name}`;
        if (currentFullPath === directoryPath) return parentPath;
        if (data.type === 'directory') {
            for (const child of data.children) {
                const result = findParentFolder(child, directoryPath, currentFullPath);
                if (result) return result;
            }
        }
        return null;
    }

    function handleFileClick(fileName,path) {
        setPreview(fileName);
        setPreviewPath(path);
    }

    function renderFolderExplorer(data, currentPath = 'root') {
        // console.log(data.name)
        const fullPath = currentPath === 'root' ? data.name : `${currentPath}/${data.name}`;
        if (data.type === 'file') {
            return (
                <li key={fullPath}>
                    <div onClick={() => handleFileClick(data,fullPath)}>📄{data.name}</div>
                </li>
            );
        }

        if (data.type === 'directory') {
            const isExpanded = expanded.includes(fullPath);

            return (
                <li className='directory-li' key={fullPath}>
                    <div  onClick={() => toggleExpand(fullPath)}>
                        {isExpanded ? '📂' : '📁'} <strong>{data.name}</strong> 
                    </div>
                    {isExpanded && (
                        <ul className="directory-ul">
                            {data.children.map((child) => renderFolderExplorer(child, fullPath))}
                        </ul>
                    )}
                </li>
            );
        }
    }

    // function renderFolderPreview() {
    //     const focusedNode = findFolderByPath(fileData, absolutePath);
    //     if (!focusedNode || focusedNode.type !== 'directory') return null;

    //     return (
    //         <ul>
    //             {focusedNode.children.map((child) => (
    //                 <li className='focused-col' key={child.path}>
    //                     {child.type === 'directory' ? (
    //                         <strong>{child.name}</strong> 
    //                     ) : (
    //                         <>
    //                             {getFileNameWithoutExtension(child.name)}
    //                             {" "}
    //                             {getFileExtension(child.name)}
    //                             {" "}
    //                             {child.size}
    //                         </>
    //                     )}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    // const getFileNameWithoutExtension = (fileName) => {
    //     const parts = fileName.split('.');
    //     return parts.slice(0, -1).join('.');
    // };

    // const getFileExtension = (fileName) => {
    //     const parts = fileName.split('.');
    //     return parts.slice(-1).join('.');
    // };


    function searchFileSystem(data, searchTerm, currentPath = 'root') {
        console.log('search term',searchTerm)

        const fullPath = currentPath === 'root' ? data.name : `${currentPath}/${data.name}`;
        const lowerCaseSearchTerm = searchTerm.toLowerCase();

        if (data.name.toLowerCase().includes(lowerCaseSearchTerm)) {
            return [{ ...data, fullPath }];
        }

        if (data.type === 'directory') {
            const matchingChildren = data.children.flatMap(child =>
                searchFileSystem(child, searchTerm, fullPath)
            );
            return matchingChildren.length > 0 ? [{ ...data, fullPath, children: matchingChildren }] : [];
        }

        return [];
    }

    function renderSearchedFolder(results){
        // let res = searchFileSystem(fileData,searchTerm);
        
        // return renderFolderExplorer(res)
        
        // console.log('results',res[0].children[0]);

        // return (
        //     // <li>
        //     //     {explorerSearch}
        //     // </li>

        //     <li className='directory-li' key={fullPath}>
        //     <div  onClick={() => toggleExpand(fullPath)}>
        //         {isExpanded ? '📂' : '📁'} <strong>{data.name}</strong> 
        //     </div>
        //     {isExpanded && (
        //         <ul className="directory-ul">
        //             {data.children.map((child) => renderFolderExplorer(child, fullPath))}
        //         </ul>
        //     )}
        //     </li>

        // )

        // console.log(results);

        return results.map(item => {
            if (item.type === 'file') {
                return (
                    <li key={item.fullPath}>
                        <div onClick={() => handleFileClick(item)}>📄 {item.name}</div>
                    </li>
                );
            }
            if (item.type === 'directory') {
                return (
                    <li key={item.fullPath} className='directory-li'>
                        <div onClick={() => toggleExpand(item.fullPath)}>
                            📁 <strong>{item.name}</strong>
                        </div>
                        {expanded.includes(item.fullPath) && item.children && (
                            <ul className="directory-ul">
                                {renderSearchedFolder(item.children)}
                            </ul>
                        )}
                    </li>
                );
            }
            return null;
        });
    }

    const [explorerSearch,setExplorerSearch] = useState('')
    const searchedResults = explorerSearch === '' ? [] : searchFileSystem(fileData, explorerSearch);

    const dataAvailability = useSelector((store)=>store.data.availability)
    const files = useSelector((store) => dataAvailability ? store.data.fileData : null);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const fetchResponse = await axios.get(`http://localhost:8080/directory-structure`);
                dispatch(addData(fetchResponse.data));
                if (fetchResponse.status === 200) {
                    dispatch(setAvailability(true));
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error.message);
                setLoading(false);
            }
        };
        fetchData();
    }, []);


    if(loading){
        return <Loading />
    }

    return (
        <div className="container explore-container">
            <div className="row">
                
                <div className="col col-lg-4 explore-col">
                    <div>
                    <input 
                        className='form-control explorerSearch'
                        name='explorerSearch'
                        type='text'
                        placeholder='Search'
                        onChange={(e)=>setExplorerSearch(e.target.value)}    
                    /> 
                    <button onClick={()=>{console.log(files)}}>Click</button>
                        {
                        explorerSearch===''?
                        <ul>{files && renderFolderExplorer(files)}</ul>
                        :
                        <ul>{renderSearchedFolder(searchedResults)}</ul>
                        }
                       

                    </div>
                </div>
                <div className="col col-lg-8">
                    {preview && <><Preview preview={preview} absPath={previewPath}/></>}    
                </div>
            </div>
        </div>
    );
};

export default Explore;


///changed all occurence of folder to directory