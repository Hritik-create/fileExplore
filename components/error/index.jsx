import Message from '../message'

const Error = () => {
    return (
        <>
            {/* <h1>This page doesn't exist</h1> */}
            <Message message="This page doesn't exist!!" type='error'/>            
        </>
    )
}

export default Error;