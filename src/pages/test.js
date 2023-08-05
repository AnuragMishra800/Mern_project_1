import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showOrders: false,
    };
  }

  render() {
    const { showOrders } = this.state;
    return (
      <div>
        <UserProfile>
          <UserNavigation>
            <ProfilePic>
              <ImageLogo src="./kunal_logo.jpg"></ImageLogo>
            </ProfilePic>
            <UserDetail>
              <Title>Kunal Kumar</Title>
              <Email>kunal@gmail.com</Email>
              <NavigateList>
                <List onClick={() => this.setState({ showOrders: true })}>Your Orders</List>
                <List>Your WisList</List>
                <List>Your Cart</List>
              </NavigateList>
            </UserDetail>
            <UserInformation>
              {showOrders ? (
                <Orders />
              ) : (
                <PersnalInfo />
              )}
            </UserInformation>
          </UserNavigation>
        </UserProfile>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));