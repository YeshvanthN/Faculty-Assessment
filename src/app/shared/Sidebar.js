import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse, Dropdown } from 'react-bootstrap';
import { Trans } from 'react-i18next';

class Sidebar extends Component {

  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true}); 
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/apps', state: 'appsMenuOpen'},
      {path:'/teaching', state: 'teachingMenuOpen'},
      {path:'/services', state: 'servicesMenuOpen'},
      {path:'/form-elements', state: 'formElementsMenuOpen'},
      {path:'/tables', state: 'tablesMenuOpen'},
      {path:'/icons', state: 'iconsMenuOpen'},
      {path:'/charts', state: 'chartsMenuOpen'},
      {path:'/user-pages', state: 'userPagesMenuOpen'},
      {path:'/error-pages', state: 'errorPagesMenuOpen'},
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));
 
  }

  render () {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
          
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top" ></div>
        <ul className="nav">
          <li className="nav-item profile">
            <div className="profile-desc">
              <div className="profile-pic">
                <div className="count-indicator">
                  {/* <img className="img-xs rounded-circle " src={""} alt="" /> */}
                  <span className="menu-icon">
                    <i className="mdi mdi-account-circle"></i>
                  </span>
                  {/* <span className="count bg-success"></span> */}
                </div>
                <div className="profile-name">
                  <h5 className="mb-0 font-weight-normal"><Trans>Teacher 1</Trans></h5>
                  <span>Professor</span>
                </div>
              </div>
              <Dropdown alignRight>
                <Dropdown.Toggle as="a" className="cursor-pointer no-caret">
                  <i className="mdi text-white mdi-dots-vertical"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu className="sidebar-dropdown preview-list">
                  <a href="!#" className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-secondary rounded-circle">
                        <i className="mdi mdi-settings text-primary"></i>
                      </div>
                    </div>
                    <div className="preview-item-content ">
                      <p className="preview-subject text-primary ellipsis mb-1 text-small"><Trans>Account settings</Trans></p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  <a href="!#" className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-secondary rounded-circle">
                        <i className="mdi mdi-onepassword  text-info"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject text-info ellipsis mb-1 text-small"><Trans>Change Password</Trans></p>
                    </div>
                  </a>
                  <div className="dropdown-divider"></div>
                  {/* <a href="!#" className="dropdown-item preview-item" onClick={evt =>evt.preventDefault()}>
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-dark rounded-circle">
                        <i className="mdi mdi-calendar-today text-success"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <p className="preview-subject ellipsis mb-1 text-small"><Trans>To-do list</Trans></p>
                    </div>
                  </a> */}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </li>
          <li className="nav-item nav-category">
            <span className="nav-link"><Trans>Navigation</Trans></span>
          </li>
          <li className={ this.isPathActive('/dashboard') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <Link className="nav-link" to="/dashboard">
              <span className="menu-icon"><i className="mdi mdi-speedometer"></i></span>
              <span className="menu-title"><Trans>Dashboard</Trans></span>
            </Link>
          </li>
          
          <li className={ this.isPathActive('/teaching') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <div className={ this.state.teachingMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('teachingMenuOpen') } data-toggle="collapse">
              <span className="menu-icon">
              <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="-200 0 1080 512"><path fill="#f5f5f5" d="M608 0H192c-17.67 0-32 14.33-32 32v96c-53.02 0-96 42.98-96 96s42.98 96 96 96 96-42.98 96-96c0-41.74-26.8-76.9-64-90.12V32h416v352h-64v-64c0-17.67-14.33-32-32-32H384c-17.67 0-32 14.33-32 32v64h-46.66c-.59-.94-1.03-1.96-1.65-2.88-17.25-25.62-46.67-39.11-76.9-39.11C199 342.02 192.02 352 160 352c-31.97 0-38.95-9.98-66.79-9.98-30.23 0-59.65 13.48-76.9 39.11C6.01 396.42 0 414.84 0 434.67V472c0 22.09 17.91 40 40 40h240c22.09 0 40-17.91 40-40v-37.33c0-6.41-.84-12.6-2.04-18.67H608c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32zM224 224c0 35.29-28.71 64-64 64s-64-28.71-64-64 28.71-64 64-64 64 28.71 64 64zm64 248c0 4.41-3.59 8-8 8H40c-4.41 0-8-3.59-8-8v-37.33c0-12.79 3.75-25.13 10.85-35.67 10.53-15.64 29.35-24.98 50.36-24.98 21.8 0 29.99 9.98 66.79 9.98 36.79 0 45.01-9.98 66.79-9.98 21 0 39.83 9.34 50.36 24.98 7.1 10.54 10.85 22.88 10.85 35.67V472zm224-88H384v-64h128v64z"></path></svg>
                {/* <i className=""></i> */}
              </span>
              <span className="menu-title"><Trans>Teaching</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.teachingMenuOpen }>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <Link className={ this.isPathActive('/teaching/theory') ? 'nav-link active' : 'nav-link' } to="/teaching/theory"><i className="mdi mdi-book-multiple mr-3"></i><Trans>Theory</Trans></Link>
                  </li>
                  <li className="nav-item">
                    {/* <span className="icon"> */}
                      
                    {/* </span> */}
                    <Link className={ this.isPathActive('/teaching/lab') ? 'nav-link active' : 'nav-link' } to="/teaching/lab"><i className="mdi mdi-flask-outline mr-3"></i><Trans>Lab</Trans></Link></li>
                  {/* <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/typography') ? 'nav-link active' : 'nav-link' } to="/basic-ui/typography"><Trans>Typography</Trans></Link></li> */}
                </ul>
              </div>
            </Collapse>
          </li>
          <li className={ this.isPathActive('/services') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <div className={ this.state.servicesMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('servicesMenuOpen') } data-toggle="collapse">
              <span className="menu-icon">
              <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 1080 512"><path fill="white" d="M628.3 358.3l-16.5-9.5c.8-8.5.8-17.1 0-25.6l16.6-9.5c9.5-5.5 13.8-16.7 10.5-27-7.2-23.4-19.9-45.4-36.7-63.5-7.4-8.1-19.3-9.9-28.7-4.4l-16.5 9.5c-7-5-14.4-9.3-22.2-12.8v-19c0-11-7.5-20.3-18.2-22.7-23.9-5.4-49.3-5.4-73.2 0-10.7 2.4-18.2 11.8-18.2 22.7v19c-7.8 3.5-15.2 7.8-22.2 12.8l-16.5-9.5c-9.5-5.5-21.3-3.7-28.7 4.4-16.7 18.1-29.4 40.1-36.7 63.4-3.3 10.4 1.2 21.8 10.6 27.2l16.5 9.5c-.8 8.5-.8 17.1 0 25.6l-16.6 9.5c-9.3 5.4-13.8 16.9-10.5 27.1 7.2 23.4 19.9 45.4 36.7 63.5 7.4 8 19.2 9.8 28.7 4.4l16.5-9.5c7 5 14.4 9.3 22.2 12.8v19c0 11 7.5 20.3 18.2 22.7 12 2.7 24.3 4 36.6 4s24.7-1.3 36.6-4c10.7-2.4 18.2-11.8 18.2-22.7v-19c7.8-3.5 15.2-7.8 22.2-12.8l16.5 9.5c9.4 5.4 21.3 3.6 28.7-4.4 16.7-18.1 29.4-40.1 36.7-63.4 3.3-10.4-1.2-21.9-10.6-27.3zm-51.6 7.2l29.4 17c-5.2 14.3-13 27.8-22.8 39.5l-29.4-17c-21.4 18.3-24.5 20.1-51.1 29.5v34c-15.1 2.6-30.6 2.6-45.6 0v-34c-26.9-9.5-30.2-11.7-51.1-29.5l-29.4 17c-9.8-11.8-17.6-25.2-22.8-39.5l29.4-17c-4.9-26.8-5.2-30.6 0-59l-29.4-17c5.2-14.3 13-27.7 22.8-39.5l29.4 17c21.4-18.3 24.5-20.1 51.1-29.5v-34c15.1-2.5 30.7-2.5 45.6 0v34c26.8 9.5 30.2 11.6 51.1 29.5l29.4-17c9.8 11.8 17.6 25.2 22.8 39.5l-29.4 17c4.9 26.8 5.2 30.6 0 59zm-96.7-94c-35.6 0-64.5 29-64.5 64.5s28.9 64.5 64.5 64.5 64.5-29 64.5-64.5-28.9-64.5-64.5-64.5zm0 97c-17.9 0-32.5-14.6-32.5-32.5s14.6-32.5 32.5-32.5 32.5 14.6 32.5 32.5-14.6 32.5-32.5 32.5zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96zM48 480c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 19.2 0 38-3.3 56.5-8.7.5-11.6 1.8-23 4.2-34-8.9 2.7-30.1 10.7-60.7 10.7-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h337c-16-8.6-30.6-19.5-43.5-32H48z"></path></svg>
              </span>
              <span className="menu-title"><Trans>Services</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.servicesMenuOpen }>
              <div>
                <ul className="nav flex-column sub-menu" >
                  <li className="nav-item" >
                    <Link className={ this.isPathActive('/services/student') ? 'nav-link active' : 'nav-link' } to="/services/student"><i className="mdi mdi-account-network mr-3"></i><Trans>Student Level</Trans></Link></li>
                  <li className="nav-item">
                    <Link className={ this.isPathActive('/services/department') ? 'nav-link active' : 'nav-link' } to="/services/department"><i className="mdi mdi-google-circles-communities mr-3"></i><Trans>Department Level</Trans></Link></li>
                  <li className="nav-item">
                    <Link className={ this.isPathActive('/services/college') ? 'nav-link active' : 'nav-link' } to="/services/college"><i className="mdi mdi-google-circles-extended mr-3"></i><Trans>College Level</Trans></Link></li>
                  <li className="nav-item">
                    <Link className={ this.isPathActive('/services/personal') ? 'nav-link active' : 'nav-link' } to="/services/personal"><i className="mdi mdi-account-star mr-3"></i><Trans>Personal Level</Trans></Link></li>                
                </ul>
              </div>
            </Collapse>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);