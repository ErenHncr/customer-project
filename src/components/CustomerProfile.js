import React, { Component } from 'react';
import MapContainer from './Map';
import More from '../media/more-vertical.svg';
import Circle from '../media/alert-circle.svg';

export default class CustomerProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: {
        name: '-',
        type: '-',
        unvan: '-',
        gsm: '-',
        email: '-',
        website: '-',
        xkn: '-',
        address: '-',
        not: '-',
      },
    };
  }

  getProfileData = (id) => {
    let customers = JSON.parse(localStorage.getItem('customers'));
    if (customers !== null && !isNaN(id) && id < customers.length) {
      this.setState({ customer: { ...customers[id].customer } });
    }
  };

  componentWillMount = () => {
    const id = parseInt(window.location.pathname.replace('/profile/', ''));
    this.getProfileData(id);
  };

  render() {
    const defaultCenter = {
      lat: 41.04372,
      lng: 28.98466,
    };

    return (
      <div className='profile'>
        {/* img, name, email */}
        <div className='info'>
          <img
            alt='profile'
            style={{
              borderRadius: '999px',
              marginTop: '10px',
              width: '60px',
              height: '60px',
            }}
            src={`https://picsum.photos/seed/patrick/45/45`}
          ></img>
          <div
            style={{
              marginLeft: '20px',
              marginTop: '15px',
            }}
          >
            <h3>{this.state.customer.name}</h3>
            <h4>{this.state.customer.email}</h4>
          </div>
          <img style={{ marginLeft: 'auto' }} src={More} alt='Marker' />
        </div>
        {/* Map */}
        <MapContainer coord={defaultCenter} setCoord={() => {}}></MapContainer>
        {/* Last Seen */}
        <div
          style={{
            color: '#2F8FFF',
            display: 'grid',
            gridTemplateColumns: '1fr 3fr',
            alignItems: 'center',
            borderBottom: '1px solid rgb(0,0,0,0.1)',
          }}
        >
          <img style={{ marginLeft: 'auto' }} src={Circle} alt='Marker' />
          <p>&nbsp;Last seen in İstanbul</p>
        </div>
        {/* All Infos */}
        <div
          className='extraInfo'
          style={{
            padding: '15px 50px',
          }}
        >
          <div>
            <h5>Customer Type</h5>
            <h4>{this.state.customer.type ? this.state.customer.type : '-'}</h4>
          </div>
          <div>
            <h5>Ünvan</h5>
            <h4>
              {this.state.customer.unvan ? this.state.customer.unvan : '-'}
            </h4>
          </div>
          <div>
            <h5>GSM</h5>
            <h4>{this.state.customer.gsm ? this.state.customer.gsm : '-'}</h4>
          </div>
          <div>
            <h5>Website</h5>
            <h4>
              {this.state.customer.website ? this.state.customer.website : '-'}
            </h4>
          </div>
          <div>
            <h5>TCKN /VKN</h5>
            <h4>{this.state.customer.xkn ? this.state.customer.xkn : '-'}</h4>
          </div>
          <div>
            <h5>İlGİLİ FİRMA</h5>
            <h4>Servis Soft</h4>
          </div>
          <div>
            <h5>Adres</h5>
            <h4>
              {this.state.customer.address ? this.state.customer.address : '-'}
            </h4>
          </div>
          <div>
            <h5>Not</h5>
            <h4>{this.state.customer.not ? this.state.customer.not : '-'}</h4>
          </div>
        </div>
      </div>
    );
  }
}
