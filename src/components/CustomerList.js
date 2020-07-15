import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ArrowDown from '../media/chevron-down.svg';
import ArrowUp from '../media/chevron-up.svg';

const Customer = (props) => (
  <tr>
    <td>
      {props.customer.img ? (
        <img
          style={{ borderRadius: '999px', marginTop: '10px' }}
          alt={props.customer.name}
          src={`https://picsum.photos/seed/${props.customer.name}/45/45`}
        ></img>
      ) : (
        <div
          style={{
            backgroundColor: 'grey',
            border: '1px solid black',
            borderRadius: '999px',
            textAlign: 'center',
            width: '45px',
            height: '45px',
            display: 'grid',
            alignContent: 'center',
          }}
        >
          <p>
            {props.customer.name.includes(' ')
              ? props.customer.name.split(' ')[0][0] +
                props.customer.name.split(' ')[1][0]
              : props.customer.name[0][0]}
          </p>
        </div>
      )}
    </td>
    <td>{props.customer.name}</td>
    <td>{props.customer.type}</td>
    <td>{props.customer.relatedFirm}</td>
    <td>{props.customer.address}</td>
    <td>{props.customer.gsm}</td>
    <td>{props.customer.email}</td>
    <td>{props.customer.portalInfo}</td>
    <td
      style={{
        display: 'flex',
      }}
    >
      <Link to={`/profile/${props.index}`}>
        <button className='update'>&nbsp;Update</button>
      </Link>
      <Link to={`/profile/${props.index}`}>
        <button className='delete'>&nbsp;Delete</button>
      </Link>
    </td>
  </tr>
);

export default class CustomerList extends Component {
  constructor(props) {
    super(props);
    this.state = { customers: props.allCustomers, asc: true };
  }

  componentWillMount = () => {
    this.getCustomers();
  };

  getCustomers = () => {
    let customers = JSON.parse(localStorage.getItem('customers'));
    if (customers !== null) {
      const all = customers.map((customer) => customer.customer);
      this.setState({ customers: all });
    } else {
      this.setState({ customers: [] });
    }
  };

  customerList = () => {
    return this.state.customers.map((currentCustomer, index) => {
      return <Customer index={index} customer={currentCustomer} key={index} />;
    });
  };

  sortItems = (asc) => {
    return this.state.customers.sort(function (a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (asc === true) {
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      } else {
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }
      }
      // names must be equal
      return 0;
    });
  };
  render() {
    return (
      <div className='customersList'>
        <table className='table'>
          <thead>
            <tr
              style={
                {
                  // borderBottom: '2px solid black',
                }
              }
            >
              <th
                style={{
                  borderBottom: 'none',
                  width: '60px',
                }}
              ></th>
              <th
                // sort a to z
                onClick={() => {
                  this.setState({
                    customers: this.sortItems(this.state.asc),
                    asc: !this.state.asc,
                  });
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  Customer Name
                  <img
                    alt='profile'
                    style={{
                      width: '15px',
                      height: '15px',
                      marginLeft: 'auto',
                    }}
                    src={this.state.asc ? ArrowUp : ArrowDown}
                  ></img>
                </div>
              </th>
              <th>Type</th>
              <th>Related Firm</th>
              <th>Address</th>
              <th>GSM</th>
              <th>Email</th>
              <th>Portal Information</th>
              <th></th>
            </tr>
          </thead>

          <tbody>{this.customerList()}</tbody>
        </table>
      </div>
    );
  }
}
