/* Página que permite listar los productos disponibles */

export default function ListProd(){
    return (
            
      <div className="bg-light" style={{marginTop:20, padding:20}}>

      <div className="h3">
        List of Products
      </div>

      <div className="table-responsive">
        


        <>
          <table className="table table-bordered table-hover" style={{marginTop:12}}>
              <thead className="text-center" style={{background:"lightgray"}}>
                  <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>X</th>
                      <th>X</th>
                      <th>X</th>
                      <th>X</th>
                  </tr>
              </thead>
              <tbody className="text-center align-baseline">
                  
              </tbody>
          </table>
        </> 
        
        

      </div>
   
    </div>

        

    )
}