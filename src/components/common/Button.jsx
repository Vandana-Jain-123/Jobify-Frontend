export const Button=({lableName,className,buttonClick})=>{
    return(
        <>

        <button style={{fontSize:"20px"}} className={className} onClick={buttonClick}>{lableName}</button>
        </>
    )
}
