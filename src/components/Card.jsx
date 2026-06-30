function Card({title, description}){
    return(
        <div className="rounded border border-black p-2 min-h-40 w-90 border-3">
            <h2 className="font-black text-center">{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Card