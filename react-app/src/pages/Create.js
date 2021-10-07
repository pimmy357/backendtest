import React from 'react'

function App() {
  
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-12 col-md-6 offset-md-3">
          <h2 className="my-4 text-center">CREATE</h2>
          <form action =" " method="post" >
            <div className="form-group">
              <label for="inputnamemenu">Menu</label>
              <input
                type="text"
                name = "mymenu"
              />
               <label for="inputnamenation">Nation</label>
              <input
                type="text"
                name = "nation"
              />
               <label for="inputnameingredients">Ingredients</label>
              <input
                type="text"
                name = "ingredients"
              />
               <label for="inputimgmenu">Image Menu</label>
              <input
                type="url"
                name = "imgmenu"
              />
            </div>       
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default App