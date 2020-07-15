import React, { Component } from 'react';

import MapContainer from './Map';

export default class CreateCustomer extends Component {
  constructor() {
    super();
    this.initialState = {
      customer: {
        name: '',
        type: 'Gerçek',
        unvan: '',
        gsm: '',
        email: '',
        website: '',
        xkn: '',
        address: '',
        not: '',
        firm: 'ServisSoft',
      },
      coord: {
        lat: 41.04372,
        lng: 28.98466,
      },
      clickedButton: '',
    };

    this.state = this.initialState;
  }

  setCoord = (coordinates) => {
    this.setState({
      coord: coordinates,
    });
  };

  handleOptionChange = (changeEvent) => {
    this.setState({
      customer: {
        ...this.state.customer,
        type: changeEvent.target.value,
      },
    });
  };

  handleChange = (e) => {
    switch (e.target.name) {
      case 'name':
        this.setState({
          customer: {
            ...this.state.customer,
            name: e.target.value,
          },
        });
        break;

      case 'unvan':
        this.setState({
          customer: {
            ...this.state.customer,
            unvan: e.target.value,
          },
        });
        break;

      case 'tel':
        this.setState({
          customer: {
            ...this.state.customer,
            gsm: e.target.value,
          },
        });
        break;
      case 'email':
        this.setState({
          customer: {
            ...this.state.customer,
            email: e.target.value,
          },
        });
        break;
      case 'website':
        this.setState({
          customer: {
            ...this.state.customer,
            website: e.target.value,
          },
        });
        break;
      case 'xkn':
        this.setState({
          customer: {
            ...this.state.customer,
            xkn: e.target.value,
          },
        });
        break;
      case 'address':
        this.setState({
          customer: {
            ...this.state.customer,
            address: e.target.value,
          },
        });
        break;
      case 'not':
        this.setState({
          customer: {
            ...this.state.customer,
            not: e.target.value,
          },
        });
        break;
      case 'firm':
        this.setState({
          customer: {
            ...this.state.customer,
            firm: e.target.value,
          },
        });
        break;
      default:
        break;
    }
  };

  saveToLocalStorage = () => {
    let customers = JSON.parse(localStorage.getItem('customers'));
    if (customers === null) {
      localStorage.setItem('customers', JSON.stringify([this.state]));
    } else {
      localStorage.setItem(
        'customers',
        JSON.stringify([...customers, this.state])
      );
    }
  };

  handleSubmit = (e) => {
    if (
      this.state.clickedButton === 'create' &&
      document.getElementById('telNo').validity.valid &&
      document.getElementById('email').validity.valid
    ) {
      // UpdateList
      this.saveToLocalStorage();
      this.props.toggleModal();
      setTimeout(() => {
        window.location.reload();
      }, 100);
    } else if (this.state.clickedButton === 'another') {
      this.setState(this.initialState);
      document.getElementById('tel-status').innerHTML = '&nbsp;❌';
      document.getElementById('email-status').innerHTML = '&nbsp;❌';
      document.getElementById('tel-status').value = '';
      document.getElementById('email-status').value = '';
      console.log('another');
    } else {
      e.preventDefault();
    }
  };

