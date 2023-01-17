import Head from "next/head";
import React from "react";
import Dashboard__LeftSideBar from "../../components/UserDashboard/Dashboard__LeftSideBar";
import Header from "../../components/Header";
const userDashboard = () => {
  return (
    <div>
      <Head>
        <title>User Dashobard</title>
      </Head>
      <Header />
      <main className="mt-24">
        <div className="nk-sidebar">
          <Dashboard__LeftSideBar />
        </div>

        <div className="content-body">
          <div className="container-fluid mt-3">
            <div className="row flex">
              <div className="w-2/4 md:w-1/2 lg:w-3/12 pl-4 pr-4">
                <div className="card gradient-1">
                  <div className="card-body">
                    <h3 className="card-title text-white">Products Sold</h3>
                    <div className="d-inline-block">
                      <h2 className="text-white">4565</h2>
                      <p className="text-white mb-0">Jan - March 2019</p>
                    </div>
                    <span className="float-right display-5 opacity-5">
                      <i className="fa fa-shopping-cart"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-2/4 md:w-1/2 lg:w-3/12 pl-4 pr-4">
                <div className="card gradient-2">
                  <div className="card-body">
                    <h3 className="card-title text-white">Net Profit</h3>
                    <div className="d-inline-block">
                      <h2 className="text-white">$ 8541</h2>
                      <p className="text-white mb-0">Jan - March 2019</p>
                    </div>
                    <span className="float-right display-5 opacity-5">
                      <i className="fa fa-money"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-2/4 md:w-1/2 lg:w-3/12 pl-4 pr-4">
                <div className="card gradient-3">
                  <div className="card-body">
                    <h3 className="card-title text-white">New Customers</h3>
                    <div className="d-inline-block">
                      <h2 className="text-white">4565</h2>
                      <p className="text-white mb-0">Jan - March 2019</p>
                    </div>
                    <span className="float-right display-5 opacity-5">
                      <i className="fa fa-users"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-2/4 md:w-1/2 lg:w-3/12 pl-4 pr-4">
                <div className="card gradient-4">
                  <div className="card-body">
                    <h3 className="card-title text-white">
                      Customer Satisfaction
                    </h3>
                    <div className="d-inline-block">
                      <h2 className="text-white">99%</h2>
                      <p className="text-white mb-0">Jan - March 2019</p>
                    </div>
                    <span className="float-right display-5 opacity-5">
                      <i className="fa fa-heart"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-12">
                    <div className="card">
                      <div className="card-body pb-0 d-flex justify-content-between">
                        <div>
                          <h4 className="mb-1">Product Sales</h4>
                          <p>Total Earnings of the Month</p>
                          <h3 className="m-0">$ 12,555</h3>
                        </div>
                        <div>
                          <ul>
                            <li className="d-inline-block mr-3">
                              <a className="text-dark" href="#">
                                Day
                              </a>
                            </li>
                            <li className="d-inline-block mr-3">
                              <a className="text-dark" href="#">
                                Week
                              </a>
                            </li>
                            <li className="d-inline-block">
                              <a className="text-dark" href="#">
                                Month
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="chart-wrapper">
                        <canvas id="chart_widget_2"></canvas>
                      </div>
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <div className="w-100 mr-2">
                            <h6>Pixel 2</h6>
                            <div className="progress" style={{ height: "6px" }}>
                              <div
                                className="progress-bar bg-danger"
                                style={{ width: "40%" }}
                              ></div>
                            </div>
                          </div>
                          <div className="ml-2 w-100">
                            <h6>iPhone X</h6>
                            <div className="progress" style={{ height: "6px" }}>
                              <div
                                className="progress-bar bg-primary"
                                style={{ width: "80%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="card card-widget">
                  <div className="card-body">
                    <h5 className="text-muted">Order Overview </h5>
                    <h2 className="mt-4">5680</h2>
                    <span>Total Revenue</span>
                    <div className="mt-4">
                      <h4>30</h4>
                      <h6>
                        Online Order <span className="pull-right">30%</span>
                      </h6>
                      <div className="progress mb-3" style={{ height: "7px" }}>
                        <div
                          className="progress-bar bg-primary"
                          style={{ width: "30%" }}
                          role="progressbar"
                        >
                          <span className="sr-only">30% Order</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4>50</h4>
                      <h6 className="m-t-10 text-muted">
                        Offline Order <span className="pull-right">50%</span>
                      </h6>
                      <div className="progress mb-3" style={{ height: "7px" }}>
                        <div
                          className="progress-bar bg-success"
                          style={{ width: "50%" }}
                          role="progressbar"
                        >
                          <span className="sr-only">50% Order</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <h4>20</h4>
                      <h6 className="m-t-10 text-muted">
                        Cash On Develery <span className="pull-right">20%</span>
                      </h6>
                      <div className="progress mb-3" style={{ height: "7px" }}>
                        <div
                          className="progress-bar bg-warning"
                          style={{ width: "20%" }}
                          role="progressbar"
                        >
                          <span className="sr-only">20% Order</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-body px-0">
                    <h4 className="card-title px-4 mb-3">Todo</h4>
                    <div className="todo-list">
                      <div className="tdl-holder">
                        <div className="tdl-content">
                          <ul id="todo_list">
                            <li>
                              <label>
                                <input type="checkbox" />
                                <i></i>
                                <span>Get up</span>
                                <a href="#" className="ti-trash"></a>
                              </label>
                            </li>
                            <li>
                              <label>
                                <input type="checkbox" />
                                <i></i>
                                <span>Stand up</span>
                                <a href="#" className="ti-trash"></a>
                              </label>
                            </li>
                            <li>
                              <label>
                                <input type="checkbox" />
                                <i></i>
                                <span>Don't give up the fight.</span>
                                <a href="#" className="ti-trash"></a>
                              </label>
                            </li>
                            <li>
                              <label>
                                <input type="checkbox" />
                                <i></i>
                                <span>Do something else</span>
                                <a href="#" className="ti-trash"></a>
                              </label>
                            </li>
                          </ul>
                        </div>
                        <div className="px-4">
                          <input
                            type="text"
                            className="tdl-new form-control"
                            placeholder="Write new item and hit 'Enter'..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="text-center">
                      <img
                        src="/assets/images/users/8.jpg"
                        className="rounded-circle"
                        alt=""
                      />
                      <h5 className="mt-3 mb-1">Ana Liem</h5>
                      <p className="m-0">Senior Manager</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="text-center">
                      <img
                        src="/assets/images/users/5.jpg"
                        className="rounded-circle"
                        alt=""
                      />
                      <h5 className="mt-3 mb-1">John Abraham</h5>
                      <p className="m-0">Store Manager</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="text-center">
                      <img
                        src="/assets/images/users/7.jpg"
                        className="rounded-circle"
                        alt=""
                      />
                      <h5 className="mt-3 mb-1">John Doe</h5>
                      <p className="m-0">Sales Man</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <div className="text-center">
                      <img
                        src="/assets/images/users/1.jpg"
                        className="rounded-circle"
                        alt=""
                      />
                      <h5 className="mt-3 mb-1">Mehedi Titas</h5>
                      <p className="m-0">Online Marketer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <div className="active-member">
                      <div className="table-responsive">
                        <table className="table table-xs mb-0">
                          <thead>
                            <tr>
                              <th>Customers</th>
                              <th>Product</th>
                              <th>Country</th>
                              <th>Status</th>
                              <th>Payment Method</th>
                              <th>Activity</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <img
                                  src="/assets/images/avatar/1.jpg"
                                  className=" rounded-circle mr-3"
                                  alt=""
                                />
                                Sarah Smith
                              </td>
                              <td>iPhone X</td>
                              <td>
                                <span>United States</span>
                              </td>
                              <td>
                                <div>
                                  <div
                                    className="progress"
                                    style={{ height: "6px" }}
                                  >
                                    <div
                                      className="progress-bar bg-success"
                                      style={{ width: "50%" }}
                                    ></div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <i className="fa fa-circle-o text-success  mr-2"></i>{" "}
                                Paid
                              </td>
                              <td>
                                <span>Last Login</span>
                                <span className="m-0 pl-3">10 sec ago</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="/assets/images/avatar/2.jpg"
                                  className=" rounded-circle mr-3"
                                  alt=""
                                />
                                Walter R.
                              </td>
                              <td>Pixel 2</td>
                              <td>
                                <span>Canada</span>
                              </td>
                              <td>
                                <div>
                                  <div
                                    className="progress"
                                    style={{ height: "6px" }}
                                  >
                                    <div
                                      className="progress-bar bg-success"
                                      style={{ width: "50%" }}
                                    ></div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <i className="fa fa-circle-o text-success  mr-2"></i>{" "}
                                Paid
                              </td>
                              <td>
                                <span>Last Login</span>
                                <span className="m-0 pl-3">50 sec ago</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="/assets/images/avatar/3.jpg"
                                  className=" rounded-circle mr-3"
                                  alt=""
                                />
                                Andrew D.
                              </td>
                              <td>OnePlus</td>
                              <td>
                                <span>Germany</span>
                              </td>
                              <td>
                                <div>
                                  <div
                                    className="progress"
                                    style={{ height: "6px" }}
                                  >
                                    <div
                                      className="progress-bar bg-warning"
                                      style={{ width: "50%" }}
                                    ></div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <i className="fa fa-circle-o text-warning  mr-2"></i>{" "}
                                Pending
                              </td>
                              <td>
                                <span>Last Login</span>
                                <span className="m-0 pl-3">10 sec ago</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="/assets/images/avatar/6.jpg"
                                  className=" rounded-circle mr-3"
                                  alt=""
                                />{" "}
                                Megan S.
                              </td>
                              <td>Galaxy</td>
                              <td>
                                <span>Japan</span>
                              </td>
                              <td>
                                <div>
                                  <div
                                    className="progress"
                                    style={{ height: "6px" }}
                                  >
                                    <div
                                      className="progress-bar bg-success"
                                      style={{ width: "50%" }}
                                    ></div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <i className="fa fa-circle-o text-success  mr-2"></i>{" "}
                                Paid
                              </td>
                              <td>
                                <span>Last Login</span>
                                <span className="m-0 pl-3">10 sec ago</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="/assets/images/avatar/4.jpg"
                                  className=" rounded-circle mr-3"
                                  alt=""
                                />{" "}
                                Doris R.
                              </td>
                              <td>Moto Z2</td>
                              <td>
                                <span>England</span>
                              </td>
                              <td>
                                <div>
                                  <div
                                    className="progress"
                                    style={{ height: "6px" }}
                                  >
                                    <div
                                      className="progress-bar bg-success"
                                      style={{ width: "50%" }}
                                    ></div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <i className="fa fa-circle-o text-success  mr-2"></i>{" "}
                                Paid
                              </td>
                              <td>
                                <span>Last Login</span>
                                <span className="m-0 pl-3">10 sec ago</span>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src="/assets/images/avatar/5.jpg"
                                  className=" rounded-circle mr-3"
                                  alt=""
                                />
                                Elizabeth W.
                              </td>
                              <td>Notebook Asus</td>
                              <td>
                                <span>China</span>
                              </td>
                              <td>
                                <div>
                                  <div
                                    className="progress"
                                    style={{ height: "6px" }}
                                  >
                                    <div
                                      className="progress-bar bg-warning"
                                      style={{ width: "50%" }}
                                    ></div>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <i className="fa fa-circle-o text-warning  mr-2"></i>{" "}
                                Pending
                              </td>
                              <td>
                                <span>Last Login</span>
                                <span className="m-0 pl-3">10 sec ago</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="card">
                  <div className="social-graph-wrapper widget-facebook">
                    <span className="s-icon">
                      <i className="fa fa-facebook"></i>
                    </span>
                  </div>
                  <div className="row">
                    <div className="col-6 border-right">
                      <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                        <h4 className="m-1">89k</h4>
                        <p className="m-0">Friends</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                        <h4 className="m-1">119k</h4>
                        <p className="m-0">Followers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card">
                  <div className="social-graph-wrapper widget-linkedin">
                    <span className="s-icon">
                      <i className="fa fa-linkedin"></i>
                    </span>
                  </div>
                  <div className="row">
                    <div className="col-6 border-right">
                      <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                        <h4 className="m-1">89k</h4>
                        <p className="m-0">Friends</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                        <h4 className="m-1">119k</h4>
                        <p className="m-0">Followers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card">
                  <div className="social-graph-wrapper widget-googleplus">
                    <span className="s-icon">
                      <i className="fa fa-google-plus"></i>
                    </span>
                  </div>
                  <div className="row">
                    <div className="col-6 border-right">
                      <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                        <h4 className="m-1">89k</h4>
                        <p className="m-0">Friends</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                        <h4 className="m-1">119k</h4>
                        <p className="m-0">Followers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="card">
                  <div className="social-graph-wrapper widget-twitter">
                    <span className="s-icon">
                      <i className="fa fa-twitter"></i>
                    </span>
                  </div>
                  <div className="row">
                    <div className="col-6 border-right">
                      <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                        <h4 className="m-1">89k</h4>
                        <p className="m-0">Friends</p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="pt-3 pb-3 pl-0 pr-0 text-center">
                        <h4 className="m-1">119k</h4>
                        <p className="m-0">Followers</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default userDashboard;
