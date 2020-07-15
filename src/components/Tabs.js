import React, { Component } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default class AllTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        adSoyad: 'aasdas',
        rol: 'Developer',
        gsm: '',
        email: '',
      },
    };
  }

  handleChange = (e) => {
    switch (e.target.name) {
      case 'adSoyad':
        this.setState({
          person: {
            ...this.state.person,
            adSoyad: e.target.value,
          },
        });
        break;

      case 'tel':
        this.setState({
          person: {
            ...this.state.person,
            gsm: e.target.value,
          },
        });
        break;
      case 'email':
        this.setState({
          person: {
            ...this.state.person,
            email: e.target.value,
          },
        });
        break;
      case 'rol':
        this.setState({
          person: {
            ...this.state.person,
            rol: e.target.value,
          },
        });
        break;
      default:
        break;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.clickedButton === 'create' &&
      document.getElementById('telNo').validity.valid &&
      document.getElementById('email').validity.valid
    ) {
    } else if (this.state.clickedButton === 'another') {
      this.setState(this.initialState);
      document.getElementById('tel-status').innerHTML = '&nbsp;❌';
      document.getElementById('email-status').innerHTML = '&nbsp;❌';
      document.getElementById('tel-status').value = '';
      document.getElementById('email-status').value = '';
    }
  };

  render() {
    return (
      <Tabs className='tabs'>
        <TabList>
          <Tab>İlgili Kişiler</Tab>
          <Tab>Aramalar</Tab>
          <Tab>Ziyaretler</Tab>
          <Tab>Ürünler</Tab>
          <Tab>Siparişler</Tab>
          <Tab>Bakım Ajandası</Tab>
          <Tab>Cari</Tab>
          <Tab>Fatura Bilgisi</Tab>
          <Tab>Ayrıcalıklar</Tab>
          <Tab>Portal Bilgisi</Tab>
        </TabList>

        <TabPanel className='tab'>
          <form
            onSubmit={this.handleSubmit}
            style={{
              maxWidth: '320px',
            }}
          >
            <label>
              Ad Soyad: &nbsp; &nbsp;
              <input
                type='text'
                name='adSoyad'
                // value={customer.unvan}

                onChange={this.handleChange}
                style={{ marginLeft: 'auto', width: 'auto' }}
              />
            </label>

            <label
              style={{
                marginTop: '8px',
              }}
            >
              Rol: &nbsp; &nbsp;
              <select
                name='rol'
                style={{ marginLeft: 'auto', width: '54%' }}
                onChange={(e) => {
                  this.handleChange(e);
                }}
              >
                <option value='Developer'>Developer</option>
                <option value='Specialist'>Specialist</option>
                <option value='Product Manager'>Product Manager</option>
              </select>
            </label>

            <label
              style={{
                marginTop: '8px',
              }}
            >
              GSM: &nbsp;
              <input
                id='telNo'
                name='tel'
                // value={customer.gsm}
                type='tel'
                required
                pattern='[0-9]{11}'
                style={{ marginLeft: 'auto', width: 'auto' }}
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
            </label>
            <span
              id='tel-status'
              style={{
                position: 'absolute',
                marginTop: '-25px',
                marginLeft: '120px',
              }}
            ></span>
            <label
              style={{
                marginTop: '8px',
              }}
            >
              E-mail Address: &nbsp;
              <input
                id='email'
                type='email'
                name='email'
                style={{ marginLeft: 'auto', width: 'auto' }}
                // value={customer.email}
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
              <span
                id='email-status'
                style={{
                  position: 'absolute',
                  marginTop: '0px',
                  marginLeft: '120px',
                }}
              ></span>
            </label>
          </form>
        </TabPanel>

        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <TabPanel key={index} className='tab'>
            <h4>Under construction!</h4>
          </TabPanel>
        ))}
      </Tabs>
    );
  }
}
