export default function Main(){
    const elements = [
        <div>
        1
        </div>,
        <div>
        2
        </div>
    ]  
    return(
        <>
        <div>
           {
            elements.map((elements, index)=>(
                {elements}
            ))} 
        </div>
        </>
    )
}