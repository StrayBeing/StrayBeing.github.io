import React from 'react';
import CardImg from './CardImg';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <CardImg
        title="Beautiful Beach"
        description="A scenic beach with crystal-clear water and golden sand."
        imageUrl="https://blog.binomo-brokers.com/wp-content/uploads/2022/05/65-1050x530.jpg"
      />
      <CardImg
        title="Mountain Range"
        description="A breathtaking view of a mountain range under a clear blue sky."
        imageUrl="https://img.myloview.pl/naklejki/a-close-up-of-a-mountain-range-with-snow-capped-peaks-and-a-clear-blue-sky-mountain-snow-landscape-mountains-winter-alps-sky-peak-nature-ice-glacier-rock-high-view-alpine-ski-cold-700-346404343.jpg"
      />
      <CardImg
        title="City Skyline"
        description="A bustling city skyline at night with lights shining brightly."
        imageUrl="https://store-images.s-microsoft.com/image/apps.40893.14241982748923031.b7ab82d8-956b-4d85-b739-c1cd07cb25df.3886a099-ec34-45a1-ab0f-2cef8f8b767a?q=90&w=480&h=270"
      />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '20px',
  },
  
};

export default HomePage;