  render() {
    const { customer } = this.state;
    return (
      <div>
        <div className='modal-space' onClick={this.props.toggleModal}></div>
        <div className='create-modal' style={{ overflow: 'scroll' }}>
          <form onSubmit={this.handleSubmit} id='form1'>
            <h3>Create New Customer</h3>
            <div>
              <p>Customer Type</p>

              <label>
                <input
                  type='radio'
                  value='Gerçek'
                  checked={this.state.customer.type === 'Gerçek'}
                  onChange={this.handleOptionChange}
                />
                Gerçek
              </label>
              <label>
                <input
                  type='radio'
                  value='Tüzel'
                  checked={this.state.customer.type === 'Tüzel'}
                  onChange={this.handleOptionChange}
                />
                Tüzel
              </label>
            </div>
            <br />
            <label
              style={{
                display: 'flex',
              }}
            >
              İsim: &nbsp; &nbsp;
              <input
                type='text'
                name='name'
                required
                value={customer.name}
                style={{ marginLeft: 'auto' }}
                onChange={this.handleChange}
              />
            </label>
            <label
              style={{
                display: 'flex',
              }}
            >
              Ünvan: &nbsp; &nbsp;
              <input
                type='text'
                name='unvan'
                value={customer.unvan}
                style={{ marginLeft: 'auto' }}
                onChange={this.handleChange}
              />
            </label>

            <label>
              GSM: &nbsp;
              <input
                id='telNo'
                name='tel'
                value={customer.gsm}
                type='tel'
                required
                pattern='[0-9]{11}'
                onChange={(e) => {
                  this.handleChange(e);
                  if (
                    document.getElementById('telNo').validity.valid &&
                    document.getElementById('telNo').value
                  ) {
                    document.getElementById('tel-status').innerHTML =
                      '&nbsp;✅';
                  } else {
                    document.getElementById('tel-status').innerHTML =
                      '&nbsp;❌';
                  }
                }}
              />
              <span id='tel-status'></span>
            </label>

            <label>
              E-mail Address: &nbsp;
              <input
                id='email'
                type='email'
                name='email'
                value={customer.email}
                onChange={(e) => {
                  this.handleChange(e);
                  if (
                    document.getElementById('email').validity.valid &&
                    document.getElementById('email').value
                  ) {
                    document.getElementById('email-status').innerHTML =
                      '&nbsp;✅';
                  } else {
                    document.getElementById('email-status').innerHTML =
                      '&nbsp;❌';
                  }
                }}
              />
              <span id='email-status'></span>
            </label>

            <br />

            <label>
              Website: &nbsp;
              <input
                type='url'
                name='website'
                value={customer.website}
                onChange={this.handleChange}
              />
            </label>

            <label>
              TCKN&nbsp;/VKN: &nbsp;
              <input
                type='text'
                name='xkn'
                value={customer.xkn}
                onChange={this.handleChange}
              />
            </label>

            <label>
              İlgili Firma: &nbsp; &nbsp;
              <select
                name='firm'
                style={{
                  marginLeft: 'auto',
                  width: '90%',
                  height: '1.5rem',
                  marginTop: '5px',
                }}
                onChange={(e) => {
                  this.handleChange(e);
                }}
              >
                <option value='ServisSoft'>ServisSoft</option>
                <option value='Koç Finans'>Koç Finans</option>
                <option value='Teknosa'>Teknosa</option>
              </select>
            </label>

            <label style={{ marginTop: '10px' }}>
              Dosya: &nbsp;
              <input type='file' name='file' />
            </label>

            <label>
              Adres: &nbsp;
              <input
                type='text'
                name='address'
                value={customer.address}
                onChange={this.handleChange}
              />
            </label>

            <label>
              Not: &nbsp;
              <textarea
                name='not'
                value={customer.not}
                onChange={this.handleChange}
                style={{ marginLeft: 'auto', width: '100%', height: '80px' }}
              />
            </label>
            <MapContainer
              coord={this.state.coord}
              setCoord={this.setCoord}
              style={{
                width: '80%',
                height: '250px',
                marginTop: '20px',
              }}
            ></MapContainer>
            <div style={{ display: 'flex' }}>
              <div
                style={{
                  width: '100%',
                  marginLeft: 'auto',
                  marginTop: '10px',
                }}
              >
                <button
                  style={{ marginLeft: 'auto' }}
                  id='createBtn'
                  className='btnForm '
                  type='submit'
                  value='Submit'
                  name='another'
                  onClick={() => {
                    this.setState({ clickedButton: 'another' });
                  }}
                >
                  Create another
                </button>
                <button
                  id='createBtn'
                  className='btnForm '
                  type='submit'
                  value='Submit'
                  name='create'
                  onClick={() => {
                    this.setState({ clickedButton: 'create' });
                  }}
                >
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
