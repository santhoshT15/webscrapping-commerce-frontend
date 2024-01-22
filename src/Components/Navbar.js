import React, { useContext } from "react";
import Context from "../Context";

function Navbar() {
    let productContext = useContext(Context);

    const handleSubmit = (value) => {
        productContext.setSearch(value);
        console.log(productContext.search);
    };


    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 ">
                <div className="site-logo">ST</div>
                <div className="container py-1 px-4 px-lg-4">
                    <a className="navbar-brand" href="#!">Web Scrapping Ecommerce Site</a>
                    <button
                        className='navbar-toggler'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#navbarSupportedContent'
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form 
                            className="mx-auto"
                            onSubmit={(event) => {
                                event.preventDefault();
                            }}>
                            <div className='input-group'> 
                                <button className='btn btn-warning searchBtn' type='submit'>
                                    <i className='fa fa-search fa-lg' aria-hidden='true'></i>
                                </button>
                                <input
                                    type={'search'}
                                    className='form-control fw-bold searchBox'
                                    placeholder='Search Your mobile brand...'
                                    value={productContext.search}
                                    onChange={(e) => {
                                    handleSubmit(e.target.value);
                                    }}
                                />
                            </div>
                        </form>
                    </div>

 
                </div>

            </nav>
        </>
    );
};

export default Navbar;