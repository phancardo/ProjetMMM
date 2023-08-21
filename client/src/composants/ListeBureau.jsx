import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './Footer'
import Header from './Header'
function ListeBureau() {
  
  return (
    <>
    <Header></Header>
    <h4 style={{
        marginTop:20,
        marginBottom:20,
        marginLeft:20
    }}> Liste des membres du Bureau Region : Analamanga </h4>

    <div className='row' >

        <div className='col-md-8 mx-auto'>
        <table className='table table-bordered    table-hover '>   
        <thead>
            <tr>
                <td className="mb-3 text-center" style={{
                            color:'Black'
                        }}><strong>Nom</strong></td>
                <td className="mb-3 text-center" style={{
                            color:'Black'
                        }}><strong>Prenom</strong></td>
                <td className="mb-3 text-center" style={{
                            color:'Black'
                        }}><strong> Poste</strong></td>
                <td className="mb-3 text-center" style={{
                            color:'Black'
                        }}><strong>Telephone</strong></td>
                <td className="mb-3 text-center" style={{
                            color:'Black'
                        }}><strong>Adresse</strong></td>
                <td className="mb-3 text-center" style={{
                            color:'Black'
                        }}><strong>Email</strong></td>
                
            </tr>
        </thead>
        <tbody>            
            <tr>
                <td  style={{
                    color:'Black'
                }}>Razafy</td>
                <td  style={{
                    color:'Black'
                }}>tolotra</td>
                
               <td> President</td>
               <td> 032 02 021 01</td>
               <td> IVe 102</td>
               <td> Razafy@gmail.com</td>
            

                
            </tr>
            <tr>
                <td  style={{
                    color:'Black'
                }}>Razafy</td>
                <td  style={{
                    color:'Black'
                }}>tolotra</td>
                
               <td> Vice President</td>
               <td> 032 02 021 01</td>
               <td> IVe 102</td>
               <td> Razafy@gmail.com</td>
            

                
            </tr>
            <tr>
                <td  style={{
                    color:'Black'
                }}>Razafy</td>
                <td  style={{
                    color:'Black'
                }}>tolotra</td>
                
               <td> Secretaire</td>
               <td> 032 02 021 01</td>
               <td> IVe 102</td>
               <td> Razafy@gmail.com</td>
            

                
            </tr>  
                            
        </tbody>
    </table>
        </div>
    
    </div>
    
    <Footer></Footer>  
    </>
  )
}

export default ListeBureau

