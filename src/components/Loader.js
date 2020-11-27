import ReactLoading from 'react-loading'

const Loader = () => {
  return (
    <div className="loading-container">
      <ReactLoading 
        type={"spinningBubbles"} 
        height="30%" 
        color="rgb(238, 36, 36)"
      />
    </div>
  )
}

export default Loader
