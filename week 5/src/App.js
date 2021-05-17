import React, { Component, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  Redirect,
  withRouter,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToChart,
  deleteProductCart,
  editJumlahProduct,
} from "./Components/listCartReducer";

function MarketPlace() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" to="/home">
            Shopping Website
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/home">
                  Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/product">
                  Product
                </Link>
              </li>
             
            </ul>
            <div className="d-flex" style={{ height: 35 }}>
              <AuthButton />
            </div>
          </div>
        </div>
      </nav>

      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/product" component={Product} />
       
      </Switch>
    </Router>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

const AuthButton = withRouter(({ history }) => {
  return fakeAuth.isAuthenticated ? (
    <button
      className="btn btn-sm btn-success"
      onClick={() => {
        fakeAuth.signout(() => history.push("/home"));
      }}
    >
      <p>Sign out</p>
    </button>
  ) : (

    <p class="text-white bg-dark">You are not Log in!</p>
  );
});


function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        fakeAuth.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

function Home() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-9">
          <div
            id="carouselExampleIndicators"
            className="carousel slide my-4"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner" role="listbox">
             <h2>HAPPY SHOPPING</h2>
              
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Product() {
  let { path } = useRouteMatch();
  const dispatch = useDispatch();
  const listProduct = useSelector((state) => state.listProduct);

  const _renderCardProduct = (product) => {
    const { img, nama, harga, desc, id, category } = product;
    return (
      <div
        className="col-lg-4 col-md-6 mb-4"
        onClick={() => {
          alert("your product is added");
          dispatch(addProductToChart(product));
        }}
      >
        <div className="card h-100">
          <div className="card-body">
            <img src = {img} width={150} height={150}></img>
             <h4 className="card-title">
              <a>{nama}</a>
            </h4>
            <h5>IDR {harga}</h5>
          </div> 
          
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <h1 className="my-4">Product Menu</h1>
          <div className="list-group">
            <ul>
              <li className="list-groups-flush">
                <Link to={`/product/NSG`}>Novels</Link>
              </li>
              <li className="list-group-item-flush">
                <Link to={`/product/OSM`}>Stationery</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-9">
          <Switch>
            <Route exact path={`/product/NSG`}>
              <br />
              <div className="container">
                <div className="row">
                  {listProduct
                    .filter(
                      (product) => product.category === "Novels"
                    )
                    .map((param) => {
                      return _renderCardProduct(param);
                    })}
                </div>
              </div>
            </Route>
            <Route exact path={`/product/OSM`}>
              <br />
              <div className="container">
                <div className="row">
                  {listProduct
                    .filter(
                      (product) => product.category === "Stationery"
                    )
                    .map(_renderCardProduct)}
                </div>
              </div>
            </Route>
            <Route exact path={path}></Route>
            <Route exact path={path}></Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

function Cart() {
  const dispatch = useDispatch();
  const listCart = useSelector((state) => state.listCart);

  const _renderCartCell = (product, index) => {
    const { nama, harga, desc, id, category, jumlah } = product;
    return (
      <tr>
        {/* <td>{img}</td> */}
        <td>{nama}</td>
        <td>In Stock</td>
        <td>
          <input
            className="form-control"
            type="text"
            value={jumlah}
            onChange={(event) => {
              dispatch(
                editJumlahProduct({ index, jumlah: event.target.value })
              );
            }}
          />
        </td>
        <td className="text-right">Rp {harga}</td>
        <td className="text-right">Rp {harga * jumlah}</td>
        <td className="text-right">
          <button
            className="btn btn-sm btn-danger"
            onClick={() => {
              dispatch(deleteProductCart(index));
            }}
          >
            Hapus
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="container">
      <h1 className="my-4">Cart</h1>
      <div className="row">
        <div className="col-12">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col"> </th>
                  <th scope="col">Product</th>
                  <th scope="col">Available</th>
                  <th scope="col" className="text-center">
                    Quantity
                  </th>
                  <th scope="col" className="text-right">
                    Price
                  </th>
                  <th scope="col" className="text-right">
                    Total Price
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {listCart.map((productCart, index) => {
                  return _renderCartCell(productCart, index);
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

class Login extends Component {
  state = { redirectToReferrer: false };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/home" },
    };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div className="Login">
        <footer className="py-5 by-dark">
          <div className="container">
            <p className="m-0 text-center text-while">Please Login First</p>
          </div>
          <button className="btn btn-success" onClick={this.login}>
            Click to Login{" "}
          </button>
        </footer>
      </div>
    );
  }
}

export default MarketPlace;
