function CardUI(props){
    const width=100;
    return(
        <div className="card" style={{width:'200px'}}>
            <img src="/user.jpeg" width={width} class="card-img-top" style={{border:'10px solid #FF000',borderRadius:'50px'}}></img>
            <div className="card-body">
            {/* <p>{props.user.name}</p>
            <p>{props.user.branch}</p>
            <p>{props.user.studentNo}</p> */}
            <p>{props.userFromArray}</p>
            <button type="button" className="btn btn-primary">Connect</button>
        </div>
        </div>
    );
}
export default CardUI;