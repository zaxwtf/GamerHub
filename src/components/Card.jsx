function Card({title, description}){
    return(
        <div className="rounded border border-black p-2 min-h-40 w-90">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Card