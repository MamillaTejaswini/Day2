function First(){
    const Array1=["AIML","IT","AIDS","CSE","CS"];
    return (
        <div>
            <h1>List of branches</h1>
            <ul>    
           
                {
                    Array1.map((branch,index) => <li key={index}>{branch}</li>)
                }

            </ul>
        </div>
    );
}
export default First;