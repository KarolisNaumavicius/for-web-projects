const Card = ({ value }) => {
return (
    <div className='card'>
      <img src={value.img}/>
        <h3>{value.title}</h3>
        <h4>{value.content}</h4>
       
  </div>
);

}

export default Card