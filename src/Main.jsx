import React, { Component } from 'react';

const tilesData = [
  {
    img: 'https://randomuser.me/api/portraits/women/20.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/18.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/17.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/16.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/19.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/14.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/13.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'https://randomuser.me/api/portraits/women/12.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

const user = {
  _id: '57b330de848a005e48f5de94',
  gender: 'female',
  name: {
    title: 'ms',
    first: 'olivia',
    last: 'young',
  },
  location: {
    street: '1119 grove road',
    city: 'Mountmellick',
    state: 'rhode island',
    zip: 88061,
  },
  email: 'olivia.young@example.com',
  username: 'crazykoala938',
  password: 'malibu',
  salt: '78TEnNQ1',
  md5: '9bebcc9d890f8c9e04c9e40fc1f41476',
  sha1: '36d6a69cabff0ad780a3dcceb4e94d44edb62fc6',
  sha256: '9e39c873967f52d67e8d052aad87daf4b63d5464a27de982b64abfe9b208efc8',
  registered: 1411100094,
  dob: 818810543,
  phone: '011-475-1126',
  cell: '081-725-2254',
  PPS: '4335321T',
  picture: {
    large: 'https://randomuser.me/api/portraits/women/20.jpg',
    medium: 'https://randomuser.me/api/portraits/med/women/20.jpg',
    thumbnail: 'https://randomuser.me/api/portraits/thumb/women/20.jpg',
  },
};

const moreInfo = function (user) {
  this.props.history.push('/userinfo');
};

class Main extends Component {
  render() {
    return React.cloneElement(
      this.props.children, { users: tilesData, moreInfo, user }
    );
  }
}
Main.propTypes = {
  children: React.PropTypes.object,
};

export default Main;
