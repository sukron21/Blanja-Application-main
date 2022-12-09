import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/blanja_icon.png';
import filter from '../assets/images/filter.png';
import style from '../assets/style/style.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const navigate = useNavigate();
  const [color, setColor] = useState('black');
  const [size, setSize] = useState(true);
  const [search, setSearch] = useState('');
  const [getProduct, setProduct] = useState([]);
  // const nameA = JSON.parse(localStorage.setItem(''));

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // if (search != '') {
    //   axios.get(`${process.env.REACT_APP_BACKEND_URL}/product/search/${search}`).then((res) => {
    //     setProduct(res.data);
    //     return navigate(`?search=${search}`);
    //   });
    // }

    localStorage.setItem('name', JSON.stringify(search));

    return navigate('/category');
  };

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg bg-light row">
        <div className="container-fluid col-md-10 col-11">
          <div className="d-flex col-md-2">
            <img src={logo} alt="" className="me-2" />
            <h3 className={`fontBold text-danger my-auto`}>Blanja</h3>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" ariacontrols="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* <ul className="mb-2 mb-lg-0 mt-md-0 mt-2 col-md-8 col-12 navbar-nav "> */}
            <ul className={`me-auto mb-2 mb-lg-0 mt-md-0 mt-2 col-md-6 col-12`}>
              <form onSubmit={(e) => onSubmitHandler(e)} action="" className={`d-flex`} role="search">
                <input onChange={(e) => setSearch(e.target.value)} className={`me-2 form-control col-md-10 ${style.navSearch}`} type="search" placeholder="Search" aria-label="Search" />
                <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <img src={filter} alt="" />
                </button>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Filter
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <div className="my-3">
                          <p className="fontBold">Color</p>
                          <div className="d-flex flex-row">
                            <div
                              onClick={() => {
                                setColor('black');
                              }}
                            >
                              {color === 'black' ? (
                                <div className={`me-2 ${style.colorActive}`}>
                                  <div className={`mx-auto ${style.blackActive}`}></div>
                                </div>
                              ) : (
                                <div className={`me-2 ${style.black}`}></div>
                              )}
                            </div>
                            <div onClick={() => setColor('red')}>
                              {color === 'red' ? (
                                <div className={`me-2 ${style.colorActive}`}>
                                  <div className={`mx-auto ${style.redActive}`}></div>
                                </div>
                              ) : (
                                <div className={`me-2 ${style.red}`}></div>
                              )}
                            </div>
                            <div onClick={() => setColor('blue')}>
                              {color === 'blue' ? (
                                <div className={`me-2 ${style.colorActive}`}>
                                  <div className={`mx-auto ${style.blueActive}`}></div>
                                </div>
                              ) : (
                                <div className={`me-2 ${style.blue}`}></div>
                              )}
                            </div>
                            <div onClick={() => setColor('green')}>
                              {color === 'green' ? (
                                <div className={`me-2 ${style.colorActive}`}>
                                  <div className={`mx-auto ${style.greenActive}`}></div>
                                </div>
                              ) : (
                                <div className={`me-2 ${style.green}`}></div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="my-3">
                          <p className="fontBold">Size</p>
                          <div className="d-flex flex-row">
                            <div className="btn btn-light btn-outline-dark me-2">XS</div>
                            <div className="btn btn-light btn-outline-dark me-2">S</div>
                            <div className="btn btn-light btn-outline-dark me-2">M</div>
                            <div className="btn btn-light btn-outline-dark me-2">L</div>
                            <div className="btn btn-light btn-outline-dark me-2">XL</div>
                          </div>
                        </div>
                        <div className="my-3">
                          <p className="fontBold">Category</p>
                          <div className="d-flex flex-row">
                            <div className="btn btn-light btn-outline-dark me-2">All</div>
                            <div className="btn btn-light btn-outline-dark me-2">Women</div>
                            <div className="btn btn-light btn-outline-dark me-2">Men</div>
                            <div className="btn btn-light btn-outline-dark me-2">Boys</div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </ul>
            <div className={`row col-md-5 col-12`}>
              <div className="col-md-6 col-12 mb-2">
                <Link to="/login">
                  <button className="btn btn-danger col-12">Login</button>
                </Link>
              </div>
              <div className="col-md-6 col-12">
                <Link to="/register">
                  <button className="btn btn-danger col-12">Register</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
