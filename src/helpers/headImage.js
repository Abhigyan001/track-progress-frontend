const getHeadImage = (name, sex) => {
  let url;
  switch (name) {
    default:
      switch (sex) {
        case 'male':
          url = './assets/images/male.jpg';
          break;
        case 'female':
          url = './assets/images/female.jpg';
          break;
        default:
          url = './assets/images/male.png';
      }
  }
  return url;
};

export default getHeadImage;
