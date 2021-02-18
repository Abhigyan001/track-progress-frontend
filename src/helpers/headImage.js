const getHeadImage = (name, sex) => {
  let url;
  
    switch (sex) {
      case 'male':
        url = './assets/images/male.jpg';
        break;
      case 'female':
        url = './assets/images/female.jpg';
        break;
      default:
        url = './assets/images/secret.png';
    }
  
  return url;
};

export default getHeadImage;
