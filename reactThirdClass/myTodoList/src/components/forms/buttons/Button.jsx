function Button({handler, image, btnBackground, btnHeight, btnWidth, float, text}) {
    return(
      <button onClick={handler} style={{background: btnBackground, height: btnHeight, width: btnWidth, float:float}}>{text} <img height="100%" width="100%" src={image} alt="add" style={{objectFit:"cover"}} /> </button>
    )
  }

export default Button