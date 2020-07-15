import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CustomerList from './components/CustomerList';
import Modal from './components/Modal';
import CreateCustomer from './components/CreateCustomer';
import AllTabs from './components/Tabs';
import CustomerProfile from './components/CustomerProfile';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      isCreateOpen: false,
    };
  }

  toggleModal = () => {
    this.setState((prevState) => ({
      ...prevState,
      isCreateOpen: !prevState.isCreateOpen,
    }));
  };

  render() {
    const { isCreateOpen } = this.state;

    return (
      <div className='App'>
        <Router>
          <Route exact path='/'>
            <div style={{ padding: '25px' }}>
              {isCreateOpen && (
                <Modal>
                  <CreateCustomer
                    toggleModal={this.toggleModal}
                  ></CreateCustomer>
                </Modal>
              )}

              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <button
                  style={{ marginLeft: 'auto !important', right: '5px' }}
                  id='createBtn'
                  onClick={this.toggleModal}
                >
                  Create
                </button>
              </div>
              <div>
                <CustomerList />
              </div>
            </div>
          </Route>

          <Route exact path='/profile/:id'>
            <div style={{ display: 'flex' }}>
              <CustomerProfile id={this.state.id} />
              <AllTabs />
            </div>
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
