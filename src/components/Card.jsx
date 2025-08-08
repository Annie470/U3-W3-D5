const Card =(props)=> {
return (
    <>
    <img className="rounded w-100" src={props.img} alt="album" />
    <p className="text-light d-inline-block me-3">{props.title}</p>
    <p className="d-inline-block">{props.icon}</p>
{/* avrei potuto  fare un div coon sfondo bianco etc.. o cercare un icona...but no time */}
    </>
)
}
export default Card