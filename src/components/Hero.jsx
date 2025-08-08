const Hero =(props)=> {
return( <>
<p className="m-0">NUOVA STAZIONE RADIO</p>
<p className="mb-2 ">{props.subtitle}</p>
<img className="w-100 rounded" src={props.img} alt="RadioPlaylist" />
</>)
}
export default Hero