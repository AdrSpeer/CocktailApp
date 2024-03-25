import './LoadingPage.css';

const LoadingPage = () => {
  // $(window).on('load', function () {
  //   setTimeout(function () {
  //     // allowing 3 secs to fade out loader
  //     $('.page-loader').fadeOut('slow');
  //   }, 3500);
  // });

  return (
    <div className='page-loader'>
      <div className='spinner'></div>
      <div className='txt'>drinks & chill</div>
    </div>
  );
};

export default LoadingPage;
